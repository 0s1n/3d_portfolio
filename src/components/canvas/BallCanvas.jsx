import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Sphere,
  OrbitControls,
  Preload,
  useTexture,
  Text,
} from '@react-three/drei';

import CanvasLoader from '../Loader';

function Ball({ imgUrl }) {
  const decal = useTexture(imgUrl);

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 0]} />
      <Sphere scale={15}>
        <meshBasicMaterial
          color="#fff8eb"
          transparent
          opacity={0.5}
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[0, 0, 0]}
          scale={1}
          map={decal}
        />
      </Sphere >
    </>
  );
}

function BallCanvas({ icon, name }) {
  console.log({ icon, name });

  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }} id={name} camera={{ position: [0, 0, 30] }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
        <Text
          fontSize={5}
          position={[0, 20, 0]}
          rotation={[0, 0, 0]}
        >
          {name}
        </Text>
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

export default BallCanvas;