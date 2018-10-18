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
    const { children } = this.props
    return (
      <React.Fragment>
        <div className="d-flex">
          {children}
        </div>
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
