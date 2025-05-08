"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ManyPxRedesign() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Colorful side stripe */}
      <div className="fixed left-0 top-0 h-full w-2 md:w-3 z-50">
        <div className="h-1/3 bg-[#0D8B9B]"></div>
        <div className="h-1/3 bg-[#E84C1E]"></div>
        <div className="h-1/3 bg-[#FFCB4F]"></div>
      </div>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-black/90 backdrop-blur-md shadow-md" : ""
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-32 h-10">
                <Image src="/images/manypixel_logo.png" alt="ManyPixel Logo" fill className="object-contain" priority />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="font-medium hover:text-[#0D8B9B] transition-colors">
              เกี่ยวกับเรา
            </Link>
            <Link href="/work" className="font-medium hover:text-[#0D8B9B] transition-colors">
              ผลงาน
            </Link>
            <Link href="/pricing" className="font-medium hover:text-[#0D8B9B] transition-colors">
              ราคา
            </Link>
            <Link href="/blog" className="font-medium hover:text-[#0D8B9B] transition-colors">
              บล็อก
            </Link>
            <Link href="/contact" className="font-medium hover:text-[#0D8B9B] transition-colors">
              ติดต่อ
            </Link>
            <Button className="bg-[#0D8B9B] hover:bg-[#0D8B9B]/80 text-white flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>092-3638746</span>
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden gap-4">
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-white">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black shadow-lg">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link href="/about" className="font-medium py-2 hover:text-[#0D8B9B] transition-colors">
                เกี่ยวกับเรา
              </Link>
              <Link href="/work" className="font-medium py-2 hover:text-[#0D8B9B] transition-colors">
                ผลงาน
              </Link>
              <Link href="/pricing" className="font-medium py-2 hover:text-[#0D8B9B] transition-colors">
                ราคา
              </Link>
              <Link href="/blog" className="font-medium py-2 hover:text-[#0D8B9B] transition-colors">
                บล็อก
              </Link>
              <Link href="/contact" className="font-medium py-2 hover:text-[#0D8B9B] transition-colors">
                ติดต่อ
              </Link>
              <Button className="bg-[#0D8B9B] hover:bg-[#0D8B9B]/80 flex items-center gap-2 w-full justify-center">
                <Phone className="h-4 w-4" />
                <span>092-3638746</span>
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-[#0D8B9B]/20 text-[#0D8B9B] text-sm font-medium">
                พาร์ทเนอร์ด้านดิจิทัล
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                สร้างประสบการณ์<span className="text-[#FFCB4F]">ดิจิทัล</span>ที่มีความหมาย
              </h1>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full bg-[#E84C1E] hover:bg-[#E84C1E]/80">
                  ดูผลงานของเรา <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-[#0D8B9B] text-[#0D8B9B] hover:bg-[#0D8B9B]/10"
                >
                  ติดต่อเรา
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0D8B9B] to-[#FFCB4F] rounded-lg blur opacity-30"></div>
              <div className="relative bg-black p-2 rounded-lg">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  width={600}
                  height={600}
                  alt="ทีมงานดิจิทัลกำลังทำงาน"
                  className="rounded-lg w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">บริการของเรา</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="เว็บไซต์ WordPress"
              icon="🌐"
              imageUrl="/placeholder.svg?height=300&width=400"
              color="#0D8B9B"
            />
            <ServiceCard
              title="เว็บแอปพลิเคชัน"
              icon="💻"
              imageUrl="/placeholder.svg?height=300&width=400"
              color="#E84C1E"
            />
            <ServiceCard
              title="แอปพลิเคชันมือถือ"
              icon="📱"
              imageUrl="/placeholder.svg?height=300&width=400"
              color="#FFCB4F"
            />
            <ServiceCard
              title="ออกแบบ UX/UI"
              icon="🎨"
              imageUrl="/placeholder.svg?height=300&width=400"
              color="#0D8B9B"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ราคาแพ็คเกจ</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <PricingCard
              number="1"
              title="Landing Page"
              price="฿3,500"
              description="เว็บไซต์พื้นฐาน เหมาะสำหรับแนะนำสินค้า บริษัท หน่วยงาน ร้านค้าที่ไม่จำเป็นต้องแก้ไขข้อมูลบ่อยครั้ง"
              imageUrl="/placeholder.svg?height=200&width=300"
              color="#0D8B9B"
            />

            <PricingCard
              number="2"
              title="WordPress Website"
              price="฿5,500"
              description="เว็บไซต์มาตรฐานสากล สำหรับเว็บไซต์ที่มีการเปลี่ยนแปลงหรือเพิ่มเนื้อหาเรื่อยๆ"
              imageUrl="/placeholder.svg?height=200&width=300"
              color="#E84C1E"
            />

            <PricingCard
              number="3"
              title="WooCommerce Website"
              price="฿9,500"
              description="เว็บไซต์ขายสินค้า/บริการที่เราเป็นเจ้าของเว็บเอง"
              imageUrl="/placeholder.svg?height=200&width=300"
              color="#FFCB4F"
              highlighted={true}
            />

            <PricingCard
              number="4"
              title="Web Application"
              price="฿25,000"
              description="ออกแบบและพัฒนาระบบเว็บไซต์ตามความต้องการ"
              imageUrl="/placeholder.svg?height=200&width=300"
              color="#0D8B9B"
            />

            <PricingCard
              number="5"
              title="Mobile Application"
              price="฿50,000"
              description="ออกแบบและพัฒนาแอพลิเคชั่นมือถือตามความต้องการ"
              imageUrl="/placeholder.svg?height=200&width=300"
              color="#E84C1E"
            />

            <PricingCard
              number="6"
              title="UX/UI Design"
              price="฿2,500"
              description="ออกแบบดีไซน์โปรเจคของคุณให้เป็นเว็บไซต์หรือแอพมือถือ"
              imageUrl="/placeholder.svg?height=200&width=300"
              color="#FFCB4F"
            />

            <PricingCard
              number="7"
              title="Other"
              price="ติดต่อเรา"
              description="ติดต่อสอบถามเพิ่มเติมได้ตลอดเวลาทำการ"
              imageUrl="/placeholder.svg?height=200&width=300"
              color="#0D8B9B"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ผลงานของเรา</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PortfolioCard
              title="ร้านค้าออนไลน์"
              category="ออกแบบ UI/UX"
              imageUrl="/placeholder.svg?height=400&width=600"
              color="#0D8B9B"
            />
            <PortfolioCard
              title="แอปการเงิน"
              category="แอปพลิเคชันมือถือ"
              imageUrl="/placeholder.svg?height=400&width=600"
              color="#E84C1E"
            />
            <PortfolioCard
              title="เว็บไซต์บริษัท"
              category="เว็บไซต์ WordPress"
              imageUrl="/placeholder.svg?height=400&width=600"
              color="#FFCB4F"
            />
            <PortfolioCard
              title="แอปสุขภาพ"
              category="แอปพลิเคชันมือถือ"
              imageUrl="/placeholder.svg?height=400&width=600"
              color="#0D8B9B"
            />
            <PortfolioCard
              title="เว็บร้านอาหาร"
              category="เว็บไซต์ WordPress"
              imageUrl="/placeholder.svg?height=400&width=600"
              color="#E84C1E"
            />
            <PortfolioCard
              title="แอปจองบริการ"
              category="เว็บแอปพลิเคชัน"
              imageUrl="/placeholder.svg?height=400&width=600"
              color="#FFCB4F"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0D8B9B] to-[#0D8B9B]/70 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">พร้อมยกระดับธุรกิจของคุณ?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="rounded-full bg-[#E84C1E] hover:bg-[#E84C1E]/80">
              รับคำปรึกษาฟรี
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 rounded-full">
              ดูบริการของเรา
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="relative w-32 h-10">
                  <Image src="/images/manypixel_logo.png" alt="ManyPixel Logo" fill className="object-contain" />
                </div>
              </Link>
              <div className="flex items-center mt-4">
                <Button variant="ghost" size="sm" className="text-white hover:text-[#0D8B9B]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:text-[#0D8B9B]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:text-[#0D8B9B]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">บริการ</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-[#0D8B9B] transition-colors">
                    เว็บไซต์ WordPress
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-[#0D8B9B] transition-colors">
                    เว็บแอปพลิเคชัน
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-[#0D8B9B] transition-colors">
                    แอปพลิเคชันมือถือ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-[#0D8B9B] transition-colors">
                    ออกแบบ UX/UI
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">ติดต่อ</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-400">
                  <Phone className="h-4 w-4" />
                  <span>092-3638746</span>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="h-4 w-4"
                  >
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                  </svg>
                  <span>info@manypx.com</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">รับข่าวสาร</h3>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="อีเมลของคุณ"
                  className="px-3 py-2 bg-zinc-800 text-white rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-[#0D8B9B]"
                />
                <Button className="bg-[#0D8B9B] hover:bg-[#0D8B9B]/80">สมัคร</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-zinc-800 mt-12 pt-6 text-center text-gray-400">
            <p>© {new Date().getFullYear()} ManyPx. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Component for service cards
function ServiceCard({ title, icon, imageUrl, color }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg group bg-black border-zinc-800">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          width={400}
          height={300}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="text-white">
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
        </div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <div className="text-3xl">{icon}</div>
          <CardTitle className="text-white">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardFooter className="pt-0">
        <Button variant="ghost" className="w-full justify-between text-white hover:text-white hover:bg-[#0D8B9B]/20">
          รายละเอียดเพิ่มเติม <ArrowRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

// Component for pricing cards
function PricingCard({ number, title, price, description, imageUrl, color, highlighted = false }) {
  return (
    <Card
      className={`overflow-hidden transition-all hover:shadow-lg bg-black border-zinc-800 ${
        highlighted ? `border-[${color}]` : ""
      }`}
    >
      <div className="relative h-40 overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          width={300}
          height={200}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div
          className={`absolute top-3 left-3 bg-[${color}] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold`}
        >
          {number}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
          <div className="text-white">
            <h3 className="text-xl font-bold">{title}</h3>
            <div className="text-lg font-semibold">{price}</div>
          </div>
        </div>
      </div>
      <CardContent className="pt-4">
        <p className="text-sm text-gray-400">{description}</p>
      </CardContent>
      <CardFooter className="border-t border-zinc-800 pt-4">
        <Button
          className={`w-full ${highlighted ? `bg-[${color}] hover:bg-[${color}]/80` : "bg-black hover:bg-zinc-800"}`}
          variant={highlighted ? "default" : "outline"}
        >
          สั่งซื้อบริการ
        </Button>
      </CardFooter>
    </Card>
  )
}

// Component for portfolio cards
function PortfolioCard({ title, category, imageUrl, color }) {
  return (
    <Card className="overflow-hidden group bg-black border-zinc-800">
      <div className="relative overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          width={600}
          height={400}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="text-white">
            <div className={`text-sm font-medium mb-1 text-[${color}]`}>{category}</div>
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
        </div>
      </div>
      <CardFooter className="flex justify-between">
        <div>
          <p className="font-medium text-white">{title}</p>
          <p className="text-sm text-gray-400">{category}</p>
        </div>
        <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-[#0D8B9B]/20">
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}
