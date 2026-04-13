"use client";

import { Points, type PointsInstancesProps } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import { useState, useRef, Suspense, useMemo } from "react";
import * as THREE from "three";
import type { Points as PointsType } from "three";

const vertexShader = `
  varying float vDistance;
  void main() {
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vDistance = length(mvPosition.xyz);
    gl_PointSize = 2.0;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `
  uniform float nearFade;
  uniform float farFade;
  varying float vDistance;
  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    if (dot(uv, uv) > 0.25) discard;
    float alpha = smoothstep(nearFade, farFade, vDistance);
    gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);
  }
`;

export const StarBackground = (props: PointsInstancesProps) => {
  const ref = useRef<PointsType | null>(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5001), { radius: 1.2 }) as Float32Array,
  );

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: {
          nearFade: { value: 0.2 },
          farFade: { value: 0.3 },
        },
        vertexShader,
        fragmentShader,
        transparent: true,
        depthWrite: false,
      }),
    []
  );

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        stride={3}
        positions={sphere}
        frustumCulled
        {...props}
      >
        <primitive object={material} attach="material" />
      </Points>
    </group>
  );
};

export const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 -z-30">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);
