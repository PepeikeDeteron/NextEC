import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { StylesProvider, MuiThemeProvider } from '@material-ui/core/styles'
import 'normalize.css'
import '../styles/globals.css'
import { store } from '@/features/store'
import theme from '@/styles/theme'

const App: React.VFC<AppProps> = ({
  Component,
  pageProps,
}: AppProps): JSX.Element => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Provider store={store}>
        <StylesProvider injectFirst>
          <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
            </ThemeProvider>
          </MuiThemeProvider>
        </StylesProvider>
      </Provider>
    </>
  )
}

export default App
