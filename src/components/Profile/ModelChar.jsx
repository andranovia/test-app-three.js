import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/modelChar.glb');


  const skinnedMeshProps = {
    castShadow: true,
    receiveShadow: true,
  };

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="AvatarRoot">
          <primitive object={nodes.Hips} />
          <primitive object={nodes.neutral_bone} />
          <skinnedMesh
            name="Wolf3D_Avatar"
            geometry={nodes.Wolf3D_Avatar.geometry}
            material={materials.Wolf3D_Avatar}
            skeleton={nodes.Wolf3D_Avatar.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Avatar.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Avatar.morphTargetInfluences}
            {...skinnedMeshProps}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/modelChar.glb');
