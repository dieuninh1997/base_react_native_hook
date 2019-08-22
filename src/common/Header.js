import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import { CommonSize, CommonStyles } from '../utils/CommonStyles';
import PropTypes from 'prop-types';

export default class Header extends React.PureComponent {
  static propTypes = {
    left: PropTypes.any,
    center: PropTypes.any,
    right: PropTypes.any,
    showStatusBar: PropTypes.bool,
    headerStyle: PropTypes.object,
    centerStyle: PropTypes.object,
    rightStyle: PropTypes.object,
    leftStyle: PropTypes.object,
  };

  render() {
    const { 
      left, center, right, 
      showStatusBar, headerStyle, 
      centerStyle, rightStyle, leftStyle
    } = this.props;
    return (
      <View style={[styles.container, headerStyle]}>
        {showStatusBar && (
          <StatusBar
            backgroundColor="transparent"
            translucent
            barStyle="light-content"
          />
        )}
        <View style={[styles.center, centerStyle]}>
          {center}
        </View>
        <View style={[styles.left, leftStyle]}>
          {left}
        </View>
        <View style={[styles.right, rightStyle]}>
          {right}
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 0,
    height: CommonSize.headerHeight,
    paddingTop: CommonSize.paddingTopHeader,
  },
  left: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  right: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  center: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    top: CommonSize.paddingTopHeader,
    bottom: 0,
  },
});
