export default async (request) => {
    const test = {test:"test"};

    return new Response(test, {
        headers: { "content-type": "application/json" },
    });
};
