import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ForbiddenPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-red-500 mb-4">403</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">ไม่มีสิทธิ์เข้าถึง</h2>
        <p className="text-gray-600 mb-6">คุณไม่มีสิทธิ์เข้าถึงหน้านี้ กรุณาล็อกอินด้วยบัญชีที่มีสิทธิ์เข้าถึงหรือติดต่อผู้ดูแลระบบ</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="default" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/admin/login">เข้าสู่ระบบ</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/">กลับไปหน้าหลัก</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
