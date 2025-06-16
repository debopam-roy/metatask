// User related types
export interface User {
  id: string;
  name: string;
  email: string;
  profileImage?: string;
  createdAt: string;
}

// Job related types
export interface Job {
  id: string;
  title: string;
  description: string;
  budget: number;
  clientId: string;
  freelancerId?: string;
  status: JobStatus;
  createdAt: string;
}

export enum JobStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  DISPUTED = 'DISPUTED',
  CANCELLED = 'CANCELLED',
} 