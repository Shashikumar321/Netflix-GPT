const { GoogleGenerativeAI } = require("@google/generative-ai");
const { GEMINI_AI_SECRET_KEY } = require("./constants");

export const genAI = new GoogleGenerativeAI(GEMINI_AI_SECRET_KEY);
export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

