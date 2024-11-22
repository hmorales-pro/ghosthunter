import { createClient } from '@supabase/supabase-js';

// For development, we'll use a mock implementation
const isMockMode = true;

const mockDb = {
  companies: [
    {
      id: '1',
      name: 'Tech Corp',
      description: 'Ghosted after final interview',
      location: 'San Francisco, CA',
      votes: 42,
      comments: 5,
      created_at: new Date(Date.now() - 86400000).toISOString(),
      voted: false
    },
    {
      id: '2',
      name: 'StartUp Inc',
      description: 'No response after technical assessment',
      location: 'New York, NY',
      votes: 28,
      comments: 3,
      created_at: new Date(Date.now() - 172800000).toISOString(),
      voted: false
    }
  ]
};

class SupabaseService {
  private client;
  private mockMode: boolean;

  constructor(url: string, key: string, useMock = false) {
    this.mockMode = useMock;
    this.client = useMock ? null : createClient(url, key);
  }

  async getCompanies() {
    if (this.mockMode) {
      return { data: mockDb.companies, error: null };
    }
    return this.client.from('companies').select('*').order('votes', { ascending: false });
  }

  async insertCompany(company: Omit<Company, 'id' | 'votes' | 'comments' | 'created_at'>) {
    if (this.mockMode) {
      const newCompany = {
        ...company,
        id: (mockDb.companies.length + 1).toString(),
        votes: 0,
        comments: 0,
        created_at: new Date().toISOString(),
        voted: false
      };
      mockDb.companies.push(newCompany);
      return { data: newCompany, error: null };
    }
    return this.client.from('companies').insert([company]);
  }

  async incrementVotes(companyId: string) {
    if (this.mockMode) {
      const company = mockDb.companies.find(c => c.id === companyId);
      if (company) {
        company.votes += 1;
        company.voted = true;
      }
      return { data: company, error: null };
    }
    return this.client.rpc('increment_votes', { company_id: companyId });
  }

  subscribeToChanges(callback: () => void) {
    if (this.mockMode) {
      // Mock subscription not needed
      return {
        unsubscribe: () => {}
      };
    }
    return this.client
      .channel('companies')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'companies' }, callback)
      .subscribe();
  }
}

export const supabase = new SupabaseService(
  'https://your-project.supabase.co',
  'your-anon-key',
  isMockMode
);