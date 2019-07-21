import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { BirdsList } from '../../components/birds-list/birdsList';
import { BirdsProps } from './birds.interface';

export class Birds extends Component<BirdsProps> {
  public static navigationOptions = {
    title: 'Birds list',
  };

  public render() {
    return (
      <View style={styles.container}>
        <BirdsList />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    backgroundColor: '#FFF',
    flex: 1,
    padding: 5,
  }
})

export default Birds;
