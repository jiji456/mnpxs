"use client"

import Image from "next/image"
import { ArrowRight, Users, Award, Target, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-[#0D8B9B]/20 text-[#0D8B9B] text-sm font-medium">
                เกี่ยวกับเรา
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                เราคือ <span className="text-[#FFCB4F]">ManyPx</span>
              </h1>
              <p className="text-lg text-gray-300">
                ทีมผู้เชี่ยวชาญด้านการพัฒนาเว็บไซต์และแอปพลิเคชันที่มุ่งมั่นสร้างประสบการณ์ดิจิทัลที่ยอดเยี่ยม
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0D8B9B] to-[#FFCB4F] rounded-lg blur opacity-30"></div>
              <div className="relative bg-black p-2 rounded-lg">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  width={600}
                  height={600}
                  alt="ทีมงาน ManyPx"
                  className="rounded-lg w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">เรื่องราวของเรา</h2>
            <p className="text-lg text-gray-300">
              ManyPx ก่อตั้งขึ้นในปี 2018 โดยทีมผู้เชี่ยวชาญด้านเทคโนโลยีที่มีความหลงใหลในการสร้างโซลูชันดิจิทัลที่สวยงามและใช้งานได้จริง
              เราเริ่มต้นจากทีมเล็กๆ และเติบโตขึ้นอย่างต่อเนื่องจนกลายเป็นบริษัทที่ให้บริการด้านดิจิทัลอย่างครบวงจร
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#E84C1E] to-[#FFCB4F] rounded-lg blur opacity-30"></div>
              <div className="relative bg-black p-2 rounded-lg">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  width={500}
                  height={500}
                  alt="ประวัติบริษัท"
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
            <div className="space-y-6">
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
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ค่านิยมของเรา</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">ค่านิยมหลักที่ขับเคลื่อนทุกสิ่งที่เราทำและวิธีที่เราทำงานร่วมกับลูกค้า</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ValueCard
              icon={<Users className="h-10 w-10 text-[#0D8B9B]" />}
              title="ลูกค้าเป็นศูนย์กลาง"
              description="เราให้ความสำคัญกับความต้องการของลูกค้าเป็นอันดับแรกและทำงานอย่างใกล้ชิดเพื่อให้มั่นใจว่าเราส่งมอบโซลูชันที่ตรงตามความต้องการ"
            />
            <ValueCard
              icon={<Award className="h-10 w-10 text-[#E84C1E]" />}
              title="คุณภาพเหนือสิ่งอื่นใด"
              description="เรามุ่งมั่นสร้างผลงานที่มีคุณภาพสูงในทุกรายละเอียด ตั้งแต่การออกแบบไปจนถึงการพัฒนาและการทดสอบ"
            />
            <ValueCard
              icon={<Target className="h-10 w-10 text-[#FFCB4F]" />}
              title="นวัตกรรมไม่หยุดนิ่ง"
              description="เราไม่หยุดเรียนรู้และพัฒนาตัวเอง พร้อมนำเทคโนโลยีและแนวคิดใหม่ๆ มาประยุกต์ใช้เพื่อสร้างโซลูชันที่ดีที่สุด"
            />
            <ValueCard
              icon={<Clock className="h-10 w-10 text-[#0D8B9B]" />}
              title="ตรงต่อเวลา"
              description="เราเคารพเวลาของลูกค้าและมุ่งมั่นส่งมอบงานตามกำหนดเวลาที่ตกลงไว้ โดยไม่ลดทอนคุณภาพของงาน"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ทีมของเรา</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">พบกับทีมผู้เชี่ยวชาญที่อยู่เบื้องหลังความสำเร็จของ ManyPx</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TeamMember name="สมชาย ใจดี" position="ผู้ก่อตั้งและซีอีโอ" imageUrl="/placeholder.svg?height=400&width=400" />
            <TeamMember name="สมหญิง รักงาน" position="หัวหน้าฝ่ายออกแบบ" imageUrl="/placeholder.svg?height=400&width=400" />
            <TeamMember name="วิชัย เทคโน" position="หัวหน้านักพัฒนา" imageUrl="/placeholder.svg?height=400&width=400" />
            <TeamMember name="นภา ใจเย็น" position="ผู้จัดการโครงการ" imageUrl="/placeholder.svg?height=400&width=400" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard number="5+" text="ปีประสบการณ์" />
            <StatCard number="100+" text="โปรเจคสำเร็จ" />
            <StatCard number="50+" text="ลูกค้าที่พึงพอใจ" />
            <StatCard number="15+" text="ผู้เชี่ยวชาญในทีม" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0D8B9B] to-[#0D8B9B]/70 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">พร้อมที่จะเริ่มโปรเจคกับเรา?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">ติดต่อเราวันนี้เพื่อปรึกษาเกี่ยวกับโปรเจคของคุณและดูว่าเราจะช่วยคุณได้อย่างไร</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="rounded-full bg-[#E84C1E] hover:bg-[#E84C1E]/80">
              ติดต่อเรา <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 rounded-full">
              ดูผลงานของเรา
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

// Component for value cards
function ValueCard({ icon, title, description }) {
  return (
    <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-[#0D8B9B]/50 transition-all">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

// Component for team members
function TeamMember({ name, position, imageUrl }) {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <div className="aspect-square">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
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
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-gray-400">{position}</p>
    </div>
  )
}

// Component for stats
function StatCard({ number, text }) {
  return (
    <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 text-center">
      <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-[#0D8B9B] via-[#E84C1E] to-[#FFCB4F] text-transparent bg-clip-text">
        {number}
      </div>
      <p className="text-lg text-gray-300">{text}</p>
    </div>
  )
}
