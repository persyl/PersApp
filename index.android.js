/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Animated,
  Navigator
} from 'react-native';
//import PerPetterButton from './components/per-petter-button';
import TeaserList from './components/teaser-list';
import Article from './components/article';

class PersApp extends Component {

  constructor(props) {
    super(props);
  }

  renderScene(route, navigator){
    if(route.name == 'article'){
      return <Article kurt='Per' navigator={navigator}/>
    }else if(route.name == 'teaser-list'){
      return <TeaserList navigator={navigator}/>
    }

  }

  render() {
    return (
      <View style={styles.container}>
      <Navigator
        initialRoute={{name:'teaser-list'}}
        renderScene={this.renderScene.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center', alignItems: 'center',
    flex:1, //Needed for ScrollView
    marginTop:40,
    backgroundColor: '#ffffff'
  }
});

AppRegistry.registerComponent('PersApp', () => PersApp);
