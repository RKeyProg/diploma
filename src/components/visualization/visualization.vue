<template lang="pug">
.task-3d__container
  canvas(:class="[className, 'canvas']")
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

export default {
  props: {
    className: {
      type: String,
      default: "",
    },
    objectWay: {
      type: Object,
    },
  },
  data() {
    return {
      renderer: null,
      scene: null,
      camera: null,
      controls: null,
    };
  },
  methods: {
    init: function () {
      const canvas = document.querySelector(`.${this.className}`);
      this.renderer = new THREE.WebGLRenderer({ canvas });

      const renderer = this.renderer;

      const fov = 45;
      const aspect = 2; // the canvas default
      const near = 0.1;
      const far = 100;
      this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
      const camera = this.camera;
      camera.position.set(0, 10, 20);

      this.controls = new OrbitControls(camera, canvas);
      const controls = this.controls;
      controls.target.set(0, 5, 0);
      controls.update();

      this.scene = new THREE.Scene();
      const scene = this.scene;

      scene.background = new THREE.Color("white");

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

      function render() {
        if (resizeRendererToDisplaySize(renderer)) {
          const canvas = renderer.domElement;
          camera.aspect = canvas.clientWidth / canvas.clientHeight;
          camera.updateProjectionMatrix();
        }

        renderer.render(scene, camera);

        requestAnimationFrame(render);
      }

      requestAnimationFrame(render);
    },
    setObject: function () {
      const scene = this.scene;
      const camera = this.camera;
      const controls = this.controls;

      const mtlLoader = new MTLLoader();
      mtlLoader.load(`./assets/Objects/${this.objectWay.mtl}`, (mtl) => {
        mtl.preload();
        const objLoader = new OBJLoader();
        objLoader.setMaterials(mtl);
        objLoader.load(`./assets/Objects/${this.objectWay.obj}`, (root) => {
          scene.add(root);

          // compute the box that contains all the stuff
          // from root and below
          const box = new THREE.Box3().setFromObject(root);

          const boxSize = box.getSize(new THREE.Vector3()).length();
          const boxCenter = box.getCenter(new THREE.Vector3());

          // set the camera to frame the box
          frameArea(boxSize * 1.2, boxSize, boxCenter, camera);

          // update the Trackball controls to handle the new size
          controls.maxDistance = boxSize * 10;
          controls.target.copy(boxCenter);
          controls.update();

          function frameArea(sizeToFitOnScreen, boxSize, boxCenter, camera) {
            const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
            const halfFovY = THREE.MathUtils.degToRad(camera.fov * 0.5);
            const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);
            // compute a unit vector that points in the direction the camera is now
            // in the xz plane from the center of the box
            const direction = new THREE.Vector3()
              .subVectors(camera.position, boxCenter)
              .multiply(new THREE.Vector3(1, 0, 1))
              .normalize();

            // move the camera to a position distance units way from the center
            // in whatever direction the camera was from the center already

            camera.position.copy(
              direction.multiplyScalar(distance).add(boxCenter)
            );
            // pick some near and far values for the frustum that
            // will contain the box.
            camera.near = boxSize / 100;
            camera.far = boxSize * 100;

            camera.updateProjectionMatrix();

            // point the camera to look at the center of the box
            camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z);
          }
        });
      });
    },
    setLight: function () {
      const skyColor = 0xb1e1ff; // light blue
      const groundColor = 0xbdbdbd; // brownish orange
      const intensity = 1;
      const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
      this.scene.add(light);

      {
        const color = this.objectWay.color;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(5, 10, 2);
        this.scene.add(light);
        this.scene.add(light.target);
      }
    },
  },
  watch: {
    objectWay: function () {
      while (this.scene.children.length > 0) {
        this.scene.remove(this.scene.children[0]);
      }
      this.setLight();
      this.setObject();
    },
  },
  mounted() {
    this.init();

    if (this.objectWay) {
      if (this.objectWay.length) {
        this.setLight();
        this.setObject();
      }
    }
  },
};
</script>

<style lang="scss" src="./visualization.scss" scoped></style>
