"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Users, Award, Target, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutContent() {
  const [hoveredValue, setHoveredValue] = useState(null)
  const [hoveredTeam, setHoveredTeam] = useState(null)
  const [hoveredStat, setHoveredStat] = useState(null)
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

  // Values data
  const values = [
    {
      id: 1,
      icon: <Users className="h-10 w-10 text-[#0D8B9B]" />,
      title: "ลูกค้าเป็นศูนย์กลาง",
      description:
        "เราให้ความสำคัญกับความต้องการของลูกค้าเป็นอันดับแรกและทำงานอย่างใกล้ชิดเพื่อให้มั่นใจว่าเราส่งมอบโซลูชันที่ตรงตามความต้องการ",
      color: "#0D8B9B",
    },
    {
      id: 2,
      icon: <Award className="h-10 w-10 text-[#E84C1E]" />,
      title: "คุณภาพเหนือสิ่งอื่นใด",
      description: "เรามุ่งมั่นสร้างผลงานที่มีคุณภาพสูงในทุกรายละเอียด ตั้งแต่การออกแบบไปจนถึงการพัฒนาและการทดสอบ",
      color: "#E84C1E",
    },
    {
      id: 3,
      icon: <Target className="h-10 w-10 text-[#FFCB4F]" />,
      title: "นวัตกรรมไม่หยุดนิ่ง",
      description: "เราไม่หยุดเรียนรู้และพัฒนาตัวเอง พร้อมนำเทคโนโลยีและแนวคิดใหม่ๆ มาประยุกต์ใช้เพื่อสร้างโซลูชันที่ดีที่สุด",
      color: "#FFCB4F",
    },
    {
      id: 4,
      icon: <Clock className="h-10 w-10 text-[#0D8B9B]" />,
      title: "ตรงต่อเวลา",
      description: "เราเคารพเวลาของลูกค้าและมุ่งมั่นส่งมอบงานตามกำหนดเวลาที่ตกลงไว้ โดยไม่ลดทอนคุณภาพของงาน",
      color: "#0D8B9B",
    },
  ]

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "สุทัสสา สานันท์",
      position: "Co-Founder",
      imageUrl: "/images/sutassa.png",
    },
    {
      id: 2,
      name: "ชานน ธนะกิจรุ่งเรือง",
      position: "Co-Founder",
      imageUrl: "/images/chanon.png",
    },
    {
      id: 3,
      name: "ธนภัทร สนองญาติ",
      position: "Head Developer",
      imageUrl: "/images/thanapat.png",
    },
    {
      id: 4,
      name: "อาจารย์ วิทยาศักดิ์ รุจิวรกุล",
      position: "อาจารย์ประจำสำนักวิชาเทคโนโลยีดิจิทัลประยุกต์ สาขา วิศวกรรมซอฟต์แวร์",
      imageUrl: "/images/wittayasak.png",
    },
    {
      id: 5,
      name: "อาจารย์ ภวัต ตันสุรัตน์",
      position: "ผู้เชี่ยวชาญด้านการทำแผนธุรกิจและการตลาดและการบริหารจัดการเทคโนโลยีและนวัตกรรม",
      imageUrl: "/images/pawat.png",
    },
  ]

  // Stats data
  const stats = [
    { id: 1, number: "1+", text: "ปีประสบการณ์", color: "#0D8B9B" },
    { id: 2, number: "100+", text: "โปรเจคสำเร็จ", color: "#E84C1E" },
    { id: 3, number: "50+", text: "ลูกค้าที่พึงพอใจ", color: "#FFCB4F" },
    { id: 4, number: "15+", text: "ผู้เชี่ยวชาญในทีม", color: "#0D8B9B" },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        {/* Logo Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/manypixel_logo.webp"
            alt="ManyPixel Logo Background"
            fill
            className="object-contain opacity-20"
          />
        </div>

        {/* Animated background gradient */}
        <div className="absolute inset-0 z-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-[#0D8B9B]/30 via-[#E84C1E]/30 to-[#FFCB4F]/30 blur-[100px] animate-pulse-slow"></div>
        </div>

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/70 z-10"></div>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <motion.div
            className="flex flex-col items-center text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-[#0D8B9B]/20 text-[#0D8B9B] text-sm font-medium">
                เกี่ยวกับเรา
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                เราคือ <span className="text-[#FFCB4F]">ManyPixels</span>
              </h1>
              <p className="text-lg text-gray-300">
                ทีมผู้เชี่ยวชาญด้านการพัฒนาเว็บไซต์และแอปพลิเคชันที่มุ่งมั่นสร้างประสบการณ์ดิจิทัลที่ยอดเยี่ยม
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
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
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">เรื่องราวของเรา</h2>
            <p className="text-lg text-gray-300">
              ManyPixels ก่อตั้งขึ้นในปี 2023 โดยทีมผู้เชี่ยวชาญด้านเทคโนโลยีที่มีความหลงใหลในการสร้างโซลูชันดิจิทัลที่สวยงามและใช้งานได้จริง
              เราเริ่มต้นจากทีมเล็กๆ และเติบโตขึ้นอย่างต่อเนื่องจนกลายเป็นบริษัทที่ให้บริการด้านดิจิทัลอย่างครบวงจร นอกจากนี้
              เรายังได้รับการสนับสนุนจากโครงการ YSD FUND ในปี 2024 ซึ่งช่วยผลักดันให้ธุรกิจของเราเติบโตอย่างก้าวกระโดด
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <motion.div
              className="flex justify-center md:justify-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative max-w-md w-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#E84C1E] to-[#FFCB4F] rounded-lg blur opacity-30"></div>
                <div className="relative bg-black p-2 rounded-lg">
                  <Image
                    src="/images/ysd-fund-grant-day.png"
                    width={400}
                    height={240}
                    alt="ManyPixels ได้รับทุนสนับสนุนจาก YSD FUND"
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">วิสัยทัศน์ของเรา</h3>
                <p className="text-gray-300">
                  เราต้องการเป็นพาร์ทเนอร์ด้านดิจิทัลที่ลูกค้าไว้วางใจและเลือกเป็นอันดับแรก
                  โดยมุ่งมั่นสร้างโซลูชันที่ตอบโจทย์ความต้องการทางธุรกิจและสร้างประสบการณ์ที่ดีให้กับผู้ใช้งาน
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">พันธกิจของเรา</h3>
                <p className="text-gray-300">
                  สร้างสรรค์ผลงานดิจิทัลที่มีคุณภาพสูง ใช้งานง่าย และตอบโจทย์ความต้องการของลูกค้า
                  พร้อมทั้งส่งมอบบริการที่เหนือความคาดหมายด้วยทีมงานมืออาชีพและเทคโนโลยีที่ทันสมัย
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ค่านิยมของเรา</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">ค่านิยมหลักที่ขับเคลื่อนทุกสิ่งที่เราทำและวิธีที่เราทำงานร่วมกับลูกค้า</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ValueCard
                key={value.id}
                value={value}
                index={index}
                isHovered={hoveredValue === value.id}
                onHover={() => setHoveredValue(value.id)}
                onLeave={() => setHoveredValue(null)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-zinc-900 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-[#0D8B9B]/20 via-[#E84C1E]/20 to-[#FFCB4F]/20 blur-[100px] animate-pulse-slow"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ทีมของเรา</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">พบกับทีมผู้เชี่ยวชาญที่อยู่เบื้องหลังความสำเร็จของ ManyPixels</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={member.id}
                member={member}
                index={index}
                isHovered={hoveredTeam === member.id}
                onHover={() => setHoveredTeam(member.id)}
                onLeave={() => setHoveredTeam(null)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.id}
                stat={stat}
                index={index}
                isHovered={hoveredStat === stat.id}
                onHover={() => setHoveredStat(stat.id)}
                onLeave={() => setHoveredStat(null)}
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
                className="rounded-full bg-[#E84C1E] hover:bg-[#E84C1E]/80 group relative overflow-hidden"
                onClick={() => (window.location.href = "/contact")}
              >
                <span className="relative z-10 flex items-center justify-center gap-1">
                  ติดต่อเรา <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                className="text-white border-white hover:bg-white/10 rounded-full"
                onClick={() => (window.location.href = "/work")}
              >
                ดูผลงานของเรา
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

// Component for value cards
function ValueCard({ value, index, isHovered, onHover, onLeave }) {
  return (
    <motion.div
      className="relative"
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
          background: `linear-gradient(to bottom right, ${value.color}, transparent)`,
          filter: "blur(6px)",
        }}
      />

      <div className="p-6 hover:bg-zinc-900/50 transition-all rounded-2xl relative bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50">
        <div className="mb-4">{value.icon}</div>
        <h3 className="text-xl font-bold mb-2">{value.title}</h3>
        <p className="text-gray-400">{value.description}</p>
      </div>
    </motion.div>
  )
}

// Component for team members
function TeamMember({ member, index, isHovered, onHover, onLeave }) {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative overflow-hidden rounded-2xl mb-4" onMouseEnter={onHover} onMouseLeave={onLeave}>
        {/* Glow effect - ย้ายมาอยู่ในส่วนรูปภาพเท่านั้น */}
        <div
          className={`absolute -inset-0.5 rounded-2xl ${
            isHovered ? "opacity-70" : "opacity-0"
          } transition-opacity duration-300`}
          style={{
            background: "linear-gradient(to bottom right, #0D8B9B, #E84C1E)",
            filter: "blur(6px)",
          }}
        />

        <div className="relative aspect-square bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50">
          <Image
            src={member.imageUrl || "/placeholder.svg"}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div className="w-full flex justify-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/20 text-white hover:bg-white/30 rounded-full h-8 w-8"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/20 text-white hover:bg-white/30 rounded-full h-8 w-8"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/20 text-white hover:bg-white/30 rounded-full h-8 w-8"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-lg font-bold">{member.name}</h3>
      <p className="text-gray-400 text-sm">{member.position}</p>
    </motion.div>
  )
}

// Component for stats
function StatCard({ stat, index, isHovered, onHover, onLeave }) {
  return (
    <motion.div
      className="relative"
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
          background: `linear-gradient(to bottom right, ${stat.color}, transparent)`,
          filter: "blur(6px)",
        }}
      />

      <div className="p-8 rounded-2xl bg-gradient-to-br from-zinc-900 to-black text-center relative border border-zinc-800/50 backdrop-blur-sm">
        <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-[#0D8B9B] via-[#E84C1E] to-[#FFCB4F] text-transparent bg-clip-text">
          {stat.number}
        </div>
        <p className="text-lg text-gray-300">{stat.text}</p>
      </div>
    </motion.div>
  )
}
