import {GLTFModel,AmbientLight,DirectionLight} from 'react-3d-viewer'
import React, { Component } from 'react';


class worldBox extends Component {

render(){
  return(
    <div>
      <GLTFModel src="./src/lib/model/island2.gltf">
        <AmbientLight color={0xffffff}/>
        <DirectionLight color={0xffffff} position={{x:100,y:200,z:100}}/>
        <DirectionLight color={0xff00ff} position={{x:-100,y:200,z:-100}}/>
      </GLTFModel>
    </div>
  )
}
}

export default worldBox;


