'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import css from "../styles/Home.module.css";

import { useState } from 'react'; // Import useState
import { Canvas } from "@react-three/fiber";
import Flower from "../components/Flower";

import posts from "./posts/posts.json";

import Link from 'next/link'

type Post = {
  id: string;
  title: string;
  date: string;
  icon: string;
}

let postList: Post[] = posts;

export default function Home() {
  const router = useRouter()

  // Define a state variable to check if the Flower model has loaded
  const [isFlowerLoaded, setIsFlowerLoaded] = useState(false);

  return (
    <div className={`p-32 bg-gradient-to-tr from-orange-200 from-5% via-amber-400 via-30% to-pink-200 to-90%`}>
      <h1 className="text-3xl bg-white p-4 rounded-lg border-b-slate-200 shadow-xl">davidhuang.blog</h1>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <div key={"wiki"}
          className="border-4 border-neutral-100 h-[400px] overflow-y-auto p-4 hover:border-blue-600 hover:border-4 cursor-pointer bg-gradient-to-br from-white from-10% to-emerald-100 to-90% shadow-xl space-y-8"
          onClick={() => router.push(`/wiki`)}>
          <h1 className={css.title}>My Wiki</h1>
          <Image
            src={`/images/wiki/wikilogo.jpg`}
            width={400}
            height={400}
            alt={"icon for wiki"}></Image>
        </div>
        {
          postList.map((post) => {
            return <Link key={`link-${post.id}`} href={`/posts/${post.id}`}>
              <div key={post.id}
                className="border-4 border-neutral-100 h-[400px] overflow-y-auto p-4 hover:border-blue-600 hover:border-4 cursor-pointer bg-gradient-to-br from-white from-10% to-emerald-100 to-90% shadow-xl space-y-8">
                <h1 className={css.title}>{post.title}</h1>
                <Image
                  src={`/images/${post.id}/${post.icon}`}
                  width={400}
                  height={400}
                  alt={"icon for post"}></Image>
              </div>
            </Link>
          })
        }
        <div
          className="border-4 border-neutral-100 h-[400px] overflow-y-auto p-4 hover:border-blue-600 hover:border-4 cursor-pointer bg-gradient-to-br from-white from-10% to-emerald-100 to-90% shadow-xl"
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
          className="border-4 border-neutral-100 h-[400px] overflow-y-auto p-4 hover:border-blue-600 hover:border-4 cursor-pointer bg-gradient-to-br from-white from-10% to-emerald-100 to-90% shadow-xl"
          onClick={() => router.push("/posts/3dsplatmodal")}>
          <h1 className={css.title}>3D Gaussian Splatting on Modal Labs (getting the container image defined)</h1>
        </div>
        <div
          className="border-4 border-neutral-100 h-[400px] overflow-y-auto p-4 hover:border-blue-600 hover:border-4 cursor-pointer bg-gradient-to-br from-white from-10% to-emerald-100 to-90% shadow-xl"
          onClick={() => router.push("/posts/trumpindicted")}>
          <h1 className={css.title}>Trump-world Indictments in Fulton County, Visualized</h1>
          <Image
            src="/images/trumpindicted/coverTrumpFulton.jpg"
            width={400}
            height={400}
            alt={"Network of Trump world codefendants and charge"}></Image>
        </div>
        <div
          className="border-4 border-neutral-100 h-[400px] overflow-y-auto p-4 hover:border-blue-600 hover:border-4 cursor-pointer bg-gradient-to-br from-white from-10% to-emerald-100 to-90% shadow-xl"
          onClick={() => router.push("/posts/hackscillm")}>
          <h1 className={css.title}>Hacking Kaggle Science LLM with difflib and more</h1>
          <Image
            src="/images/hackscillm/icon2.jpg"
            width={400}
            height={400}
            alt={"Hacking Kaggle Science LLM with difflib and more"}></Image>
        </div>
        <div
          className="border-4 border-neutral-100 h-[400px] overflow-y-auto p-4 hover:border-blue-600 hover:border-4 cursor-pointer bg-gradient-to-br from-white from-10% to-emerald-100 to-90% shadow-xl"
          onClick={() => router.push("/posts/polfriend")}>
          <h1 className={css.title}>Talk Politics, a little differently</h1>
          <Image
            src="/images/polfriend/icon3.jpg"
            width={400}
            height={400}
            alt={"Talk Politics, Crystallize your Beliefs"}></Image>
        </div>
        <Link href={`/posts/everydayai`}>
          <div
            className="border-4 border-neutral-100 h-[400px] overflow-y-auto p-4 hover:border-blue-600 hover:border-4 cursor-pointer bg-gradient-to-br from-white from-10% to-emerald-100 to-90% shadow-xl">
            <h1 className={css.title}>The everyday use case for Artificial Intelligence, a short piece</h1>
            <Image
              src="/images/everydayai/icon.jpg"
              width={400}
              height={400}
              alt={"The everyday use case for Artificial Intelligence"}></Image>
          </div>
        </Link>
        <Link href={`/posts/irises1`}>
          <div
            className="border-4 border-neutral-100 h-[400px] overflow-y-auto p-4 hover:border-blue-600 hover:border-4 cursor-pointer bg-gradient-to-br from-white from-10% to-emerald-100 to-90% shadow-xl">
            <h1 className={css.title}>Painting Irises</h1>
            <Image
              src="/images/irises1/icon.jpeg"
              width={400}
              height={400}
              alt={"Painting Irises"}></Image>
          </div>
        </Link>

      </div>
    </div>
  );
}

// <div
//   className="border-4 border-neutral-100 h-[400px] overflow-y-auto p-4 hover:border-blue-600 hover:border-4 cursor-pointer bg-gradient-to-br from-white from-10% to-emerald-100 to-90% shadow-xl"
//   onClick={() => router.push("/posts/wayforward")}>
//   <h1 className={css.title}>The Way Forward in the 21st century</h1>
//   <Image
//     src="/images/wayforward/icon.jpg"
//     width={400}
//     height={400}
//     alt={"The Way Forward"}></Image>
// </div>