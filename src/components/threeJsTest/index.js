import React, { useLayoutEffect } from "react";
import * as THREE from "three";

function SpinningCube() {
  useLayoutEffect(() => {
    const container = document.querySelector("#three-container");

    //Create a THREE Application

    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.01,
      10
    );
    camera.position.z = 1;

    const scene = new THREE.Scene();

    const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    const material = new THREE.MeshNormalMaterial();

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(200, 200);

    // this.refs.anchor.appendChild(renderer.domElement);

    function animate() {
      requestAnimationFrame(animate);

      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.02;

      renderer.render(scene, camera);
      renderer.render(scene, camera);
    }
    animate();

    //Add the canvas that THREE automatically created for you to the HTML document
    container.appendChild(renderer.domElement);
  });
  return <div id="three-container"></div>;
}
export default SpinningCube;
