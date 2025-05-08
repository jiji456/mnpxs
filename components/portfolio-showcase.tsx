"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PortfolioShowcase() {
  const [currentProject, setCurrentProject] = useState(0)
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

  const featuredProjects = [
    {
      id: 1,
      title: "แอปพลิเคชันสื่อการเรียนรู้บนสมาร์ทโฟน TEENSMART",
      description:
        "แอปพลิเคชันสำหรับวัยรุ่นที่ช่วยให้ความรู้เรื่องเพศศึกษาและความสัมพันธ์ในวัยรุ่นอย่างเหมาะสม ออกแบบให้มีความน่าสนใจและเข้าถึงง่ายสำหรับกลุ่มเป้าหมาย",
      imageUrl: "/images/teensmart-app.png",
      technologies: ["React Native", "Firebase", "UI/UX Design"],
      challenge: "การออกแบบแอปพลิเคชันที่นำเสนอเนื้อหาที่ละเอียดอ่อนอย่างเหมาะสม และสร้างประสบการณ์ผู้ใช้ที่เป็นมิตรสำหรับวัยรุ่น",
      solution:
        "เราใช้การออกแบบที่สดใสและเป็นมิตร พร้อมกับแบ่งเนื้อหาเป็นหมวดหมู่ที่ชัดเจน มีระบบแชทบอทให้คำปรึกษา และชุมชนสำหรับแลกเปลี่ยนความคิดเห็น",
      color: "#0D8B9B",
    },
    {
      id: 2,
      title: "LINE Official & Mini App ของ TEENSMART",
      description: "แพลตฟอร์มให้คำปรึกษาและความรู้เรื่องเพศศึกษาผ่าน LINE Official Account และ LINE Mini App ที่เข้าถึงกลุ่มวัยรุ่นได้ง่าย",
      imageUrl: "/images/teensmart-line.png",
      technologies: ["LINE Front-end Framework", "Node.js", "LINE Messaging API"],
      challenge: "การพัฒนาแพลตฟอร์มบน LINE ที่สามารถเข้าถึงกลุ่มวัยรุ่นได้ง่ายและให้ข้อมูลที่ถูกต้องเกี่ยวกับเพศศึกษาอย่างเหมาะสม",
      solution:
        "เราพัฒนา LINE Official Account ที่มีระบบแชทบอทอัตโนมัติและ LINE Mini App ที่มีฟีเจอร์ติดตามรอบเดือน ประเมินอาการผิดปกติ และให้ความรู้เรื่องเพศศึกษา",
      color: "#E84C1E",
    },
    {
      id: 3,
      title: "เว็บไซต์สอนภาษาอังกฤษเบื้องต้น English for Local Entrepreneur",
      description: "แพลตฟอร์มการเรียนรู้ออนไลน์สำหรับผู้ประกอบการท้องถิ่นที่ต้องการพัฒนาทักษะภาษาอังกฤษเพื่อธุรกิจ",
      imageUrl: "/images/english-for-entrepreneur.png",
      technologies: ["React", "Next.js", "Tailwind CSS", "MongoDB"],
      challenge: "การพัฒนาแพลตฟอร์มการเรียนรู้ที่เข้าถึงง่ายและตอบโจทย์ความต้องการของผู้ประกอบการท้องถิ่นที่มีพื้นฐานภาษาอังกฤษแตกต่างกัน",
      solution:
        "เราออกแบบระบบการเรียนรู้ที่แบ่งเป็นระดับต่างๆ มีเนื้อหาที่เกี่ยวข้องกับธุรกิจท้องถิ่น พร้อมแบบฝึกหัดและการประเมินผลที่ช่วยให้ผู้เรียนสามารถติดตามความก้าวหน้าได้",
      color: "#FFCB4F",
    },
    {
      id: 4,
      title: "เว็บไซต์ประเมินอาการการสัมผัสฝุ่นละออง",
      description:
        "เว็บแอปพลิเคชันสำหรับประเมินอาการจากการรับสัมผัสฝุ่นละอองและพฤติกรรมการป้องกัน พร้อมระบบแผนที่แสดงตำแหน่งและการรายงานผล",
      imageUrl: "/images/dust-assessment-website.png",
      technologies: ["React", "Leaflet Maps", "Node.js", "MongoDB"],
      challenge: "การพัฒนาระบบที่ช่วยให้ผู้ใช้สามารถประเมินผลกระทบจากมลพิษทางอากาศต่อสุขภาพได้ด้วยตนเอง พร้อมแสดงข้อมูลเชิงพื้นที่",
      solution:
        "เราพัฒนาเว็บแอปพลิเคชันที่ผสมผสานระบบแบบประเมินออนไลน์กับเทคโนโลยีแผนที่ ทำให้ผู้ใช้สามารถระบุตำแหน่ง ประเมินอาการ และได้รับคำแนะนำที่เหมาะสม",
      color: "#0D8B9B",
    },
    {
      id: 5,
      title: "เว็บไซต์ขายอัญมณีและเครื่องราง",
      description: "เว็บไซต์อีคอมเมิร์ซสำหรับร้านขายอัญมณีและเครื่องรางพกพา พร้อมระบบประเมินสินค้าและการรับรองคุณภาพจากสถาบันที่น่าเชื่อถือ",
      imageUrl: "/images/gemstone-websites.png",
      technologies: ["WordPress", "WooCommerce", "Custom Theme", "Payment Gateway"],
      challenge: "การออกแบบเว็บไซต์อีคอมเมิร์ซที่สร้างความน่าเชื่อถือสำหรับสินค้ามูลค่าสูงและมีความเชื่อมโยงกับความเชื่อทางวัฒนธรรม",
      solution:
        "เราพัฒนาเว็บไซต์ที่นำเสนอข้อมูลสินค้าอย่างละเอียด มีระบบรับรองคุณภาพจากสถาบันที่น่าเชื่อถือ และออกแบบประสบการณ์ผู้ใช้ที่ทำให้ลูกค้ารู้สึกมั่นใจในการเลือกซื้อสินค้าออนไลน์",
      color: "#E84C1E",
    },
  ]

  const project = featuredProjects[currentProject]

  return (
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">ผลงานที่โดดเด่น</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            ผลงานที่เราภูมิใจนำเสนอ ซึ่งแสดงถึงความเชี่ยวชาญและความคิดสร้างสรรค์ของทีมเรา
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            key={`image-${project.id}`}
          >
            {/* ลดความเข้มของเอฟเฟกต์ลง */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0D8B9B]/50 to-[#FFCB4F]/50 rounded-lg blur-[4px] opacity-20"></div>
            <div className="relative bg-black p-2 rounded-lg">
              <Image
                src={project.imageUrl || "/placeholder.svg"}
                width={800}
                height={600}
                alt={project.title}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            key={`content-${project.id}`}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1 rounded-full bg-zinc-800/50 text-gray-300"
                  style={{
                    background: `linear-gradient(to right, rgba(13, 139, 155, 0.2), rgba(232, 76, 30, 0.2))`,
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-[#FFCB4F] mb-2">ความท้าทาย</h4>
                <p className="text-gray-400 text-sm">{project.challenge}</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-[#0D8B9B] mb-2">วิธีการแก้ปัญหา</h4>
                <p className="text-gray-400 text-sm">{project.solution}</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                className="bg-[#0D8B9B] hover:bg-[#0D8B9B]/80 rounded-full group relative overflow-hidden"
                onClick={() => (window.location.href = `/work/${project.id}`)}
              >
                <span className="relative z-10 flex items-center justify-center gap-1">
                  ดูรายละเอียดเพิ่มเติม{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
              <Button variant="outline" className="rounded-full" onClick={() => (window.location.href = "/work")}>
                ดูผลงานอื่นๆ
              </Button>
            </div>

            <div className="flex gap-2 pt-4">
              {featuredProjects.map((p, index) => (
                <button
                  key={p.id}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentProject === index ? `bg-[${p.color}] scale-125` : "bg-zinc-700 hover:bg-zinc-600"
                  }`}
                  style={{
                    backgroundColor: currentProject === index ? p.color : undefined,
                    boxShadow: currentProject === index ? `0 0 10px ${p.color}` : undefined,
                  }}
                  aria-label={`ดูโปรเจค ${p.title}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
