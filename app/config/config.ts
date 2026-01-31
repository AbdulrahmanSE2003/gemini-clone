import {GoogleGenAI} from "@google/genai";

// بنمرر الكي يدوي من المتغير اللي بيبدأ بـ NEXT_PUBLIC
const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY
});

export const runChat = async (prompt: string) => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview", // الموديل حسب شرح الشركة
            contents: [{ role: "user", parts: [{ text: prompt }] }],
        });

        // console.log(response);


        return response.text;
    } catch (error) {
        console.error("خطأ في الاتصال:", error);
        throw error;
    }
};