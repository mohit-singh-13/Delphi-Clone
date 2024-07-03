import { GoogleGenerativeAI } from "@google/generative-ai";

const generateResponse = async (message) => {

    const API_KEY = import.meta.env.VITE_API_KEY;
    const genAI = new GoogleGenerativeAI(API_KEY);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = message;

    const result = await model.generateContent(prompt);

    const response = result.response;
    
    const text = response.text();

    return text;
};

export default generateResponse