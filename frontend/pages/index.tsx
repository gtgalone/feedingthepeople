import * as React from 'react'
import throttle from 'lodash/throttle'

interface Props {
  isMobile: boolean
  html: string
}

interface State {
  menus: any[]
}

class Index extends React.Component<Props, State> {
  private ticking: boolean
  private mainImageHeight: any
  private heartRef: any
  private heart2Ref: any
  private menusRef: any

  public constructor(props) {
    super(props)
    this.state = {
      menus: []
    }
    this.mainImageHeight = React.createRef()
    this.heartRef = React.createRef()
    this.heart2Ref = React.createRef()
    this.menusRef = React.createRef()
  }

  public componentDidMount() {
    this.mainImageHeight.current.style.height = window.innerHeight + 'px'
    this.setState({
      menus: window._sharedData.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(0, 5)
    })
    window.addEventListener(
      'scroll',
      throttle(this.handleScroll, 99),
      {
        passive: true,
        capture: true
      }
    )
  }

  public componentWillUnmount() {
    window.removeEventListener(
      'scroll',
      throttle(this.handleScroll, 99)
    )
  }

  public handleScroll = () => {
    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        this.heartRef.current.style.opacity = `${window.scrollY / document.body.clientHeight}`
        this.heartRef.current.style.transform = `rotate(${window.scrollY / document.body.clientHeight * 50}deg) scale(${window.scrollY / document.body.clientHeight + 0.1})`
        this.heart2Ref.current.style.opacity = `${window.scrollY / document.body.clientHeight}`
        this.heart2Ref.current.style.transform = `rotate(-${window.scrollY / document.body.clientHeight * 50}deg) scale(${window.scrollY / document.body.clientHeight + 0.3})`
        this.ticking = false
      })

      this.ticking = true
    }
  }

  public onClickScroll = () => {
    this.menusRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }

  public render() {
    const { isMobile } = this.props
    const { menus } = this.state
    return (
      <div className="w-100">
        <div className="main-image relative">
          <div className="background-shadow absolute"></div>
          <div ref={this.mainImageHeight} className="main-image-contents vh-100 relative white">
            <div className="main-header relative flex flex-column justify-center items-center pa3 ph-5">
              <img width="155" height="90" src="/static/main-logo.png" />
              <span className="main-logo-text helvetica fw4 o-60 ba b--white-60 pa1 shadow-3">Feeding the People</span>
            </div>
            <div className="main-image-text absolute flex flex-wrap">
              <div className="o-60">MSG를 사용하지 않고, <br />천연 조미료만을 사용한 엄마의 반찬</div>
            </div>
            <div onClick={this.onClickScroll} className="flex flex-column items-center justify-center absolute bottom-2 w-100 pointer">
              <i className="arrow-down f2 fw4 fas fa-angle-down o-60"></i>
              <span className="helvetica o-50 f6">S C R O L L</span>
            </div>
          </div>
        </div>
        <section ref={this.menusRef} className="menus pa1 center">
          <h1 className="o-0 f6">시라큐스 한국 음식, 반찬 배달 서비스 - Feeding the People</h1>
          <h3 className="f3 tc">지난 메뉴</h3>
          <div className="flex flex-column flex-row-ns justify-center flex-wrap items-center relative pa1 pa4-ns center">
            { menus.map((v, i) => (
              <div key={i} className="menus-card mb3 mr3-ns ba b--black-10">
                <img src={v.node.display_url} />
                <div className="tc pa3">
                  <pre>{v.node.edge_media_to_caption.edges[0].node.text.replace('시라큐스 한국 음식, 반찬 배달', '').replace('https://feedingthepeople.now.sh', '').trim()}</pre>
                </div>
              </div>
            ))}
            <a href="https://www.instagram.com/choihaelee/" target="blank" className="menus-card link mb3 mr3-ns black ba b--black-10 h-100 tc pa3 dim">
              지난 메뉴 더보기
            </a>
          </div>
        </section>
        <svg className="svg-1 relative" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title" viewBox="0 0 1920 240" id="goop"><title id="title">goop</title><g><path d="M1920,144.532l0,95.468l-1920,0l0,-84c90.5,58 780,52.5 980,52.5c200,0 547.69,-52.5 634,-52.5c86.31,0 152,52.5 306,-11.468Z"></path><path d="M1485.5,159.333c18.37,-1.773 39.53,-7.468 38.5,-11.193c-1.03,-3.726 -15.25,-3.812 -39.5,-1.64c-24.25,2.172 -37.8,5.5 -36,12c1.8,6.5 18.63,2.607 37,0.833Z"></path><path d="M1549.19,145.713c0.34,1.34 -1.57,2.969 -4.24,3.639c-2.68,0.67 -5.13,0.127 -5.46,-1.212c-0.34,-1.34 1.56,-2.969 4.24,-3.639c2.68,-0.67 5.13,-0.127 5.46,1.212Z"></path></g></svg>
        <section className="how-to relative pa1 pa1-ns">
          <h3 className="f3 mb3 tc">이용 방법</h3>
          <p className="lh-copy center tc pa4">
            Feeding the People 은 매 번 음식을 사드시기 번거로우신 분들을 위해 만들어졌습니다.<br />
            MSG를 전혀 쓰지 않고, 천연 조미료만을 사용해 만든 건강한 음식을 매 주 배달해 드립니다.<br />
            ​<br />
            일회용 그릇은 사용하지 않고, 반찬그릇은 $5 Deposit을 받으며 용기 반환시 Refund 해 드립니다.<br />
            금액은 $40이며 매 주 월요일에 배달해 드립니다.
          </p>
          <div className="flex flex-column flex-row-ns justify-center flex-wrap relative items-center">
            <div className="step-card tc br3 mv3 mb0-ns bg-animate hover-bg-gold hover-white">
              <h4>Step 1</h4>
              <div className="f-subheadline">
                <i className="fas fa-phone-volume"></i>
              </div>
              <h2>주문</h2>
              <p className="lh-copy">​(201) 615-8438 로 전화해서 주문해주세요!</p>
            </div>
            <div className="step-card tc br3 ml3-ns mv3 mb0-ns bg-animate hover-bg-gold hover-white">
              <h4>Step 2</h4>
              <div className="f-subheadline">
                <i className="fas fa-people-carry"></i>
              </div>
              <h2>배달</h2>
              <p className="lh-copy">원하는 날짜부터 맛있는 음식을 배달해요.</p>
            </div>
            <div className="step-card tc br3 ml3-ns mv3 mb0-ns bg-animate hover-bg-gold hover-white">
              <h4>Step 3</h4>
              <div className="f-subheadline">
                <i className="far fa-credit-card"></i>
              </div>
              <h2>결제</h2>
              <p className="lh-copy">배달 온 분께 매 주 $40 를 드리면 결제 완료!</p>
            </div>
          </div>
        </section>
        <div className="w-100">
          <svg className="svg-2 relative" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title" viewBox="0 0 1920 240" id="goop"><title id="title">goop</title><g><path d="M1920,146l0,94l-1920,0l0,-77.034c93,94.034 759,60.034 983.5,21.534c224.5,-38.5 456,13.5 594,13.5c138,0 152.14,-11.31 342.5,-52Z"></path></g></svg>
        </div>
        <section className="about w-100 pa4 tc relative">
          <h1 className="mv5 relative">
            Chef of Feeding the People
            <img ref={this.heartRef} src="/static/heart.png" className="absolute heart-1" />
            <img ref={this.heart2Ref} src="/static/heart.png" className="absolute heart-2" />
          </h1>
          <img src="/static/about.jpg" className="w-90 w-50-ns br3" />
          <p className="lh-copy w-50-ns center">
            THE CHEF: HAELEE CHOI (최혜리)
            <br /><br />
            대학생과 중학생인 두 아들을 생각하며 자녀를 먹이는 마음으로, 그리고 매 학기 시라큐스 크리스찬 아카데미를 섬기는 선생님들(30-40명)의 점심 식사를 준비해 온 경험으로 정성껏 음식을 만들고 있습니다.
          </p>
        </section>
        <svg className="svg-3 relative" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title" viewBox="0 0 1920 240" id="goop"><title id="title">goop</title><g><path d="M1920,157.624l0,82.231l-1920,0l0,-106.045c54.693,-9.327 89,45.297 242,56.045c153,10.748 265.5,-30.5 411,-30.5c145.5,0 603,131.5 1267,-1.731Z"></path><path d="M83.5,131.354c-2.5,12.5 68.5,37 148,44.5c79.5,7.5 108.103,0.808 107,-5c-1.537,-8.094 -89.5,-14.365 -136.5,-22.5c-47,-8.135 -116,-29.5 -118.5,-17Z"></path></g></svg>
        <section className="after-use w-100 relative pa1 pa1-ns">
          <h3 className="f3 mb3 tc white">Feeding the People을 추천해요</h3>
          <div className="flex flex-column flex-row-ns flex-wrap justify-center items-center items-start-ns">
            <div className="after-use-card flex flex-column tc br3 mb0-ns grow">
              <div className="flex flex-row o-30">
                <hr />
                <i className="fas fa-quote-left mh3 white"></i>
                <hr />
              </div>
              <p className="f6 lh-copy o-60">유학온 뒤로 제대로 챙겨먹지 못했는데, Feeding the People을 이용한 후 너무 잘먹고 지내고 있어요!</p>
              <div className="flex items-center f6">
                <img src="/static/card-image.jpg" width="32" height="32" className="br-100 mr2" />
                <span className="o-60">심제훈</span>
                <span className="ml1 o-40">@시라큐스 대학교</span>
              </div>
            </div>
            <div className="after-use-card flex flex-column tc br3 ml3-ns mb0-ns grow">
              <div className="flex flex-row o-30">
                <hr />
                <i className="fas fa-quote-left mh3 white"></i>
                <hr />
              </div>
              <p className="f6 lh-copy o-60">매일 외국 음식만 먹다보니 너무 한국 음식 생각이 많이 났는데, 너무 맛있고 손 맛이 좋으셔서 항상 만족하면서 이용하고 있네요.</p>
              <div className="flex items-center f6">
                <img src="/static/card-image.jpg" width="32" height="32" className="br-100 mr2" />
                <span className="o-60">심제훈</span>
                <span className="ml1 o-40">@시라큐스 대학교</span>
              </div>
            </div>
            <div className="after-use-card flex flex-column tc br3 ml3-ns mb0-ns grow">
              <div className="flex flex-row o-30">
                <hr />
                <i className="fas fa-quote-left mh3 white"></i>
                <hr />
              </div>
              <p className="f6 lh-copy o-60">진짜 한국에서 먹었던 음식보다 맛있는 것 같아요! 3년째 이용 중인데 변함없고 항상 맛있어요!</p>
              <div className="flex items-center f6">
                <img src="/static/card-image.jpg" width="32" height="32" className="br-100 mr2" />
                <span className="o-60">심제훈</span>
                <span className="ml1 o-40">@시라큐스 대학교</span>
              </div>
            </div>
          </div>
        </section>
        <style jsx>{`{
          hr {
            border: 1px solid #FFFFFF;
            flex-grow: 1;
            flex-shrink: 0;
            flex-basis: auto;
          }
          section {
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
          }
          .main-logo-text {
            letter-spacing: 4px;
          }
          .svg-1, .svg-2, .svg-3 {
            fill: currentcolor;
            pointer-events: none;
          }
          .svg-1 {
            bottom: -6px;
            color: #72DE93;
          }
          .svg-2 {
            top: 0;
            z-index: 0;
            color: #FFFFFF;
            background-color: #2DBD9D;
          }
          .svg-3 {
            color: #F49842;
            bottom: -6px;
          }
          .main-header {
            z-index: 5
          }
          .main-image {
            background-image: url(/static/main-image.jpg);
            background-size: cover;
            background-position: center;
          }
          .main-image-contents {
            z-index: 2;
          }
          .main-image-text {
            width: 85%;
            font-size: 20px;
            line-height: 1.7 !important;
            top: 50%;
            left: 10%;
            transform: translateY(-50%);
            font-family: 'Noto Serif KR', sans-serif !important;
          }
          .background-shadow {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1;
          }
          @keyframes bounce {
            0%, 16.667%, 33.333%, 53.33%, 67.667% {
              transform: translateY(0);
            }
            26.667% {
              transform: translateY(-30px);
            }
            40% {
              transform: translateY(-15px);
            }
          }
          .arrow-down {
            animation: bounce 3s infinite;
          }
          .menus {
            max-width: 1000px;
          }
          .menus-card {
            max-width: 280px;
            min-width: 280px;
          }
          .about {
            margin: 0 auto;
          }
          .heart-1 , .heart-2{
            transition: all 0.2s;
            opacity: 0;
          }
          .heart-1 {
            top: 0;
            right: ${ isMobile ? 0 : '10vw' };
            transform: rotate(-30deg) scale(0.1);
          }
          .heart-2 {
            top: 60px;
            left: ${ isMobile ? 0 : '10vw' };
            transform: rotate(50deg) scale(0.3);
          }
          .how-to {
            background-color: #2DBD9D;
            background-image: linear-gradient(#72DE93, #2DBD9D);
            color: #FFFFFF;
            z-index: 2;
          }
          .step-card {
            max-width: 280px;
            min-width: 280px;
            box-shadow: 0 18px 48px rgba(0,0,0,0.075);
            border-radius: 0.316rem;
            padding: 1.778rem;
          }
          .after-use {
            background-color: #F4E241;
            background-image: linear-gradient(#F49842, #F4E241);
          }
          .after-use-card {
            max-width: 280px;
            min-width: 280px;
            border-radius: 0.316rem;
            padding: 1.778rem;
          }
        }`}</style>
      </div>
    )
  }
}

export default Index
