import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface CustomRequest extends Request {
  user?: any;
}

const verifyToken = (req: CustomRequest, res: Response, next: NextFunction) => {
  const authHeader = req.header('authorization');
  if (!authHeader) return res.status(401).json({ error: 'Access forbidden' });

  const token = authHeader.split(' ')[1];

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET) as { user: any };
    req.user = verified;

    next();
  } catch (error) {
    res.status(400).json({ error });
  }
};

export default verifyToken;

