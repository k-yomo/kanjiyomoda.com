import React from 'react'
import App from 'next/app'
import { Provider as StyletronProvider } from 'styletron-react'
import { styletron, debug } from '../styletron'
import {
  BaseProvider,
  LightThemeMove,
} from 'baseui'

export default class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props
    return (
      <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
        <BaseProvider theme={LightThemeMove}>
          <Component {...pageProps} />
        </BaseProvider>
      </StyletronProvider>
    )
  }
}
