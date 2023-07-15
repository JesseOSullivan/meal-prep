import { gptFetch } from './utils/gpt';
export default async (request) => {
    const data = await request.json();  // Assuming the request has JSON payload
    const prompt = data.prompt;


    // get products 
    
    await gptFetch({req:"testing"})
    
    // switch to products

    const response = { result: `Processed: ${prompt}` };  // Example response

    return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' },
    });
};

export const config = { path: "/test" };
