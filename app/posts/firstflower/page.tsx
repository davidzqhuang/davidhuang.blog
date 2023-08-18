'use client'
/* eslint-disable react/no-unescaped-entities */

import css from "../../../styles/Post.module.css";

import { Canvas } from "@react-three/fiber";
import Flower from "../../../components/Flower";

export default function Post() {
    return (
        <>
            <div className={css.postContainer}>
                <h1 className={css.postTitle}>Experiments in Blender and react-three fiber</h1>
                <Canvas>
                    <ambientLight intensity={0.6} />
                    <directionalLight color="white" position={[0, 5, 5]} castShadow={true} />
                    <mesh>
                        <Flower />
                    </mesh>
                </Canvas>
                <p className={css.postContent}>This is something I've wanted to do for a long-time, and I hope it is the start of larger and larger 3D art projects. My goal was to sculpt a flower in Blender and render it on this blog site. I ended up using THREE.js and @react-three/fiber to do so.</p>
                <h2 className={css.subheading}>Part 1: Getting something to show up in the browser</h2>
                <p className={css.postContent}>TLDR: harder than expected. It took some noodling around, and I made things doubly difficult for myself by using Next.js and TypeScript. One of my biggest errors cam from not adding the following line at the top of the file the absence of which... bricked everything</p>
                <pre>'use client'</pre>
                <p className={css.postContent}>I also kept running into errors with "extends". For this error, I never quite figured out what was going on, but it was resolved by manically copy-pasting and testing their sample and putting the component which renders to object, "Flower.tsx", into a separate fil. The "Using TypeScript guide" they had was suprisingly not helpful</p>
                <h2 className={css.subheading}>Part 2: Blender</h2>
                <p className={css.postContent}>If I thought THREE.js/React/TypeScript was bad, Blender was crazier. There are just so many buttons -- I was glad I picked a single task. I decided my strategy would be to sculpt (and then copy-paste) a single petal, use a Cone for the body of the flower, and a Cylinder for the stem. Actually doing this was a lot of learning, but I found the following links helpful</p>
                <a className={css.a} href="https://www.youtube.com/watch?time_continue=9&v=VYuUlQO-kYE&embeds_referring_euri=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dblender%2Bsculpting%2Btutorial%26oq%3Dblender%2Bsculpting%2Btutorial%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOTIHCAEQABi&source_ve_path=Mjg2NjY&feature=emb_logo">Sculpting with Blender For Beginners (Tutorial)</a>< br/>
                <a className={css.a} href="https://www.youtube.com/watch?v=coJpAyY79vU">Blender How To Use Subdivide</a>< br/>
                <a className={css.a} href="https://www.youtube.com/watch?v=6jT4K0JpGNs">Texture Painting for Beginners 🖌️ (Blender Tutorial)</a>< br/>
                <a className={css.a} href="https://www.youtube.com/watch?v=qa_1LjeWsJg">UV Unwrapping for Beginners (Blender Tutorial)</a>
                <p className={css.postContent}>Blender is a lot to learn, and not knowing what so many of the buttons do can be pretty demoralizing. But sticking to it and actually watching the tutorials fully is really rewarding. I followed the tutorials to create the flower in these steps: "Sculpting..." - making the flower petals; "... Subdivide" - breaking up the cone to make the body of the flower; "Texture Painting..." and "UV Unwrapping" to adda few highlights to the flower.</p>
                <h2 className={css.subheading}>Part 3: Putting it all together</h2>
                <p className={css.postContent}>This part was actually fairly straightforward: just export to glTF and then load that into THREE.js. I found the following link helpful for exporting to glTF.</p>
                <a className={css.a} href="https://iconscout.com/blog/export-gltf-files-from-blender">A Step-by-Step Guide to Exporting glTF Files From Blender</a>
                <p className={css.postContent}>Loading it into THREE.js actually wasn't too bad. ChatGPT did a lot of it. The code ended up looking like the following.</p>
                <pre>{`import * as React from 'react'
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


export default function Flower(props: JSX.IntrinsicElements['mesh']) {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>(null!)
  
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame((state, delta) => (ref.current.rotation.y += 0.006))

  const gltf = useLoader(GLTFLoader, '/flower6.glb')
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? [1,1,1] : [0.5,0.5,0.5]}
      rotation={[0.7, 0.3, 0]}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <primitive object={gltf.scene} />
    </mesh>
  )
}`}</pre>
                <p className={css.postContent}>For good measure, here is code which renders this component</p>
                <pre>{// eslint-disable-next-line react/no-unescaped-entities
                    `<Canvas>
  <ambientLight intensity={0.6} />
  <directionalLight color="white" position={[0, 5, 5]} castShadow={true} />
  <mesh>
    <Flower />
  </mesh>
</Canvas>`}</pre>
                <h2 className={css.subheading}>Concluding thoughts</h2>
                <p className={css.postContent}>1. Blender is crazy powerful, and I have a lot to learn</p>
                <p className={css.postContent}>2. I'm really excited to make more 3D models.</p>
            </div>
        </>
    )
};