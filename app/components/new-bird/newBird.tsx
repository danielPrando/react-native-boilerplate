import React, { Component } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { connect } from 'react-redux'
import { newBird } from './../../store/birds/birds.actions';
import { NewBirdProps, NewBirdState } from './newBird.interface';

export class NewBirdClass extends Component<NewBirdProps, NewBirdState> {
  constructor(props: Readonly<NewBirdProps>) {
    super(props);
    this.state = {
      bird: {
        birdId: '',
        species: '',
        name: '',
      },
    }
  }

  public render() {
    return (
      <View>
        <Text style={styles.text}>Id</Text>
        <TextInput style={styles.input}
          onChangeText={(text) => { this.setState(state => ({ bird: { ...state.bird, birdId: text } })) }}
          value={this.state.bird.birdId} />

        <Text style={styles.text}>Espécie</Text>
        <TextInput style={styles.input}
          onChangeText={(text) => { this.setState(state => ({ bird: { ...state.bird, species: text } })) }}
          value={this.state.bird.species} />

        <Text style={styles.text}>Nome</Text>
        <TextInput style={styles.input}
          onChangeText={(text) => { this.setState(state => ({ bird: { ...state.bird, name: text } })) }}
          value={this.state.bird.name} />
        <Button
          onPress={this.register}
          title="Cadastrar"
        />
      </View>
    )
  }

  private register = () => {
    this.props.newBird(this.state.bird);
    this.setState({
      bird: {
        birdId: '',
        species: '',
        name: '',
      }
    });
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    alignItems: 'center',
    height: 35,
    color: '#333',
    borderWidth: 0.5,
    borderColor: '#ddd',
    marginHorizontal: 5,
    justifyContent: 'center',
    marginBottom: 10,
  },
  text: {
    marginBottom: 4,
    color: '#333',
    marginHorizontal: 5,
  }
});

const mapDispatchToProps = {
  newBird,
}

export const NewBird = connect(null, mapDispatchToProps)(NewBirdClass)
