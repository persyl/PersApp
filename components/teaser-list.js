import React, {Component} from 'react';
import {Image, StyleSheet, Text, ScrollView, View} from 'react-native';
import TeaserService from './teaser-service';
import Teaser from './teaser';

class TeaserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teasers: []
    };
  }

  componentWillMount() {
    TeaserService.fetchTeasersResult().then((response) => {
      const teasersWithImages = response.filter((obj) => {
        obj.image = {
          url: 'http://lorempixel.com/320/80/business/'
        };
        return true;
        //obj.image !== null;
      });
      this.setState({teasers: teasersWithImages});
    }).catch((error) => {
      console.log('Kunde inte hämta puffar.', error);
    });

  }

  renderOneTeaser(teaserItem, idx) {
    return (
      <View key={idx}>
        <Teaser
          imageSource={teaserItem.image
          ? teaserItem.image.url
          : 'https://placeholdit.imgix.net/~text?txtsize=33&txt=No%20image&w=316&h=80'}
          headline={teaserItem.title}
          description={teaserItem.body}
          navigator={this.props.navigator}
          />
      </View>
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.teasers.map((item, idx) => this.renderOneTeaser(item, idx))}
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#aaaaaa'
  }
});

export default TeaserList;
