import React, { Component } from 'react';

import { ScreenView, T11y } from '../components'

interface Style {}
interface Props {
  style: Style
}

class SongScreen extends Component<Props, {}> {
  render() {
    return (
      <ScreenView>
        <T11y.Headline>SongScreen</T11y.Headline>
      </ScreenView>
    )
  }
}

export default SongScreen
