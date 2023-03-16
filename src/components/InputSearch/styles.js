import {StyleSheet, Dimensions} from 'react-native';
import {WHITE, GRAY} from '../../utils/colors';

const Styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    width: Dimensions.get('window').width - 50,
    backgroundColor: WHITE,
    borderRadius: 10,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  input: {
    height: 52,
    width: Dimensions.get('window').width - 80,
    borderRadius: 10,
    backgroundColor: WHITE,
    fontSize: 20,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0.02,
    color: GRAY,
    textAlign: 'left',
  },
  iconSearch: {
    marginTop: 0,
  },
});

export default Styles;
