import 'src/components/pages/homePage/globeSection/GlobeSection.scss';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

import defineBlock from 'src/utils/defineBlock';

const bem = defineBlock('GlobeSection');

const GlobeSection = () => {
  const globeMountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (globeMountRef.current) {
      var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      var renderer = new THREE.WebGLRenderer();

      renderer.setSize(window.innerWidth, window.innerHeight);

      globeMountRef.current.appendChild(renderer.domElement);

      var geometry = new THREE.BoxGeometry(1, 1, 1);
      var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      var cube = new THREE.Mesh(geometry, material);

      scene.add(cube);
      camera.position.z = 5;

      var animate = function () {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
      };

      animate();

      return () => {
        if (globeMountRef.current) {
          globeMountRef.current.removeChild(renderer.domElement);
        }
      };
    }
    return;
  }, []);

  return (
    <div className={bem()}>
      <div className={bem('title')}>About Me</div>
      <div className={bem('subtitle', '1')}>Traveler / Thrill Seeker /</div>
      <div className={bem('subtitle', '2')}>Littleton, Colorado /</div>
      <div className={bem('bar')}></div>
      <div
        ref={globeMountRef}
        className={bem('globe')}
      ></div>
    </div>
  );
};

export default GlobeSection;
