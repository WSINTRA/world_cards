import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader';
import React, { Component } from "react";
import './App.css';
import island from './lib/model/The_New_World_Env.glb'


class App extends Component {

  componentDidMount() {
  	const skyColor = 0xB1E1FF;  // light blue
    const groundColor = 0xB97A20;  // brownish orange
    const intensity = 1;

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
  	var loader = new GLTFLoader();
  	const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
    scene.add(light);
  	scene.background = new THREE.Color( 0xff0000 );
	loader.load( island, function ( gltf ) {

		scene.add( gltf.scene );

	}, undefined, function ( error ) {

		console.error( error );

	} );

    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    this.mount.appendChild( renderer.domElement );
    camera.position.z = 5;
    
    var animate = function () {
      requestAnimationFrame( animate );

     

      renderer.render( scene, camera );
    };
    animate();
  }
  render() {
    return (
      <div ref={ref => (this.mount = ref)} />
    )
  }
}

export default App;
