export default async (request) => {
    const data = await request.json();  // Assuming the request has JSON payload
    const prompt = data.prompt;

    const gptFetch = async ({ req }) => {
        const api_key = 'YOUR_OPENAI_API_KEY';  // Replace with your API key

        const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${api_key}`
            },
            body: JSON.stringify({
                prompt: req,
                max_tokens: 60,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data.choices[0].text);

        return data.choices[0].text;
    };

    const result = await gptFetch({req:prompt}) // You need to use await here, since gptFetch is asynchronous

    return new Response(JSON.stringify(result), {
        headers: { 'Content-Type': 'application/json' },
    });
};

export const config = { path: "/test" };
