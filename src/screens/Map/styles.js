import {StyleSheet, Dimensions, Platform} from 'react-native';
import {WHITE, YELLOW} from '../../utils/colors';
const heightScreen = Dimensions.get('window').height;
const widthScreen = Dimensions.get('window').width;
const isiOS = Platform.OS === 'ios';

const Styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  headerBack: {
    backgroundColor: YELLOW,
    width: '100%',
    height: 70,
    alignItems: 'center',
    textAlign: 'center',
  },
  title: {
    color: WHITE,
    fontFamily: 'Century Gothic',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
    width: widthScreen - 100,
  },
  contentIconHome: {
    marginTop: isiOS ? 25 : 10,
    height: heightScreen * 0.07,
    backgroundColor: YELLOW,
    width: '100%',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  iconPress: {
    height: 30,
    width: 30,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default Styles;
