"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import {
  BarChart,
  LineChart,
  PieChart,
  Calendar,
  Download,
  TrendingUp,
  TrendingDown,
  Users,
  Eye,
  Clock,
  MousePointer,
  Globe,
  Smartphone,
  Tablet,
  Laptop,
} from "lucide-react"

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("30d")
  const [activeTab, setActiveTab] = useState("overview")

  // ข้อมูลตัวอย่างสำหรับสถิติ
  const stats = [
    {
      title: "ผู้เข้าชมทั้งหมด",
      value: "12,345",
      change: "+8.2%",
      trend: "up",
      icon: <Users className="h-8 w-8 text-[#0D8B9B]" />,
    },
    {
      title: "จำนวนการเข้าชมหน้า",
      value: "45,678",
      change: "+12.5%",
      trend: "up",
      icon: <Eye className="h-8 w-8 text-[#E84C1E]" />,
    },
    {
      title: "เวลาเฉลี่ยต่อเซสชัน",
      value: "2:35",
      change: "-3.1%",
      trend: "down",
      icon: <Clock className="h-8 w-8 text-[#FFCB4F]" />,
    },
    {
      title: "อัตราการตีกลับ",
      value: "42.3%",
      change: "-5.7%",
      trend: "down",
      icon: <MousePointer className="h-8 w-8 text-[#673AB7]" />,
    },
  ]

  // ข้อมูลตัวอย่างสำหรับบทความยอดนิยม
  const popularPosts = [
    {
      id: 1,
      title: "กระบวนการพัฒนา Visual Novel จากแนวคิดสู่การเผยแพร่",
      views: 1245,
      category: "Visual Novel",
      change: "+12%",
    },
    {
      id: 2,
      title: "เจาะลึก UI/UX ของโปรแกรม 3D Graphic Design ชั้นนำในปี 2024",
      views: 2389,
      category: "3D Design",
      change: "+8%",
    },
    {
      id: 3,
      title: "วิเคราะห์คู่แข่งในตลาด 3D Assets ปี 2023: Turbosquid, Sketchfab และ ACON",
      views: 1876,
      category: "Market Analysis",
      change: "+15%",
    },
    {
      id: 5,
      title: "การใช้ 3D Assets เพื่อเพิ่มประสิทธิภาพในการผลิต Webtoon",
      views: 1987,
      category: "Visual Novel",
      change: "+23%",
    },
    {
      id: 4,
      title: "Revenue Stream สำหรับธุรกิจ 3D Assets: กลยุทธ์การสร้างรายได้ที่ยั่งยืน",
      views: 1532,
      category: "Business Model",
      change: "+5%",
    },
  ]

  // ข้อมูลตัวอย่างสำหรับแหล่งที่มาของผู้เข้าชม
  const trafficSources = [
    { source: "Google", percentage: 45, value: 5543 },
    { source: "Direct", percentage: 25, value: 3086 },
    { source: "Social Media", percentage: 15, value: 1852 },
    { source: "Referral", percentage: 10, value: 1235 },
    { source: "Other", percentage: 5, value: 629 },
  ]

  // ข้อมูลตัวอย่างสำหรับอุปกรณ์ที่ใช้เข้าชม
  const devices = [
    { name: "Desktop", icon: <Laptop className="h-4 w-4" />, percentage: 55, value: 6790 },
    { name: "Mobile", icon: <Smartphone className="h-4 w-4" />, percentage: 35, value: 4321 },
    { name: "Tablet", icon: <Tablet className="h-4 w-4" />, percentage: 10, value: 1234 },
  ]

  // ข้อมูลตัวอย่างสำหรับประเทศของผู้เข้าชม
  const countries = [
    { name: "ไทย", code: "TH", value: 8765, percentage: 71 },
    { name: "สหรัฐอเมริกา", code: "US", value: 1234, percentage: 10 },
    { name: "ญี่ปุ่น", code: "JP", value: 987, percentage: 8 },
    { name: "สิงคโปร์", code: "SG", value: 654, percentage: 5 },
    { name: "อื่นๆ", code: "OT", value: 705, percentage: 6 },
  ]

  return (
    <div className="container mx-auto py-10 bg-white text-gray-900">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">วิเคราะห์</h1>
        <div className="flex items-center gap-4">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px] bg-white text-gray-800 border-gray-200">
              <SelectValue placeholder="เลือกช่วงเวลา" />
            </SelectTrigger>
            <SelectContent className="bg-white text-gray-800">
              <SelectItem value="7d">7 วันที่ผ่านมา</SelectItem>
              <SelectItem value="30d">30 วันที่ผ่านมา</SelectItem>
              <SelectItem value="90d">90 วันที่ผ่านมา</SelectItem>
              <SelectItem value="1y">1 ปีที่ผ่านมา</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            className="flex items-center gap-2 bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
          >
            <Download className="h-4 w-4" /> ดาวน์โหลดรายงาน
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-8 bg-gray-100">
          <TabsTrigger value="overview" className="data-[state=active]:bg-white data-[state=active]:text-gray-800">
            ภาพรวม
          </TabsTrigger>
          <TabsTrigger value="content" className="data-[state=active]:bg-white data-[state=active]:text-gray-800">
            เนื้อหา
          </TabsTrigger>
          <TabsTrigger value="audience" className="data-[state=active]:bg-white data-[state=active]:text-gray-800">
            ผู้ชม
          </TabsTrigger>
          <TabsTrigger value="behavior" className="data-[state=active]:bg-white data-[state=active]:text-gray-800">
            พฤติกรรม
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white border-gray-200">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">{stat.title}</CardTitle>
                  {stat.icon}
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <div className="flex items-center mt-1">
                    {stat.trend === "up" ? (
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                    )}
                    <p className={`text-xs ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                      {stat.change} จากช่วงก่อนหน้า
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-800">แนวโน้มผู้เข้าชม</CardTitle>
                <CardDescription className="text-gray-500">
                  จำนวนผู้เข้าชมในช่วง{" "}
                  {timeRange === "7d" ? "7 วัน" : timeRange === "30d" ? "30 วัน" : timeRange === "90d" ? "90 วัน" : "1 ปี"}
                  ที่ผ่านมา
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center">
                  <div className="text-center">
                    <LineChart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">กราฟแสดงแนวโน้มผู้เข้าชม</p>
                    <p className="text-sm text-gray-400 mt-1">ข้อมูลจะแสดงเมื่อเชื่อมต่อกับ Analytics API</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-800">แหล่งที่มาของผู้เข้าชม</CardTitle>
                <CardDescription className="text-gray-500">ช่องทางที่ผู้ใช้เข้าถึงเว็บไซต์</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center mb-6">
                  <div className="relative h-40 w-40">
                    <PieChart className="h-40 w-40 text-gray-300" />
                  </div>
                </div>
                <div className="space-y-4">
                  {trafficSources.map((source, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{
                            backgroundColor:
                              index === 0
                                ? "#0D8B9B"
                                : index === 1
                                  ? "#E84C1E"
                                  : index === 2
                                    ? "#FFCB4F"
                                    : index === 3
                                      ? "#673AB7"
                                      : "#607D8B",
                          }}
                        ></div>
                        <span className="text-sm text-gray-700">{source.source}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500">{source.value.toLocaleString()}</span>
                        <span className="text-sm font-medium w-12 text-right text-gray-700">{source.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2 bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-800">บทความยอดนิยม</CardTitle>
                <CardDescription className="text-gray-500">บทความที่มีผู้เข้าชมมากที่สุด</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {popularPosts.map((post, index) => (
                    <div key={post.id} className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-gray-400">{index + 1}</span>
                          <h3 className="font-medium line-clamp-1 text-gray-800">{post.title}</h3>
                        </div>
                        <div className="flex text-sm text-gray-500 mt-1 ml-6">
                          <span>{post.category}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 text-gray-400 mr-1" />
                          <span className="text-sm text-gray-700">{post.views.toLocaleString()}</span>
                        </div>
                        <div className="text-green-500 text-sm">{post.change}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-800">ปฏิทินกิจกรรม</CardTitle>
                <CardDescription className="text-gray-500">กิจกรรมผู้ใช้ตามวันที่</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center">
                  <div className="text-center">
                    <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">ปฏิทินแสดงกิจกรรมผู้ใช้</p>
                    <p className="text-sm text-gray-400 mt-1">ข้อมูลจะแสดงเมื่อเชื่อมต่อกับ Analytics API</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-800">ประสิทธิภาพตามหมวดหมู่</CardTitle>
                <CardDescription className="text-gray-500">จำนวนการเข้าชมแบ่งตามหมวดหมู่</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center">
                  <div className="text-center">
                    <BarChart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">กราฟแสดงประสิทธิภาพตามหมวดหมู่</p>
                    <p className="text-sm text-gray-400 mt-1">ข้อมูลจะแสดงเมื่อเชื่อมต่อกับ Analytics API</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-800">หน้าที่มีผู้เข้าชมมากที่สุด</CardTitle>
                <CardDescription className="text-gray-500">หน้าเว็บไซต์ที่มีผู้เข้าชมมากที่สุด</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center">
                  <div className="text-center">
                    <BarChart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">กราฟแสดงหน้าที่มีผู้เข้าชมมากที่สุด</p>
                    <p className="text-sm text-gray-400 mt-1">ข้อมูลจะแสดงเมื่อเชื่อมต่อกับ Analytics API</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="audience">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-800">อุปกรณ์ที่ใช้เข้าชม</CardTitle>
                <CardDescription className="text-gray-500">ประเภทอุปกรณ์ที่ผู้ใช้ใช้เข้าชมเว็บไซต์</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center mb-6">
                  <div className="relative h-40 w-40">
                    <PieChart className="h-40 w-40 text-gray-300" />
                  </div>
                </div>
                <div className="space-y-4">
                  {devices.map((device, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{
                            backgroundColor: index === 0 ? "#0D8B9B" : index === 1 ? "#E84C1E" : "#FFCB4F",
                          }}
                        ></div>
                        <div className="flex items-center gap-1 text-gray-700">
                          {device.icon}
                          <span className="text-sm ml-1">{device.name}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500">{device.value.toLocaleString()}</span>
                        <span className="text-sm font-medium w-12 text-right text-gray-700">{device.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-800">ประเทศของผู้เข้าชม</CardTitle>
                <CardDescription className="text-gray-500">ประเทศที่ผู้ใช้เข้าชมเว็บไซต์</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center mb-6">
                  <Globe className="h-40 w-40 text-gray-300" />
                </div>
                <div className="space-y-4">
                  {countries.map((country, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{
                            backgroundColor:
                              index === 0
                                ? "#0D8B9B"
                                : index === 1
                                  ? "#E84C1E"
                                  : index === 2
                                    ? "#FFCB4F"
                                    : index === 3
                                      ? "#673AB7"
                                      : "#607D8B",
                          }}
                        ></div>
                        <span className="text-sm text-gray-700">{country.name}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500">{country.value.toLocaleString()}</span>
                        <span className="text-sm font-medium w-12 text-right text-gray-700">{country.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="behavior">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-800">เส้นทางการเข้าชม</CardTitle>
                <CardDescription className="text-gray-500">เส้นทางที่ผู้ใช้เข้าชมเว็บไซต์</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center">
                  <div className="text-center">
                    <LineChart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">แผนภาพแสดงเส้นทางการเข้าชม</p>
                    <p className="text-sm text-gray-400 mt-1">ข้อมูลจะแสดงเมื่อเชื่อมต่อกับ Analytics API</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-800">เวลาเฉลี่ยในแต่ละหน้า</CardTitle>
                <CardDescription className="text-gray-500">เวลาเฉลี่ยที่ผู้ใช้ใช้ในแต่ละหน้า</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center">
                  <div className="text-center">
                    <BarChart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">กราฟแสดงเวลาเฉลี่ยในแต่ละหน้า</p>
                    <p className="text-sm text-gray-400 mt-1">ข้อมูลจะแสดงเมื่อเชื่อมต่อกับ Analytics API</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
