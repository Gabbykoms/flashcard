import { NextResponse } from "next/server";
import OpenAI from "openai";
import { type } from "os";

const systemPrompt = 'You are a flash card creator'

export async function POST(req){
    const openai = OpenAI()
    const data = await req.text()
    const completion = await openai.chat.completion.create({
        messages: [
            {role: 'system', content: systemPrompt}, 
            {role: 'user', content : data}
        ], 
        model: "gpt-4o", 
        response_format:{type:'json_object'}
    })

    const flashcards = JSON.parse(completion.choices[0].message.content)

    return NextResponse.json(flashcards.flashcard)

}