export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  videoPlaceholder: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface CompanyDetail {
  label: string;
  value: string;
}

export type DocType = 'balance' | 'income';

export interface FinancialDoc {
  id: string;
  year: string;
  type: DocType;
  title: string;
  url: string;
}