export default async (request) => {


    test = {test:"test"}
    
    return new Response.json(test, {
      headers: { "content-type": "text/html" },
    });
  };
  