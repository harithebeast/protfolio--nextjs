"use client"
import type React from "react"
import { useRef, useEffect } from "react"
import * as THREE from "three"
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry"
import { FontLoader } from "three/examples/jsm/loaders/FontLoader"

interface RotatingCubeProps {
  skills: string[]
}

const RotatingCube: React.FC<RotatingCubeProps> = ({ skills }) => {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(300, 300)
    mountRef.current.appendChild(renderer.domElement)

    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    camera.position.z = 2

    const animate = () => {
      requestAnimationFrame(animate)
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      renderer.render(scene, camera)
    }
    animate()

    const skillTexts: THREE.Mesh[] = []
    const loader = new FontLoader()
    loader.load("/fonts/helvetiker_regular.typeface.json", (font) => {
      skills.forEach((skill, index) => {
        const textGeometry = new TextGeometry(skill, {
          font: font,
          size: 0.1,
          height: 0.02,
        })
        const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff })
        const textMesh = new THREE.Mesh(textGeometry, textMaterial)
        textMesh.position.set(-0.3, 0.5 - index * 0.2, 0.51)
        cube.add(textMesh)
        skillTexts.push(textMesh)
      })
    })

    return () => {
      skillTexts.forEach((text) => {
        text.geometry.dispose()
        ;(text.material as THREE.Material).dispose()
      })
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement)
      }
    }
  }, [skills])

  return <div ref={mountRef} className="w-[300px] h-[300px] mx-auto" />
}

export default RotatingCube

