import {Group, Geometry, ParticleSystem, ParticleBasicMaterial, SphereGeometry, Mesh, BackSide, CubeGeometry, MeshBasicMaterial, MeshStandardMaterial, PlaneGeometry, RepeatWrapping, VertexColors, Vector3} from 'three';
import * as THREE from 'three';

export default class Stars extends Group {
  constructor() {
    super();

    this.name = 'Stars';

    this.makeParticles();
  }

  
  makeParticles() { 

    let particles = new Geometry();

    let maxX =  0;
    let maxY = 0;
    let maxZ = 0;

    const pMaterial = new ParticleBasicMaterial({
      color: 0xFFFFFF,
      size: 20
    });

    const rmin = 3000;

    const l = 100000;
    for ( let i = 0; i < 10000; i++)
    {
      const halfL = l >> 1;

      const randx = Math.random() * l - halfL
      const randy = Math.random() * l - halfL
      const randz = Math.random() * l - halfL
      
      const r = randx * randx + randy * randy + randz * randz;

      if (r < rmin * rmin)
      {
        continue;
      }

      if ( r > halfL * halfL)
      {
        continue;
      }

      particles.vertices.push(new Vector3(randx,randy,randz));
    }

    console.log(maxX, maxY, maxZ)

    var system = new ParticleSystem(particles, pMaterial);

    this.add(system);

  }
}
