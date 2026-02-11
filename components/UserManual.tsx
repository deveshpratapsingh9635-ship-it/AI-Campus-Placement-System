
import React from 'react';
import { Book, Shield, UserCheck, FileUp, Sparkles, Layout, Bell, Info } from 'lucide-react';

export const UserManual: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20 animate-in fade-in duration-700">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-black text-slate-900">User Manual & System Guide</h1>
        <p className="text-lg text-slate-500">Master the AI-Powered Smart Campus Recruitment System</p>
        <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      {/* 1. Introduction */}
      <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <Book className="text-blue-600" size={28} />
          <h2 className="text-2xl font-bold text-slate-800">1. Introduction</h2>
        </div>
        <p className="text-slate-600 leading-relaxed">
          Welcome to the <strong>Smart Campus Recruitment System</strong>. This platform is an advanced, AI-driven bridge between talented students and top-tier recruiters. By leveraging Large Language Models (LLMs) and predictive analytics, we automate the tedious parts of hiring, allowing you to focus on finding the perfect professional fit.
        </p>
      </section>

      {/* 2. System Overview */}
      <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <Layout className="text-indigo-600" size={28} />
          <h2 className="text-2xl font-bold text-slate-800">2. System Overview</h2>
        </div>
        <p className="text-slate-600 mb-4">The system architecture consists of four primary layers:</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="p-4 bg-slate-50 rounded-xl text-sm font-medium border border-slate-100">
            <span className="text-blue-600 font-bold block mb-1">Frontend Layer:</span>
            React & Tailwind CSS for a responsive, modern interface.
          </li>
          <li className="p-4 bg-slate-50 rounded-xl text-sm font-medium border border-slate-100">
            <span className="text-blue-600 font-bold block mb-1">AI Engine:</span>
            Google Gemini API for Resume Parsing & Interview Coaching.
          </li>
          <li className="p-4 bg-slate-50 rounded-xl text-sm font-medium border border-slate-100">
            <span className="text-blue-600 font-bold block mb-1">Analytics:</span>
            Real-time charts for placement tracking and trends.
          </li>
          <li className="p-4 bg-slate-50 rounded-xl text-sm font-medium border border-slate-100">
            <span className="text-blue-600 font-bold block mb-1">Role Engine:</span>
            Strict permission-based access for Students, Recruiters, and Admin.
          </li>
        </ul>
      </section>

      {/* 3. User Roles */}
      <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="text-emerald-600" size={28} />
          <h2 className="text-2xl font-bold text-slate-800">3. User Roles</h2>
        </div>
        <div className="space-y-4">
          <div className="flex gap-4 p-4 border rounded-2xl">
            <div className="bg-blue-100 p-2 h-fit rounded-lg text-blue-600 font-bold">STU</div>
            <div>
              <h4 className="font-bold">Student</h4>
              <p className="text-sm text-slate-500">Manage profile, upload resumes, get AI feedback, apply for jobs, and use the AI Coach.</p>
            </div>
          </div>
          <div className="flex gap-4 p-4 border rounded-2xl">
            <div className="bg-purple-100 p-2 h-fit rounded-lg text-purple-600 font-bold">REC</div>
            <div>
              <h4 className="font-bold">Recruiter</h4>
              <p className="text-sm text-slate-500">Post job vacancies, review AI-shortlisted candidates, and manage interview schedules.</p>
            </div>
          </div>
          <div className="flex gap-4 p-4 border rounded-2xl">
            <div className="bg-orange-100 p-2 h-fit rounded-lg text-orange-600 font-bold">ADM</div>
            <div>
              <h4 className="font-bold">Administrator</h4>
              <p className="text-sm text-slate-500">View campus-wide placement analytics, manage users, and generate reports.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Processes */}
      <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <UserCheck className="text-blue-600" size={28} />
          <h2 className="text-2xl font-bold text-slate-800">4. Getting Started</h2>
        </div>
        <div className="space-y-8">
          <div>
            <h4 className="font-bold flex items-center gap-2 mb-2">
              <span className="w-6 h-6 rounded-full bg-slate-800 text-white flex items-center justify-center text-xs">1</span>
              Login Process
            </h4>
            <p className="text-slate-600 text-sm ml-8">Click on the User Role switcher at the bottom right of the screen (in demo mode) to select your identity. In a production environment, use the provided login portal with institutional credentials.</p>
          </div>
          <div>
            <h4 className="font-bold flex items-center gap-2 mb-2">
              <span className="w-6 h-6 rounded-full bg-slate-800 text-white flex items-center justify-center text-xs">2</span>
              Resume Upload Guide
            </h4>
            <div className="ml-8 space-y-2 text-sm text-slate-600">
              <p>1. Navigate to your Dashboard.</p>
              <p>2. Find the <strong>AI Resume Analysis</strong> card.</p>
              <p>3. Drag your PDF or DOCX file into the upload zone.</p>
              <p>4. Wait for the AI to parse your skills and generate a quality score.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. AI Features Usage */}
      <section className="bg-indigo-600 p-8 rounded-3xl text-white shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="text-yellow-400" size={28} />
          <h2 className="text-2xl font-bold">5. AI Features Guide</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 p-5 rounded-2xl border border-white/20">
            <h4 className="font-bold mb-2">Skill Gap Analysis</h4>
            <p className="text-xs text-indigo-100 leading-relaxed">After uploading your resume, the system identifies missing skills required for your dream roles and suggests specific courses (Coursera, Udemy, etc.) to bridge that gap.</p>
          </div>
          <div className="bg-white/10 p-5 rounded-2xl border border-white/20">
            <h4 className="font-bold mb-2">Placement Prediction</h4>
            <p className="text-xs text-indigo-100 leading-relaxed">Located on your sidebar, this ML-driven model estimates your chances of being selected based on current market trends and your profile strength.</p>
          </div>
          <div className="bg-white/10 p-5 rounded-2xl border border-white/20">
            <h4 className="font-bold mb-2">Interview Coach Bot</h4>
            <p className="text-xs text-indigo-100 leading-relaxed">Interact with our LLM-powered bot to practice technical or behavioral questions. Type your answers to receive instant feedback and improved responses.</p>
          </div>
          <div className="bg-white/10 p-5 rounded-2xl border border-white/20">
            <h4 className="font-bold mb-2">Resume Score</h4>
            <p className="text-xs text-indigo-100 leading-relaxed">A numerical rating (0-100) that evaluates your resume's clarity, keyword optimization, and professional formatting for ATS compatibility.</p>
          </div>
        </div>
      </section>

      {/* 6. Notifications & Troubleshooting */}
      <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <Bell className="text-orange-500" size={28} />
          <h2 className="text-2xl font-bold text-slate-800">6. Alerts & Troubleshooting</h2>
        </div>
        <div className="space-y-4">
          <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
            <h4 className="font-bold text-orange-800 text-sm mb-1 flex items-center gap-2">
              <Info size={16} /> Troubleshooting Guide
            </h4>
            <ul className="text-xs text-orange-700 space-y-1 ml-6 list-disc">
              <li><strong>Resume not parsing:</strong> Ensure your PDF is not an image-based scan. Use text-based PDFs for best results.</li>
              <li><strong>AI Coach slow:</strong> Check your internet connection; the LLM requires an active API connection.</li>
              <li><strong>Missing Jobs:</strong> Refresh the page or check if you have specified any restrictive search filters.</li>
            </ul>
          </div>
          <p className="text-slate-500 text-xs italic">For further assistance, please contact the University Career Services cell.</p>
        </div>
      </section>
    </div>
  );
};
