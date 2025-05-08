"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Save, ArrowLeft, Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import RichTextEditor from "@/components/rich-text-editor"

// ข้อมูลหมวดหมู่
const categories = [
  { id: "visual-novel", name: "Visual Novel" },
  { id: "3d-design", name: "3D Design" },
  { id: "market-analysis", name: "Market Analysis" },
  { id: "business-model", name: "Business Model" },
  { id: "game-development", name: "Game Development" },
  { id: "ai", name: "AI" },
]

// ข้อมูลตัวอย่างสำหรับบทความ
const sampleBlogPosts = [
  {
    id: 1,
    title: "กระบวนการพัฒนา Visual Novel จากแนวคิดสู่การเผยแพร่",
    excerpt: "เจาะลึกขั้นตอนการพัฒนา Visual Novel ตั้งแต่การเขียนบท การออกแบบตัวละคร ไปจนถึงการเผยแพร่บนแพลตฟอร์มต่างๆ",
    content: `
      <h2>การพัฒนา Visual Novel: จากแนวคิดสู่การเผยแพร่</h2>
      <p>Visual Novel เป็นรูปแบบเกมที่เน้นการเล่าเรื่องผ่านข้อความ ภาพนิ่ง และเสียง โดยมีการโต้ตอบกับผู้เล่นผ่านการเลือกตัวเลือกที่ส่งผลต่อเนื้อเรื่อง ในบทความนี้ เราจะพาคุณไปเรียนรู้กระบวนการพัฒนา Visual Novel ตั้งแต่เริ่มต้นจนถึงการเผยแพร่</p>
      
      <h3>1. การวางแผนและเขียนบท</h3>
      <p>ขั้นตอนแรกในการพัฒนา Visual Novel คือการวางแผนและเขียนบท ซึ่งประกอบด้วย:</p>
      <ul>
        <li>การกำหนดแนวคิดหลักและธีมของเรื่อง</li>
        <li>การสร้างตัวละครหลักและตัวละครรอง</li>
        <li>การเขียนเนื้อเรื่องและบทสนทนา</li>
        <li>การออกแบบเส้นทางเนื้อเรื่องและจุดจบหลายแบบ</li>
      </ul>
      
      <h3>2. การออกแบบตัวละครและฉาก</h3>
      <p>หลังจากมีบทแล้ว ขั้นตอนต่อไปคือการออกแบบตัวละครและฉาก:</p>
      <ul>
        <li>การสร้าง Character Sheet สำหรับตัวละครแต่ละตัว</li>
        <li>การออกแบบท่าทางและอารมณ์ของตัวละคร</li>
        <li>การออกแบบฉากและพื้นหลัง</li>
        <li>การออกแบบ UI และเมนูของเกม</li>
      </ul>
    `,
    category: "visual-novel",
    tags: "Visual Novel, Game Development, Character Design, Storytelling",
    author: "ธนภัทร สนองญาติ",
    isPublished: true,
    coverImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gundog.jpg-8o7kE10SVcTf8jcRgAj298m1fLBvJD.jpeg",
  },
  {
    id: 2,
    title: "เจาะลึก UI/UX ของโปรแกรม 3D Graphic Design ชั้นนำในปี 2024",
    excerpt: "วิเคราะห์การออกแบบ UI/UX ของโปรแกรม 3D ชั้นนำ เช่น Blender, Maya และ Cinema 4D พร้อมเปรียบเทียบจุดเด่นและจุดด้อย",
    content: `
      <h2>เจาะลึก UI/UX ของโปรแกรม 3D Graphic Design ชั้นนำในปี 2024</h2>
      <p>การออกแบบส่วนต่อประสานผู้ใช้ (UI) และประสบการณ์ผู้ใช้ (UX) มีความสำคัญอย่างมากต่อประสิทธิภาพการทำงานของนักออกแบบ 3D ในบทความนี้ เราจะวิเคราะห์และเปรียบเทียบ UI/UX ของโปรแกรม 3D ชั้นนำในปี 2024</p>
      
      <h3>Blender: การปฏิวัติ UI/UX ในซอฟต์แวร์โอเพนซอร์ส</h3>
      <p>Blender ได้ปฏิวัติ UI/UX ของตัวเองอย่างมากนับตั้งแต่เวอร์ชัน 2.8 เป็นต้นมา:</p>
      <ul>
        <li><strong>จุดเด่น:</strong> อินเทอร์เฟซที่ปรับแต่งได้สูง, การจัดวางเครื่องมือที่เป็นระเบียบ, ระบบ Workspace ที่ช่วย  อินเทอร์เฟซที่ปรับแต่งได้สูง, การจัดวางเครื่องมือที่เป็นระเบียบ, ระบบ Workspace ที่ช่วยให้สลับระหว่างงานต่างๆ ได้ง่าย</li>
        <li><strong>จุดด้อย:</strong> ยังมีความซับซ้อนสำหรับผู้เริ่มต้น, ชื่อเครื่องมือบางอย่างไม่สอดคล้องกับมาตรฐานอุตสาหกรรม</li>
        <li><strong>นวัตกรรมล่าสุด:</strong> ระบบ Asset Browser, การปรับปรุง Node Editor, และการรองรับหน้าจอสัมผัส</li>
      </ul>
    `,
    category: "3d-design",
    tags: "UI/UX, 3D Graphics, Blender, Maya, Cinema 4D",
    author: "สุทัสสา สานันท์",
    isPublished: true,
    coverImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e158f86b549e49a892955581355066f2-x10SooefqyAKqPXXdEvIk8kCy9trcA.jpeg",
  },
]

export default function EditBlogPostPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const postId = Number.parseInt(params.id)

  // ค้นหาบทความจาก ID
  const findPost = () => {
    return sampleBlogPosts.find((post) => post.id === postId) || null
  }

  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    tags: "",
    author: "",
    isPublished: true,
  })

  const [coverImage, setCoverImage] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [previewMode, setPreviewMode] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // โหลดข้อมูลบทความเมื่อเริ่มต้น
  useEffect(() => {
    const post = findPost()
    if (post) {
      setFormData({
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        category: post.category,
        tags: post.tags,
        author: post.author,
        isPublished: post.isPublished,
      })
      setCoverImage(post.coverImage)
    }
    setIsLoading(false)
  }, [postId])

  // อัพเดทข้อมูลฟอร์ม
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // อัพเดทสถานะการเผยแพร่
  const handlePublishToggle = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, isPublished: checked }))
  }

  // อัพเดทหมวดหมู่
  const handleCategoryChange = (value: string) => {
    setFormData((prev) => ({ ...prev, category: value }))
  }

  // อัพเดทเนื้อหา Rich Text
  const handleContentChange = (content: string) => {
    setFormData((prev) => ({ ...prev, content }))
  }

  // จัดการการอัพโหลดรูปภาพ
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setCoverImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  // ลบรูปภาพ
  const handleRemoveImage = () => {
    setCoverImage(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  // บันทึกบทความ
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // จำลองการบันทึกข้อมูล
    setTimeout(() => {
      console.log("อัพเดทบทความ:", { id: postId, ...formData, coverImage })
      setIsSubmitting(false)
      router.push("/admin/blog")
    }, 1500)
  }

  if (isLoading) {
    return (
      <div className="container mx-auto py-10 flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0D8B9B]"></div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <Button variant="ghost" onClick={() => router.push("/admin/blog")} className="mr-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            กลับ
          </Button>
          <h1 className="text-3xl font-bold">แก้ไขบทความ</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center space-x-2">
            <Switch id="publish-mode" checked={formData.isPublished} onCheckedChange={handlePublishToggle} />
            <Label htmlFor="publish-mode">{formData.isPublished ? "เผยแพร่" : "ฉบับร่าง"}</Label>
          </div>
          <Button onClick={handleSubmit} disabled={isSubmitting} className="bg-[#0D8B9B] hover:bg-[#0D8B9B]/80">
            <Save className="mr-2 h-4 w-4" />
            {isSubmitting ? "กำลังบันทึก..." : "บันทึกการเปลี่ยนแปลง"}
          </Button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <div className="space-y-6">
              <div>
                <Label htmlFor="title">หัวข้อบทความ</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="ใส่หัวข้อบทความที่นี่..."
                  value={formData.title}
                  onChange={handleChange}
                  className="mt-1 text-lg"
                  required
                />
              </div>

              <div>
                <Label htmlFor="excerpt">บทคัดย่อ</Label>
                <Textarea
                  id="excerpt"
                  name="excerpt"
                  placeholder="เขียนบทคัดย่อสั้นๆ เพื่อดึงดูดผู้อ่าน..."
                  value={formData.excerpt}
                  onChange={handleChange}
                  className="mt-1 resize-none"
                  rows={3}
                  required
                />
              </div>

              <div>
                <Label>เนื้อหาบทความ</Label>
                <Tabs defaultValue="editor" className="mt-1">
                  <TabsList className="mb-2">
                    <TabsTrigger value="editor" onClick={() => setPreviewMode(false)}>
                      แก้ไข
                    </TabsTrigger>
                    <TabsTrigger value="preview" onClick={() => setPreviewMode(true)}>
                      ตัวอย่าง
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="editor" className="min-h-[500px]">
                    <RichTextEditor value={formData.content} onChange={handleContentChange} />
                  </TabsContent>
                  <TabsContent value="preview" className="min-h-[500px] border rounded-md p-4">
                    {formData.content ? (
                      <div dangerouslySetInnerHTML={{ __html: formData.content }} />
                    ) : (
                      <div className="text-gray-400 italic">ยังไม่มีเนื้อหา</div>
                    )}
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>

          <div className="col-span-1 space-y-6">
            <div className="border rounded-md p-4">
              <h3 className="font-medium mb-4">รูปภาพหน้าปก</h3>

              {coverImage ? (
                <div className="relative">
                  <Image
                    src={coverImage || "/placeholder.svg"}
                    alt="Cover preview"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8"
                    onClick={handleRemoveImage}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div
                  className="border-2 border-dashed rounded-md flex flex-col items-center justify-center h-48 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="h-8 w-8 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500">คลิกเพื่ออัพโหลดรูปภาพ</p>
                  <p className="text-xs text-gray-400 mt-1">PNG, JPG, WEBP ขนาดสูงสุด 5MB</p>
                </div>
              )}

              <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
            </div>

            <div className="border rounded-md p-4">
              <h3 className="font-medium mb-4">รายละเอียดบทความ</h3>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="category">หมวดหมู่</Label>
                  <Select value={formData.category} onValueChange={handleCategoryChange}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="เลือกหมวดหมู่" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="tags">แท็ก</Label>
                  <Input
                    id="tags"
                    name="tags"
                    placeholder="คั่นแท็กด้วยเครื่องหมายจุลภาค (,)"
                    value={formData.tags}
                    onChange={handleChange}
                    className="mt-1"
                  />
                  <p className="text-xs text-gray-500 mt-1">ตัวอย่าง: Visual Novel, Game Development, Character Design</p>
                </div>

                <div>
                  <Label htmlFor="author">ผู้เขียน</Label>
                  <Input
                    id="author"
                    name="author"
                    placeholder="ชื่อผู้เขียน"
                    value={formData.author}
                    onChange={handleChange}
                    className="mt-1"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
