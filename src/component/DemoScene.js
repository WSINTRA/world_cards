import * as THREE from "three";
 
import React from "react";
import React3 from "react-three-renderer";
import ObjectModel from 'react-three-renderer-objects';
import exampleObject from "../../assets/models/island2.obj";
import exampleMaterial from "../../assets/materials/island2.mtl";
 
class DemoScene extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      scene: {}
    };
  }
 
  componentDidMount() {
    const { scene } = this.refs;
    this.setState({ scene });
  }
 
  render() {
    return (
      <React3
        mainCamera="camera"
        width={500}
        height={500}
        alpha={true}
      >
        <scene ref="scene">
          <perspectiveCamera
            key={`perspectiveCamera`}
            name="camera"
            fov={75}
            aspect={1}
            near={0.1}
            far={1000}
            position={new THREE.Vector3(0, 0, 25)}
            lookAt={new THREE.Vector3(0, 0, 0)}
          />
 
          <group name="exampleGroup">
            <ObjectModel
              name="exampleObject"
              material={exampleMaterial}
              model={exampleObject}
              scene={this.state.scene}
              group="exampleGroup"
            />
          </group>
        </scene>
      </React3>
    );
  }
}
 
export default DemoScene;