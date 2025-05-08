import { SignJWT, jwtVerify } from "jose"

// กำหนดค่า secret key (ในระบบจริงควรเก็บใน environment variables)
const JWT_SECRET = new TextEncoder().encode("your-secret-key-should-be-at-least-32-chars")

// กำหนดค่า expiration time
const EXPIRATION_TIME = "1d" // 1 วัน

export interface JWTPayload {
  userId: string
  email: string
  role: string
  iat?: number
  exp?: number
}

/**
 * สร้าง JWT token
 */
export async function createToken(payload: JWTPayload): Promise<string> {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(EXPIRATION_TIME)
    .sign(JWT_SECRET)
}

/**
 * ตรวจสอบความถูกต้องของ JWT token
 */
export async function verifyToken(token: string): Promise<JWTPayload | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET)
    return payload as JWTPayload
  } catch (error) {
    console.error("Error verifying token:", error)
    return null
  }
}

/**
 * ตรวจสอบว่า token หมดอายุหรือไม่
 */
export function isTokenExpired(token: string): boolean {
  try {
    const [, payloadBase64] = token.split(".")
    const payload = JSON.parse(atob(payloadBase64))
    const exp = payload.exp * 1000 // แปลงเป็น milliseconds
    return Date.now() > exp
  } catch (error) {
    console.error("Error checking token expiration:", error)
    return true // ถ้ามีข้อผิดพลาด ให้ถือว่า token หมดอายุ
  }
}
