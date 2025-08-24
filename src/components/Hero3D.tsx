import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei'

function AnimatedSphere() {
  return (
    <Float
      speed={1.4}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <Sphere args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          color="#3B82F6"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0}
        />
      </Sphere>
    </Float>
  )
}

export function Hero3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5] }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Suspense>
      </Canvas>
    </div>
  )
}