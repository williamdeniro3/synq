const { Configuration, OpenAIApi } = require("openai");


class ChatGPT {
  constructor() {
    this.apiKey = process.env.REACT_APP_CHATGPT_API_KEY;
  }
  
    async getTailoredBulletPoints(resume, jobDescription) {
        const configuration = new Configuration({
            apiKey: this.apiKey,
        });
        const openai = new OpenAIApi(configuration);

        const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "system", content: "Can help me tailor me resume to the specific job description. I want you to provide me with tailored bullet points that highlight my most relevant skills and experiences for the position."
            + "Here is the resume \n" + resume + "\n Here is the Job Description \n" + jobDescription
    
    }],
        });
        console.log(completion.data.choices[0].message);

    }
}

export default ChatGPT;