import jsonwebtoken, { SignOptions } from "jsonwebtoken";

// helpers

const generateToken = (
  uid: string = "",
  complete_name: string = "",
  email: string = "",
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const payload = { uid, complete_name, email };
    const options: SignOptions = {
      expiresIn: "12h",
    };
    jsonwebtoken.sign(
      payload,
      process.env.JWT_SECRET!,
      options,
      (error: Error | null, token: string | undefined) => {
        if (error) {
          reject(`Token Error: ${error}`);
        } else {
          resolve(token!);
        }
      }
    );
  });
};

export default generateToken;
