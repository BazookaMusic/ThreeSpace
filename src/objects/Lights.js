import { Group, SpotLight, PointLight, AmbientLight, HemisphereLight, Color } from 'three';

export default class BasicLights extends Group {
  constructor(...args) {
    super(...args);

    const pointLight = new PointLight(0xfffff, 3.4);

    pointLight.position.set(0,0,-1000);

    this.add(pointLight);

  }
}
