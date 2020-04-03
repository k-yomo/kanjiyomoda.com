import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider, Styled } from 'theme-ui'
import theme from '../src/constants/theme'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Styled.root>
        <Component {...pageProps} />
      </Styled.root>
      <Footer />
      <style jsx global>{`
        * {
          transition: all 0.1s ease-in;
        }
        html {
          height: 100%;
        }
      `}</style>
    </ThemeProvider>
  )
}
