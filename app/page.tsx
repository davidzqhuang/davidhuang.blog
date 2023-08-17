'use client'

import { useRouter } from 'next/navigation'
import css from "../styles/Home.module.css";

import { Canvas } from "@react-three/fiber";
import Flower from "../components/Flower";

export default function Home() {
  const router = useRouter()

  return (
    <div className="p-32">
      <h1 className="text-3xl">davidhuang.blog</h1>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <div 
            className="border-4 border-neutral-100 h-[400px] overflow-y-auto p-4 hover:border-blue-600 hover:border-4" 
            onClick={() => router.push("/posts/firstflower") }>
          <h1 className={css.title}>Experiments in Blender and @react-three/fiber</h1>
          <div onClick={() => router.push("/posts/firstflower") }>
            <Canvas>
              <ambientLight intensity={0.6} />
              <directionalLight color="white" position={[0, 5, 5]} castShadow={true} />
              <mesh>
                <Flower />
              </mesh>
            </Canvas>
          </div>
        </div>
      </div>
    </div>

  );
}