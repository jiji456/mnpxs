"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Star, Zap, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import PortfolioShowcase from "./portfolio-showcase"

export default function HomePage() {
  const [hoveredService, setHoveredService] = useState(null)
  const [hoveredPricing, setHoveredPricing] = useState(null)
  const containerRef = useRef(null)
  const logoContainerRef = useRef(null)

  // Mouse follower effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [logoMousePosition, setLogoMousePosition] = useState({ x: 0, y: 0 })

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

  useEffect(() => {
    const handleLogoMouseMove = (e) => {
      if (logoContainerRef.current) {
        const rect = logoContainerRef.current.getBoundingClientRect()
        setLogoMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    const logoContainer = logoContainerRef.current
    if (logoContainer) {
      logoContainer.addEventListener("mousemove", handleLogoMouseMove)
    }

    return () => {
      if (logoContainer) {
        logoContainer.removeEventListener("mousemove", handleLogoMouseMove)
      }
    }
  }, [])

  // Services data
  const services = [
    {
      id: 1,
      title: "เว็บไซต์ WordPress",
      icon: "🌐",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WordPress-Website-1-JKKUoOsduv6S0QJd6wyL6F3nt1lMAd.png",
      color: "#0D8B9B",
      description: "พัฒนาเว็บไซต์ด้วย WordPress ที่ปรับแต่งได้ตามต้องการ ใช้งานง่าย และรองรับการแสดงผลบนทุกอุปกรณ์",
    },
    {
      id: 2,
      title: "เว็บแอปพลิเคชัน",
      icon: "💻",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6687b270adb032fc86c8ea6b_testing-web-apps-on-right-devices-guide-main-DQzbZ9YcyyvKAVqADrdTkGebHSpo5v.webp",
      color: "#E84C1E",
      description: "พัฒนาเว็บแอปพลิเคชันที่ตอบโจทย์ความต้องการทางธุรกิจ ด้วยเทคโนโลยีล่าสุดและการออกแบบที่ทันสมัย",
    },
    {
      id: 3,
      title: "แอปพลิเคชันมือถือ",
      icon: "📱",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b2.jpg-PE0KjHTfdEobV0WJPIjUzL2ahfpNlN.jpeg",
      color: "#FFCB4F",
      description: "พัฒนาแอปพลิเคชันมือถือทั้ง iOS และ Android ที่มีประสิทธิภาพสูง ใช้งานง่าย และตอบโจทย์ผู้ใช้",
    },
    {
      id: 4,
      title: "ออกแบบ UX/UI",
      icon: "🎨",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/117327d256e5a3118bc997ddd7884ce749574741-721x361-1-6arOW3cf3AoW2t1d5XwmlM5jFARLV4.webp",
      color: "#0D8B9B",
      description: "ออกแบบประสบการณ์ผู้ใช้และส่วนต่อประสานที่สวยงาม ใช้งานง่าย และตอบโจทย์ความต้องการของผู้ใช้",
    },
  ]

  // Pricing data
  const pricingPlans = [
    {
      id: 1,
      number: "1",
      title: "Landing Page",
      price: "฿3,500",
      description: "เว็บไซต์พื้นฐาน เหมาะสำหรับแนะนำสินค้า บริษัท หน่วยงาน ร้านค้าที่ไม่จำเป็นต้องแก้ไขข้อมูลบ่อยครั้ง",
      imageUrl: "/placeholder.svg?height=200&width=300",
      color: "#0D8B9B",
      icon: <Star className="h-5 w-5" />,
    },
    {
      id: 2,
      title: "WordPress Website",
      price: "฿5,500",
      description: "เว็บไซต์มาตรฐานสากล สำหรับเว็บไซต์ที่มีการเปลี่ยนแปลงหรือเพิ่มเนื้อหาเรื่อยๆ",
      imageUrl: "/placeholder.svg?height=200&width=300",
      color: "#E84C1E",
      icon: <Zap className="h-5 w-5" />,
    },
    {
      id: 3,
      title: "WooCommerce Website",
      price: "฿9,500",
      description: "เว็บไซต์ขายสินค้า/บริการที่เราเป็นเจ้าของเว็บเอง",
      imageUrl: "/placeholder.svg?height=200&width=300",
      color: "#FFCB4F",
      highlighted: true,
      icon: <Shield className="h-5 w-5" />,
    },
    {
      id: 4,
      title: "Web Application",
      price: "฿25,000",
      description: "ออกแบบและพัฒนาระบบเว็บไซต์ตามความต้องการ",
      imageUrl: "/placeholder.svg?height=200&width=300",
      color: "#0D8B9B",
      icon: <Clock className="h-5 w-5" />,
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent opacity-90"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-[#0D8B9B]/30 via-[#E84C1E]/30 to-[#FFCB4F]/30 blur-[100px] animate-pulse-slow"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-3 py-1 rounded-full bg-[#0D8B9B]/20 text-[#0D8B9B] text-sm font-medium">
                พาร์ทเนอร์ด้านดิจิทัล
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                สร้างประสบการณ์<span className="text-[#FFCB4F]">ดิจิทัล</span>ที่มีความหมาย
              </h1>
              <p className="text-lg text-gray-300">
                เราช่วยให้ธุรกิจของคุณเติบโตด้วยโซลูชันดิจิทัลที่ตอบโจทย์ความต้องการและสร้างประสบการณ์ที่ประทับใจให้กับลูกค้าของคุณ
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="rounded-full bg-[#E84C1E] hover:bg-[#E84C1E]/80 group relative overflow-hidden"
                  onClick={() => (window.location.href = "/work")}
                >
                  <span className="relative z-10 flex items-center justify-center gap-1">
                    ดูผลงานของเรา <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: "linear-gradient(to right, #E84C1E, rgba(255,255,255,0.2), #E84C1E)",
                      backgroundSize: "200% 100%",
                      animation: "shimmer 2s infinite",
                    }}
                  />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-[#0D8B9B] text-[#0D8B9B] hover:bg-[#0D8B9B]/10 group"
                  onClick={() => (window.location.href = "/contact")}
                >
                  <span className="relative z-10 flex items-center justify-center">ติดต่อเรา</span>
                </Button>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0D8B9B] to-[#FFCB4F] rounded-lg blur opacity-30"></div>
              <div className="relative bg-black p-6 rounded-lg stop-motion-bg" style={{ height: "400px" }}>
                <div className="w-full h-full relative overflow-hidden" ref={logoContainerRef}>
                  {/* Mouse follower effect - full frame */}
                  <div
                    className="absolute inset-0 opacity-40 transition-all duration-300 ease-out"
                    style={{
                      backgroundColor: "black",
                      backgroundSize: "150% 150%",
                    }}
                  />

                  {/* Animated logo display */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
                    <div className="inline-block scale-100 transform-gpu">
                      <div className="relative shadow-[0_0_15px_rgba(255,255,255,0.15)] rounded-lg overflow-hidden">
                        <Image
                          src="/images/manypixel_logo.webp"
                          alt="ManyPixel Logo"
                          width={600}
                          height={180}
                          quality={100}
                          priority
                          className="mx-auto object-contain"
                          style={{
                            imageRendering: "high-quality",
                            WebkitFontSmoothing: "antialiased",
                            filter: "contrast(1.05) brightness(1.05)",
                          }}
                          unoptimized
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-zinc-900 relative" ref={containerRef}>
        {/* Animated background gradient */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-30"
            style={{
              background: "linear-gradient(to right, #0D8B9B, #E84C1E, #FFCB4F)",
              left: `${mousePosition.x - 250}px`,
              top: `${mousePosition.y - 250}px`,
              transition: "left 0.5s ease-out, top 0.5s ease-out",
            }}
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">บริการของเรา</h2>
            <p className="text-lg text-gray-300 max-wxl mx-auto">
              เราให้บริการด้านดิจิทัลที่ครอบคลุมทุกความต้องการของธุรกิจ ด้วยทีมงานมืออาชีพและเทคโนโลยีที่ทันสมัย
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                isHovered={hoveredService === service.id}
                onHover={() => setHoveredService(service.id)}
                onLeave={() => setHoveredService(null)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#0D8B9B]/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#E84C1E]/10 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ราคาแพ็คเกจ</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              เรามีแพ็คเกจที่หลากหลายเพื่อตอบโจทย์ทุกความต้องการของคุณ ไม่ว่าจะเป็นเว็บไซต์ขนาดเล็กหรือระบบเว็บแอปพลิเคชันขนาดใหญ่
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                index={index}
                isHovered={hoveredPricing === plan.id}
                onHover={() => setHoveredPricing(plan.id)}
                onLeave={() => setHoveredPricing(null)}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              className="rounded-full bg-white text-black hover:bg-white/90 group relative overflow-hidden"
              size="lg"
              onClick={() => (window.location.href = "/pricing")}
            >
              <span className="relative z-10 flex items-center justify-center gap-1">
                ดูแพ็คเกจทั้งหมด <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Section */}
      <PortfolioShowcase />

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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">พร้อมยกระดับธุรกิจของคุณ?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              ติดต่อเราวันนี้เพื่อเริ่มต้นสร้างประสบการณ์ดิจิทัลที่น่าประทับใจสำหรับลูกค้าของคุณ
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="rounded-full bg-white text-[#0D8B9B] hover:bg-white/90 group relative overflow-hidden"
                onClick={() => (window.location.href = "/contact")}
              >
                <span className="relative z-10 flex items-center justify-center gap-1">
                  รับคำปรึกษาฟรี <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                onClick={() => (window.location.href = "/work")}
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

// Component for service cards
function ServiceCard({ service, index, isHovered, onHover, onLeave }) {
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
      {/* Glow effect */}
      <div
        className={`absolute -inset-0.5 rounded-2xl ${
          isHovered ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
        style={{
          background: `linear-gradient(to bottom right, ${service.color}, transparent)`,
          filter: "blur(8px)",
        }}
      />

      <div className="relative overflow-hidden transition-all hover:shadow-lg rounded-2xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50">
        <div className="relative h-48 overflow-hidden rounded-t-2xl">
          <Image
            src={service.imageUrl || "/placeholder.svg"}
            width={400}
            height={300}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <div className="text-white">
              <h3 className="text-xl font-bold">{service.title}</h3>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="text-3xl">{service.icon}</div>
            <h3 className="text-xl font-bold text-white">{service.title}</h3>
          </div>
          <p className="text-gray-300 text-sm mb-4">{service.description}</p>
          <Button
            variant="ghost"
            className="pl-0 flex items-center text-white hover:text-white hover:bg-transparent group"
            onClick={() => (window.location.href = "/work")}
          >
            รายละเอียดเพิ่มเติม <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

// Component for pricing cards
function PricingCard({ plan, index, isHovered, onHover, onLeave }) {
  return (
    <motion.div
      className={`relative transition-all duration-500 ${isHovered ? "scale-105 z-10" : "scale-100 z-0"}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Glow effect border */}
      <div
        className={`absolute inset-0 rounded-2xl ${
          isHovered ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
        style={{
          background: `linear-gradient(to bottom right, ${plan.color}, transparent)`,
          filter: "blur(8px)",
          transform: "scale(1.02)",
        }}
      />

      {/* Card content */}
      <div className="relative bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 rounded-2xl overflow-hidden h-full flex flex-col">
        {plan.highlighted && (
          <div className="absolute top-0 right-0">
            <div className="bg-[#E84C1E] text-white text-xs font-bold px-4 py-1 rounded-bl-lg flex items-center gap-1">
              <Sparkles className="h-3 w-3" /> แนะนำ
            </div>
          </div>
        )}

        <div className="p-6 flex-1">
          <div className="flex items-center gap-2 mb-4">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: plan.color }}
            >
              {plan.icon}
            </div>
            <h3 className="text-xl font-bold text-white">{plan.title}</h3>
          </div>

          <div className="mb-4">
            <div className="flex items-end gap-1">
              <span className="text-3xl font-bold text-white">{plan.price}</span>
            </div>
            <p className="text-sm text-gray-400 mt-1">{plan.description}</p>
          </div>
        </div>

        <div className="p-6 border-t border-zinc-800">
          <Button
            className="w-full rounded-full group relative overflow-hidden"
            style={{
              backgroundColor: plan.color,
              color: plan.color === "#FFCB4F" ? "black" : "white",
            }}
            onClick={() => (window.location.href = "/pricing")}
          >
            <span className="relative z-10 flex items-center justify-center gap-1">
              สั่งซื้อบริการ <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `linear-gradient(to right, ${plan.color}, rgba(255,255,255,0.2), ${plan.color})`,
                backgroundSize: "200% 100%",
                animation: "shimmer 2s infinite",
              }}
            />
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
