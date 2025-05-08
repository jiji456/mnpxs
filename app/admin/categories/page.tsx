"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search, Plus, Edit, Trash2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"

// ข้อมูลตัวอย่างสำหรับหมวดหมู่
const initialCategories = [
  {
    id: 1,
    name: "Visual Novel",
    slug: "visual-novel",
    description: "บทความเกี่ยวกับการพัฒนาและการออกแบบ Visual Novel",
    color: "#0D8B9B",
    postCount: 12,
  },
  {
    id: 2,
    name: "3D Design",
    slug: "3d-design",
    description: "บทความเกี่ยวกับการออกแบบและการสร้างโมเดล 3D",
    color: "#E84C1E",
    postCount: 8,
  },
  {
    id: 3,
    name: "Market Analysis",
    slug: "market-analysis",
    description: "บทความวิเคราะห์ตลาดและแนวโน้มในอุตสาหกรรม",
    color: "#FFCB4F",
    postCount: 5,
  },
  {
    id: 4,
    name: "Business Model",
    slug: "business-model",
    description: "บทความเกี่ยวกับโมเดลธุรกิจและกลยุทธ์การสร้างรายได้",
    color: "#673AB7",
    postCount: 3,
  },
  {
    id: 5,
    name: "Game Development",
    slug: "game-development",
    description: "บทความเกี่ยวกับการพัฒนาเกมและเทคโนโลยีที่เกี่ยวข้อง",
    color: "#009688",
    postCount: 7,
  },
]

export default function CategoriesPage() {
  const router = useRouter()
  const [categories, setCategories] = useState(initialCategories)
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [currentCategory, setCurrentCategory] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
    color: "#0D8B9B",
  })
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // กรองหมวดหมู่ตามคำค้นหา
  const filteredCategories = categories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // เปิด dialog เพิ่มหมวดหมู่
  const handleAddClick = () => {
    setFormData({
      name: "",
      slug: "",
      description: "",
      color: "#0D8B9B",
    })
    setFormErrors({})
    setIsAddDialogOpen(true)
  }

  // เปิด dialog แก้ไขหมวดหมู่
  const handleEditClick = (category) => {
    setCurrentCategory(category)
    setFormData({
      name: category.name,
      slug: category.slug,
      description: category.description,
      color: category.color,
    })
    setFormErrors({})
    setIsEditDialogOpen(true)
  }

  // เปิด dialog ยืนยันการลบ
  const handleDeleteClick = (category) => {
    setCurrentCategory(category)
    setIsDeleteDialogOpen(true)
  }

  // อัพเดทข้อมูลฟอร์ม
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // สร้าง slug อัตโนมัติจากชื่อ
    if (name === "name") {
      const slug = value
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "")
      setFormData((prev) => ({ ...prev, slug }))
    }
  }

  // ตรวจสอบความถูกต้องของข้อมูล
  const validateForm = () => {
    const errors = {}
    if (!formData.name.trim()) {
      errors.name = "กรุณาระบุชื่อหมวดหมู่"
    }
    if (!formData.slug.trim()) {
      errors.slug = "กรุณาระบุ slug"
    } else if (!/^[a-z0-9-]+$/.test(formData.slug)) {
      errors.slug = "Slug ต้องประกอบด้วยตัวอักษรภาษาอังกฤษพิมพ์เล็ก ตัวเลข และเครื่องหมายขีดกลางเท่านั้น"
    }

    // ตรวจสอบว่า slug ซ้ำหรือไม่
    const isDuplicate = categories.some(
      (cat) => cat.slug === formData.slug && (!currentCategory || cat.id !== currentCategory.id),
    )
    if (isDuplicate) {
      errors.slug = "Slug นี้ถูกใช้งานแล้ว กรุณาใช้ slug อื่น"
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  // บันทึกหมวดหมู่ใหม่
  const handleAddSubmit = () => {
    if (!validateForm()) return

    setIsSubmitting(true)

    // จำลองการบันทึกข้อมูล
    setTimeout(() => {
      const newCategory = {
        id: categories.length + 1,
        ...formData,
        postCount: 0,
      }
      setCategories([...categories, newCategory])
      setIsAddDialogOpen(false)
      setIsSubmitting(false)
    }, 1000)
  }

  // อัพเดทหมวดหมู่
  const handleEditSubmit = () => {
    if (!validateForm()) return

    setIsSubmitting(true)

    // จำลองการอัพเดทข้อมูล
    setTimeout(() => {
      const updatedCategories = categories.map((cat) => (cat.id === currentCategory.id ? { ...cat, ...formData } : cat))
      setCategories(updatedCategories)
      setIsEditDialogOpen(false)
      setIsSubmitting(false)
    }, 1000)
  }

  // ลบหมวดหมู่
  const handleDeleteSubmit = () => {
    setIsSubmitting(true)

    // จำลองการลบข้อมูล
    setTimeout(() => {
      const updatedCategories = categories.filter((cat) => cat.id !== currentCategory.id)
      setCategories(updatedCategories)
      setIsDeleteDialogOpen(false)
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div className="container mx-auto py-10 bg-white text-gray-900">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">จัดการหมวดหมู่</h1>
        <Button onClick={handleAddClick} className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="mr-2 h-4 w-4" /> เพิ่มหมวดหมู่
        </Button>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="ค้นหาหมวดหมู่..."
            className="pl-10 bg-white border-gray-200"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-md border border-gray-200 bg-white">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="text-gray-600">หมวดหมู่</TableHead>
              <TableHead className="text-gray-600">Slug</TableHead>
              <TableHead className="text-gray-600">คำอธิบาย</TableHead>
              <TableHead className="text-gray-600">จำนวนบทความ</TableHead>
              <TableHead className="text-right text-gray-600">จัดการ</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category) => (
                <TableRow key={category.id} className="border-gray-200">
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: category.color }}></div>
                      <span className="font-medium text-gray-800">{category.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-700">{category.slug}</TableCell>
                  <TableCell className="max-w-md truncate text-gray-700">{category.description}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-gray-100 text-gray-700">
                      {category.postCount}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEditClick(category)}
                        className="text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteClick(category)}
                        disabled={category.postCount > 0}
                        className="text-gray-600 hover:text-red-600 hover:bg-red-50 disabled:opacity-50"
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                  ไม่พบหมวดหมู่ที่ตรงกับการค้นหา
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Dialog เพิ่มหมวดหมู่ */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="bg-white text-gray-900">
          <DialogHeader>
            <DialogTitle className="text-gray-900">เพิ่มหมวดหมู่</DialogTitle>
            <DialogDescription className="text-gray-600">กรอกข้อมูลเพื่อเพิ่มหมวดหมู่ใหม่</DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-800">
                ชื่อหมวดหมู่
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`bg-white border-gray-200 text-gray-900 ${formErrors.name ? "border-red-500" : ""}`}
              />
              {formErrors.name && (
                <p className="text-red-500 text-sm flex items-center mt-1">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  {formErrors.name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="slug" className="text-gray-800">
                Slug
              </Label>
              <Input
                id="slug"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                className={`bg-white border-gray-200 text-gray-900 ${formErrors.slug ? "border-red-500" : ""}`}
              />
              {formErrors.slug ? (
                <p className="text-red-500 text-sm flex items-center mt-1">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  {formErrors.slug}
                </p>
              ) : (
                <p className="text-gray-500 text-sm mt-1">URL ของหมวดหมู่จะเป็น: /blog/category/{formData.slug}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-gray-800">
                คำอธิบาย
              </Label>
              <Input
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="bg-white border-gray-200 text-gray-900"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="color" className="text-gray-800">
                สี
              </Label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  id="color"
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  className="w-10 h-10 rounded-md border border-gray-300"
                />
                <Input
                  value={formData.color}
                  onChange={handleChange}
                  name="color"
                  className="font-mono bg-white border-gray-200 text-gray-900"
                />
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsAddDialogOpen(false)}
              disabled={isSubmitting}
              className="bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
            >
              ยกเลิก
            </Button>
            <Button
              onClick={handleAddSubmit}
              disabled={isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              {isSubmitting ? "กำลังบันทึก..." : "บันทึก"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Dialog แก้ไขหมวดหมู่ */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="bg-white text-gray-900">
          <DialogHeader>
            <DialogTitle className="text-gray-900">แก้ไขหมวดหมู่</DialogTitle>
            <DialogDescription className="text-gray-600">แก้ไขข้อมูลหมวดหมู่</DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="edit-name" className="text-gray-800">
                ชื่อหมวดหมู่
              </Label>
              <Input
                id="edit-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`bg-white border-gray-200 text-gray-900 ${formErrors.name ? "border-red-500" : ""}`}
              />
              {formErrors.name && (
                <p className="text-red-500 text-sm flex items-center mt-1">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  {formErrors.name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-slug" className="text-gray-800">
                Slug
              </Label>
              <Input
                id="edit-slug"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                className={`bg-white border-gray-200 text-gray-900 ${formErrors.slug ? "border-red-500" : ""}`}
              />
              {formErrors.slug ? (
                <p className="text-red-500 text-sm flex items-center mt-1">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  {formErrors.slug}
                </p>
              ) : (
                <p className="text-gray-500 text-sm mt-1">URL ของหมวดหมู่จะเป็น: /blog/category/{formData.slug}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-description" className="text-gray-800">
                คำอธิบาย
              </Label>
              <Input
                id="edit-description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="bg-white border-gray-200 text-gray-900"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-color" className="text-gray-800">
                สี
              </Label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  id="edit-color"
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  className="w-10 h-10 rounded-md border border-gray-300"
                />
                <Input
                  value={formData.color}
                  onChange={handleChange}
                  name="color"
                  className="font-mono bg-white border-gray-200 text-gray-900"
                />
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsEditDialogOpen(false)}
              disabled={isSubmitting}
              className="bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
            >
              ยกเลิก
            </Button>
            <Button
              onClick={handleEditSubmit}
              disabled={isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              {isSubmitting ? "กำลังบันทึก..." : "บันทึก"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Dialog ยืนยันการลบ */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="bg-white text-gray-900">
          <DialogHeader>
            <DialogTitle className="text-gray-900">ยืนยันการลบหมวดหมู่</DialogTitle>
            <DialogDescription className="text-gray-600">
              คุณแน่ใจหรือไม่ว่าต้องการลบหมวดหมู่ "{currentCategory?.name}"? การกระทำนี้ไม่สามารถย้อนกลับได้
            </DialogDescription>
          </DialogHeader>
          {currentCategory?.postCount > 0 && (
            <div className="bg-yellow-50 text-yellow-800 p-3 rounded-md text-sm flex items-center">
              <AlertCircle className="h-4 w-4 mr-2" />
              ไม่สามารถลบหมวดหมู่นี้ได้เนื่องจากมีบทความที่ใช้หมวดหมู่นี้อยู่ {currentCategory?.postCount} บทความ
            </div>
          )}
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
              disabled={isSubmitting}
              className="bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
            >
              ยกเลิก
            </Button>
            <Button
              variant="destructive"
              onClick={handleDeleteSubmit}
              disabled={isSubmitting || currentCategory?.postCount > 0}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              {isSubmitting ? "กำลังลบ..." : "ลบหมวดหมู่"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
