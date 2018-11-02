import React from 'react'
import App, { Container } from 'next/app'
import Router from 'next/router'
import Head from 'next/head'
import getConfig from 'next/config'
import { Provider } from 'react-redux'
import moment from 'moment'
import isBefore from 'date-fns/is_before'
import { toast, ToastContainer } from 'react-toastify'

import Layout from 'src/components/layout'
import { mobileRegexp } from 'src/constants/const'
import { withReduxSaga } from 'src/redux/store'
import { setCurrentParcel, setRouteChange, setIsWindows, setUser, setTheme } from 'src/redux/actions'
import { getServerSideToken, getClientSideToken } from 'src/shared/helper/auth-helper'
import { pageview } from 'src/shared/helper/gtag'
import { ThemeState } from 'src/@types/types'

interface Props {
  Component: React.Component
  pageProps: any
  store: any
  theme: ThemeState
}

class MyApp extends App<Props> {
  static async getInitialProps({Component, ctx}) {
    const isServer = ctx.isServer
    const userAgent = ctx.req ? ctx.req.headers['user-agent'] : navigator.userAgent
    const isMobile = mobileRegexp.test(userAgent)
    const isWindows = userAgent.includes('Windows')
    const pathname = ctx.pathname
    const asPath = ctx.asPath

    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    const info: any = isServer ? getServerSideToken(ctx.req) : getClientSideToken()

    if (!ctx.store.getState().user) {
      ctx.store.dispatch(setUser(info.user || null))
    } else if (!info.user || isBefore(moment.unix(info.user.exp).format(), new Date())) {
      ctx.store.dispatch(setUser(null))
    }

    if (ctx.store.getState().isWindows == null) ctx.store.dispatch(setIsWindows(isWindows))
    let theme = getConfig().publicRuntimeConfig.THEME
    if (isServer) {
      ctx.store.dispatch(setTheme(theme))
    }
    return { pageProps, isMobile, pathname, isWindows, theme, info, asPath }
  }

  public componentDidMount() {
    const { pageProps, store, pathname } = (this as any).props
    const currentParcel = pageProps.id ? pageProps.id : (pageProps.results ? `${pageProps.results.parcel_info.longitude} ${pageProps.results.parcel_info.latitude}` : null)
    if (pathname != '/owners') store.dispatch(setCurrentParcel(currentParcel))
  }

  public componentDidUpdate() {
    const { pageProps, store, pathname } = (this as any).props
    const currentParcel = pageProps.id ? pageProps.id : (pageProps.results ? `${pageProps.results.parcel_info.longitude} ${pageProps.results.parcel_info.latitude}` : null)
    if (pathname != '/owners') store.dispatch(setCurrentParcel(currentParcel))
  }

  public render() {
    const { Component, pageProps, store, isMobile, theme, asPath } = (this as any).props
    Router.onRouteChangeStart = (url) => {
      store.dispatch(setRouteChange())
      pageview(url, getConfig().publicRuntimeConfig.GA_TRACKING_ID)

      setTimeout(() => store.dispatch(setRouteChange()), 100)
    }

    return (
      <Container>
        <Head>
          <title>Feeding the People</title>
        </Head>
        <ToastContainer
          position={toast.POSITION.TOP_CENTER}
          autoClose={10000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          draggable
          pauseOnHover
        />
        <Provider store={store}>
          { asPath.split('/')[1] == 'users' ?
          <Component {...pageProps} isMobile={isMobile} theme={theme} />
          :
          <Layout isMobile={isMobile}>
            <Component {...pageProps} isMobile={isMobile} theme={theme} />
          </Layout>
          }
        </Provider>
        <style jsx global>{`
          pre {
            white-space: pre-wrap;       /* Since CSS 2.1 */
            white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
            white-space: -pre-wrap;      /* Opera 4-6 */
            white-space: -o-pre-wrap;    /* Opera 7 */
            word-wrap: break-word;       /* Internet Explorer 5.5+ */
            font-family: inherit !important;
          }
        `}</style>
      </Container>
    )
  }
}

export default withReduxSaga(MyApp)
