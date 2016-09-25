import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Article extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <View>
      <Text style={styles.articleText}>Här ska en artikel visas...</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  articleText:{
    fontSize:12,
    color:'red',
    marginTop:40
  }
});

export default Article;
