
import React from 'react';
import { Briefcase, Users, PieChart, LayoutDashboard, HelpCircle } from 'lucide-react';
import { UserRole } from './types';

export const MOCK_JOBS = [
  {
    id: '1',
    title: 'Frontend Developer Intern',
    company: 'TechCorp Solutions',
    location: 'Remote',
    description: 'Looking for a passionate React developer to join our product team.',
    requirements: ['React', 'TypeScript', 'Tailwind CSS', 'Git'],
    salary: '$2000 - $3000',
    postedAt: '2023-10-25',
    status: 'OPEN' as const
  },
  {
    id: '2',
    title: 'Backend Engineer (Node.js)',
    company: 'DataFlow Systems',
    location: 'Bangalore, India',
    description: 'Help us scale our microservices architecture using Node.js and MongoDB.',
    requirements: ['Node.js', 'Express', 'MongoDB', 'Redis'],
    salary: '$2500 - $4000',
    postedAt: '2023-10-24',
    status: 'OPEN' as const
  }
];

export const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} />, roles: [UserRole.STUDENT, UserRole.RECRUITER, UserRole.ADMIN] },
  { id: 'jobs', label: 'Job Portal', icon: <Briefcase size={20} />, roles: [UserRole.STUDENT, UserRole.RECRUITER] },
  { id: 'analytics', label: 'Analytics', icon: <PieChart size={20} />, roles: [UserRole.ADMIN, UserRole.RECRUITER] },
  { id: 'candidates', label: 'Candidates', icon: <Users size={20} />, roles: [UserRole.RECRUITER, UserRole.ADMIN] },
  { id: 'manual', label: 'User Guide', icon: <HelpCircle size={20} />, roles: [UserRole.STUDENT, UserRole.RECRUITER, UserRole.ADMIN] },
];
