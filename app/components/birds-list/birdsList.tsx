import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux';
import { api } from '../../service';
import { Bird } from '../../store/birds/birds.types';
import { BirdsListProps } from './birdsList.interface';

export class BirdsListClass extends Component<BirdsListProps> {
  public render() {
    return (
      <View style={styles.global}>
        {this.props.birdsList.map((bird: Bird) =>
          <View key={bird.birdId} >
            <Text style={styles.view}>
              {bird.birdId}) {bird.name} - {bird.species}
            </Text>
          </View>)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  global: {
    marginTop: 20,
  },
  view: {
    marginBottom: 4,
    color: '#333',
    textAlign: 'center',
  },
});

const mapStateToProps = (store: any) => ({
  birdsList: store.birdsState.birds,
})

const mapDispatchToProps = {

}

export const BirdsList = connect(mapStateToProps, mapDispatchToProps)(BirdsListClass);
