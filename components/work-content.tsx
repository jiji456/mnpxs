"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WorkContent() {
  const [filter, setFilter] = useState("all")
  const [hoveredPortfolio, setHoveredPortfolio] = useState(null)
  const [hoveredProduct, setHoveredProduct] = useState(null)
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

  // ข้อมูลตัวอย่างสำหรับผลงาน (จะแทนที่ด้วยข้อมูลจริงภายหลัง)
  const portfolioItems = [
    {
      id: 1,
      title: "แอปพลิเคชันสื่อการเรียนรู้บนสมาร์ทโฟน TEENSMART",
      description: "แอปพลิเคชันสำหรับวัยรุ่นที่ช่วยให้ความรู้เรื่องเพศศึกษาและความสัมพันธ์ในวัยรุ่นอย่างเหมาะสม",
      category: "แอปพลิเคชันมือถือ",
      imageUrl: "/images/teensmart-app.png",
      technologies: ["React Native", "Firebase", "UI/UX Design"],
      link: "#",
      color: "#0D8B9B",
    },
    {
      id: 2,
      title: "LINE Official & Mini App ของ TEENSMART",
      description: "แพลตฟอร์มให้คำปรึกษาและความรู้เรื่องเพศศึกษาผ่าน LINE Official Account และ LINE Mini App ที่เข้าถึงกลุ่มวัยรุ่นได้ง่าย",
      category: "แอปพลิเคชันมือถือ",
      imageUrl: "/images/teensmart-line.png",
      technologies: ["LINE Front-end Framework", "Node.js", "LINE Messaging API"],
      link: "#",
      color: "#E84C1E",
    },
    {
      id: 3,
      title: "เว็บไซต์สอนภาษาอังกฤษเบื้องต้น English for Local Entrepreneur",
      description: "แพลตฟอร์มการเรียนรู้ออนไลน์สำหรับผู้ประกอบการท้องถิ่นที่ต้องการพัฒนาทักษะภาษาอังกฤษเพื่อธุรกิจ",
      category: "เว็บไซต์",
      imageUrl: "/images/english-for-entrepreneur.png",
      technologies: ["React", "Next.js", "Tailwind CSS", "MongoDB"],
      link: "#",
      color: "#FFCB4F",
    },
    {
      id: 4,
      title: "เว็บไซต์ประเมินอาการการสัมผัสฝุ่นละออง",
      description:
        "เว็บแอปพลิเคชันสำหรับประเมินอาการจากการรับสัมผัสฝุ่นละอองและพฤติกรรมการป้องกัน พร้อมระบบแผนที่แสดงตำแหน่งและการรายงานผล",
      category: "เว็บแอปพลิเคชัน",
      imageUrl: "/images/dust-assessment-website.png",
      technologies: ["React", "Leaflet Maps", "Node.js", "MongoDB"],
      link: "#",
      color: "#0D8B9B",
    },
    {
      id: 5,
      title: "เว็บไซต์ขายอัญมณีและเครื่องราง",
      description: "เว็บไซต์อีคอมเมิร์ซสำหรับร้านขายอัญมณีและเครื่องรางพกพา พร้อมระบบประเมินสินค้าและการรับรองคุณภาพจากสถาบันที่น่าเชื่อถือ",
      category: "เว็บไซต์",
      imageUrl: "/images/gemstone-websites.png",
      technologies: ["WordPress", "WooCommerce", "Custom Theme", "Payment Gateway"],
      link: "#",
      color: "#E84C1E",
    },
  ]

  // ข้อมูลตัวอย่างสำหรับผลิตภัณฑ์ (จะแทนที่ด้วยข้อมูลจริงภายหลัง)
  const productItems = [
    {
      id: 1,
      title: "ASSEZTECH - เทคโนโลยีสำหรับนักวาด",
      description:
        "แพลตฟอร์มให้บริการ 3D Asset สำหรับนักวาด เพื่อผลิตสื่อการ์ตูน Webtoon ที่ช่วยให้นักวาดสามารถสร้างผลงานได้รวดเร็วและมีคุณภาพมากขึ้น",
      imageUrl: "/images/asseztech-logo.png",
      logoOnly: true,
      screenshotUrl: "/images/asseztech-website-screenshot.png",
      features: [
        "คลัง 3D Asset คุณภาพสูงสำหรับนักวาด",
        "เครื่องมือปรับแต่ง 3D Model ที่ใช้งานง่าย",
        "ระบบนำเข้า-ส่งออกไฟล์ที่รองรับหลากหลายฟอร์แมต",
        "ชุมชนนักวาดและนักพัฒนา",
      ],
      link: "#",
      color: "#0D8B9B",
    },
    {
      id: 2,
      title: "ดูแลกัน - แอปพลิเคชันสำหรับดูแลผู้ป่วย NCDs",
      description: "แอปพลิเคชันที่ออกแบบให้ใช้งานง่ายสำหรับทุกคน ทั้งตัวผู้ป่วยและผู้ดูแล เพื่อช่วยจัดการสุขภาพอย่างมีประสิทธิภาพในวิจัยระดับ TRL 3",
      imageUrl: "/images/dulagun-logo.png",
      logoOnly: true,
      screenshotUrl: "/images/dulagun-app.png",
      features: [
        "ระบบติดตามสุขภาพและอาการของผู้ป่วย",
        "การแจ้งเตือนการทานยาและนัดหมายแพทย์",
        "การเชื่อมต่อระหว่างผู้ป่วยและผู้ดูแล",
        "รายงานสุขภาพที่เข้าใจง่ายและแบ่งปันกับแพทย์ได้",
      ],
      link: "#",
      color: "#E84C1E",
    },
  ]

  const filteredPortfolio =
    filter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === filter)

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
              <div className="inline-block px-3 py-1 rounded-full bg-[#E84C1E]/20 text-[#E84C1E] text-sm font-medium">
                ผลงานของเรา
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                ผลงาน<span className="text-[#FFCB4F]">คุณภาพ</span>จาก ManyPixels
              </h1>
              <p className="text-lg text-gray-300">
                เราภูมิใจนำเสนอผลงานที่เราได้ร่วมสร้างสรรค์กับลูกค้าของเรา ด้วยความใส่ใจในทุกรายละเอียดและการออกแบบที่ตอบโจทย์ความต้องการ
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-zinc-900 relative" ref={containerRef}>
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
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ผลงานที่ผ่านมา</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              ผลงานที่เราภูมิใจนำเสนอ ซึ่งแสดงถึงความเชี่ยวชาญและความคิดสร้างสรรค์ของทีมเรา
            </p>

            {/* Filter Tabs */}
            <div className="mb-12">
              <motion.div
                className="inline-flex bg-zinc-800/50 backdrop-blur-sm rounded-full p-1 mb-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <button
                  onClick={() => setFilter("all")}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === "all" ? "bg-[#0D8B9B] text-white" : "text-gray-300 hover:text-white"}`}
                >
                  ทั้งหมด
                </button>
                <button
                  onClick={() => setFilter("เว็บไซต์")}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === "เว็บไซต์" ? "bg-[#0D8B9B] text-white" : "text-gray-300 hover:text-white"}`}
                >
                  เว็บไซต์
                </button>
                <button
                  onClick={() => setFilter("เว็บแอปพลิเคชัน")}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === "เว็บแอปพลิเคชัน" ? "bg-[#0D8B9B] text-white" : "text-gray-300 hover:text-white"}`}
                >
                  เว็บแอป
                </button>
                <button
                  onClick={() => setFilter("แอปพลิเคชันมือถือ")}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === "แอปพลิเคชันมือถือ" ? "bg-[#0D8B9B] text-white" : "text-gray-300 hover:text-white"}`}
                >
                  แอปมือถือ
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPortfolio.map((item, index) => (
              <PortfolioCard
                key={item.id}
                item={item}
                index={index}
                isHovered={hoveredPortfolio === item.id}
                onHover={() => setHoveredPortfolio(item.id)}
                onLeave={() => setHoveredPortfolio(null)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 relative">
        {/* แก้ไขเอฟเฟกต์ในส่วน Products Section เป็นเอฟเฟกต์แสงสี */}
        <div className="absolute inset-0 overflow-hidden">
          {/* เอฟเฟกต์จุดแสงสีที่เคลื่อนไหว */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 150 + 50}px`,
                height: `${Math.random() * 150 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${
                  [
                    "rgba(13, 139, 155, 0.15)",
                    "rgba(232, 76, 30, 0.15)",
                    "rgba(255, 203, 79, 0.15)",
                    "rgba(138, 43, 226, 0.15)",
                    "rgba(0, 191, 255, 0.15)",
                  ][Math.floor(Math.random() * 5)]
                } 0%, transparent 70%)`,
                filter: "blur(8px)",
                opacity: 0.6,
                transform: "translate(-50%, -50%)",
                animation: `float ${Math.random() * 10 + 15}s ease-in-out infinite alternate`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}

          {/* เอฟเฟกต์ลำแสงที่เคลื่อนไหว */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i + 100}
              className="absolute"
              style={{
                width: "100%",
                height: "2px",
                left: "0",
                top: `${20 + i * 15}%`,
                background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
                opacity: 0.3,
                animation: `shimmer ${Math.random() * 5 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ผลิตภัณฑ์ของเรา</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              นอกจากบริการออกแบบและพัฒนาตามความต้องการ เรายังมีผลิตภัณฑ์สำเร็จรูปที่พร้อมใช้งานสำหรับธุรกิจของคุณ
            </p>
          </motion.div>

          {/* Products */}
          <div className="grid md:grid-cols-2 gap-16">
            {productItems.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                isHovered={hoveredProduct === product.id}
                onHover={() => setHoveredProduct(product.id)}
                onLeave={() => setHoveredProduct(null)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">พร้อมที่จะเริ่มโปรเจคกับเรา?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              ติดต่อเราวันนี้เพื่อปรึกษาเกี่ยวกับโปรเจคของคุณและดูว่าเราจะช่วยคุณได้อย่างไร
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="rounded-full bg-white text-[#0D8B9B] hover:bg-white/90 group relative overflow-hidden"
                onClick={() => (window.location.href = "/contact")}
              >
                <span className="relative z-10 flex items-center justify-center gap-1">
                  ติดต่อเรา <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(to right, white, rgba(0,0,0,0.1), white)",
                    backgroundSize: "200% 100%",
                    animation: "shimmer 2s infinite",
                  }}
                />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10 rounded-full"
                onClick={() => (window.location.href = "/pricing")}
              >
                ดูบริการของเรา
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

// Component for portfolio cards
function PortfolioCard({ item, index, isHovered, onHover, onLeave }) {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="relative">
        <div className="relative overflow-hidden rounded-2xl mb-4">
          <Image
            src={item.imageUrl || "/placeholder.svg"}
            alt={item.title}
            width={800}
            height={600}
            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#0D8B9B]/80 text-white">
              {item.category}
            </span>
            <Link href={item.link} className="text-white hover:text-[#FFCB4F] transition-colors">
              <ExternalLink className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#FFCB4F] transition-colors">{item.title}</h3>
        <p className="text-gray-400 mb-4 text-sm">{item.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {item.technologies.map((tech, index) => (
            <span key={index} className="text-xs px-3 py-1 rounded-full bg-zinc-800/50 text-gray-300">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// แก้ไขส่วน ProductCard component เพื่อเอาเอฟเฟกต์กรอบออก คงไว้แค่เอฟเฟกต์พื้นหลัง

function ProductCard({ product, index, isHovered, onHover, onLeave }) {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* ลบเอฟเฟกต์กรอบออก - เหลือแค่เอฟเฟกต์พื้นหลังที่มีอยู่แล้วในส่วน Products Section */}

      <div className="relative">
        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Logo and Screenshot Section */}
          <div className="relative md:col-span-3 mt-8">
            {product.logoOnly ? (
              <div className="rounded-2xl overflow-hidden bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 transition-all duration-300 hover:border-[#0D8B9B]/50">
                <div className="bg-white p-8 flex items-center justify-center h-64">
                  <Image
                    src={product.imageUrl || "/placeholder.svg"}
                    alt={product.title}
                    width={600}
                    height={200}
                    className="w-auto h-auto max-h-48 object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* If there's a screenshot for products with logos, show it below */}
                {product.screenshotUrl && (
                  <div className="bg-white pt-0 pb-8 px-8">
                    <Image
                      src={product.screenshotUrl || "/placeholder.svg"}
                      alt={`${product.title} screenshot`}
                      width={1200}
                      height={800}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                )}
              </div>
            ) : (
              <div className="rounded-2xl overflow-hidden bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 transition-all duration-300 hover:border-[#0D8B9B]/50">
                <Image
                  src={product.imageUrl || "/placeholder.svg"}
                  alt={product.title}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            )}
          </div>

          <div className="flex flex-col md:col-span-2 pt-0">
            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#FFCB4F] transition-colors">
              {product.title}
            </h3>
            <p className="text-gray-400 mb-6">{product.description}</p>

            <ul className="space-y-3 mb-6">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#FFCB4F] mr-2 text-lg">•</span>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent w-full my-16 opacity-50"></div>
      </div>
    </motion.div>
  )
}
