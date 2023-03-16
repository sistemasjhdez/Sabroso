import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, TextInput, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles.js';

class InputSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isValid: false,
    };
  }

  onChangeText(text) {
    if (text !== '') {
      this.setState({value: text, isValid: true});
    } else {
      this.setState({value: text, isValid: false});
    }

    this.props.getText(text);
  }

  getValue() {
    const {value, isValid} = this.state;
    return {value, isValid};
  }

  clean() {
    this.setState({value: '', isValid: false});
  }

  render() {
    const styleInput = {
      ...styles.input,
      ...this.props.styleInput,
    };

    return (
      <View>
        <View style={styles.inputContainer}>
          <TextInput
            value={this.state.value}
            style={styleInput}
            onChangeText={this.onChangeText.bind(this)}
            placeholder={this.props.placeHolder}
            autoCapitalize={'none'}
          />
          <Ionicons name={'search'} size={30} style={styles.iconSearch} />
        </View>
      </View>
    );
  }
}

InputSearch.propTypes = {
  placeHolder: PropTypes.string,
  getText: PropTypes.func,
  styleInput: PropTypes.object,
};

export {InputSearch};
