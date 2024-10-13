import { Schema, model, models, Document, Model } from "mongoose";

interface IPrompt extends Document {
  creator: string;
  prompt: string;
  tag: string;
}

const promptSchema = new Schema<IPrompt>({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required."],
  },
  tag: {
    type: String,
    required: [true, "Tag is required."],
  },
});

const Prompt: Model<IPrompt> = models.Prompt || model<IPrompt>("Prompt", promptSchema);

export default Prompt;
