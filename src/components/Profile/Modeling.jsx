import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import ModelChar from "./ModelChar";
import { Environment, OrbitControls, } from "@react-three/drei";
import * as THREE from 'three';


const Model = () => {

    return (
        
        <Canvas
        camera={{ fov: 20 }}
        shadowMap
      >
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={1.25} />
        <spotLight position={[10, 10, 10]} angle={Math.PI / 6} castShadow />
        <Suspense fallback={null}>
          <ModelChar />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    );
}

export default Model