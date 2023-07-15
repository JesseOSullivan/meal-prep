export default async (request) => {
    const test = {test:"test"};

    return new Response(JSON.stringify(test), {
        headers: { "content-type": "application/json" },
    });
};
