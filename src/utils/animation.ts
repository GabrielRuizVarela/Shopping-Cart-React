import * as three from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
// import { GLTFLoader } from './GLTFLoader';
import { OrbitControls } from './OrbitControls';
import Phone from '../models/iphone-glb/source/IPHONE12PRO BY DATSKETCH/IP12PRO.fbx';

async function animation() {
  const scene = new three.Scene();
  const loader = new FBXLoader();

  const data = await loader.loadAsync(Phone);
  const phoneModel = data.children[0];
  phoneModel.scale.set(90, 50, 50);
  // phoneModel.rotateZ(90 * Math.PI / 180);
  console.log(phoneModel.scale);

  const canvas = document.getElementById('canvas') || document.body;
  scene.add(phoneModel);
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const fov = 45;
  const aspect = width / height;
  const near = 0.1;
  const far = 1000;
  const camera = new three.PerspectiveCamera(fov, aspect, near, far);

  scene.add(camera);

  const controls = new OrbitControls(camera, canvas);
  // camera.position.set(100, 100, 100);
  camera.position.set(0, 70, 0);
  controls.update();

  const color = 0xFFFFFF;
  const intensity = 0.9;
  const skyColor = 0xB1E1FF; // light blue
  const groundColor = 0xB97A20; // brownish orange
  const light = new three.AmbientLight(color, intensity);
  const light2 = new three.HemisphereLight(skyColor, groundColor, intensity);
  // const light = new three.AmbientLight(color, intensity);

  scene.add(light, light2);
  const renderer = new three.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  canvas.appendChild(renderer.domElement);
  // camera.position.set(0, 0, 100);
  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
}

export default animation;
