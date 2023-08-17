/* eslint-disable */
import * as React from 'react'
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'

// @ts-ignore
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
}