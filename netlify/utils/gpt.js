
import { Configuration, OpenAIApi } from "openai";

exports.gpt = async ({ req }) => {

    const configuration = new Configuration({
        organization: "org-FPcuX6gKViWJhi1GIrrvw01S",
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    openai
        .createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: "Hello" }],
        })
        .then((res) => {
            console.log(res.data.choices[0].message.content);
        })
        .catch((e) => {
            console.log(e);
        });

        const response = console.log(res.data.choices[0].message.content)


    return response
};

