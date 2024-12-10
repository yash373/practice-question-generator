import Groq from "groq-sdk";

const groq = new Groq({apiKey: "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", dangerouslyAllowBrowser: true});


export const getGroqChatCompletion = async () => {
    const completion = await groq.chat.completions.create({
        messages: [
            {
                role: "system",
                content: "you are a helpful assistant.",
            },
            {
                role: "user",
                content: "Explain the importance of fast language models",
            },
        ],
        model: "llama3-8b-8192",
        temperature: 0.5,
        max_tokens: 1024,
        top_p: 1,
        stop: null,
        stream: false,
    })
    return completion.choices[0].message.content || ""
};