/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useState, useRef } from "react";
import { useGLTF } from "@react-three/drei";

useGLTF.preload("/model/rpm/model1.gltf");
useGLTF.preload("/model/rpm/model2.gltf");
useGLTF.preload("/model/rpm/model3.gltf");
export default function Model({ active, ...props }) {
  // const model = [useGLTF(m1), useGLTF(m2), useGLTF(m3)];
  const model = [
    useGLTF("/model/rpm/model1.gltf"),
    useGLTF("/model/rpm/model2.gltf"),
    useGLTF("/model/rpm/model3.gltf"),
  ];

  return (
    <group {...props} dispose={null} position={[0, 0, 0]}>
      <primitive object={model[0].nodes.Hips} />
      <skinnedMesh
        geometry={model[0].nodes.Wolf3D_Body.geometry}
        material={model[0].materials.Wolf3D_Body}
        skeleton={model[0].nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={model[0].nodes.Wolf3D_Teeth.geometry}
        material={model[0].materials.Wolf3D_Teeth}
        skeleton={model[0].nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={model[0].nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={model[0].nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeLeft"
        geometry={model[0].nodes.EyeLeft.geometry}
        material={model[0].materials.Wolf3D_Eye}
        skeleton={model[0].nodes.EyeLeft.skeleton}
        morphTargetDictionary={model[0].nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={model[0].nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={model[active.eye].nodes.EyeRight.geometry}
        material={model[active.eye].materials.Wolf3D_Eye}
        skeleton={model[active.eye].nodes.EyeRight.skeleton}
        morphTargetDictionary={model[active.eye].nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={model[active.eye].nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={model[active.bottom].nodes.Wolf3D_Outfit_Bottom.geometry}
        material={model[active.bottom].nodes.Wolf3D_Outfit_Bottom.material}
        // material={model[active.bottom].materials.Wolf3D_Outfit_Bottom}
        skeleton={model[0].nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={model[active.glasses].nodes.Wolf3D_Glasses.geometry}
        material={model[active.glasses].materials.Wolf3D_Glasses}
        skeleton={model[active.glasses].nodes.Wolf3D_Glasses.skeleton}
      />
      <skinnedMesh
        geometry={model[active.top].nodes.Wolf3D_Outfit_Top.geometry}
        material={model[active.top].nodes.Wolf3D_Outfit_Top.material}
        skeleton={model[0].nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
        geometry={model[active.hair].nodes.Wolf3D_Hair.geometry}
        material={model[active.hair].nodes.Wolf3D_Hair.material}
        skeleton={model[0].nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={model[active.footware].nodes.Wolf3D_Outfit_Footwear.geometry}
        material={model[active.footware].nodes.Wolf3D_Outfit_Footwear.material}
        skeleton={model[0].nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={model[0].nodes.Wolf3D_Head.geometry}
        material={model[0].materials.Wolf3D_Skin}
        skeleton={model[0].nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={model[0].nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={model[0].nodes.Wolf3D_Head.morphTargetInfluences}
      />
    </group>
  );
}
