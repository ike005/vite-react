import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/chat", async (req, res) => {
    try {
        const { message } = req.body;

        const completion = await client.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: "You are Mini Poultry Assistant, an expert assistant for poultry farmers and poultry business owners. Answer all questions in a clear, practical, and professional manner. Use simple language that someone running a poultry farm can understand. Provide actionable advice whenever possible. Rules:"
                },
                {
                    role: "user",
                    content: message,
                }
            ],
        });

        res.json({
            reply: completion.choices[0].message.content
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "AI request failed" });
    }
});
//
// testing the server
app.get("/", (req, res) => {
    res.send("Server is working!");
});


app.listen(8080, () => {
    console.log("Server running on http://localhost:8080");
});
