"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  ImageIcon,
  Link,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Heading1,
  Heading2,
  Heading3,
  Quote,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
}

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState<"visual" | "html">("visual")
  const [htmlValue, setHtmlValue] = useState(value)

  // ซิงค์ค่า HTML กับ editor
  useEffect(() => {
    if (editorRef.current && activeTab === "visual") {
      editorRef.current.innerHTML = value
    }
  }, [value, activeTab])

  // อัพเดทค่าเมื่อมีการเปลี่ยนแปลงใน editor
  const handleEditorChange = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML)
    }
  }

  // อัพเดทค่าเมื่อมีการเปลี่ยนแปลงใน HTML textarea
  const handleHtmlChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHtmlValue(e.target.value)
  }

  // บันทึกค่า HTML เมื่อเปลี่ยน tab
  const handleTabChange = (value: string) => {
    if (value === "html" && editorRef.current) {
      setHtmlValue(editorRef.current.innerHTML)
    } else if (value === "visual") {
      if (editorRef.current) {
        editorRef.current.innerHTML = htmlValue
        onChange(htmlValue)
      }
    }
    setActiveTab(value as "visual" | "html")
  }

  // คำสั่งจัดการรูปแบบข้อความ
  const execCommand = (command: string, value = "") => {
    document.execCommand(command, false, value)
    handleEditorChange()
    if (editorRef.current) {
      editorRef.current.focus()
    }
  }

  // เพิ่มลิงก์
  const insertLink = () => {
    const url = prompt("ใส่ URL:", "https://")
    if (url) {
      execCommand("createLink", url)
    }
  }

  // เพิ่มรูปภาพ
  const insertImage = () => {
    const url = prompt("ใส่ URL รูปภาพ:", "https://")
    if (url) {
      execCommand("insertImage", url)
    }
  }

  return (
    <div className="border rounded-md overflow-hidden">
      <Tabs value={activeTab} onValueChange={handleTabChange}>
        <div className="flex justify-between items-center border-b p-2">
          <div className="flex flex-wrap gap-1">
            {activeTab === "visual" && (
              <>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" onClick={() => execCommand("bold")}>
                        <Bold className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>ตัวหนา</TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" onClick={() => execCommand("italic")}>
                        <Italic className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>ตัวเอียง</TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" onClick={() => execCommand("formatBlock", "<h1>")}>
                        <Heading1 className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>หัวข้อใหญ่</TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" onClick={() => execCommand("formatBlock", "<h2>")}>
                        <Heading2 className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>หัวข้อรอง</TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" onClick={() => execCommand("formatBlock", "<h3>")}>
                        <Heading3 className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>หัวข้อย่อย</TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" onClick={() => execCommand("formatBlock", "<blockquote>")}>
                        <Quote className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>ข้อความอ้างอิง</TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" onClick={() => execCommand("insertUnorderedList")}>
                        <List className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>รายการแบบจุด</TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" onClick={() => execCommand("insertOrderedList")}>
                        <ListOrdered className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>รายการแบบตัวเลข</TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" onClick={() => execCommand("justifyLeft")}>
                        <AlignLeft className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>จัดชิดซ้าย</TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" onClick={() => execCommand("justifyCenter")}>
                        <AlignCenter className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>จัดกึ่งกลาง</TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" onClick={() => execCommand("justifyRight")}>
                        <AlignRight className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>จัดชิดขวา</TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" onClick={insertLink}>
                        <Link className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>เพิ่มลิงก์</TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" onClick={insertImage}>
                        <ImageIcon className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>เพิ่มรูปภาพ</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </>
            )}
          </div>
          <TabsList>
            <TabsTrigger value="visual">แบบเห็นภาพ</TabsTrigger>
            <TabsTrigger value="html">HTML</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="visual" className="p-0">
          <div
            ref={editorRef}
            contentEditable
            className="min-h-[400px] p-4 focus:outline-none prose max-w-none"
            onInput={handleEditorChange}
            dangerouslySetInnerHTML={{ __html: value }}
          />
        </TabsContent>

        <TabsContent value="html" className="p-0">
          <textarea
            className="w-full min-h-[400px] p-4 font-mono text-sm focus:outline-none resize-none"
            value={htmlValue}
            onChange={handleHtmlChange}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}
