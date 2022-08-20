import * as three from 'three';
import GUI from 'lil-gui';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { MTLLoader } from './MTLoader';
import { OBJLoader } from './OBJLoader.js';
import Model from '../models/IP12PRO1.obj';
import Material from '../models/IP12PRO1.mtl';
import Phone from '../models/iphone-glb/source/IPHONE12PRO BY DATSKETCH/IP12PRO.fbx';
import { OrbitControls } from './OrbitControls';
import ColorGUIHelper from './ColorGUIHelper';
import { GLTFLoader } from './GLTFLoader';

function animation() {
  // const mtloader = new MTLLoader();
  // const objloader = new OBJLoader();
  const scene = new three.Scene();

  // mtloader.load(Material, (mtl: any) => {
  //   mtl.preload(mtl);
  //   objloader.setMaterials(mtl.materials);
  //   objloader.load(Model, (obj: any) => {
  //     scene.add(obj);
  //   });
  // });

  // const gltfLoader = new GLTFLoader();
  // const url = Phone;
  // gltfLoader.load(url, (gltf: any) => {
  //   const root = gltf.scene;
  //   scene.add(root);
  // });
  const loader = new FBXLoader();
  loader.load(Phone, (object: any) => {
    scene.add(object);
    // const root = object.scene;
    // scene.add(root);
  });

  const fov = 75;
  const aspect = 1;
  const near = 0.1;
  const far = 100;
  const camera = new three.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(10, 90, 10);

  const controls = new OrbitControls(camera, document.body);
  controls.target.set(0, 5, 0);
  controls.update();

  const color = 0xFFFFFF;
  const intensity = 0.9;
  const skyColor = 0xB1E1FF; // light blue
  const groundColor = 0xB97A20; // brownish orange
  const light = new three.AmbientLight(color, intensity);
  const light2 = new three.HemisphereLight(skyColor, groundColor, intensity);
  // const light = new three.AmbientLight(color, intensity);

  scene.add(light, light2);
  const gui = new GUI();
  gui.addColor(new ColorGUIHelper(light, 'color'), 'value').name('color');
  gui.add(light, 'intensity', 0, 2, 0.01);
  // color = materialColor * light.color * light.intensity;

  // loader.load(Model, (gltf) => {
  //   scene.add(gltf.scene);
  // }, undefined, (error) => {
  //   console.error(error);
  // });
  const renderer = new three.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  // renderer.render(scene, camera);
  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
}

export default animation;
