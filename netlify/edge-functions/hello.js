

export default async (request) => {
    const data = await request.json();  // Assuming the request has JSON payload
    const prompt = data.prompt;

    
    // switch to products

    const response = { result: `Processed: ${prompt}` };  // Example response

    return new Response(JSON.stringify(response), {
        headers: { 'Content-Type': 'application/json' },
    });
};

export const config = { path: "/test" };
