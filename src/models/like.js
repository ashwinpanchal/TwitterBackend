import { Schema, model } from "mongoose";

const likeSchema = new Schema(
  {
    onModel: { type: String, required: true, enum: ["Tweet", "Comment"] },
    likeable: {
      type: Schema.Types.ObjectId,
      required: true,
      refPath: "onModel",
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Like = model("Like", likeSchema);

export default Like;
