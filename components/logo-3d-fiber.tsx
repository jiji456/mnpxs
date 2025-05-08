"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import * as THREE from "three"

function LogoModel() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={0.6}>
      {/* Large yellow circle in background */}
      <mesh position={[6, 0, -1]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[5, 5, 0.1, 32]} />
        <meshStandardMaterial color="#FFE4A8" />
      </mesh>

      {/* Logo Group */}
      <group position={[-8, 3, 0]}>
        {/* Left teal diamond */}
        <mesh position={[0, 0, 0]}>
          <extrudeGeometry
            args={[
              new THREE.Shape().moveTo(0, 0).lineTo(-0.7, 1).lineTo(0, 2).lineTo(0.7, 1).lineTo(0, 0),
              { depth: 0.3, bevelEnabled: false },
            ]}
          />
          <meshStandardMaterial color="#0D8B9B" />
        </mesh>

        {/* Middle orange part */}
        <mesh position={[1.3, 0, 0]}>
          <extrudeGeometry
            args={[
              new THREE.Shape().moveTo(0, 0).lineTo(0.8, 0).lineTo(0.8, 2).lineTo(0, 2).lineTo(0, 0),
              { depth: 0.4, bevelEnabled: false },
            ]}
          />
          <meshStandardMaterial color="#E84C1E" />
        </mesh>

        {/* Right yellow diamond */}
        <mesh position={[2.5, 0, 0]}>
          <extrudeGeometry
            args={[
              new THREE.Shape().moveTo(0, 0).lineTo(-0.7, 1).lineTo(0, 2).lineTo(0.7, 1).lineTo(0, 0),
              { depth: 0.3, bevelEnabled: false },
            ]}
          />
          <meshStandardMaterial color="#FFCB4F" />
        </mesh>

        {/* Small dots */}
        <mesh position={[3.5, 0.2, 0.3]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#0D8B9B" />
        </mesh>

        <mesh position={[3.8, 0.3, 0.3]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#0D8B9B" />
        </mesh>

        <mesh position={[4.0, 0.5, 0.3]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#0D8B9B" />
        </mesh>

        <mesh position={[4.2, 0.7, 0.3]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#0D8B9B" />
        </mesh>
      </group>

      {/* Text "MANY PIXELS" - represented as a black box */}
      <mesh position={[0, -2, 0]}>
        <boxGeometry args={[10, 1.5, 0.1]} />
        <meshStandardMaterial color="black" />
      </mesh>

      {/* Text "STARTUP COMPANY" - represented as a smaller black box */}
      <mesh position={[-3, -4, 0]}>
        <boxGeometry args={[4, 0.5, 0.1]} />
        <meshStandardMaterial color="black" />
      </mesh>
    </group>
  )
}

export default function Logo3DFiber() {
  return (
    <div className="w-full h-full bg-white">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <color attach="background" args={["white"]} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <LogoModel />
        <OrbitControls
          enableZoom={false}
          autoRotate={true}
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}
