import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, TouchableHighlight} from 'react-native';

class Teaser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statedDescription: false
    };
    /*setInterval(() => {
      this.setState({statedDescription: !this.state.statedDescription});
    }, 2000);*/
  }

  openArticle() {
    this.props.navigator.push({name: 'article'});
  }

  render() {
    let descriptionStyle = this.state.statedDescription
      ? styles.statedDescription
      : styles.description;
    return (
      <TouchableHighlight onPress={this.openArticle.bind(this)}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{
            uri: this.props.imageSource
          }}></Image>
          <Text style={styles.headline}>{this.props.headline}</Text>
          <Text style={descriptionStyle}>{this.props.description}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2CBD5',
    borderWidth: 2,
    borderColor: '#000000',
    marginBottom: 6
  },
  image: {
    width: 316,
    height: 80,
    marginBottom: 5,
    alignSelf: 'center'
  },
  headline: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingLeft: 4,
    paddingRight: 4
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
    padding: 4
  },
  statedDescription: {
    marginBottom: 10,
    padding: 4,
    //fontStyle:'italic',
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#000"
  }
});

export default Teaser;
