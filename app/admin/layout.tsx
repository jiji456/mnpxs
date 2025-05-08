"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Home, FileText, ImageIcon, BarChart2, Tag, Settings, LogOut } from "lucide-react"
import Cookies from "js-cookie"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // ตรวจสอบว่ามี token หรือไม่
    const token = Cookies.get("admin_token")
    if (!token && pathname !== "/admin/login") {
      router.push("/admin/login")
    }
  }, [pathname, router])

  // ถ้าเป็นหน้า login ให้แสดงเฉพาะ children แต่ครอบด้วย div ที่มีพื้นหลังสีขาว
  if (pathname === "/admin/login") {
    return (
      <div className="bg-white text-black" style={{ backgroundColor: "#ffffff", color: "#000000" }}>
        {children}
      </div>
    )
  }

  if (!isClient) {
    return null // หรือแสดง loading
  }

  const handleLogout = () => {
    Cookies.remove("admin_token")
    router.push("/admin/login")
  }

  const navigation = [
    { name: "แดชบอร์ด", href: "/admin", icon: Home, emoji: "📊", color: "#4F46E5" },
    { name: "บทความ", href: "/admin/blog", icon: FileText, emoji: "📝", color: "#0EA5E9" },
    { name: "มีเดีย", href: "/admin/media", icon: ImageIcon, emoji: "🖼️", color: "#10B981" },
    { name: "หมวดหมู่", href: "/admin/categories", icon: Tag, emoji: "🏷️", color: "#F59E0B" },
    { name: "วิเคราะห์", href: "/admin/analytics", icon: BarChart2, emoji: "📈", color: "#EC4899" },
    { name: "ตั้งค่า", href: "/admin/settings", icon: Settings, emoji: "⚙️", color: "#6B7280" },
  ]

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900" style={{ backgroundColor: "#f9fafb", color: "#111827" }}>
      {/* Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col">
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white border-r">
          <div className="flex items-center flex-shrink-0 px-4">
            <Link href="/admin" className="font-bold text-xl text-blue-600">
              ManyPx Admin
            </Link>
          </div>
          <div className="mt-5 flex-grow flex flex-col">
            <nav className="flex-1 px-2 pb-4 space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/admin" && pathname?.startsWith(item.href))

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center px-3 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 ${
                      isActive
                        ? `bg-${item.color}/10 text-${item.color}`
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                    style={{
                      backgroundColor: isActive ? `${item.color}15` : "",
                      color: isActive ? item.color : "",
                    }}
                  >
                    <span className="mr-3 text-xl">{item.emoji}</span>
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <button
              onClick={handleLogout}
              className="w-full flex items-center px-2 py-2 text-sm font-medium rounded-md text-red-600 hover:bg-red-50"
            >
              <LogOut className="mr-3 flex-shrink-0 h-5 w-5 text-red-500" aria-hidden="true" />
              ออกจากระบบ
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="flex-shrink-0 bg-white border-b">
          <div className="flex justify-between items-center h-16 px-6">
            <div className="flex items-center md:hidden">
              <Link href="/admin" className="font-bold text-xl text-blue-600">
                ManyPx Admin
              </Link>
            </div>
            <div className="flex items-center">
              <div className="ml-4 flex items-center md:ml-6">
                <Link href="/" target="_blank" className="text-sm text-gray-500 hover:text-gray-700 mr-4">
                  ดูเว็บไซต์
                </Link>
                <div className="md:hidden">
                  <button
                    onClick={handleLogout}
                    className="flex items-center px-2 py-1 text-sm font-medium rounded-md text-red-600 hover:bg-red-50"
                  >
                    <LogOut className="mr-1 flex-shrink-0 h-4 w-4 text-red-500" aria-hidden="true" />
                    ออกจากระบบ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <main className="flex-1 relative overflow-y-auto focus:outline-none p-6">{children}</main>
      </div>
    </div>
  )
}
