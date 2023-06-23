import express from "express";
import {
  getUsers,
  createUserFavorites,
  getUsersFavorites,
  getUserFavorites,
  updateUserFavorites,
  deleteUserFavorites,
} from "../controllers/users";
const router = express.Router();

// user routes

router.get("/", getUsers);
router.get("/favorites", getUsersFavorites);
router.get("/favorites/:id", getUserFavorites);
router.post("/favorites/:id", createUserFavorites);
router.put("/favorites/:id", updateUserFavorites);
router.delete("/favorites/:id", deleteUserFavorites);

export default router;
