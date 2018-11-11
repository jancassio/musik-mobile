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

interface Props {}

function Root(props: Props) {
  return (
    <Stack  />
  )
}

export default Root;
