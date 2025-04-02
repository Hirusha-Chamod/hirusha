import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Robot = () => {
  return (
    <Canvas>
      <ambientLight />
      <directionalLight position={[5, 5, 5]} />
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
};

export default Robot;
