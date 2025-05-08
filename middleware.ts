import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // ตรวจสอบว่าเป็น URL ที่ขึ้นต้นด้วย /admin หรือไม่
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // ยกเว้นหน้า login
    if (request.nextUrl.pathname === "/admin/login") {
      return NextResponse.next()
    }

    // ตรวจสอบ token จาก cookies
    const token = request.cookies.get("admin_token")?.value

    // ถ้าไม่มี token ให้ redirect ไปที่หน้า login
    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }

    // ตรวจสอบความถูกต้องของ token อย่างง่าย
    if (token !== "simple_admin_token") {
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }
  }

  return NextResponse.next()
}

// ระบุ path ที่ต้องการให้ middleware ทำงาน
export const config = {
  matcher: "/admin/:path*",
}
