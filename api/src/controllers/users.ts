import { Request, Response } from "express";
import User from "../models/User";
import Favorite from "../models/Favorite";

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    return res.status(200).json({
      message: "Success",
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const createUserFavorites = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { p_id } = req.body;
  try {
    const favorites = await Favorite.create({ user: id, pokemon_id: p_id });
    return res.status(200).json({
      message: "Success",
      favorites,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
const getUsersFavorites = async (req: Request, res: Response) => {
  try {
    const favorites = await Favorite.find();
    return res.status(200).json({
      message: "Success",
      favorites,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getUserFavorites = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const favorites = await Favorite.find({ user: id });
    return res.status(200).json({
      message: "Success",
      favorites,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
const updateUserFavorites = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { p_id } = req.body;
  try {
    const favorites = await Favorite.findByIdAndUpdate(
      { _id: id },
      { pokemon_id: p_id }
    );
    return res.status(200).json({
      message: "Success",
      favorites,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
const deleteUserFavorites = async (req: Request, res: Response) => {
  const { id }  = req.params;
  try {
    const favorites = await Favorite.findByIdAndRemove({ _id: id });
    return res.status(200).json({
      message: "Success",
      favorites,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export {
  getUsers,
  createUserFavorites,
  getUsersFavorites,
  getUserFavorites,
  updateUserFavorites,
  deleteUserFavorites,
};
