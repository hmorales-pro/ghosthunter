import { Company, Vote } from '../types';

const COMPANIES_KEY = 'ghost-guard-companies';
const VOTES_KEY = 'ghost-guard-votes';

interface DB {
  companies: Company[];
  votes: Vote[];
}

function getStorageData<T>(key: string, defaultValue: T): T {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : defaultValue;
}

function setStorageData<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export class DataService {
  getCompanies(): Company[] {
    const companies = getStorageData<Company[]>(COMPANIES_KEY, []);
    return companies.map(company => ({
      ...company,
      votes: this.getVoteCount(company.id)
    }));
  }

  addCompany(company: Omit<Company, 'id' | 'votes' | 'comments' | 'created_at'>): Company {
    const companies = getStorageData<Company[]>(COMPANIES_KEY, []);
    const newCompany: Company = {
      ...company,
      id: crypto.randomUUID(),
      votes: 0,
      comments: 0,
      created_at: new Date().toISOString()
    };

    companies.push(newCompany);
    setStorageData(COMPANIES_KEY, companies);
    return newCompany;
  }

  private getVoteCount(companyId: string): number {
    const votes = getStorageData<Vote[]>(VOTES_KEY, []);
    return votes.filter(v => v.companyId === companyId && v.value === 1).length -
           votes.filter(v => v.companyId === companyId && v.value === -1).length;
  }

  vote(companyId: string, userId: string, value: 1 | -1): boolean {
    const votes = getStorageData<Vote[]>(VOTES_KEY, []);
    
    // Remove existing vote if any
    const filteredVotes = votes.filter(
      v => !(v.companyId === companyId && v.userId === userId)
    );

    // Add new vote
    filteredVotes.push({
      id: crypto.randomUUID(),
      companyId,
      userId,
      value,
      createdAt: new Date().toISOString()
    });

    setStorageData(VOTES_KEY, filteredVotes);
    return true;
  }

  getUserVote(companyId: string, userId: string): number {
    const votes = getStorageData<Vote[]>(VOTES_KEY, []);
    const vote = votes.find(
      v => v.companyId === companyId && v.userId === userId
    );
    return vote ? vote.value : 0;
  }
}