import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';
import { login } from '../actions';

class AuthScreen extends Component {
  static navigationOptions = {
    header: () => null
  };

  state = {
    email: '',
    password: ''
  }

  onLogin = () => {
    const { email, password } = this.state;
    this.props.login(email, password);
  }

  render() {
    console.log(this.props);

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Auth</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            clearButtonMode="always"
            placeholder="Email"
            autoCorrect={false}
            secureTextEntry={false}
            keyboardType="email-address"
            returnKeyType="next"
            value={this.state.email}
          />
          <TextInput
            style={styles.input}
            clearButtonMode="always"
            placeholder="Password"
            autoCorrect={false}
            secureTextEntry
            returnKeyType="done"
            value={this.state.password}
          />
          <TouchableHighlight
            style={styles.button}
            underlayColor="darkblue"
            onPress={this.onLogin}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 32
  },
  input: {
    padding: 12,
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 16,
    marginBottom: 16,
    color: '#000',
    backgroundColor: '#fff',
    borderColor: '#aaa',
    borderWidth: StyleSheet.hairlineWidth
  },
  button: {
    backgroundColor: 'skyblue',
    padding: 12,
    paddingLeft: 8,
    paddingRight: 8
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
};

function mapStateToProps({ auth }) {
  return { token: auth.token };
}

export default connect(mapStateToProps, { login })(AuthScreen);
