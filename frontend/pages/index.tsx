import * as React from 'react'

class Index extends React.Component {
  public render() {
    return (
      <div>
        <div className="main-image position-relative">
          <div className="main-header position-relative d-flex justify-content-center p-3 px-5">
            <img height="90" src="/static/main-logo.png" />
          </div>
          <div className="background-shadow position-absolute"></div>
          <div className="main-image-text position-absolute d-flex flex-wrap">
            <div className="text-white-6">MSG를 사용하지 않고, <br />천연 조미료만을 사용한 엄마의 반찬</div>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-center p-3" style={{ minWidth: '50%'}}>
          <div className="card m-1" style={{ width: '18rem' }}>
            <img className="card-img-top" src="/static/card-image.jpg" height="180" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">영어 스터디 모집</h5>
              <p className="card-text">일상생활에 필요한 영어를</p>
              <div className="text-center">
                <a href="#" className="btn btn-info">살펴보기</a>
              </div>
            </div>
          </div>
          <div className="card m-1" style={{ width: '18rem' }}>
            <img className="card-img-top" src="/static/card-image.jpg" height="180" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">회화 스터디 같이하실분</h5>
              <p className="card-text">일상생활에 필요한 영어를</p>
              <div className="text-center">
                <a href="#" className="btn btn-info">살펴보기</a>
              </div>
            </div>
          </div>
          <div className="card m-1" style={{ width: '18rem' }}>
            <img className="card-img-top" src="/static/card-image.jpg" height="180" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">개발 스터디 합시다</h5>
              <p className="card-text">일상생활에 필요한 영어를</p>
              <div className="text-center">
                <a href="#" className="btn btn-info">살펴보기</a>
              </div>
            </div>
          </div>
          <div className="card m-1" style={{ width: '18rem' }}>
            <img className="card-img-top" src="/static/card-image.jpg" height="180" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">토플 스터디 (120점 목표)</h5>
              <p className="card-text">일상생활에 필요한 영어를</p>
              <div className="text-center">
                <a href="#" className="btn btn-info">살펴보기</a>
              </div>
            </div>
          </div>
          <div className="card m-1" style={{ width: '18rem' }}>
            <img className="card-img-top" src="/static/card-image.jpg" height="180" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">개발 스터디 해요</h5>
              <p className="card-text">일상생활에 필요한 영어를</p>
              <div className="text-center">
                <a href="#" className="btn btn-info">살펴보기</a>
              </div>
            </div>
          </div>
          <div className="card m-1" style={{ width: '18rem' }}>
            <img className="card-img-top" src="/static/card-image.jpg" height="180" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">토익 스터디 할 사람</h5>
              <p className="card-text">일상생활에 필요한 영어를</p>
              <div className="text-center">
                <a href="#" className="btn btn-info">살펴보기</a>
              </div>
            </div>
          </div>
          <div className="card m-1" style={{ width: '18rem' }}>
            <img className="card-img-top" src="/static/card-image.jpg" height="180" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">수학 스터디 모집해요</h5>
              <p className="card-text">일상생활에 필요한 영어를</p>
              <div className="text-center">
                <a href="#" className="btn btn-info">살펴보기</a>
              </div>
            </div>
          </div>
          <div className="card m-1" style={{ width: '18rem' }}>
            <img className="card-img-top" src="/static/card-image.jpg" height="180" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">개발 스터디 같이 해보실 분</h5>
              <p className="card-text">일상생활에 필요한 영어를</p>
              <div className="text-center">
                <a href="#" className="btn btn-info">살펴보기</a>
              </div>
            </div>
          </div>
          <div className="card m-1" style={{ width: '18rem' }}>
            <img className="card-img-top" src="/static/card-image.jpg" height="180" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">회화 스터디 할까요?</h5>
              <p className="card-text">일상생활에 필요한 영어를</p>
              <div className="text-center">
                <a href="#" className="btn btn-info">살펴보기</a>
              </div>
            </div>
          </div>
          <div className="card m-1" style={{ width: '18rem' }}>
            <img className="card-img-top" src="/static/card-image.jpg" height="180" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">개발 스터디</h5>
              <p className="card-text">일상생활에 필요한 영어를</p>
              <div className="text-center">
                <a href="#" className="btn btn-info">살펴보기</a>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`{
          .main-header {
            z-index: 5
          }
          .main-image {
            height: 500px;
            background-image: url(/static/main-image.jpg);
            background-size: cover;
            background-position: center;
          }
          .main-image-text {
            width: 85%;
            z-index: 5;
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
        }`}</style>
      </div>
    )
  }
}

export default Index
