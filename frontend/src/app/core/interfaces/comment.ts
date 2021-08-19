import { User } from './user';

export interface Comment {
  id: string;
  content: Object;
  createdAt: string;
  updatedAt: string;
  isEdited: boolean;
  issueId: string;
  author: User;
}
