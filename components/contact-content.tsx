"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Send, ArrowRight, Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ContactContent() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus("submitting")

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success")
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormStatus("idle")
        e.target.reset()
      }, 3000)
    }, 1500)
  }

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
              <div className="inline-block px-3 py-1 rounded-full bg-[#0D8B9B]/20 text-[#0D8B9B] text-sm font-medium">
                ติดต่อเรา
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                พูดคุยกับ<span className="text-[#E84C1E]">ทีมงาน</span>ของเรา
              </h1>
              <p className="text-lg text-gray-300">
                เรายินดีให้คำปรึกษาและตอบคำถามทุกข้อสงสัยเกี่ยวกับบริการของเรา ติดต่อเราได้หลากหลายช่องทางตามด้านล่าง
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
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
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">ข้อมูลติดต่อ</h2>

              <div className="space-y-6">
                <ContactInfoCard
                  icon={<Phone className="h-6 w-6 text-[#0D8B9B]" />}
                  title="โทรศัพท์"
                  content="092-3638746"
                  description="จันทร์-ศุกร์ 9:00 - 18:00 น."
                />

                <ContactInfoCard
                  icon={<Mail className="h-6 w-6 text-[#E84C1E]" />}
                  title="อีเมล"
                  content="contact@manypx.com"
                  description="ตอบกลับภายใน 24 ชั่วโมง"
                />

                <ContactInfoCard
                  icon={<MapPin className="h-6 w-6 text-[#FFCB4F]" />}
                  title="ที่อยู่"
                  content="อาคาร A ชั้น 3 มหาวิทยาลัยแม่ฟ้าหลวง"
                  description="ต.ท่าสุด อ.เมือง จ.เชียงราย 57100"
                />

                <ContactInfoCard
                  icon={<Clock className="h-6 w-6 text-[#0D8B9B]" />}
                  title="เวลาทำการ"
                  content="จันทร์-ศุกร์: 9:00 - 18:00 น."
                  description="เสาร์-อาทิตย์: ปิดทำการ"
                />
              </div>

              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4">ติดตามเราได้ที่</h3>
                <div className="flex space-x-4">
                  <SocialButton icon={<Facebook className="h-5 w-5" />} color="#0D8B9B" />
                  <SocialButton icon={<Instagram className="h-5 w-5" />} color="#E84C1E" />
                  <SocialButton icon={<Twitter className="h-5 w-5" />} color="#FFCB4F" />
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0D8B9B] to-[#E84C1E] rounded-2xl blur opacity-30"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/50 p-8 rounded-2xl">
                  <h2 className="text-2xl font-bold mb-6">ส่งข้อความถึงเรา</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                          ชื่อ-นามสกุล <span className="text-[#E84C1E]">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          className="bg-zinc-800/50 border-zinc-700 text-white"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                          อีเมล <span className="text-[#E84C1E]">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="bg-zinc-800/50 border-zinc-700 text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                        เบอร์โทรศัพท์
                      </label>
                      <Input id="phone" name="phone" type="tel" className="bg-zinc-800/50 border-zinc-700 text-white" />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                        หัวข้อ <span className="text-[#E84C1E]">*</span>
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        className="bg-zinc-800/50 border-zinc-700 text-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                        ข้อความ <span className="text-[#E84C1E]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full px-3 py-2 bg-zinc-800/50 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#0D8B9B] focus:border-transparent"
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      className="w-full rounded-full bg-gradient-to-r from-[#0D8B9B] to-[#E84C1E] hover:opacity-90 group relative overflow-hidden"
                      disabled={formStatus === "submitting"}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-1">
                        {formStatus === "idle" && (
                          <>
                            ส่งข้อความ <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                        {formStatus === "submitting" && "กำลังส่ง..."}
                        {formStatus === "success" && "ส่งข้อความสำเร็จ!"}
                        {formStatus === "error" && "เกิดข้อผิดพลาด โปรดลองอีกครั้ง"}
                      </span>
                      <span
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: "linear-gradient(to right, #0D8B9B, rgba(255,255,255,0.2), #E84C1E)",
                          backgroundSize: "200% 100%",
                          animation: "shimmer 2s infinite",
                        }}
                      />
                    </Button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-zinc-900 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">ตำแหน่งที่ตั้ง</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              เราตั้งอยู่ที่มหาวิทยาลัยแม่ฟ้าหลวง จังหวัดเชียงราย สามารถเดินทางมาพบเราได้ในวันและเวลาทำการ
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0D8B9B] to-[#FFCB4F] rounded-lg blur opacity-30"></div>
            <div className="relative bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/50 p-2 rounded-lg">
              <div className="aspect-[16/9] w-full rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.4964861147!2d99.89636307596395!3d20.04727058146799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30d70a0a2d5f5c33%3A0x9e0c8c3a7d5c0c8a!2sMae%20Fah%20Luang%20University!5e0!3m2!1sen!2sth!4v1712151234567!5m2!1sen!2sth"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">คำถามที่พบบ่อย</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              คำตอบสำหรับคำถามที่ลูกค้าถามเราบ่อยๆ หากคุณมีคำถามอื่นๆ สามารถติดต่อเราได้โดยตรง
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <FaqItem
              question="ระยะเวลาในการตอบกลับหลังจากส่งข้อความติดต่อ?"
              answer="เราจะตอบกลับอีเมลและข้อความติดต่อภายใน 24 ชั่วโมงในวันทำการ (จันทร์-ศุกร์) หากเป็นวันหยุดสุดสัปดาห์หรือวันหยุดนักขัตฤกษ์ เราจะตอบกลับในวันทำการถัดไป"
            />
            <FaqItem
              question="สามารถนัดหมายเพื่อปรึกษาโปรเจคได้หรือไม่?"
              answer="ได้แน่นอน เรายินดีให้คำปรึกษาเกี่ยวกับโปรเจคของคุณ โดยสามารถนัดหมายล่วงหน้าผ่านอีเมลหรือโทรศัพท์ เรามีบริการให้คำปรึกษาทั้งแบบออนไลน์ผ่าน Zoom หรือ Google Meet และแบบพบปะโดยตรงที่สำนักงานของเรา"
            />
            <FaqItem
              question="มีบริการดูแลและอัปเดตเว็บไซต์หลังจากส่งมอบงานหรือไม่?"
              answer="มีครับ เรามีบริการดูแลและอัปเดตเว็บไซต์หลังจากส่งมอบงาน โดยคิดค่าบริการเป็นรายเดือนหรือรายปี ขึ้นอยู่กับความต้องการของลูกค้า บริการนี้ครอบคลุมการอัปเดตระบบ, การสำรองข้อมูล, การแก้ไขบั๊ก และการปรับปรุงความปลอดภัย"
            />
            <FaqItem
              question="รับงานต่างจังหวัดหรือไม่?"
              answer="เรารับงานทั่วประเทศไทยครับ โดยสามารถทำงานร่วมกันผ่านช่องทางออนไลน์ได้อย่างมีประสิทธิภาพ หากจำเป็นต้องมีการพบปะโดยตรง เราสามารถเดินทางไปพบลูกค้าได้ตามความเหมาะสม (อาจมีค่าใช้จ่ายเพิ่มเติมสำหรับการเดินทาง)"
            />
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
                onClick={() => window.open("tel:0923638746")}
              >
                <span className="relative z-10 flex items-center justify-center gap-1">
                  โทรหาเราเลย <Phone className="ml-2 h-4 w-4" />
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
                ดูผลงานของเรา <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

// Component for contact info cards
function ContactInfoCard({ icon, title, content, description }) {
  return (
    <div className="flex gap-4 p-4 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-xl hover:border-[#0D8B9B]/50 transition-all">
      <div className="flex-shrink-0 mt-1">{icon}</div>
      <div>
        <h3 className="font-bold text-white mb-1">{title}</h3>
        <p className="text-white mb-1">{content}</p>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  )
}

// Component for social buttons
function SocialButton({ icon, color }) {
  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full border-zinc-700 text-white hover:text-white hover:border-transparent transition-all"
      style={
        {
          backgroundColor: "transparent",
          borderColor: color,
          "--hover-bg": `${color}20`,
        } as any
      }
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = e.currentTarget.style["--hover-bg"] as string
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = "transparent"
      }}
      onClick={() => window.open("https://facebook.com", "_blank")}
    >
      {icon}
    </Button>
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
          {isOpen ? (
            <span className="text-2xl text-[#0D8B9B]">-</span>
          ) : (
            <span className="text-2xl text-[#0D8B9B]">+</span>
          )}
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
