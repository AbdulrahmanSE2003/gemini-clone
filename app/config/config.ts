import { GoogleGenAI } from "@google/genai";

// Initialize GenAI with API Key
const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY
});

export const runChat = async (prompt: string) => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview", // Model version
            contents: [{ role: "user", parts: [{ text: prompt }] }],
        });

        // console.log(response);


        return response.text;
    } catch (error) {
        console.error("Connection Error:", error);
        throw error;
    }
};