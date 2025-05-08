"use client"

import type React from "react"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"
import { createToken } from "@/lib/jwt"

// ข้อมูลล็อกอินที่ถูกต้อง (ในระบบจริงควรเก็บในฐานข้อมูล)
const VALID_PASSWORD = "admin123"

export default function SettingsPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("account")

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">ตั้งค่า</h1>

      <Tabs defaultValue="account" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="account">บัญชีผู้ใช้</TabsTrigger>
          <TabsTrigger value="security">ความปลอดภัย</TabsTrigger>
          <TabsTrigger value="notifications">การแจ้งเตือน</TabsTrigger>
          <TabsTrigger value="site">เว็บไซต์</TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <AccountSettings />
        </TabsContent>

        <TabsContent value="security">
          <SecuritySettings />
        </TabsContent>

        <TabsContent value="notifications">
          <NotificationSettings />
        </TabsContent>

        <TabsContent value="site">
          <SiteSettings />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function AccountSettings() {
  const [formData, setFormData] = useState({
    name: "แอดมิน ManyPx",
    email: "admin@manypx.com",
    role: "ผู้ดูแลระบบ",
  })

  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [message, setMessage] = useState({ type: "", text: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)
    setMessage({ type: "", text: "" })

    // จำลองการบันทึกข้อมูล
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setMessage({ type: "success", text: "บันทึกข้อมูลบัญชีเรียบร้อยแล้ว" })
    setIsEditing(false)
    setIsSaving(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>ข้อมูลบัญชี</CardTitle>
        <CardDescription>จัดการข้อมูลบัญชีของคุณ</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          {message.text && (
            <div
              className={`mb-4 p-3 rounded-md flex items-center ${
                message.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
              }`}
            >
              {message.type === "success" ? (
                <CheckCircle2 className="h-5 w-5 mr-2" />
              ) : (
                <AlertCircle className="h-5 w-5 mr-2" />
              )}
              {message.text}
            </div>
          )}

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">ชื่อ</Label>
              <Input id="name" name="name" value={formData.name} onChange={handleChange} disabled={!isEditing} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">อีเมล</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">บทบาท</Label>
              <Input id="role" name="role" value={formData.role} disabled={true} />
              <p className="text-sm text-gray-500">บทบาทไม่สามารถเปลี่ยนแปลงได้</p>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        {isEditing ? (
          <>
            <Button variant="outline" onClick={() => setIsEditing(false)} disabled={isSaving}>
              ยกเลิก
            </Button>
            <Button type="submit" onClick={handleSubmit} disabled={isSaving}>
              {isSaving ? "กำลังบันทึก..." : "บันทึก"}
            </Button>
          </>
        ) : (
          <>
            <div></div>
            <Button onClick={() => setIsEditing(true)}>แก้ไข</Button>
          </>
        )}
      </CardFooter>
    </Card>
  )
}

function SecuritySettings() {
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const [isChangingPassword, setIsChangingPassword] = useState(false)
  const [message, setMessage] = useState({ type: "", text: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPasswordData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsChangingPassword(true)
    setMessage({ type: "", text: "" })

    // ตรวจสอบว่ารหัสผ่านใหม่และยืนยันรหัสผ่านตรงกัน
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setMessage({ type: "error", text: "รหัสผ่านใหม่และยืนยันรหัสผ่านไม่ตรงกัน" })
      setIsChangingPassword(false)
      return
    }

    // ตรวจสอบความยาวของรหัสผ่าน
    if (passwordData.newPassword.length < 8) {
      setMessage({ type: "error", text: "รหัสผ่านใหม่ต้องมีความยาวอย่างน้อย 8 ตัวอักษร" })
      setIsChangingPassword(false)
      return
    }

    // จำลองการตรวจสอบรหัสผ่านปัจจุบัน
    if (passwordData.currentPassword !== VALID_PASSWORD) {
      setMessage({ type: "error", text: "รหัสผ่านปัจจุบันไม่ถูกต้อง" })
      setIsChangingPassword(false)
      return
    }

    // จำลองการเปลี่ยนรหัสผ่าน
    await new Promise((resolve) => setTimeout(resolve, 1000))

    try {
      // สร้าง token ใหม่หลังจากเปลี่ยนรหัสผ่าน
      const token = await createToken({
        userId: "admin-user-id",
        email: "admin@example.com",
        role: "admin",
      })

      // อัปเดต token ใน cookies
      Cookies.set("admin_jwt", token, { expires: 1, secure: true, sameSite: "strict" })

      setMessage({ type: "success", text: "เปลี่ยนรหัสผ่านเรียบร้อยแล้ว" })
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      })
    } catch (error) {
      setMessage({ type: "error", text: "เกิดข้อผิดพลาดในการเปลี่ยนรหัสผ่าน กรุณาลองใหม่อีกครั้ง" })
    } finally {
      setIsChangingPassword(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>เปลี่ยนรหัสผ่าน</CardTitle>
        <CardDescription>อัปเดตรหัสผ่านของคุณเพื่อความปลอดภัย</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handlePasswordChange}>
          {message.text && (
            <div
              className={`mb-4 p-3 rounded-md flex items-center ${
                message.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
              }`}
            >
              {message.type === "success" ? (
                <CheckCircle2 className="h-5 w-5 mr-2" />
              ) : (
                <AlertCircle className="h-5 w-5 mr-2" />
              )}
              {message.text}
            </div>
          )}

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currentPassword">รหัสผ่านปัจจุบัน</Label>
              <Input
                id="currentPassword"
                name="currentPassword"
                type="password"
                value={passwordData.currentPassword}
                onChange={handleChange}
                required
              />
              <p className="text-sm text-gray-500">
                รหัสผ่านปัจจุบันคือ <span className="font-medium">{VALID_PASSWORD}</span> (สำหรับการทดสอบเท่านั้น)
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="newPassword">รหัสผ่านใหม่</Label>
              <Input
                id="newPassword"
                name="newPassword"
                type="password"
                value={passwordData.newPassword}
                onChange={handleChange}
                required
              />
              <p className="text-sm text-gray-500">รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">ยืนยันรหัสผ่านใหม่</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={passwordData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" onClick={handlePasswordChange} disabled={isChangingPassword} className="ml-auto">
          {isChangingPassword ? "กำลังเปลี่ยนรหัสผ่าน..." : "เปลี่ยนรหัสผ่าน"}
        </Button>
      </CardFooter>
    </Card>
  )
}

function NotificationSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>การแจ้งเตือน</CardTitle>
        <CardDescription>จัดการการแจ้งเตือนของคุณ</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-500">ฟีเจอร์นี้จะเปิดให้ใช้งานเร็วๆ นี้</p>
      </CardContent>
    </Card>
  )
}

function SiteSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>ตั้งค่าเว็บไซต์</CardTitle>
        <CardDescription>จัดการการตั้งค่าทั่วไปของเว็บไซต์</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-500">ฟีเจอร์นี้จะเปิดให้ใช้งานเร็วๆ นี้</p>
      </CardContent>
    </Card>
  )
}
