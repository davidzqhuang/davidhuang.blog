'use client'

import { useRouter } from 'next/navigation'
import css from "../styles/Home.module.css";

import { useState } from 'react'; // Import useState
import { Canvas } from "@react-three/fiber";
import Flower from "../components/Flower";

export default function Home() {
  const router = useRouter()

  // Define a state variable to check if the Flower model has loaded
  const [isFlowerLoaded, setIsFlowerLoaded] = useState(false);

  return (
    <div className="p-32">
      <h1 className="text-3xl">davidhuang.blog</h1>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <div
          className="border-4 border-neutral-100 h-[400px] overflow-y-auto p-4 hover:border-blue-600 hover:border-4"
          onClick={() => router.push("/posts/firstflower")}>
          <h1 className={css.title}>Experiments in Blender and @react-three/fiber</h1>
          <div onClick={() => router.push("/posts/firstflower")}>
            {
              // If Flower is not loaded, show a loading animation (you can customize this part)
              !isFlowerLoaded && <div className=" text-sky-500">Loading...</div>
            }
            <Canvas>
              <ambientLight intensity={0.6} />
              <directionalLight color="white" position={[0, 5, 5]} castShadow={true} />
              <mesh>
                <Flower onLoaded={() => setIsFlowerLoaded(true)} /> {/* Pass the onLoaded prop here */}
              </mesh>
            </Canvas>
          </div>
        </div>
        <div
          className="border-4 border-neutral-100 h-[400px] overflow-y-auto p-4 hover:border-blue-600 hover:border-4"
          onClick={() => router.push("/posts/3dsplatmodal")}>
          <h1 className={css.title}>3D Gaussian Splatting on Modal Labs (getting the image defined)</h1>
        </div>
      </div>
    </div>
  );
}
