"use client"

import { useRef, useEffect, useState } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export default function Logo3DScene() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000000)

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    camera.position.z = 5

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(600, 600)
    renderer.setClearColor(0x000000, 0)

    // Clear container and append renderer
    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild)
    }
    containerRef.current.appendChild(renderer.domElement)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.rotateSpeed = 0.5
    controls.autoRotate = true
    controls.autoRotateSpeed = 1

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)

    // Create logo parts
    const createLogoPart = (color: string, vertices: number[][]) => {
      const geometry = new THREE.BufferGeometry()

      const points = []
      for (const vertex of vertices) {
        points.push(new THREE.Vector3(vertex[0], vertex[1], vertex[2]))
      }

      // Create triangulated mesh from points
      const triangles = new THREE.Triangle()
      const positions = []

      // Simple triangulation for demonstration
      for (let i = 1; i < points.length - 1; i++) {
        positions.push(points[0].x, points[0].y, points[0].z)
        positions.push(points[i].x, points[i].y, points[i].z)
        positions.push(points[i + 1].x, points[i + 1].y, points[i + 1].z)
      }

      geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3))
      geometry.computeVertexNormals()

      const material = new THREE.MeshStandardMaterial({
        color: color,
        side: THREE.DoubleSide,
        flatShading: true,
      })

      return new THREE.Mesh(geometry, material)
    }

    // Logo parts
    // Left blue part
    const leftBlue = createLogoPart("#0D8B9B", [
      [-2.5, 0, 0],
      [-1.5, 2, 0],
      [-0.5, 0, 0],
      [-1.5, -2, 0],
    ])
    leftBlue.position.z = 0.1
    scene.add(leftBlue)

    // Middle orange part
    const middleOrange = createLogoPart("#E84C1E", [
      [-0.5, 0, 0],
      [0.5, 2, 0],
      [1.5, 0, 0],
      [0.5, -2, 0],
    ])
    middleOrange.position.z = 0.2
    scene.add(middleOrange)

    // Right yellow part
    const rightYellow = createLogoPart("#FFCB4F", [
      [1.5, 0, 0],
      [2.5, 2, 0],
      [3.5, 0, 0],
      [2.5, -2, 0],
    ])
    rightYellow.position.z = 0.1
    scene.add(rightYellow)

    // Add small squares on the right
    const createSquare = (x: number, y: number, size: number) => {
      const geometry = new THREE.BoxGeometry(size, size, size)
      const material = new THREE.MeshStandardMaterial({ color: "#0D8B9B" })
      const square = new THREE.Mesh(geometry, material)
      square.position.set(x, y, 0.3)
      scene.add(square)
    }

    createSquare(3.2, 0.2, 0.2)
    createSquare(3.5, 0, 0.15)
    createSquare(3.7, -0.2, 0.1)
    createSquare(3.9, -0.4, 0.08)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }

    animate()
    setIsLoaded(true)

    // Cleanup
    return () => {
      if (containerRef.current) {
        while (containerRef.current.firstChild) {
          containerRef.current.removeChild(containerRef.current.firstChild)
        }
      }

      // Dispose resources
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose()
          if (object.material instanceof THREE.Material) {
            object.material.dispose()
          } else if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose())
          }
        }
      })

      renderer.dispose()
    }
  }, [])

  return (
    <div className="relative w-full h-full">
      <div ref={containerRef} className="w-full h-full rounded-lg overflow-hidden" />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black rounded-lg">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0D8B9B]"></div>
        </div>
      )}
    </div>
  )
}
