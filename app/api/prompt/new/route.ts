import { connectDB } from "@utils/database";
import Prompt from "@models/prompt";
import { NextRequest, NextResponse } from "next/server";

export const POST = async(request:NextRequest) =>{

    const { userId, prompt, tag }: { userId: string; prompt: string; tag: string } = await request.json();

    try {
        
        await connectDB();
        const newPrompt = new Prompt({creator:userId, prompt, tag});

        await newPrompt.save();
        return new NextResponse(JSON.stringify(newPrompt), {status:201});
    } catch (error) {
        console.error("Error creating new prompt:", error);
        return new NextResponse("Failed to create new prompt!", {status:500});
    }
}