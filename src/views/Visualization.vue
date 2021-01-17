<template lang="pug">
.task-3d
  homeHeader(activePage="2")
  .task-3d__container
    canvas#canvas
</template>

<script>
import homeHeader from "../components/homeHeader";
import * as THREE from "three";

export default {
  name: "Visualization",
  components: {
    homeHeader,
  },
  data() {
    return {
      cube: null,
      renderer: null,
      scene: null,
      camera: null,
    };
  },
  methods: {
    init: function () {
      const canvas = document.querySelector("#canvas");
      const renderer = new THREE.WebGLRenderer({ canvas });

      const fov = 75;
      const aspect = 2; // the canvas default
      const near = 0.1;
      const far = 5;
      const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
      camera.position.z = 2;

      const scene = new THREE.Scene();

      {
        const color = 0xffffff;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        scene.add(light);
      }

      const boxWidth = 1;
      const boxHeight = 1;
      const boxDepth = 1;
      const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

      function makeInstance(geometry, color, x) {
        const material = new THREE.MeshPhongMaterial({ color });

        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        cube.position.x = x;

        return cube;
      }

      const cubes = [
        makeInstance(geometry, 0x44aa88, 0),
        makeInstance(geometry, 0x8844aa, -2),
        makeInstance(geometry, 0xaa8844, 2),
      ];

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
        time *= 0.001;

        if (resizeRendererToDisplaySize(renderer)) {
          const canvas = renderer.domElement;
          camera.aspect = canvas.clientWidth / canvas.clientHeight;
          camera.updateProjectionMatrix();
        }

        cubes.forEach((cube, ndx) => {
          const speed = 1 + ndx * 0.1;
          const rot = time * speed;
          cube.rotation.x = rot;
          cube.rotation.y = rot;
        });

        renderer.render(scene, camera);

        requestAnimationFrame(render);
      }

      requestAnimationFrame(render);
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style lang="scss" scoped>
.task-3d {
  padding: 2.77vh 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}

.task-3d__container {
  padding: 0 2.08vw;
  width: 100%;
  height: 70%;
}

#canvas {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
</style>
