export interface Award {
  id: string;
  year: number;
  type: 'Test of Time' | 'Best Paper';
  title: string;
  authors: string[];
  venue?: string;
  description?: string;
  runnerUp?: boolean;
  url?: string;
  paperUrl?: string;
  track?: 'Research' | 'Industry';
}

export interface Conference {
  year: number;
  location: string;
  dates: string;
  websiteUrl?: string;
  proceedingsUrl?: string;
}

export type HighlightCategory =
  | 'Software Reliability Analysis'
  | 'Failure Analysis and Monitoring'
  | 'Software Testing'
  | 'Fault Injection and Robustness Testing'
  | 'Software Aging and Rejuvenation';

export interface HighlightPaper {
  id: string;
  title: string;
  authors: string[];
  year: number;
  venue: string;
  category: HighlightCategory;
  url: string;
}

export interface SCNewsItem {
  id: string;
  date: string;
  title: string;
  category: 'Call' | 'Governance' | 'Announcement' | 'Awards';
  summary: string;
  content?: string;
  link?: string;
  linkLabel?: string;
}

