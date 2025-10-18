// /lib/auth.js
import { SignJWT, jwtVerify } from "jose";

const SECRET_KEY = new TextEncoder().encode("super-secret-key"); // 🔒 change in production

export async function createJWT(payload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(SECRET_KEY);
}

export async function verifyJWT(token) {
  try {
    const { payload } = await jwtVerify(token, SECRET_KEY);
    return payload;
  } catch (err) {
    return null;
  }
}
