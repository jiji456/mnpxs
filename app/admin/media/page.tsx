"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { Upload, Trash2, Search, Grid, List, Filter, Copy, Check, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// ข้อมูลตัวอย่างสำหรับสื่อ
const initialMedia = [
  {
    id: 1,
    name: "gundog.jpg",
    type: "image/jpeg",
    size: "1.2 MB",
    dimensions: "1200 x 800",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gundog.jpg-8o7kE10SVcTf8jcRgAj298m1fLBvJD.jpeg",
    uploadedAt: "15 มีนาคม 2024",
    uploadedBy: "ธนภัทร สนองญาติ",
  },
  {
    id: 2,
    name: "3d-design-interface.jpeg",
    type: "image/jpeg",
    size: "2.4 MB",
    dimensions: "1920 x 1080",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e158f86b549e49a892955581355066f2-x10SooefqyAKqPXXdEvIk8kCy9trcA.jpeg",
    uploadedAt: "2 เมษายน 2024",
    uploadedBy: "สุทัสสา สานันท์",
  },
  {
    id: 3,
    name: "market-analysis-chart.webp",
    type: "image/webp",
    size: "0.8 MB",
    dimensions: "1600 x 900",
    url: "/images/market-analysis-chart.webp",
    uploadedAt: "18 กุมภาพันธ์ 2024",
    uploadedBy: "ชานน ธนะกิจรุ่งเรือง",
  },
  {
    id: 4,
    name: "business-model-canvas.webp",
    type: "image/webp",
    size: "1.5 MB",
    dimensions: "1800 x 1200",
    url: "/images/business-model-canvas.webp",
    uploadedAt: "5 มีนาคม 2024",
    uploadedBy: "สุทัสสา สานันท์",
  },
]

export default function MediaLibraryPage() {
  const [media, setMedia] = useState(initialMedia)
  const [searchTerm, setSearchTerm] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedMedia, setSelectedMedia] = useState<number[]>([])
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [detailDialogOpen, setDetailDialogOpen] = useState(false)
  const [detailItem, setDetailItem] = useState<any>(null)
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null)

  const fileInputRef = useRef<HTMLInputElement>(null)

  // กรองสื่อตามคำค้นหา
  const filteredMedia = media.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.uploadedBy.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // เลือก/ยกเลิกการเลือกสื่อ
  const toggleSelect = (id: number) => {
    if (selectedMedia.includes(id)) {
      setSelectedMedia(selectedMedia.filter((item) => item !== id))
    } else {
      setSelectedMedia([...selectedMedia, id])
    }
  }

  // เลือกทั้งหมด
  const selectAll = () => {
    if (selectedMedia.length === filteredMedia.length) {
      setSelectedMedia([])
    } else {
      setSelectedMedia(filteredMedia.map((item) => item.id))
    }
  }

  // เปิด dialog ยืนยันการลบ
  const handleDeleteClick = () => {
    if (selectedMedia.length > 0) {
      setDeleteDialogOpen(true)
    }
  }

  // ลบสื่อที่เลือก
  const confirmDelete = () => {
    setMedia(media.filter((item) => !selectedMedia.includes(item.id)))
    setSelectedMedia([])
    setDeleteDialogOpen(false)
  }

  // เปิด dialog รายละเอียด
  const openDetailDialog = (item: any) => {
    setDetailItem(item)
    setDetailDialogOpen(true)
  }

  // คัดลอก URL
  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url)
    setCopiedUrl(url)
    setTimeout(() => setCopiedUrl(null), 2000)
  }

  // จัดการการอัพโหลดไฟล์
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      // จำลองการอัพโหลดไฟล์
      const newMedia = Array.from(files).map((file, index) => {
        const id = media.length + index + 1
        return {
          id,
          name: file.name,
          type: file.type,
          size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
          dimensions: "1200 x 800", // สมมติค่า
          url: URL.createObjectURL(file),
          uploadedAt: new Date().toLocaleDateString("th-TH", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }),
          uploadedBy: "ผู้ใช้ปัจจุบัน",
        }
      })

      setMedia([...newMedia, ...media])
    }

    // รีเซ็ต input
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">คลังสื่อ</h1>
        <Button onClick={() => fileInputRef.current?.click()} className="bg-[#0D8B9B] hover:bg-[#0D8B9B]/80">
          <Upload className="mr-2 h-4 w-4" /> อัพโหลดสื่อ
        </Button>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*,video/*"
          multiple
          onChange={handleFileUpload}
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="ค้นหาสื่อ..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2">
          {selectedMedia.length > 0 && (
            <Button variant="destructive" size="sm" onClick={handleDeleteClick}>
              <Trash2 className="h-4 w-4 mr-2" />
              ลบที่เลือก ({selectedMedia.length})
            </Button>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={selectAll}>
                {selectedMedia.length === filteredMedia.length ? "ยกเลิกเลือกทั้งหมด" : "เลือกทั้งหมด"}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Tabs defaultValue={viewMode} onValueChange={(value) => setViewMode(value as "grid" | "list")}>
            <TabsList>
              <TabsTrigger value="grid">
                <Grid className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger value="list">
                <List className="h-4 w-4" />
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {filteredMedia.length > 0 ? (
        viewMode === "grid" ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredMedia.map((item) => (
              <div
                key={item.id}
                className={`relative group border rounded-md overflow-hidden ${
                  selectedMedia.includes(item.id) ? "ring-2 ring-[#0D8B9B]" : ""
                }`}
              >
                <div className="aspect-square relative">
                  <Image src={item.url || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 bg-white/20 text-white hover:bg-white/30 hover:text-white"
                      onClick={() => openDetailDialog(item)}
                    >
                      <Info className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 bg-white/20 text-white hover:bg-white/30 hover:text-white"
                      onClick={() => copyToClipboard(item.url)}
                    >
                      {copiedUrl === item.url ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <div className="absolute top-2 left-2">
                  <input
                    type="checkbox"
                    checked={selectedMedia.includes(item.id)}
                    onChange={() => toggleSelect(item.id)}
                    className="h-4 w-4 rounded border-gray-300 text-[#0D8B9B] focus:ring-[#0D8B9B]"
                  />
                </div>
                <div className="p-2 bg-white">
                  <p className="text-sm font-medium truncate">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.size}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="border rounded-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <input
                      type="checkbox"
                      checked={selectedMedia.length === filteredMedia.length}
                      onChange={selectAll}
                      className="h-4 w-4 rounded border-gray-300 text-[#0D8B9B] focus:ring-[#0D8B9B]"
                    />
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ชื่อไฟล์
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ประเภท
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ขนาด
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    อัพโหลดเมื่อ
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    อัพโหลดโดย
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    จัดการ
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredMedia.map((item) => (
                  <tr key={item.id} className={selectedMedia.includes(item.id) ? "bg-blue-50" : ""}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        checked={selectedMedia.includes(item.id)}
                        onChange={() => toggleSelect(item.id)}
                        className="h-4 w-4 rounded border-gray-300 text-[#0D8B9B] focus:ring-[#0D8B9B]"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0 mr-3">
                          <Image
                            src={item.url || "/placeholder.svg"}
                            alt={item.name}
                            width={40}
                            height={40}
                            className="object-cover rounded"
                          />
                        </div>
                        <div className="text-sm font-medium text-gray-900 truncate max-w-[200px]">{item.name}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge variant="outline" className="bg-gray-100">
                        {item.type.split("/")[1].toUpperCase()}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.size}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.uploadedAt}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.uploadedBy}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end gap-2">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" size="icon" onClick={() => openDetailDialog(item)}>
                                <Info className="h-4 w-4" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>รายละเอียด</TooltipContent>
                          </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" size="icon" onClick={() => copyToClipboard(item.url)}>
                                {copiedUrl === item.url ? (
                                  <Check className="h-4 w-4 text-green-500" />
                                ) : (
                                  <Copy className="h-4 w-4" />
                                )}
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>{copiedUrl === item.url ? "คัดลอกแล้ว" : "คัดลอก URL"}</TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      ) : (
        <div className="text-center py-12 border rounded-md">
          <div className="mx-auto w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
            <Search className="h-6 w-6 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">ไม่พบสื่อ</h3>
          <p className="text-gray-500">ไม่พบสื่อที่ตรงกับการค้นหา</p>
        </div>
      )}

      {/* Dialog ยืนยันการลบ */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>ยืนยันการลบสื่อ</DialogTitle>
            <DialogDescription>
              คุณแน่ใจหรือไม่ว่าต้องการลบสื่อที่เลือก {selectedMedia.length} รายการ? การกระทำนี้ไม่สามารถย้อนกลับได้
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              ยกเลิก
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              ลบสื่อ
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Dialog รายละเอียดสื่อ */}
      {detailItem && (
        <Dialog open={detailDialogOpen} onOpenChange={setDetailDialogOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>รายละเอียดสื่อ</DialogTitle>
            </DialogHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative aspect-square">
                <Image
                  src={detailItem.url || "/placeholder.svg"}
                  alt={detailItem.name}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">{detailItem.name}</h3>
                  <p className="text-sm text-gray-500">
                    อัพโหลดเมื่อ {detailItem.uploadedAt} โดย {detailItem.uploadedBy}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">ประเภทไฟล์:</span>
                    <span className="text-sm">{detailItem.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">ขนาดไฟล์:</span>
                    <span className="text-sm">{detailItem.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">ขนาดภาพ:</span>
                    <span className="text-sm">{detailItem.dimensions}</span>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-sm text-gray-500 mb-2">URL:</p>
                  <div className="flex">
                    <Input value={detailItem.url} readOnly className="rounded-r-none" />
                    <Button className="rounded-l-none" onClick={() => copyToClipboard(detailItem.url)}>
                      {copiedUrl === detailItem.url ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => setDetailDialogOpen(false)}>
                ปิด
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
