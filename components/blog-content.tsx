"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search, Calendar, User, ArrowRight, Clock, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function BlogContent() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [hoveredPost, setHoveredPost] = useState(null)
  const containerRef = useRef(null)

  // Mouse follower effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  // แก้ไขรายการหมวดหมู่ โดยลบ AI และ Digital Marketing ออก
  // Blog categories
  const categories = [
    { id: "all", name: "ทั้งหมด" },
    { id: "visual-novel", name: "Visual Novel" },
    { id: "3d-design", name: "3D Design" },
    { id: "market-analysis", name: "Market Analysis" },
    { id: "business-model", name: "Business Model" },
  ]

  // Featured blog posts
  const featuredPosts = [
    {
      id: 1,
      title: "กระบวนการพัฒนา Visual Novel จากแนวคิดสู่การเผยแพร่",
      excerpt: "เจาะลึกขั้นตอนการพัฒนา Visual Novel ตั้งแต่การเขียนบท การออกแบบตัวละคร ไปจนถึงการเผยแพร่บนแพลตฟอร์มต่างๆ",
      category: "visual-novel",
      categoryLabel: "Visual Novel",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gundog.jpg-8o7kE10SVcTf8jcRgAj298m1fLBvJD.jpeg",
      author: "ธนภัทร สนองญาติ",
      date: "15 มีนาคม 2024",
      readTime: "8 นาที",
      views: 1245,
      color: "#0D8B9B",
    },
    {
      id: 2,
      title: "เจาะลึก UI/UX ของโปรแกรม 3D Graphic Design ชั้นนำในปี 2024",
      excerpt: "วิเคราะห์การออกแบบ UI/UX ของโปรแกรม 3D ชั้นนำ เช่น Blender, Maya และ Cinema 4D พร้อมเปรียบเทียบจุดเด่นและจุดด้อย",
      category: "3d-design",
      categoryLabel: "3D Design",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e158f86b549e49a892955581355066f2-x10SooefqyAKqPXXdEvIk8kCy9trcA.jpeg",
      author: "สุทัสสา สานันท์",
      date: "2 เมษายน 2024",
      readTime: "12 นาที",
      views: 2389,
      color: "#E84C1E",
    },
    {
      id: 3,
      title: "วิเคราะห์คู่แข่งในตลาด 3D Assets ปี 2023: Turbosquid, Sketchfab และ ACON",
      excerpt: "บทวิเคราะห์เชิงลึกเกี่ยวกับผู้เล่นหลักในตลาด 3D Assets พร้อมข้อมูลส่วนแบ่งตลาด กลยุทธ์ และแนวโน้มในอนาคต",
      category: "market-analysis",
      categoryLabel: "Market Analysis",
      imageUrl: "/images/market-analysis-chart.webp",
      author: "ชานน ธนะกิจรุ่งเรือง",
      date: "18 กุมภาพันธ์ 2024",
      readTime: "10 นาที",
      views: 1876,
      color: "#FFCB4F",
    },
  ]

  // Regular blog posts
  const blogPosts = [
    {
      id: 4,
      title: "Revenue Stream สำหรับธุรกิจ 3D Assets: กลยุทธ์การสร้างรายได้ที่ยั่งยืน",
      excerpt: "แนวทางการสร้างรายได้สำหรับธุรกิจ 3D Assets ทั้งการขายแบบรายชิ้น การรับงาน Custom และระบบ Subscription",
      category: "business-model",
      categoryLabel: "Business Model",
      imageUrl: "/images/business-model-canvas.webp",
      author: "สุทัสสา สานันท์",
      date: "5 มีนาคม 2024",
      readTime: "7 นาที",
      views: 1532,
      color: "#0D8B9B",
      tags: ["Business Model", "Revenue Stream", "3D Assets", "Subscription Model"],
    },
    {
      id: 5,
      title: "การใช้ 3D Assets เพื่อเพิ่มประสิทธิภาพในการผลิต Webtoon",
      excerpt: "วิธีการนำ 3D Assets มาประยุกต์ใช้ในการผลิต Webtoon เพื่อลดเวลาและต้นทุน พร้อมเทคนิคการปรับแต่งให้กลมกลืนกับสไตล์การวาด",
      category: "visual-novel",
      categoryLabel: "Visual Novel",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gundog.jpg-8o7kE10SVcTf8jcRgAj298m1fLBvJD.jpeg",
      author: "ธนภัทร สนองญาติ",
      date: "22 มีนาคม 2024",
      readTime: "9 นาที",
      views: 1987,
      color: "#E84C1E",
      tags: ["Visual Novel", "3D Assets", "Webtoon", "Production Efficiency"],
    },
    {
      id: 6,
      title: "เทคนิคการสร้าง 3D Model แบบ Diorama สำหรับ Webtoon",
      excerpt: "คู่มือขั้นตอนการสร้าง 3D Model แบบ Diorama ที่เหมาะสำหรับการนำไปใช้ในการผลิต Webtoon พร้อมเทคนิคการจัดแสงและมุมกล้อง",
      category: "3d-design",
      categoryLabel: "3D Design",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e158f86b549e49a892955581355066f2-x10SooefqyAKqPXXdEvIk8kCy9trcA.jpeg",
      author: "ชานน ธนะกิจรุ่งเรือง",
      date: "10 เมษายน 2024",
      readTime: "11 นาที",
      views: 1654,
      color: "#FFCB4F",
      tags: ["3D Design", "Diorama", "Webtoon", "Lighting Techniques"],
    },
    {
      id: 7,
      title: "การกำหนดราคา 3D Assets: กลยุทธ์และปัจจัยที่ควรพิจารณา",
      excerpt: "แนวทางการกำหนดราคา 3D Assets ให้เหมาะสมกับตลาดและคุณภาพของผลงาน พร้อมวิเคราะห์ปัจจัยที่มีผลต่อการตัดสินใจซื้อของลูกค้า",
      category: "business-model",
      categoryLabel: "Business Model",
      imageUrl: "/images/business-model-canvas.webp",
      author: "สุทัสสา สานันท์",
      date: "28 กุมภาพันธ์ 2024",
      readTime: "8 นาที",
      views: 1432,
      color: "#0D8B9B",
      tags: ["Pricing Strategy", "3D Assets", "Market Value", "Customer Behavior"],
    },
    {
      id: 8,
      title: "เปรียบเทียบแพลตฟอร์มจำหน่าย 3D Assets: ข้อดีและข้อเสีย",
      excerpt: "วิเคราะห์เปรียบเทียบแพลตฟอร์มจำหน่าย 3D Assets ชั้นนำ ทั้งในแง่ของค่าธรรมเนียม การเข้าถึงลูกค้า และฟีเจอร์ต่างๆ",
      category: "market-analysis",
      categoryLabel: "Market Analysis",
      imageUrl: "/images/market-analysis-chart.webp",
      author: "ชานน ธนะกิจรุ่งเรือง",
      date: "15 มกราคม 2024",
      readTime: "10 นาที",
      views: 2145,
      color: "#E84C1E",
      tags: ["3D Assets", "Market Analysis", "Platforms Comparison", "Digital Marketplace"],
    },
    {
      id: 11,
      title: "แนวโน้มของตลาด 3D Assets ในปี 2024-2025",
      excerpt: "วิเคราะห์แนวโน้มของตลาด 3D Assets ในปี 2024-2025 ทั้งในแง่ของเทคโนโลยี ความต้องการของตลาด และโอกาสทางธุรกิจ",
      category: "market-analysis",
      categoryLabel: "Market Analysis",
      imageUrl: "/images/market-analysis-chart.webp",
      author: "ชานน ธนะกิจรุ่งเรือง",
      date: "2 กุมภาพันธ์ 2024",
      readTime: "11 นาที",
      views: 2345,
      color: "#FFCB4F",
      tags: ["Market Trends", "3D Assets", "Future Technology", "Business Opportunities"],
    },
    {
      id: 12,
      title: "การสร้าง Portfolio ที่โดดเด่นสำหรับนัก 3D Artist",
      excerpt: "แนวทางการสร้าง Portfolio ที่โดดเด่นสำหรับนัก 3D Artist เพื่อดึงดูดลูกค้าและสร้างโอกาสทางอาชีพ",
      category: "3d-design",
      categoryLabel: "3D Design",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e158f86b549e49a892955581355066f2-x10SooefqyAKqPXXdEvIk8kCy9trcA.jpeg",
      author: "อรรถพล แสงเพชร",
      date: "25 มีนาคม 2024",
      readTime: "8 นาที",
      views: 1987,
      color: "#E84C1E",
      tags: ["Portfolio", "3D Artist", "Career Development", "Personal Branding"],
    },
  ]

  // แปลงวันที่จากรูปแบบไทยเป็น Date object สำหรับการเรียงลำดับ
  const parseThaiDate = (dateStr) => {
    const months = {
      มกราคม: 0,
      กุมภาพันธ์: 1,
      มีนาคม: 2,
      เมษายน: 3,
      พฤษภาคม: 4,
      มิถุนายน: 5,
      กรกฎาคม: 6,
      สิงหาคม: 7,
      กันยายน: 8,
      ตุลาคม: 9,
      พฤศจิกายน: 10,
      ธันวาคม: 11,
    }

    const parts = dateStr.split(" ")
    const day = Number.parseInt(parts[0])
    const month = months[parts[1]]
    const year = Number.parseInt(parts[2]) - 543 // แปลงจากพ.ศ. เป็น ค.ศ.

    return new Date(year, month, day)
  }

  // Filter posts based on active category and search term, then sort by date
  const filteredPosts = blogPosts
    .filter((post) => activeCategory === "all" || post.category === activeCategory)
    .filter((post) => {
      if (!searchTerm) return true
      const searchLower = searchTerm.toLowerCase()
      return (
        post.title.toLowerCase().includes(searchLower) ||
        post.excerpt.toLowerCase().includes(searchLower) ||
        post.author.toLowerCase().includes(searchLower) ||
        (post.tags && post.tags.some((tag) => tag.toLowerCase().includes(searchLower)))
      )
    })
    // เรียงลำดับตามวันที่ล่าสุด
    .sort((a, b) => parseThaiDate(b.date) - parseThaiDate(a.date))

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent opacity-90"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-[#0D8B9B]/30 via-[#E84C1E]/30 to-[#FFCB4F]/30 blur-[100px] animate-pulse-slow"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <motion.div
            className="flex flex-col items-center text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-[#FFCB4F]/20 text-[#FFCB4F] text-sm font-medium">
                บล็อก
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                บทความและ<span className="text-[#E84C1E]">ความรู้</span>จาก ManyPixels
              </h1>
              <p className="text-lg text-gray-300">
                เจาะลึกเทคโนโลยี เทรนด์ และเทคนิคล่าสุดในวงการดิจิทัล ทั้ง Visual Novel, 3D Design และการวิเคราะห์ตลาด
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Categories Section */}
      <section className="py-10 bg-zinc-900 border-b border-zinc-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="ค้นหาบทความ..."
                className="pl-10 bg-zinc-800 border-zinc-700 text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") {
                    setSearchTerm("")
                  }
                }}
              />
              {searchTerm && (
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                  onClick={() => setSearchTerm("")}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-20 relative" ref={containerRef}>
        {/* Animated background gradient */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-[400px] h-[400px] rounded-full blur-[80px] opacity-20"
            style={{
              background: "linear-gradient(to right, #0D8B9B, #E84C1E, #FFCB4F)",
              left: `${mousePosition.x - 200}px`,
              top: `${mousePosition.y - 200}px`,
              transition: "left 0.5s ease-out, top 0.5s ease-out",
            }}
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-100">บทความแนะนำ</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <FeaturedPostCard
                key={post.id}
                post={post}
                index={index}
                isHovered={hoveredPost === post.id}
                onHover={() => setHoveredPost(post.id)}
                onLeave={() => setHoveredPost(null)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Stream Section */}
      <section className="py-20 bg-zinc-900 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Revenue Stream</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              แนวทางการสร้างรายได้สำหรับธุรกิจ 3D Assets ที่หลากหลายและยั่งยืน
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. 3D Model and Assets */}
            <div className="bg-[#0D8B9B] rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">1. 3D Model and Assets</h3>
                <div className="bg-white/10 p-6 rounded-lg">
                  <p className="text-white text-center mb-2">สินค้า 3D Model ราคาเริ่มต้นชิ้นละ</p>
                  <p className="text-4xl font-bold text-white text-center mb-2">50 THB - 300 THB</p>
                </div>
              </div>
            </div>

            {/* 2. Custom Order Assets */}
            <div className="bg-[#0D8B9B] rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">2. Custom Order Assets</h3>
                <div className="bg-white/10 p-6 rounded-lg">
                  <p className="text-white text-center mb-2">รับจัดทำ 3D Model แบบ Diorama สำหรับจัดทำสื่อ Webtoon เริ่มต้นที่</p>
                  <p className="text-4xl font-bold text-white text-center mb-2">1500 THB</p>
                </div>
              </div>
            </div>

            {/* 3. Subscription */}
            <div className="bg-[#0D8B9B] rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">3. Subscription</h3>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  {/* LITE */}
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="text-white text-center font-bold mb-2">LITE</h4>
                    <p className="text-3xl font-bold text-white text-center mb-2">150 THB</p>
                    <ul className="text-white text-sm space-y-2">
                      <li>• สิทธิใช้งาน Web application ด้วยฟีเจอร์พื้นฐาน</li>
                      <li>• สินค้าราคาพิเศษเฉพาะสมาชิก</li>
                      <li>• การติดตามสถานะการสั่งซื้อ</li>
                    </ul>
                  </div>

                  {/* PLUS */}
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="text-white text-center font-bold mb-2">PLUS</h4>
                    <p className="text-3xl font-bold text-white text-center mb-2">300 THB</p>
                    <ul className="text-white text-sm space-y-2">
                      <li>• สิทธิใช้งาน Web application ด้วยฟีเจอร์ขั้นสูง</li>
                      <li>• สินค้าราคาพิเศษและส่วนลดพิเศษ</li>
                      <li>• การติดตั้งโลโก้ตามที่ต้องการ</li>
                    </ul>
                  </div>
                </div>

                {/* Enterprise User */}
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="text-white text-center font-bold mb-2">Enterprise User</h4>
                  <p className="text-3xl font-bold text-white text-center mb-2">เริ่มต้น 1500 THB</p>
                  <ul className="text-white text-sm space-y-2">
                    <li>• Subscription ในราคาพิเศษ (เริ่มต้นที่ขั้นต่ำ 10 ผู้ใช้งาน)</li>
                    <li>• สิทธิใช้งาน Web application ด้วยฟีเจอร์ขั้นสูง</li>
                    <li>• สินค้าราคาพิเศษสำหรับองค์กรขนาดใหญ่</li>
                    <li>• ทำแบรนด์การออกแบบ จัดการพื้นที่หลัง</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              className="rounded-full bg-[#0D8B9B] hover:bg-[#0D8B9B]/80 group relative overflow-hidden"
              size="lg"
              onClick={() => (window.location.href = "/contact")}
            >
              <span className="relative z-10 flex items-center justify-center gap-1">
                ดูรายละเอียดเพิ่มเติม <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(to right, #0D8B9B, rgba(255,255,255,0.2), #0D8B9B)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 2s infinite",
                }}
              />
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white">บทความล่าสุด</h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              บทความที่เพิ่งเผยแพร่ล่าสุดจากทีม ManyPixels เรียงตามวันที่เผยแพร่
            </p>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-1.5 rounded-full text-sm transition-all ${
                  activeCategory === category.id
                    ? "bg-[#0D8B9B] text-white font-medium"
                    : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Search Results Info */}
          {searchTerm && (
            <div className="text-center mb-8">
              <p className="text-gray-400">
                ผลการค้นหาสำหรับ <span className="text-white font-medium">"{searchTerm}"</span>
              </p>
            </div>
          )}

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <BlogPostCard
                  key={post.id}
                  post={post}
                  index={index}
                  isHovered={hoveredPost === post.id}
                  onHover={() => setHoveredPost(post.id)}
                  onLeave={() => setHoveredPost(null)}
                />
              ))
            ) : (
              <div className="col-span-3 text-center py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-800 mb-4">
                  <Search className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="text-xl font-medium text-white mb-2">ไม่พบบทความ</h3>
                <p className="text-gray-400 max-w-md mx-auto">
                  {searchTerm
                    ? `ไม่พบบทความที่ตรงกับคำค้นหา "${searchTerm}" ในหมวดหมู่ ${
                        categories.find((c) => c.id === activeCategory)?.name || "ที่เลือก"
                      }`
                    : `ไม่พบบทความในหมวดหมู่ ${categories.find((c) => c.id === activeCategory)?.name || "ที่เลือก"}`}
                </p>
                <button
                  onClick={() => {
                    setActiveCategory("all")
                    setSearchTerm("")
                  }}
                  className="mt-4 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-md text-white text-sm transition-colors"
                >
                  ดูบทความทั้งหมด
                </button>
              </div>
            )}
          </div>

          {/* Pagination (if needed) */}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-[#0D8B9B] to-[#0D8B9B]/70 text-white relative overflow-hidden">
        {/* Animated particles */}
        <div className="absolute inset-0">
          <div className="relative w-full h-full overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white opacity-20"
                style={{
                  width: `${Math.random() * 2 + 1}px`,
                  height: `${Math.random() * 100 + 50}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 10 + 10}s`,
                  animation: `float-vertical ${Math.random() * 10 + 15}s linear infinite`,
                }}
              />
            ))}
            {[...Array(10)].map((_, i) => (
              <div
                key={i + 100}
                className="absolute bg-white opacity-10"
                style={{
                  width: `${Math.random() * 150 + 50}px`,
                  height: `${Math.random() * 2 + 1}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 10 + 10}s`,
                  animation: `float-horizontal ${Math.random() * 10 + 20}s linear infinite`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">รับข่าวสารและบทความใหม่ๆ</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              สมัครรับจดหมายข่าวเพื่อรับบทความ เทคนิค และข่าวสารล่าสุดเกี่ยวกับ Visual Novel และ 3D Design
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="อีเมลของคุณ"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-full"
              />
              <Button
                className="rounded-full bg-white text-[#0D8B9B] hover:bg-white/90"
                onClick={() => (window.location.href = "/contact")}
              >
                สมัครรับข่าวสาร
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

// Component for featured post cards
function FeaturedPostCard({ post, index, isHovered, onHover, onLeave }) {
  return (
    <motion.div
      className="group relative h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Glow effect */}
      <div
        className={`absolute -inset-0.5 rounded-2xl ${
          isHovered ? "opacity-70" : "opacity-0"
        } transition-opacity duration-300`}
        style={{
          background: `linear-gradient(to bottom right, ${post.color}, transparent)`,
          filter: "blur(6px)",
        }}
      />

      <div className="relative flex flex-col h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={post.imageUrl || "/placeholder.svg"}
            alt={post.title}
            width={800}
            height={600}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span
              className="px-3 py-1 rounded-full text-xs font-medium text-white"
              style={{ backgroundColor: post.color }}
            >
              {post.categoryLabel}
            </span>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-3 text-gray-100 group-hover:text-[#FFCB4F] transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

          <div className="flex items-center text-xs text-gray-500 mt-auto">
            <div className="flex items-center gap-1 mr-4">
              <User className="h-3 w-3" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1 mr-4">
              <Calendar className="h-3 w-3" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1 mr-4">
              <Clock className="h-3 w-3" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              <span>{post.views}</span>
            </div>
          </div>
        </div>

        <div className="px-6 pb-6">
          <Link
            href={`/blog/${post.id}`}
            className="text-[#0D8B9B] hover:text-[#0D8B9B]/80 inline-flex items-center text-sm font-medium group"
          >
            อ่านเพิ่มเติม <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

// Component for regular blog post cards
function BlogPostCard({ post, index, isHovered, onHover, onLeave }) {
  return (
    <motion.div
      className="group relative h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Glow effect */}
      <div
        className={`absolute -inset-0.5 rounded-2xl ${
          isHovered ? "opacity-50" : "opacity-0"
        } transition-opacity duration-300`}
        style={{
          background: `linear-gradient(to bottom right, ${post.color}, transparent)`,
          filter: "blur(6px)",
        }}
      />

      <div className="relative flex flex-col h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={post.imageUrl || "/placeholder.svg"}
            alt={post.title}
            width={600}
            height={400}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span
              className="px-3 py-1 rounded-full text-xs font-medium text-white"
              style={{ backgroundColor: post.color }}
            >
              {post.categoryLabel}
            </span>
          </div>
        </div>

        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-lg font-bold mb-2 text-gray-100 group-hover:text-[#FFCB4F] transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-gray-400 text-sm mb-3 line-clamp-3">{post.excerpt}</p>

          <div className="flex items-center text-xs text-gray-500 mt-auto">
            <div className="flex items-center gap-1 mr-3">
              <User className="h-3 w-3" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1 mr-3">
              <Calendar className="h-3 w-3" />
              <span className="text-[#FFCB4F]">{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        <div className="px-5 pb-5">
          <Link
            href={`/blog/${post.id}`}
            className="text-[#0D8B9B] hover:text-[#0D8B9B]/80 inline-flex items-center text-sm font-medium group"
          >
            อ่านเพิ่มเติม <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
