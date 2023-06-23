import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import generateToken from "../helpers/generate_token";
import jwt from "jsonwebtoken";
import User, { IUser } from "../models/User";

const signin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user: IUser | null = await User.findOne({
      email: email.toLowerCase(),
    })
    if (!user) {
      return res.status(401).json({ message: "User doesn't exist" });
    }

    const validPassword: boolean = await user.isValidPassword(password);
    if (!validPassword) {
      return res.status(401).json({ message: "User or password incorrect" });
    }

    const token: string = await generateToken(
      user._id,
      user.full_name,
      user.email
    );

    const userWithoutPassword = await User.findById(user._id).select("-password").lean();

    return res.json({
      message: 'Login success',
      user: userWithoutPassword,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const signup = async (req: Request, res: Response) => {
  try {
    const { first_name, last_name, email, password } = req.body;

    const existingUser: IUser | null = await User.findOne({ email });
    if (existingUser) {
      return res.status(401).json({ message: "User already exists" });
    }

    const saltRounds = 10;
    const hashedPassword: string = await bcrypt.hash(password, saltRounds);
    const user: IUser = await User.create({
      first_name,
      last_name,
      email,
      password: hashedPassword,
    });

    const token: string = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: "12h" }
    );
    const userWithoutPassword = await User.findById(user._id).select("-password").lean();

    return res.status(201).json({
      message: "User registered successfully",
      user: userWithoutPassword,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export { signin, signup };
