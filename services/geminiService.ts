
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const geminiService = {
  async parseResume(text: string) {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analyze this resume text and provide a structured JSON response. Include key skills, education summary, experience summary, and a quality score (0-100). Also perform a "gap analysis" compared to typical entry-level software roles and suggest 3 courses.
      
      Resume Text: ${text}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            skills: { type: Type.ARRAY, items: { type: Type.STRING } },
            education: { type: Type.STRING },
            experience: { type: Type.STRING },
            score: { type: Type.NUMBER },
            gapAnalysis: { type: Type.ARRAY, items: { type: Type.STRING } },
            suggestedCourses: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  provider: { type: Type.STRING },
                  url: { type: Type.STRING }
                }
              }
            }
          },
          required: ["skills", "education", "experience", "score", "gapAnalysis", "suggestedCourses"]
        }
      }
    });
    return JSON.parse(response.text);
  },

  async getJobMatchScore(resumeSkills: string[], jobRequirements: string[]) {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Predict the match percentage and placement probability (0-100) for a student with these skills for a job with these requirements.
      Student Skills: ${resumeSkills.join(", ")}
      Job Requirements: ${jobRequirements.join(", ")}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            matchScore: { type: Type.NUMBER },
            placementProbability: { type: Type.NUMBER },
            reasoning: { type: Type.STRING }
          }
        }
      }
    });
    return JSON.parse(response.text);
  },

  async getInterviewCoachingResponse(history: { role: string; content: string }[], userInput: string) {
    const chat = ai.chats.create({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction: "You are an expert technical interviewer. Help students prepare for coding and behavior interviews. Be encouraging but professional."
      }
    });
    const response = await chat.sendMessage({ message: userInput });
    return response.text;
  }
};
