"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Edit, Trash2, Plus, Search, Eye } from "lucide-react"
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

// ข้อมูลตัวอย่างสำหรับบทความ
const initialBlogPosts = [
  {
    id: 1,
    title: "กระบวนการพัฒนา Visual Novel จากแนวคิดสู่การเผยแพร่",
    category: "visual-novel",
    categoryLabel: "Visual Novel",
    author: "ธนภัทร สนองญาติ",
    date: "15 มีนาคม 2024",
    status: "published",
    views: 1245,
  },
  {
    id: 2,
    title: "เจาะลึก UI/UX ของโปรแกรม 3D Graphic Design ชั้นนำในปี 2024",
    category: "3d-design",
    categoryLabel: "3D Design",
    author: "สุทัสสา สานันท์",
    date: "2 เมษายน 2024",
    status: "published",
    views: 2389,
  },
  {
    id: 3,
    title: "วิเคราะห์คู่แข่งในตลาด 3D Assets ปี 2023: Turbosquid, Sketchfab และ ACON",
    category: "market-analysis",
    categoryLabel: "Market Analysis",
    author: "ชานน ธนะกิจรุ่งเรือง",
    date: "18 กุมภาพันธ์ 2024",
    status: "published",
    views: 1876,
  },
  {
    id: 4,
    title: "Revenue Stream สำหรับธุรกิจ 3D Assets: กลยุทธ์การสร้างรายได้ที่ยั่งยืน",
    category: "business-model",
    categoryLabel: "Business Model",
    author: "สุทัสสา สานันท์",
    date: "5 มีนาคม 2024",
    status: "draft",
    views: 0,
  },
  {
    id: 5,
    title: "การใช้ 3D Assets เพื่อเพิ่มประสิทธิภาพในการผลิต Webtoon",
    category: "visual-novel",
    categoryLabel: "Visual Novel",
    author: "ธนภัทร สนองญาติ",
    date: "22 มีนาคม 2024",
    status: "published",
    views: 1987,
  },
]

export default function BlogAdminPage() {
  const router = useRouter()
  const [blogPosts, setBlogPosts] = useState(initialBlogPosts)
  const [searchTerm, setSearchTerm] = useState("")
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [postToDelete, setPostToDelete] = useState<number | null>(null)

  // กรองบทความตามคำค้นหา
  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // เปิด dialog ยืนยันการลบ
  const handleDeleteClick = (id: number) => {
    setPostToDelete(id)
    setDeleteDialogOpen(true)
  }

  // ลบบทความ
  const confirmDelete = () => {
    if (postToDelete) {
      setBlogPosts(blogPosts.filter((post) => post.id !== postToDelete))
      setDeleteDialogOpen(false)
      setPostToDelete(null)
    }
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">จัดการบทความบล็อก</h1>
        <Button onClick={() => router.push("/admin/blog/new")}>
          <Plus className="mr-2 h-4 w-4" /> เขียนบทความใหม่
        </Button>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="ค้นหาบทความ..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setBlogPosts(initialBlogPosts)}>
            รีเซ็ต
          </Button>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>บทความ</TableHead>
              <TableHead>หมวดหมู่</TableHead>
              <TableHead>ผู้เขียน</TableHead>
              <TableHead>วันที่</TableHead>
              <TableHead>สถานะ</TableHead>
              <TableHead>ยอดเข้าชม</TableHead>
              <TableHead className="text-right">จัดการ</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell className="font-medium">{post.title}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-zinc-100">
                      {post.categoryLabel}
                    </Badge>
                  </TableCell>
                  <TableCell>{post.author}</TableCell>
                  <TableCell>{post.date}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        post.status === "published" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }
                    >
                      {post.status === "published" ? "เผยแพร่แล้ว" : "ฉบับร่าง"}
                    </Badge>
                  </TableCell>
                  <TableCell>{post.views.toLocaleString()}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" onClick={() => router.push(`/blog/${post.id}`)}>
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => router.push(`/admin/blog/edit/${post.id}`)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDeleteClick(post.id)}>
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                  ไม่พบบทความที่ตรงกับการค้นหา
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Dialog ยืนยันการลบ */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>ยืนยันการลบบทความ</DialogTitle>
            <DialogDescription>คุณแน่ใจหรือไม่ว่าต้องการลบบทความนี้? การกระทำนี้ไม่สามารถย้อนกลับได้</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              ยกเลิก
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              ลบบทความ
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
