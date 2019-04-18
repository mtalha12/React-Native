/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import HomeComponent from "./Container/Home";
import FlexBoxComponent from "./Components/FlexBox";
import ImagesFlexComponent from "./Components/ImageFlexBox";
import RespondToTouchesComponent from "./Components/RespondToTouches";
import TouchableHighlightComponent from "./Components/TouchableHighlight";
import ScrollingViewComponent from './Container/ScrollingView'; 
import FlatListComponent from './Components/FlatList';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ScrollingViewComponent);
