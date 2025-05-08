"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Check, X, Sparkles, ArrowRight, Star, Zap, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PricingContent() {
  const [activeTab, setActiveTab] = useState("monthly")
  const [hoveredCard, setHoveredCard] = useState(null)
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

  // Pricing data
  const pricingPlans = [
    {
      id: 1,
      name: "Landing Page",
      monthlyPrice: "฿3,500",
      yearlyPrice: "฿35,000",
      yearlyDiscount: "Save ฿7,000",
      description: "เว็บไซต์พื้นฐาน เหมาะสำหรับแนะนำสินค้า บริษัท หน่วยงาน ร้านค้าที่ไม่จำเป็นต้องแก้ไขข้อมูลบ่อยครั้ง",
      features: ["1 หน้าเว็บไซต์", "โดเมนและโฮสติ้ง 1 ปี", "ออกแบบ UI/UX", "รองรับการแสดงผลบนมือถือ", "ติดตั้ง Google Analytics"],
      notIncluded: ["ระบบจัดการเนื้อหา", "ระบบสมาชิก", "ระบบชำระเงิน"],
      color: "#0D8B9B",
      popular: false,
      icon: <Star className="h-5 w-5" />,
    },
    {
      id: 2,
      name: "WordPress Website",
      monthlyPrice: "฿5,500",
      yearlyPrice: "฿55,000",
      yearlyDiscount: "Save ฿11,000",
      description: "เว็บไซต์มาตรฐานสากล สำหรับเว็บไซต์ที่มีการเปลี่ยนแปลงหรือเพิ่มเนื้อหาเรื่อยๆ",
      features: [
        "5-10 หน้าเว็บไซต์",
        "โดเมนและโฮสติ้ง 1 ปี",
        "ออกแบบ UI/UX",
        "รองรับการแสดงผลบนมือถือ",
        "ระบบจัดการเนื้อหา",
        "ติดตั้ง Google Analytics",
        "ฟอร์มติดต่อ",
        "เชื่อมต่อโซเชียลมีเดีย",
      ],
      notIncluded: ["ระบบชำระเงิน", "ระบบสมาชิกขั้นสูง"],
      color: "#E84C1E",
      popular: false,
      icon: <Zap className="h-5 w-5" />,
    },
    {
      id: 3,
      name: "WooCommerce Website",
      monthlyPrice: "฿9,500",
      yearlyPrice: "฿95,000",
      yearlyDiscount: "Save ฿19,000",
      description: "เว็บไซต์ขายสินค้า/บริการที่เราเป็นเจ้าของเว็บเอง",
      features: [
        "ไม่จำกัดจำนวนหน้า",
        "โดเมนและโฮสติ้ง 1 ปี",
        "ออกแบบ UI/UX",
        "รองรับการแสดงผลบนมือถือ",
        "ระบบจัดการเนื้อหา",
        "ระบบจัดการสินค้า",
        "ระบบชำระเงิน",
        "ระบบสมาชิก",
        "ติดตั้ง Google Analytics",
        "ฟอร์มติดต่อ",
        "เชื่อมต่อโซเชียลมีเดีย",
      ],
      notIncluded: [],
      color: "#FFCB4F",
      popular: true,
      icon: <Shield className="h-5 w-5" />,
    },
    {
      id: 4,
      name: "Web Application",
      monthlyPrice: "฿25,000",
      yearlyPrice: "฿250,000",
      yearlyDiscount: "Save ฿50,000",
      description: "ออกแบบและพัฒนาระบบเว็บไซต์ตามความต้องการ",
      features: [
        "ไม่จำกัดจำนวนหน้า",
        "โดเมนและโฮสติ้ง 1 ปี",
        "ออกแบบ UI/UX",
        "รองรับการแสดงผลบนมือถือ",
        "ระบบจัดการเนื้อหา",
        "ระบบสมาชิกขั้นสูง",
        "ระบบชำระเงิน",
        "ระบบแดชบอร์ด",
        "API Integration",
        "ติดตั้ง Google Analytics",
        "ฟอร์มติดต่อ",
        "เชื่อมต่อโซเชียลมีเดีย",
      ],
      notIncluded: [],
      color: "#0D8B9B",
      popular: false,
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

        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-[#FFCB4F]/20 text-[#FFCB4F] text-sm font-medium">
                ราคาแพ็คเกจ
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                เลือก<span className="text-[#E84C1E]">แพ็คเกจ</span>ที่เหมาะกับคุณ
              </h1>
              <p className="text-lg text-gray-300">
                เรามีแพ็คเกจที่หลากหลายเพื่อตอบโจทย์ทุกความต้องการของคุณ ไม่ว่าจะเป็นเว็บไซต์ขนาดเล็กหรือระบบเว็บแอปพลิเคชันขนาดใหญ่
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative" ref={containerRef}>
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
          <div className="text-center mb-12">
            <div className="inline-flex bg-zinc-900/80 backdrop-blur-sm rounded-full p-1 mb-8 border border-zinc-800">
              <button
                onClick={() => setActiveTab("monthly")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === "monthly" ? "bg-[#0D8B9B] text-white" : "text-gray-300 hover:text-white"
                }`}
              >
                รายครั้ง
              </button>
              <button
                onClick={() => setActiveTab("yearly")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1 ${
                  activeTab === "yearly" ? "bg-[#0D8B9B] text-white" : "text-gray-300 hover:text-white"
                }`}
              >
                รายปี <span className="text-xs bg-[#E84C1E] px-2 py-0.5 rounded-full">Save 20%</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan) => (
              <motion.div
                key={plan.id}
                className={`relative rounded-2xl overflow-hidden transition-all duration-500 ${
                  hoveredCard === plan.id ? "scale-105 z-10" : "scale-100 z-0"
                }`}
                onMouseEnter={() => setHoveredCard(plan.id)}
                onMouseLeave={() => setHoveredCard(null)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: plan.id * 0.1 }}
              >
                {/* Glow effect border */}
                <div
                  className={`absolute inset-0 rounded-2xl ${
                    hoveredCard === plan.id ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-300`}
                  style={{
                    background: `linear-gradient(to bottom right, ${plan.color}, transparent)`,
                    filter: "blur(8px)",
                    transform: "scale(1.02)",
                  }}
                />

                {/* Card content */}
                <div className="relative bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 rounded-2xl overflow-hidden h-full flex flex-col">
                  {plan.popular && (
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
                      <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-end gap-1">
                        <span className="text-3xl font-bold text-white">
                          {activeTab === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                        </span>
                        {activeTab === "yearly" && (
                          <span className="text-sm text-[#E84C1E] mb-1">{plan.yearlyDiscount}</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-400 mt-1">{plan.description}</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="mt-0.5 text-[#0D8B9B]">
                            <Check className="h-4 w-4" />
                          </div>
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}

                      {plan.notIncluded.length > 0 && (
                        <>
                          <div className="border-t border-zinc-800 my-4"></div>
                          {plan.notIncluded.map((feature, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <div className="mt-0.5 text-gray-500">
                                <X className="h-4 w-4" />
                              </div>
                              <span className="text-sm text-gray-500">{feature}</span>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  </div>

                  <div className="p-6 border-t border-zinc-800">
                    <Button
                      className="w-full rounded-full group relative overflow-hidden"
                      style={{
                        backgroundColor: plan.color,
                        color: plan.color === "#FFCB4F" ? "black" : "white",
                      }}
                      onClick={() => (window.location.href = "/contact")}
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
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-20 bg-zinc-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#0D8B9B]/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#E84C1E]/10 to-transparent"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-[#0D8B9B]/20 text-[#0D8B9B] text-sm font-medium">
                Enterprise
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">ต้องการโซลูชันที่ปรับแต่งเฉพาะธุรกิจของคุณ?</h2>
              <p className="text-gray-300">
                เรามีบริการสำหรับองค์กรขนาดใหญ่ที่ต้องการโซลูชันที่ปรับแต่งตามความต้องการเฉพาะ ไม่ว่าจะเป็นระบบ ERP, CRM, หรือแพลตฟอร์มอื่นๆ
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0D8B9B]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-[#0D8B9B]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">โซลูชันที่ปรับแต่งได้ 100%</h3>
                    <p className="text-sm text-gray-400">ออกแบบและพัฒนาตามความต้องการเฉพาะของธุรกิจคุณ</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E84C1E]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-[#E84C1E]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">ทีมสนับสนุนเฉพาะ</h3>
                    <p className="text-sm text-gray-400">มีทีมผู้เชี่ยวชาญคอยดูแลและให้คำปรึกษาตลอดโครงการ</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FFCB4F]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-[#FFCB4F]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">การบำรุงรักษาและอัปเดตระบบ</h3>
                    <p className="text-sm text-gray-400">
                      บริการดูแลและอัปเดตระบบอย่างต่อเนื่องเพื่อให้ธุรกิจของคุณดำเนินไปอย่างราบรื่น
                    </p>
                  </div>
                </div>
              </div>
              <Button
                size="lg"
                className="rounded-full bg-white text-black hover:bg-white/90"
                onClick={() => (window.location.href = "/contact")}
              >
                ติดต่อฝ่ายขาย
              </Button>
            </div>

            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0D8B9B] to-[#E84C1E] rounded-2xl blur opacity-30"></div>
              <div className="relative bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
                <h3 className="text-xl font-bold mb-6">ส่งข้อมูลเพื่อรับการติดต่อกลับ</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      ชื่อ-นามสกุล
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-[#0D8B9B] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      อีเมล
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-[#0D8B9B] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                      เบอร์โทรศัพท์
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-[#0D8B9B] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      รายละเอียดโปรเจค
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#0D8B9B] focus:border-transparent"
                    ></textarea>
                  </div>
                  <Button
                    className="w-full rounded-full bg-gradient-to-r from-[#0D8B9B] to-[#E84C1E] hover:opacity-90"
                    onClick={() => (window.location.href = "/contact")}
                  >
                    ส่งข้อมูล
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">คำถามที่พบบ่อย</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              คำตอบสำหรับคำถามที่ลูกค้าถามเราบ่อยๆ หากคุณมีคำถามอื่นๆ สามารถติดต่อเราได้โดยตรง
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FaqItem
              question="ระยะเวลาในการพัฒนาเว็บไซต์หรือแอปพลิเคชันใช้เวลานานแค่ไหน?"
              answer="ระยะเวลาในการพัฒนาขึ้นอยู่กับความซับซ้อนของโปรเจค โดยทั่วไป Landing Page ใช้เวลาประมาณ 1-2 สัปดาห์ เว็บไซต์ WordPress ใช้เวลาประมาณ 2-4 สัปดาห์ และเว็บแอปพลิเคชันใช้เวลาประมาณ 1-3 เดือน ทั้งนี้เราจะแจ้งระยะเวลาที่ชัดเจนหลังจากที่เราได้รับรายละเอียดโปรเจคจากคุณ"
            />
            <FaqItem
              question="หลังจากเว็บไซต์หรือแอปพลิเคชันเสร็จแล้ว มีค่าใช้จ่ายในการดูแลรายเดือนหรือไม่?"
              answer="สำหรับแพ็คเกจ Landing Page, WordPress และ WooCommerce ราคาที่แสดงรวมค่าโดเมนและโฮสติ้งเป็นเวลา 1 ปีแล้ว หลังจากนั้นจะมีค่าต่ออายุประมาณ 3,000-5,000 บาทต่อปี ขึ้นอยู่กับขนาดของเว็บไซต์ สำหรับเว็บแอปพลิเคชันและแอปพลิเคชันมือถือ อาจมีค่าบำรุงรักษารายเดือนขึ้นอยู่กับความซับซ้อนของระบบ"
            />
            <FaqItem
              question="สามารถแก้ไขเนื้อหาเว็บไซต์ได้เองหรือไม่?"
              answer="ได้ สำหรับแพ็คเกจ WordPress, WooCommerce และ Web Application เราจะติดตั้งระบบจัดการเนื้อหาที่ใช้งานง่าย ทำให้คุณสามารถแก้ไขเนื้อหา รูปภาพ และข้อมูลต่างๆ ได้ด้วยตัวเอง โดยไม่จำเป็นต้องมีความรู้ด้านการเขียนโค้ด สำหรับแพ็คเกจ Landing Page อาจไม่มีระบบจัดการเนื้อหา แต่เราสามารถช่วยแก้ไขเนื้อหาให้คุณได้ตามที่ร้องขอ"
            />
            <FaqItem
              question="มีบริการดูแลและอัปเดตเว็บไซต์หลังจากส่งมอบงานหรือไม่?"
              answer="มีครับ เรามีบริการดูแลและอัปเดตเว็บไซต์หลังจากส่งมอบงาน โดยคิดค่าบริการเป็นรายเดือนหรือรายปี ขึ้นอยู่กับความต้องการของลูกค้า บริการนี้ครอบคลุมการอัปเดตระบบ, การสำรองข้อมูล, การแก้ไขบั๊ก และการปรับปรุงความปลอดภัย"
            />
            <FaqItem
              question="สามารถเพิ่มฟีเจอร์หรือปรับแต่งเว็บไซต์เพิ่มเติมในภายหลังได้หรือไม่?"
              answer="ได้แน่นอน เราสามารถเพิ่มฟีเจอร์หรือปรับแต่งเว็บไซต์เพิ่มเติมได้ตามความต้องการของคุณ โดยจะมีการประเมินค่าใช้จ่ายเพิ่มเติมตามขอบเขตงานที่ต้องการ เรายินดีให้คำปรึกษาและเสนอแนะแนวทางที่เหมาะสมที่สุดสำหรับธุรกิจของคุณ"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0D8B9B] to-[#0D8B9B]/70 text-white relative overflow-hidden">
        {/* Animated particles */}
        <div className="absolute inset-0">
          <Particles />
        </div>

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">พร้อมยกระดับธุรกิจของคุณแล้วหรือยัง?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">ติดต่อเราวันนี้เพื่อเริ่มต้นสร้างประสบการณ์ดิจิทัลที่น่าประทับใจสำหรับลูกค้าของคุณ</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="rounded-full bg-white text-[#0D8B9B] hover:bg-white/90"
              onClick={() => (window.location.href = "/contact")}
            >
              ติดต่อเรา <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/10 rounded-full"
              onClick={() => (window.location.href = "/work")}
            >
              ดูผลงานของเรา
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

// FAQ Item Component
function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mb-4">
      <button
        className="w-full text-left p-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition-colors flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-white">{question}</span>
        <span className={`transform transition-transform ${isOpen ? "rotate-45" : "rotate-0"}`}>
          {isOpen ? <X className="h-5 w-5 text-gray-400" /> : <span className="text-2xl text-[#0D8B9B]">+</span>}
        </span>
      </button>
      {isOpen && (
        <div className="p-4 bg-zinc-900/50 rounded-b-xl mt-px">
          <p className="text-gray-300">{answer}</p>
        </div>
      )}
    </div>
  )
}

// Animated Particles Component
function Particles() {
  return (
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
  )
}
