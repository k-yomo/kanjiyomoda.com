import * as React from 'react'
import Document, { DocumentContext, Head, Main, NextScript } from 'next/document'
import { Provider as StyletronProvider } from 'styletron-react'
import { styletron } from '../styletron'
import { Sheet } from 'styletron-engine-atomic'

interface Props {
  stylesheets: Sheet[]
}

export default class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext) {
    const page = ctx.renderPage(App => props => (
      <StyletronProvider value={styletron}>
        <App {...props} />
      </StyletronProvider>
    ))
    const stylesheets = styletron.getStylesheets() || []
    return { ...page, stylesheets }
  }

  public render() {
    return (
      <html>
        <Head>
          {this.props.stylesheets.map((sheet, i) => (
            <style
              className="_styletron_hydrate_"
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.attrs.media}
              data-hydrate={sheet.attrs['data-hydrate']}
              key={i}
            />
          ))}
          <style
            dangerouslySetInnerHTML={{
              __html: `
            body {
              box-sizing: content-box;
              -webkit-box-sizing: border-box;
              width: 100%;
              margin: 0;
            }
           `,
            }}
          />
          {/*<link rel="shortcut icon" href="/favicon.ico" />*/}
          {/*<link rel="manifest" href="/manifest.json" />*/}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
