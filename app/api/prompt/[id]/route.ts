import Prompt from "@models/prompt";
import { connectDB } from "@utils/database";

export const GET = async (request, { params }) => {
    
    try {
        await connectDB()

        const prompt = await Prompt.findById(params.id).populate("creator")
        if (!prompt) return new Response("Prompt Not Found", { status: 404 });

        return new Response(JSON.stringify(prompt), { status: 200 })

    } catch (error) {
        console.log("Error in fetching the prompt:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}

export const PATCH = async (request, { params }) => {
    const { prompt, tag } = await request.json();

    try {
        await connectDB();

        const existingPrompt = await Prompt.findById(params.id);

        if (!existingPrompt) {
            return new Response("Prompt not found", { status: 404 });
        }

        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;

        await existingPrompt.save();

        return new Response("Successfully updated the Prompts", { status: 200 });
    } catch (error) {
        console.log("Error in updating the prompt:", error);
        return new Response("Error Updating Prompt", { status: 500 });
    }
};

export const DELETE = async (request, { params }) => {
    console.log("id:", params.id);
    
    try {
      await connectDB();

      await Prompt.findByIdAndDelete(params.id);
      return new Response("Prompt deleted successfully", { status: 200 });
    } catch (error) {
      console.error("Error deleting prompt:", error);
      return new Response("Error deleting prompt", { status: 500 });
    }
  };
  