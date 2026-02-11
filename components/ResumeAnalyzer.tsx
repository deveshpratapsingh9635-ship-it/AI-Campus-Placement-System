
import React, { useState } from 'react';
import { Upload, FileText, CheckCircle, AlertCircle, Loader2, Award, BookOpen } from 'lucide-react';
import { geminiService } from '../services/geminiService';
import { ParsedResume } from '../types';

export const ResumeAnalyzer: React.FC = () => {
  const [isParsing, setIsParsing] = useState(false);
  const [parsedData, setParsedData] = useState<ParsedResume | null>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsParsing(true);
    try {
      // For demo purposes, we simulate reading text. In production, use a library like pdf.js
      const simulatedText = `John Doe. Software Engineering Student. Skills: React, Node.js, JavaScript, Python. GPA: 3.8. Experience: Internship at ABC Corp working on web dashboard.`;
      const result = await geminiService.parseResume(simulatedText);
      setParsedData(result);
    } catch (error) {
      console.error("Parsing failed:", error);
    } finally {
      setIsParsing(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">AI Resume Analysis</h2>
        <p className="text-slate-500 mb-8">Upload your resume to get instant feedback and skill-gap analysis.</p>
        
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-slate-200 border-dashed rounded-2xl cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              {isParsing ? (
                <Loader2 className="w-12 h-12 mb-3 text-blue-600 animate-spin" />
              ) : (
                <Upload className="w-12 h-12 mb-3 text-slate-400" />
              )}
              <p className="mb-2 text-sm text-slate-700">
                <span className="font-semibold">{isParsing ? 'Analyzing...' : 'Click to upload'}</span> or drag and drop
              </p>
              <p className="text-xs text-slate-400">PDF, DOCX (MAX. 5MB)</p>
            </div>
            <input type="file" className="hidden" onChange={handleFileUpload} disabled={isParsing} />
          </label>
        </div>
      </div>

      {parsedData && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <Award className="text-blue-600" size={24} />
              <h3 className="text-lg font-bold text-slate-800">Score & Skills</h3>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl font-black text-blue-600 bg-blue-50 w-20 h-20 flex items-center justify-center rounded-full">
                {parsedData.score}
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">Quality Score</p>
                <p className="text-xs text-slate-400">Based on industry standards</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {parsedData.skills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-lg font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="text-orange-600" size={24} />
              <h3 className="text-lg font-bold text-slate-800">Skill Gap & Suggestions</h3>
            </div>
            <div className="space-y-3 mb-6">
              {parsedData.gapAnalysis.map((gap, i) => (
                <div key={i} className="flex gap-2 text-sm text-slate-600">
                  <AlertCircle size={16} className="text-orange-500 flex-shrink-0 mt-0.5" />
                  {gap}
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <p className="text-sm font-semibold text-slate-800">Recommended Courses:</p>
              {parsedData.suggestedCourses.map((course, i) => (
                <a 
                  key={i} 
                  href={course.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-3 border rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all"
                >
                  <p className="text-sm font-medium text-slate-800">{course.title}</p>
                  <p className="text-xs text-slate-500">{course.provider}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
