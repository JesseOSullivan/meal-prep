import { gptFetch } from './utils/gpt';

export async function handler(event) {
    const data = JSON.parse(event.body);  // Assuming the request has JSON payload
    const prompt = data.prompt;

    // get products 
    const messages = [
        { role: 'system', content: 'you are afood recipe expert.' },
        { role: 'user', content: 'hwo to make tacos' },
      ];

    const result = await gptFetch({ prompt: messages });

    // switch to productss

    return {
        statusCode: 200,
        body: JSON.stringify(result),
        headers: { 'Content-Type': 'application/json' },
    };
}

export const config = { path: "/test" };
