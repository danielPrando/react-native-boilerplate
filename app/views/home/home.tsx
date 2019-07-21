import React, { Component } from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { BirdsList } from '../../components/birds-list/birdsList';
import { NewBird } from '../../components/new-bird/newBird';
import { HomeProps } from './home.interface';

export class Home extends Component<HomeProps> {
  public static navigationOptions = {
    title: 'Create bird',
  };

  public render() {
    return (
      <View style={styles.container}>
        <NewBird />
        <BirdsList />
        <Button title="Go to list" onPress={() => this.props.navigation.push('Birds')}/>
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

export default Home;
