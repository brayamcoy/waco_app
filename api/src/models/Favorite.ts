import mongoose, { Document, Model, Schema } from "mongoose";

export interface IFavorite extends Document {
  user: String;
  pokemon_id: string;
}

const FavoriteSchema: Schema<IFavorite> = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    pokemon_id: {
      type: String,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    timestamps: true,
  }
);

const Favorite: Model<IFavorite> = mongoose.model<IFavorite>(
  "Favorite",
  FavoriteSchema
);

export default Favorite;
