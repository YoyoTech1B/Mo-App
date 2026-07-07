import express from "express";
import cors from "cors";
import OpenAI from "openai";

const app = express();

app.use(cors());
app.use(express.json());

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

app.post("/chat", async (req, res) => {
    try {
        const completion = await client.chat.completions.create({
            model: "gpt-4.1-mini",
            messages: [
                {
                    role: "system",
                    content:
                        "You are Moar, a friendly, smart AI assistant. Be helpful, natural, and conversational."
                },
                {
                    role: "user",
                    content: req.body.message
                }
            ]
        });

        res.json({
            reply: completion.choices[0].message.content
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            reply: "Something went wrong."
        });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
