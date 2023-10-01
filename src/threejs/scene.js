import * as THREE from "three";
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import model from '../assets/mini_room_art.glb';

function main() {
  const canvas = document.querySelector("#canvas");
  const renderer = new THREE.WebGLRenderer({canvas, alpha: true});

  const fov = 75;
  const aspect = 2; // the canvas default
  const near = 0.1;
  const far = 5;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 2;

  
  const scene = new THREE.Scene({});
  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 1;
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
  
 
const material = new THREE.MeshBasicMaterial({color: 0x44aa88});
  
  // const loader = new GLTFLoader();

  // loader.load(
  //   model,
  //   function (gltf) {
  //     const miniRoom = new THREE.Mesh(gltf,material);
  //     scene.add(miniRoom.scene);
  //     console.log('carregou')
  //   },
  //   undefined,
  //   function (error) {
  //     console.error(error);
  //   }
  // );
   // greenish blue

  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }
  function render(time) {
    time *= 0.001; // convert time to seconds

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }
    cube.rotation.y = time;

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

export default main;
