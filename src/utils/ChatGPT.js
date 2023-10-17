const { OpenAI } = require("openai");


class ChatGPT {
  constructor() {
    this.apiKey = process.env.REACT_APP_CHATGPT_API_KEY;
  }
  
    async getTailoredBulletPoints(resume, jobDescription) {
        const openai = new OpenAI({
            apiKey: process.env.REACT_APP_CHATGPT_API_KEY, dangerouslyAllowBrowser: true  // This is also the default, can be omitted
        });

        const completion = await openai.chat.completions.create({
        
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: "Please analyze the attached resume and job description, rank which bullet points in my resuem are most reveland to the job description and excplicitly say why for example (Relevant to the job description's requirement of ...blank) then please give me examples of new brand new orginal bullet points to add, do not reuse bullet points from the resume come up with new ones" + "resume = " +  resume + "\n" + ". job description = " + jobDescription
    
    }],
        });
        console.log(completion.choices[0].message.content);
        return completion.choices[0].message.content

    }

    async getCoverLetter(resume, jobDescription) {
        const openai = new OpenAI({
            apiKey: process.env.REACT_APP_CHATGPT_API_KEY, dangerouslyAllowBrowser: true  // This is also the default, can be omitted
        });

        const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{role: "system", content: "Can you help write me a cover letter to the specific job description. I want you to provide me with a tailor cover letter that highlight my most relevant skills and experiences for the position."
            + "Here is the resume \n" + resume + "\n Here is the Job Description \n" + jobDescription
    
    }],
        });
        console.log(completion.choices[0].message.content);
        return completion.choices[0].message.content

    }

    async getRecruiterEmail(resume, jobDescription) {
        const openai = new OpenAI({
            apiKey: process.env.REACT_APP_CHATGPT_API_KEY, dangerouslyAllowBrowser: true  // This is also the default, can be omitted
        });

        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{
                role: "system",
                content: "Can you help write me an email to the recuiter at the company for specific job description. I want you to provide me with a tailor cover letter that highlight my most relevant skills and experiences for the position."
                    + "Here is the resume \n" + resume + "\n Here is the Job Description \n" + jobDescription

            }],
        });
        console.log(completion.choices[0].message.content);
        return completion.choices[0].message.content

    }

    async getLinkedInSummary(resume) {
        const openai = new OpenAI({
            apiKey: process.env.REACT_APP_CHATGPT_API_KEY, dangerouslyAllowBrowser: true  // This is also the default, can be omitted
        });

        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{role: "system", content: "Can you help write me a LinkedIn about me section that highlights my skills and experiences."
                    + "Here is the resume \n" + resume

            }],
        });
        console.log(completion.choices[0].message.content);
        return completion.choices[0].message.content

    }

}

export default ChatGPT;