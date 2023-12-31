import mongoose from 'mongoose'
const { Schema, model } = mongoose

const reviewSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: 'user'
    },
    review: {
      type: String,
      required: true,
      maxlength: 300
    }
  },
  { timestamps: true }
)

export default model('review', reviewSchema)
