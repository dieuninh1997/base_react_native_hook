import { Platform, StatusBar } from "react-native";
import Utils from './Utils';

class CommonColors {
  static tomatoTwoStart = '#df2020';
  static tomatoTwoEnd = '#f5471e';
};

class CommonSize{
  static paddingTopHeader = Platform.OS === 'ios'
  ? (Utils.isIphoneX() ? 34 : 20) : StatusBar.currentHeight;
  static headerHeight = 44 + CommonSize.paddingTopHeader;
};

export {
  CommonColors, CommonSize
};
