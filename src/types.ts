export interface Company {
  id: string;
  name: string;
  description: string;
  location: string;
  votes: number;
  comments: number;
  created_at: string;
}

export interface Vote {
  id: string;
  companyId: string;
  userId: string;
  value: 1 | -1;
  createdAt: string;
}

export interface CompanyWithVote extends Company {
  userVote?: number;
}