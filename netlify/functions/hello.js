import { gptFetch } from './utils/gpt';

export async function handler(event) {
    const data = JSON.parse(event.body);  // Assuming the request has JSON payload
    const prompt = data.prompt;

    // get products 

    await gptFetch({ req: "testing" });

    // switch to products

    return {
        statusCode: 200,
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    };
}

export const config = { path: "/test" };
