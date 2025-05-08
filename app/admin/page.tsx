"use client"
import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  FileText,
  Users,
  Eye,
  TrendingUp,
  TrendingDown,
  ArrowRight,
  Edit,
  Plus,
  Calendar,
  Bell,
  Zap,
  Activity,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  // ข้อมูลตัวอย่างสำหรับแดชบอร์ด
  const stats = [
    {
      title: "บทความ",
      value: "24",
      icon: <FileText className="h-6 w-6 text-blue-500" />,
      change: "+12%",
      trend: "up",
      bgColor: "bg-blue-50",
    },
    {
      title: "ยอดเข้าชม",
      value: "12,345",
      icon: <Eye className="h-6 w-6 text-purple-500" />,
      change: "+8%",
      trend: "up",
      bgColor: "bg-purple-50",
    },
    {
      title: "ผู้ใช้",
      value: "156",
      icon: <Users className="h-6 w-6 text-amber-500" />,
      change: "-3%",
      trend: "down",
      bgColor: "bg-amber-50",
    },
    {
      title: "การมีส่วนร่วม",
      value: "24%",
      icon: <Activity className="h-6 w-6 text-emerald-500" />,
      change: "+5%",
      trend: "up",
      bgColor: "bg-emerald-50",
    },
  ]

  // ข้อมูลบทความล่าสุด
  const recentPosts = [
    {
      id: 1,
      title: "กระบวนการพัฒนา Visual Novel จากแนวคิดสู่การเผยแพร่",
      date: "15 มี.ค.",
      views: 1245,
      author: "ธนภัทร",
    },
    {
      id: 2,
      title: "เจาะลึก UI/UX ของโปรแกรม 3D Graphic Design ชั้นนำในปี 2024",
      date: "2 เม.ย.",
      views: 2389,
      author: "สุทัสสา",
    },
    {
      id: 3,
      title: "วิเคราะห์คู่แข่งในตลาด 3D Assets ปี 2023",
      date: "18 ก.พ.",
      views: 1876,
      author: "ชานน",
    },
    {
      id: 5,
      title: "การใช้ 3D Assets เพื่อเพิ่มประสิทธิภาพในการผลิต Webtoon",
      date: "22 มี.ค.",
      views: 1987,
      author: "ธนภัทร",
    },
  ]

  // ข้อมูลกิจกรรมล่าสุด
  const recentActivities = [
    { icon: <FileText className="h-4 w-4 text-blue-500" />, text: "เพิ่มบทความใหม่", time: "2 ชม. ที่แล้ว" },
    { icon: <Edit className="h-4 w-4 text-amber-500" />, text: "แก้ไขหมวดหมู่", time: "5 ชม. ที่แล้ว" },
    { icon: <Users className="h-4 w-4 text-purple-500" />, text: "ผู้ใช้ใหม่ลงทะเบียน", time: "1 วัน ที่แล้ว" },
    { icon: <Bell className="h-4 w-4 text-red-500" />, text: "มีการแจ้งเตือนใหม่", time: "2 วัน ที่แล้ว" },
  ]

  // ข้อมูลปฏิทิน
  const calendarEvents = [
    { date: "วันนี้", events: ["เผยแพร่บทความใหม่", "อัปเดตเว็บไซต์"] },
    { date: "พรุ่งนี้", events: ["ประชุมทีม", "วางแผนการตลาด"] },
    { date: "25 เม.ย.", events: ["เปิดตัวฟีเจอร์ใหม่"] },
  ]

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">👋 สวัสดี, แอดมิน</h1>
          <p className="text-gray-500 text-sm">ยินดีต้อนรับกลับมา! นี่คือภาพรวมของวันนี้</p>
        </div>
        <Button
          onClick={() => (window.location.href = "/admin/blog/new")}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 rounded-xl flex items-center gap-2"
        >
          <Plus className="h-4 w-4" /> เขียนบทความ
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-xl ${stat.bgColor}`}>{stat.icon}</div>
                  <div className="flex items-center">
                    {stat.trend === "up" ? (
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                    )}
                    <p className={`text-xs ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                      {stat.change}
                    </p>
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.title}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto mb-6 bg-gray-100 rounded-xl p-1">
        {["overview", "content", "users", "settings"].map((tab, index) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === tab ? "bg-white text-gray-800 shadow-sm" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab === "overview" && "📊 "}
            {tab === "content" && "📝 "}
            {tab === "users" && "👥 "}
            {tab === "settings" && "⚙️ "}
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {activeTab === "overview" && (
          <>
            {/* Recent Posts */}
            <Card className="lg:col-span-2 border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between pb-2 pt-6 px-6">
                <CardTitle className="text-lg font-medium">📝 บทความล่าสุด</CardTitle>
                <Link href="/admin/blog">
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800">
                    ดูทั้งหมด <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <div className="space-y-4">
                  {recentPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                      className="flex justify-between items-center p-3 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-gray-800 truncate">{post.title}</h3>
                        <div className="flex text-xs text-gray-500 mt-1 gap-3">
                          <span className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {post.date}
                          </span>
                          <span className="flex items-center">
                            <Users className="h-3 w-3 mr-1" />
                            {post.author}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-xs text-gray-500 flex items-center">
                          <Eye className="h-3 w-3 mr-1" />
                          {post.views.toLocaleString()}
                        </div>
                        <Link href={`/admin/blog/edit/${post.id}`}>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-blue-50"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Side Panel */}
            <div className="space-y-6">
              {/* Activities */}
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center justify-between pb-2 pt-6 px-6">
                  <CardTitle className="text-lg font-medium">⚡ กิจกรรมล่าสุด</CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <div className="space-y-3">
                    {recentActivities.map((activity, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="p-2 rounded-lg bg-gray-100">{activity.icon}</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-800">{activity.text}</p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Calendar */}
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center justify-between pb-2 pt-6 px-6">
                  <CardTitle className="text-lg font-medium">📅 ปฏิทิน</CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <div className="space-y-3">
                    {calendarEvents.map((day, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                        className="border-l-2 border-blue-500 pl-3 py-1"
                      >
                        <p className="text-sm font-medium text-gray-800">{day.date}</p>
                        <div className="mt-1 space-y-1">
                          {day.events.map((event, i) => (
                            <div key={i} className="flex items-center">
                              <Zap className="h-3 w-3 text-blue-500 mr-1" />
                              <p className="text-xs text-gray-600">{event}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        )}

        {activeTab === "content" && (
          <Card className="col-span-3 border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between pb-2 pt-6 px-6">
              <CardTitle className="text-lg font-medium">📝 จัดการเนื้อหา</CardTitle>
              <Button
                onClick={() => (window.location.href = "/admin/blog/new")}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 rounded-xl flex items-center gap-2"
              >
                <Plus className="h-4 w-4" /> เขียนบทความ
              </Button>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <div className="text-center py-12">
                <FileText className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-800 mb-2">จัดการเนื้อหาทั้งหมด</h3>
                <p className="text-gray-500 max-w-md mx-auto mb-6">คุณสามารถจัดการบทความ, หมวดหมู่, และมีเดียได้จากส่วนนี้</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    onClick={() => (window.location.href = "/admin/blog")}
                    variant="outline"
                    className="rounded-xl"
                  >
                    จัดการบทความ
                  </Button>
                  <Button
                    onClick={() => (window.location.href = "/admin/categories")}
                    variant="outline"
                    className="rounded-xl"
                  >
                    จัดการหมวดหมู่
                  </Button>
                  <Button
                    onClick={() => (window.location.href = "/admin/media")}
                    variant="outline"
                    className="rounded-xl"
                  >
                    จัดการมีเดีย
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "users" && (
          <Card className="col-span-3 border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between pb-2 pt-6 px-6">
              <CardTitle className="text-lg font-medium">👥 จัดการผู้ใช้</CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <div className="text-center py-12">
                <Users className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-800 mb-2">จัดการผู้ใช้ทั้งหมด</h3>
                <p className="text-gray-500 max-w-md mx-auto mb-6">คุณสามารถจัดการผู้ใช้, บทบาท, และสิทธิ์การเข้าถึงได้จากส่วนนี้</p>
                <Button variant="outline" className="rounded-xl">
                  จัดการผู้ใช้
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "settings" && (
          <Card className="col-span-3 border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between pb-2 pt-6 px-6">
              <CardTitle className="text-lg font-medium">⚙️ ตั้งค่า</CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <div className="text-center py-12">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">ตั้งค่าระบบ</h3>
                <p className="text-gray-500 max-w-md mx-auto mb-6">คุณสามารถปรับแต่งการตั้งค่าต่างๆ ของระบบได้จากส่วนนี้</p>
                <Button
                  onClick={() => (window.location.href = "/admin/settings")}
                  variant="outline"
                  className="rounded-xl"
                >
                  ไปยังการตั้งค่า
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
