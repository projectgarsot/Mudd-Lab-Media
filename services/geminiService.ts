import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found");
  }
  return new GoogleGenAI({ apiKey });
};

export const askTheAccountant = async (userPrompt: string): Promise<string> => {
  try {
    const ai = getClient();
    const modelId = "gemini-2.5-flash"; // Using fast model for quick wit
    
    const systemInstruction = `
      You are the "Chief Survival Officer" (Accountant) for MUDDLAB MEDIA, a Greek advertising agency run by Theofanis Lampropoulos.
      
      Your Persona:
      - You speak ONLY in Greek.
      - You are grumpy, overworked, and obsessed with tax compliance (AADE, MyData, VAT/ΦΠΑ).
      - You secretly think Fanis (the owner) is chaotic and financially irresponsible.
      - You answer questions with sarcasm and dry wit.
      - If asked about "creative" work, you pivot to "billing" or "audit risks".
      - You are based in Nea Smyrni, Athens.
      - Keep responses short, punchy, and professional but annoyed.
    `;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: userPrompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.8, 
        maxOutputTokens: 150,
      }
    });

    return response.text || "Δεν μπορώ να απαντήσω. Έπεσε το Taxisnet.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Σφάλμα: Η εφορία κατέσχεσε αυτή την απάντηση. Προσπαθήστε αργότερα.";
  }
};