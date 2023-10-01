import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ParallaxAnimation = () => {
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const scrollEnabledRef = useRef(true);
  const modelRef = useRef(null);
  const clockRef = useRef(new THREE.Clock());

  useEffect(() => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let font;
    let model;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 0, 10); 
    camera.lookAt(new THREE.Vector3(0, 0, 0)); 
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0xffffff);
    rendererRef.current = renderer;

    const container = document.getElementById('parallax-container');
    container.appendChild(renderer.domElement);

    const ballRadius = 0.05; 
    const ballMaterial = new THREE.MeshStandardMaterial({
      color: 0x000000,
      roughness: 0.5,
      metalness: 0.5,
    });

    const textMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 }); 

    const fontLoader = new FontLoader();
    fontLoader.load('/fonts/helvetiker_regular.typeface.json', (loadedFont) => {
      font = loadedFont;

      const welcomeGeometry = new TextGeometry('WELCOME', {
        font: font,
        size: 3,
        height: 0.05,
      });

      const welcomeMesh = new THREE.Mesh(welcomeGeometry, textMaterial);
      welcomeMesh.position.set(-7, 6, -45);
      scene.add(welcomeMesh);

      const additionalGeometry = new TextGeometry('Give it a Try!', {
        font: font,
        size: 1.5, 
        height: 0.05,
      });

      const additionalMesh = new THREE.Mesh(additionalGeometry, textMaterial);
      additionalMesh.position.set(-6, 3, -45); 
      scene.add(additionalMesh);

      const animate = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        requestAnimationFrame(animate);

        const scroll = window.scrollY;


        camera.position.z = 10 + scroll * 0.01;

        if (scroll >= 100) {
          if (!welcomeMesh.parent) {
            scene.add(welcomeMesh);
            scene.add(additionalMesh);
          }
        } else {
          if (welcomeMesh.parent) {
            scene.remove(welcomeMesh);
            scene.remove(additionalMesh);
          }
        }

        renderer.render(scene, camera);
      };

      animate();

      const fadeInDuration = 1000;
      let opacity = 1; 
      const targetOpacity = 0; 
      const steps = 100;
      const interval = fadeInDuration / steps;

      const animateOpacity = () => {
        opacity -= targetOpacity / steps; 
        ballMaterial.opacity = opacity;
        textMaterial.opacity = opacity;

        if (opacity > targetOpacity) {
          requestAnimationFrame(animateOpacity);
        }
      };

      animateOpacity();
    });

    const starCount = 500;
    const stars = new THREE.Group();
    for (let i = 0; i < starCount; i++) {
      const ballGeometry = new THREE.SphereGeometry(ballRadius, 16, 16);
      const ball = new THREE.Mesh(ballGeometry, ballMaterial);

      ball.position.x = (Math.random() - 0.5) * 5;
      ball.position.y = (Math.random() - 0.5) * 2 - 1.5;
      ball.position.z = Math.random() * 100 - 50;

      stars.add(ball);
    }

    scene.add(stars);

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(0, 0, -5);
    scene.add(light);

    let gltfLoader = new GLTFLoader();
    gltfLoader.load('/laptop.glb', function (gltf) {
      model = gltf.scene;
      model.scale.set(0.4, 0.4, 0.4);
      model.position.set(-24, 0, -10);

      model.rotation.x = Math.PI / 10;
      model.rotation.y = Math.PI / 4;

      scene.add(model);
      modelRef.current = model;

      window.addEventListener('mousemove', handleMouseMove);
    });

    const handleScroll = () => {
      const scroll = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const atEdge = scroll <= 0 || scroll + windowHeight >= documentHeight;

      scrollEnabledRef.current = atEdge;
    };

    const handleMouseMove = (event) => {
      if (!scrollEnabledRef.current || !model) return;

      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      // Handle mouse move logic here (reverse if needed)
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      scene.remove(stars);
      scene.remove(modelRef.current);
      scene.remove(light);
      renderer.dispose();

      if (rendererRef.current && rendererRef.current.domElement.parentNode) {
        rendererRef.current.domElement.parentNode.removeChild(
          rendererRef.current.domElement
        );
      }

      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const createStarTexture = () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const size = 16;

    canvas.width = size;
    canvas.height = size;

    context.fillStyle = 'white';
    context.fillRect(0, 0, size, size);

    context.beginPath();
    context.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    context.fillStyle = 'black';
    context.fill();

    return new THREE.CanvasTexture(canvas);
  };

  return (
    <div id="parallax-container" style={{ overflowX: 'hidden' }}>
      <div ref={rendererRef}></div>
    </div>
  );
};

export default ParallaxAnimation;
