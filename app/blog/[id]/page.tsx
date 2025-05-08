"use client"

import { useEffect } from "react"
import MainLayout from "@/components/main-layout"
import BlogPostDetail from "@/components/blog-post-detail"

export default function BlogPostPage({ params }) {
  // เพิ่ม useEffect เพื่อเลื่อนหน้าไปที่ด้านบนสุดเมื่อคอมโพเนนต์ถูกโหลด
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <MainLayout className="bg-gray-50">
      <BlogPostDetail id={params.id} />
    </MainLayout>
  )
}
