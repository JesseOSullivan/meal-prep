const { gptFetch } = require('./gpt');
const test = async () => {
    try {
      const messages = [
        { role: 'system', content: 'You are a video game strategist expert.' },
        { role: 'user', content: 'Whats the best strategy for this game?' },
      ];
      const result = await gptFetch({ prompt: messages });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
};
  var convo = [
    {"role":"system", "content": `You are a video game strategist expert in. Always reply concisely in less than 50 words. ALso note all text sent to you is gatherd through voice to speech. so there may be a lot of typo's`},

  ]

 const convo2 =  {"role":"user", "content":`test hello`}

  console.log(test(convo)) 
  