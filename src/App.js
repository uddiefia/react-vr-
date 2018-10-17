import React from 'react';
import {
  asset,
  Pano,
  Text,
  View,
  AmbientLight,
  Sound,
  VrButton
} from 'react-vr';
import Primitives from './Primitives';
import Penholder from './Penholder';

export default class App extends React.Component {
  render() {
    return (
      <View>
          <AmbientLight intensity={2.5}/>
        <Pano source={asset('background.jpeg')}/>
        <Sound 
        loop={true}
        volume={0.7}
        source={{
        wav:asset('office.wav')
        }}
        />
        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [-0.3, 2, -6]}],
          }}>
            My Office
        </Text>
        <Penholder/>
        {/* <Primitives/> */}
      </View>
    );
  }
};

