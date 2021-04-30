import { Group } from 'three';
import Earth from './Earth/earth.js';
import BasicLights from './Lights.js';
import Stars from './Stars/stars.js';

export default class SeedScene extends Group {
  constructor() {
    super();
    
    this.earth = new Earth();
    this.lights = new BasicLights();
    const stars = new Stars();

    this.add(this.earth, this.lights, stars);
  }

  update(timeStamp) {
    this.earth.rotation.y =  timeStamp / 10000;
    this.lights.rotation.y = timeStamp / (10000 * 365);
    //this.rotation.y = timeStamp / 10000;
  }
}