import { React, Suspense} from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Html, useGLTFLoader } from "drei";
import "./App.css";
import Header from "./components/header";
import { Section } from "./components/section";

const Model = () => {
    const gltf = useGLTFLoader('/scene.gltf', true);
    return (
      <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </Suspense>
    )
}

const HTMLContent = () => {
  return (
    <Section factor={1.5} offset={1}> 
      <group position={[0,250,0]}> 
        <mesh position={[0,-35,0]}> 
          <Model/>
        </mesh>
        <Html fullscreen> 
            <div className="container"> 
              <h1 className="title"> Joe Mama </h1>
            </div>
        </Html>
      </group>
    </Section>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <Canvas colorManagement camera={{position:[0,0,120], fov: 70}}>
          <HTMLContent /> 
      </Canvas>
    </>
  );
}
