export interface Project {
  id: string;
  name: string;
  key: string;
  url: string;
  description: string;
  avatar: string;
  category: ProjectCategory;
  createdAt: string;
  updatedAt: string;
  issueIds: string[];
  userIds: string[];
}

export type ProjectCategory = 'Software' | 'Marketin' | 'Business';
