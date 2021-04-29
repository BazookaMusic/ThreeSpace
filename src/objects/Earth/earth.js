import { Group } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Model from './earth1.glb';

export default class Earth extends Group {
  constructor() {
    const loader = new GLTFLoader();
    
    super();

    this.name = 'Earth';

    loader.load(Model, (gltf)=>{
      this.add(gltf.scene);
    });
  }
}
