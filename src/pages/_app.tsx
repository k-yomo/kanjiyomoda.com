import React, { ReactChildren } from "react"
import { AppProps } from "next/app"
import { ThemeProvider, Styled } from "theme-ui"
import Prism from "@theme-ui/prism"
import theme from "../constants/theme"
import Header from "../components/Header"
import Footer from "../components/Footer"

const components = {
  pre: function render({ children }: { children: ReactChildren }) {
    return <>{children}</>
  },
  code: Prism,
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme} components={components}>
      <Header />
      <Styled.root>
        <Component {...pageProps} />
      </Styled.root>
      <Footer />
      <style jsx global>{`
        html {
          height: 100%;
        }
      `}</style>
    </ThemeProvider>
  )
}
