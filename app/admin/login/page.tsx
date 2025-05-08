"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LockKeyhole, User, Info, ArrowRight, AlertCircle } from "lucide-react"
import Cookies from "js-cookie"

// ข้อมูลล็อกอินที่ถูกต้อง (ในระบบจริงควรเก็บในฐานข้อมูล)
const VALID_USERNAME = "admin"
const VALID_PASSWORD = "admin123"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showLoginInfo, setShowLoginInfo] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // จำลองการเรียก API (ในระบบจริงควรใช้ fetch หรือ axios)
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // ตรวจสอบข้อมูลล็อกอิน
      if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        // เก็บ token อย่างง่ายใน cookies
        Cookies.set("admin_token", "simple_admin_token", { expires: 1 }) // หมดอายุใน 1 วัน

        // redirect ไปที่หน้าแอดมิน
        router.push("/admin")
      } else {
        setError("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง")
      }
    } catch (err) {
      setError("เกิดข้อผิดพลาดในการเข้าสู่ระบบ กรุณาลองใหม่อีกครั้ง")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4 relative overflow-hidden"
      style={{ backgroundColor: "#f0f7ff", color: "#111827" }}
    >
      {/* Animated background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md z-10"
      >
        <Card className="backdrop-blur-xl bg-white border-0 shadow-xl rounded-3xl overflow-hidden">
          <div className="p-8">
            <div className="flex justify-center mb-6">
              <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                <Image
                  src="/images/manypixel_logo.png"
                  alt="ManyPx Logo"
                  width={150}
                  height={40}
                  className="h-12 w-auto"
                />
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-800 mb-1">👋 ยินดีต้อนรับ</h1>
                <p className="text-gray-500 text-sm">เข้าสู่ระบบเพื่อจัดการเว็บไซต์</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-5">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="ชื่อผู้ใช้"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="pl-10 h-12 bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500 text-gray-900 font-medium"
                  />
                </div>

                <div className="relative">
                  <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="password"
                    placeholder="รหัสผ่าน"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="pl-10 h-12 bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500 text-gray-900 font-medium"
                  />
                </div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 text-red-600 p-3 rounded-xl text-sm flex items-center"
                  >
                    <AlertCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>{error}</span>
                  </motion.div>
                )}

                <div className="pt-2">
                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-base rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        กำลังเข้าสู่ระบบ...
                      </div>
                    ) : (
                      <>
                        เข้าสู่ระบบ
                        <ArrowRight className="h-5 w-5" />
                      </>
                    )}
                  </Button>
                </div>
              </form>

              <div className="mt-6">
                <Button
                  variant="outline"
                  onClick={() => setShowLoginInfo(!showLoginInfo)}
                  className="w-full flex items-center justify-center gap-2 text-gray-600 border-gray-300 hover:bg-gray-100"
                >
                  <Info className="h-4 w-4" />
                  {showLoginInfo ? "ซ่อน" : "แสดง"}ข้อมูลทดสอบ
                </Button>
              </div>

              {showLoginInfo && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 bg-blue-50 p-4 rounded-xl border border-blue-100"
                >
                  <h3 className="font-medium text-blue-800 mb-2 flex items-center">
                    <Info className="h-4 w-4 mr-1" />
                    ข้อมูลสำหรับทดสอบ
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-white/70 p-2 rounded-lg">
                      <p className="text-gray-500">ชื่อผู้ใช้</p>
                      <p className="font-mono font-medium text-blue-700">admin</p>
                    </div>
                    <div className="bg-white/70 p-2 rounded-lg">
                      <p className="text-gray-500">รหัสผ่าน</p>
                      <p className="font-mono font-medium text-blue-700">admin123</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}
