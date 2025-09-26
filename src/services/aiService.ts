function generateBotReply(userText: string) {
  return `
    User Input: ${userText}

    Mila would return a filtered chart for Brand A Supplements.`;
}

class AIService {
  async getResponse(input: string): Promise<string> {
    const response = generateBotReply(input);

    await new Promise((resolve) => setTimeout(resolve, 750)); // simulate API call delay
    return response;
  }
}

export const aiService = new AIService();
