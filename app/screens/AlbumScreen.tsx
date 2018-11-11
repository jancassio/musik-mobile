import React, { Component } from 'react';

import { ScreenView, T11y } from '../components'

interface Style {}
interface Props {
  style: Style
}

class AlbumScreen extends Component<Props, {}> {
  render() {
    return (
      <ScreenView>
        <T11y.Headline>AlbumScreen</T11y.Headline>
      </ScreenView>
    )
  }
}

export default AlbumScreen
