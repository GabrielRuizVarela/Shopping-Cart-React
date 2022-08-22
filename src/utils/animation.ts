import * as three from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import { OrbitControls } from './OrbitControls';
import Phone from '../models/iphone-glb/source/IPHONE12PRO BY DATSKETCH/IP12PRO.fbx';

async function animation() {
  const scene = new three.Scene();
  const loader = new FBXLoader();

  const data = await loader.loadAsync(Phone);
  const phoneModel = data.children[0];
  phoneModel.scale.set(90, 50, 50);
  // phoneModel.rotateZ(90 * Math.PI / 180);

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
  camera.position.set(0, 70, 0);
  controls.update();
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.enableDamping = true;
  controls.enableRotate = false;

  const intensity = 0.9;
  const skyColor = 0xb1e1ff; // light blue
  const light = new three.HemisphereLight(skyColor, skyColor, intensity);

  scene.add(light);
  const renderer = new three.WebGLRenderer({
    antialias: true,
    precision: 'highp',
  });
  renderer.autoClearColor = true;
  renderer.autoClearStencil = true;
  renderer.setSize(window.innerWidth, window.innerHeight);
  canvas.appendChild(renderer.domElement);
  function moveCamera() {
    const t = document.getElementById('root')!.getBoundingClientRect().top || 0;
    camera.position.set(0, (t / -300) * 46 + 130, (t / 300) * 142);
    phoneModel.rotateOnAxis(
      new three.Vector3(0, -1, 0),
      (((90 * 1) / 300) * Math.PI) / 180,
    );
  }
  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    moveCamera();
  }
  animate();
}

export default animation;
