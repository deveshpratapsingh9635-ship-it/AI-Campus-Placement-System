
import React, { useState } from 'react';
import { UserRole } from './types';
import { Sidebar } from './components/Sidebar';
import { ResumeAnalyzer } from './components/ResumeAnalyzer';
import { Analytics } from './components/Analytics';
import { InterviewCoach } from './components/InterviewCoach';
import { UserManual } from './components/UserManual';
import { MOCK_JOBS } from './constants';
import { Search, MapPin, DollarSign, Calendar, Bell, User as UserIcon } from 'lucide-react';

const App: React.FC = () => {
  const [userRole, setUserRole] = useState<UserRole>(UserRole.STUDENT);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-3xl font-black text-slate-800 tracking-tight">Welcome Back, Alex! 👋</h1>
                <p className="text-slate-500 mt-1">Here's what's happening in your placement journey.</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="bg-white p-2 rounded-xl shadow-sm border border-slate-200 text-slate-600 relative">
                  <Bell size={20} />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                  <UserIcon size={20} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <ResumeAnalyzer />
                
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-slate-800">Job Matches for You</h3>
                    <button onClick={() => setActiveTab('jobs')} className="text-blue-600 text-sm font-semibold hover:underline">View All</button>
                  </div>
                  <div className="space-y-4">
                    {MOCK_JOBS.map(job => (
                      <div key={job.id} className="p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all flex justify-between items-center group">
                        <div className="flex gap-4">
                          <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                            <span className="text-xl font-bold text-slate-400 group-hover:text-blue-500">{job.company[0]}</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-800">{job.title}</h4>
                            <p className="text-sm text-slate-500">{job.company} • {job.location}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right hidden md:block">
                            <p className="text-sm font-bold text-slate-800">{job.salary}</p>
                            <p className="text-xs text-slate-400">Match: 95%</p>
                          </div>
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 shadow-md shadow-blue-200">
                            Apply
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <InterviewCoach />
                <div className="bg-indigo-600 p-6 rounded-2xl text-white shadow-xl shadow-indigo-100">
                  <h3 className="text-lg font-bold mb-2">Placement Prediction</h3>
                  <p className="text-indigo-100 text-sm mb-4">Based on your current profile and academic record.</p>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl font-black">82%</div>
                    <div className="flex-1 h-2 bg-indigo-400/30 rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full" style={{ width: '82%' }}></div>
                    </div>
                  </div>
                  <p className="text-xs text-indigo-200">Your chances are high! Focus on 'System Design' to reach 90%.</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'jobs':
        return (
          <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-wrap gap-4 items-center">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 text-slate-400" size={20} />
                <input 
                  type="text" 
                  placeholder="Search jobs, companies, skills..." 
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <select className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium">
                <option>Job Type: All</option>
                <option>Internship</option>
                <option>Full-Time</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MOCK_JOBS.map(job => (
                <div key={job.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 font-black text-xl">
                      {job.company[0]}
                    </div>
                    <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                      {job.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-1">{job.title}</h3>
                  <p className="text-blue-600 font-semibold text-sm mb-4">{job.company}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                      <MapPin size={16} /> {job.location}
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                      <DollarSign size={16} /> {job.salary}
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                      <Calendar size={16} /> Posted {job.postedAt}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {job.requirements.slice(0, 3).map(req => (
                      <span key={req} className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] rounded-md font-bold uppercase tracking-tighter">
                        {req}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      case 'analytics':
        return <Analytics />;
      case 'manual':
        return <UserManual />;
      default:
        return <div>Section Coming Soon...</div>;
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        userRole={userRole} 
      />
      
      <main className="flex-1 bg-slate-50 p-8 max-w-7xl mx-auto">
        <header className="mb-8 flex justify-between items-center bg-white p-4 rounded-2xl border border-slate-100 shadow-sm md:hidden">
           <div className="font-bold text-xl text-blue-600">SmartHire</div>
           <button className="p-2"><Bell size={20} /></button>
        </header>

        {renderContent()}

        {/* Floating Role Switcher for Demo Purposes */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-2">
          <p className="text-[10px] font-bold text-slate-400 bg-white px-2 py-1 rounded-full shadow-sm border mb-1">DEMO ROLE SWITCHER</p>
          <div className="bg-white/80 backdrop-blur-md p-1.5 rounded-2xl shadow-2xl border border-slate-200 flex flex-col gap-1">
            {Object.values(UserRole).map(role => (
              <button
                key={role}
                onClick={() => setUserRole(role)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                  userRole === role ? 'bg-blue-600 text-white' : 'hover:bg-slate-100 text-slate-600'
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
