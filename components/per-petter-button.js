import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class PerPetterButton extends Component {

  componentWillMount() {
    console.log('will mount');
  }

  componentDidMount() {
    console.log('did mount')
  }

  componentWillReceiveProps(nextProps) {
    console.log('will recive props')
  }

  componentDidUpdate() {

  }

  componentWillUnmount() {

  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    return true;
  }

  render() {
    const buttonAnimationStyle = {
      backgroundColor: this.props.animation.interpolate({
        inputRange:[0, 1],
        outputRange:['rgb(255,0,0)', 'rgb(0,255,0)']
      }),
      opacity: this.props.animation.interpolate({
        inputRange:[0, 1],
        outputRange:[0.8, 1]
      }),
      transform:[
        {
            scale:this.props.animation.interpolate({
              inputRange:[0, 1],
              outputRange:[1.0, 1.3]
            })
        },
        {
          translateY:this.props.animation.interpolate({
            inputRange:[0, 1],
            outputRange:[0.0, -100]
          })
        }
      ],
    };

    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={[
        styles.button, {
          backgroundColor: this.props.pressed
            ? 'rgba(241, 52, 221, 1.0)'
            : 'rgba(140, 254, 25, 1.0)'
        },
        buttonAnimationStyle,
      ]}
        onPress={this.props.onButtonPress}>
        <Text style={styles.text1}>Per</Text>
        <Text style={styles.text2}>Petter</Text>
      </TouchableOpacity>

    );
  }
}

const styles = StyleSheet.create({

  button: {
    width: 200,
    height: 80,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  text1: {
  //  backgroundColor: 'blue',
    flex: 1,
    textAlign: 'center'
  },
  text2: {
    //backgroundColor: 'red',
    flex: 1,
    textAlign: 'center'
  }

});
