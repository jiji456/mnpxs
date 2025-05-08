"use client"

import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"

export function LogoutButton() {
  const router = useRouter()

  const handleLogout = () => {
    // ลบ JWT token ออกจาก cookies
    Cookies.remove("admin_jwt")

    // redirect ไปที่หน้า login
    router.push("/admin/login")
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleLogout}
      className="text-gray-500 hover:text-gray-700 hover:bg-gray-100"
    >
      <LogOut className="h-4 w-4 mr-2" />
      ออกจากระบบ
    </Button>
  )
}
