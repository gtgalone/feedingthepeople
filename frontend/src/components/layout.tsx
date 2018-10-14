import React from 'react'
import { withRouter } from 'next/router'
import { connect } from 'react-redux'

import { setAuthModal, setAuthModalType, setFeedbackModal } from 'src/redux/actions'
import { RootState, ThemeState } from '../@types/types'

interface Props {
  isMobile: boolean
  children?: React.ReactNode
  router?: any
  user: any
  authModal: boolean
  feedbackModal: boolean
  setAuthModal: any
  setFeedbackModal: any
  isWindows: boolean
  authModalType: string
  setAuthModalType: any
  theme: ThemeState
  isServer: boolean
}

interface State {
  mobileHeight: string
  isOpenWelcome: boolean
}

class Layout extends React.Component<Props, State> {
  public constructor(props) {
    super(props)
    this.state = {
      mobileHeight: 'calc(100vh - 44px)',
      isOpenWelcome: false
    }
  }

  public shouldComponentUpdate(nextState) {
    return nextState != this.state
  }

  public render() {
    const { children, router, isWindows } = this.props
    const isIndex = router.pathname == '/'
    const isSearch = router.pathname == '/search'
    return (
      <React.Fragment>
        <div className="d-flex">
          { isIndex ? children :
          <div className="left pb-5">
            <header>
            </header>
            {children}
          </div>
          }
          <div className="desktop w-100 bg-theme-primary position-relative d-flex justify-content-center align-items-center">

          </div>
        </div>
        <style jsx>{`{
          .left {
            width: ${ isWindows ? '397px' : '380px' };
            height: 100vh;
            overflow-y: scroll;
            box-shadow: 0px 0px 1px 1px rgba(0,0,0,0.3);
            z-index: 10;
          }
          .content {
            padding-top: ${ isSearch ? '0' : '410px' };
            height: 100vh;
          }
          .desktop {
            flex: 1;
            height: 100vh;
          }
        }`}</style>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  user: state.user,
  authModal: state.authModal,
  feedbackModal: state.feedbackModal,
  isWindows: state.isWindows,
  authModalType: state.authModalType,
  theme: state.theme
})

const mapDispatchToProps = dispatch => ({
  setAuthModal: (data) => dispatch(setAuthModal(data)),
  setAuthModalType: (data) => dispatch(setAuthModalType(data)),
  setFeedbackModal: (data) => dispatch(setFeedbackModal(data))
})

export default withRouter<any>(connect(mapStateToProps, mapDispatchToProps)(Layout))
