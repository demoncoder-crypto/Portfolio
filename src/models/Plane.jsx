import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import planeScene from "../assets/3d/plane.glb";

// 3D Model from: https://sketchfab.com/3d-models/stylized-ww1-plane-c4edeb0e410f46e8a4db320879f0a1db
export function Plane({ isRotating, ...props }) {
  const ref = useRef();
  // Load the 3D model and its animations
  const { scene, animations } = useGLTF(planeScene);
  // Get animation actions associated with the plane
  const { actions } = useAnimations(animations, ref);

  // Use an effect to control the plane's animation based on 'isRotating'
  // Ensure actions and the specific action exist before using them
  useEffect(() => {
    const takeAnimation = actions ? actions["Take 001"] : null;

    if (takeAnimation) {
      if (isRotating) {
        takeAnimation.reset().fadeIn(0.5).play();
      } else {
        takeAnimation.fadeOut(0.5).stop();
      }
    }
  }, [actions, isRotating]);

  return (
    <group {...props} ref={ref}>
      <primitive object={scene} />
    </group>
  );
}
