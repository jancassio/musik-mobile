import React from 'react';
import { createStackNavigator } from 'react-navigation';

import {
  AccountRecoverScreen,
  AlbumScreen,
  ArtistScreen,
  FeedScreen,
  ResetPasswordScreen,
  SigninScreen,
  SignupScreen,
  SongScreen,
  UserScreen,
  WelcomeScreen,
} from '../screens';
import { StyleSheet } from 'react-native';
import { Colors } from '../constants/styles';

const Stack = createStackNavigator({
    AccountRecover : { screen: AccountRecoverScreen },
    Album : { screen: AlbumScreen },
    Artist : { screen: ArtistScreen },
    Feed : { screen: FeedScreen },
    ResetPassword : { screen: ResetPasswordScreen },
    Signin : { screen: SigninScreen },
    Signup : { screen: SignupScreen },
    Song : { screen: SongScreen },
    User : { screen: UserScreen },
    Welcome : { screen: WelcomeScreen },
  },
  {
    initialRouteName: 'Welcome',
  }
)

interface Styles {}
interface Props {
  styles: Styles
}

function Root({ styles }: Props) {
  const style = getStyles(styles);
  return (
    <Stack style={style.stack}  />
  )
}

const getStyles = (styles: Styles) => StyleSheet.create({
  stack: {
    backgroundColor: Colors.Primary,
  }
})

export default Root;
