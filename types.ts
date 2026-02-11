
export enum UserRole {
  STUDENT = 'STUDENT',
  RECRUITER = 'RECRUITER',
  ADMIN = 'ADMIN'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  skills?: string[];
  resumeUrl?: string;
  parsedResume?: ParsedResume;
}

export interface ParsedResume {
  skills: string[];
  education: string;
  experience: string;
  score: number;
  gapAnalysis: string[];
  suggestedCourses: { title: string; provider: string; url: string }[];
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  requirements: string[];
  salary: string;
  postedAt: string;
  status: 'OPEN' | 'CLOSED';
}

export interface Application {
  id: string;
  jobId: string;
  studentId: string;
  status: 'APPLIED' | 'SCREENED' | 'SHORTLISTED' | 'INTERVIEWING' | 'OFFERED' | 'REJECTED';
  matchScore: number;
  appliedAt: string;
}

export interface Interview {
  id: string;
  applicationId: string;
  time: string;
  link: string;
  status: 'SCHEDULED' | 'COMPLETED' | 'CANCELLED';
}
