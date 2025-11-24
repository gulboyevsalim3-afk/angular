
import { Injectable } from '@angular/core';
import { GoogleGenAI } from '@google/genai';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env['API_KEY'] || '' });
  }

  async getHealthAdvice(query: string): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: query,
        config: {
          systemInstruction: "You are a helpful, empathetic health assistant for the 'Care' community platform. Provide general wellness advice, explain medical terms simply, and always include a disclaimer that you are an AI and not a doctor. Keep responses concise (under 150 words) and supportive.",
        }
      });
      return response.text || "I'm sorry, I couldn't generate a response at this time.";
    } catch (error) {
      console.error('Gemini API Error:', error);
      return "I'm having trouble connecting to the health knowledge base right now. Please try again later.";
    }
  }

  async summarizePost(postContent: string): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Summarize this community post in one sentence: ${postContent}`,
      });
      return response.text || "No summary available.";
    } catch (error) {
      return "Could not summarize.";
    }
  }
}
