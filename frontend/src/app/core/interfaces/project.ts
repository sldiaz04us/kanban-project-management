import { User } from './user';

export interface Project {
  id: string;
  name: string;
  key: string;
  url: string;
  description: string;
  avatarUrl: string;
  category: ProjectCategory;
  leader: User;
  createdAt: string;
  updatedAt: string;
  assignees: User[];
}

export type ProjectCategory = 'Software' | 'Marketing' | 'Business';
