import { Configuration, OpenAIApi } from "openai";

export const gpt = async ({ req }) => {
    const configuration = new Configuration({
        organization: "org-FPcuX6gKViWJhi1GIrrvw01S",
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    
    try {
        const res = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: "Hello" }],
        });

        console.log(res.data.choices[0].message.content);
        
        // Prepare the response
        const response = { result: res.data.choices[0].message.content };
        return response;

    } catch (e) {
        console.log(e);
    }

    return null;  // Return null or a default value in case of an error
};
