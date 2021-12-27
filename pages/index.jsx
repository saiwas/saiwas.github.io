import {
  Header,
  StickyHeader,
  Footer,
  HeroHeader
} from '../components/Layout'


export default function Home() {
  return (
    <>
        <Header title="Johnny Personal Blog - HOME" />
        <StickyHeader />
        <HeroHeader />
        <div id="demo" className="demo-section section pt-120 pb-70">
            <div className="container">
                <div className="row">
                    <div className="section-style">
                        <div className="section-title col-xs-12 mb-70">
                            <h1>Home page Layouts.</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-6 col-12 mb-50">
                        <div className="demo-item">
                            <a href="https://live.hasthemes.com/html/2/sabujcha-preview/sabujcha/index.html" className="image">
                                <img src="./Sabujcha - Matcha eCommerce Bootstrap4 Template_files/h1.jpg" alt="" />
                                <i className="fa fa-long-arrow-right"></i>
                            </a>
                            <h4 className="title">
                                <a href="https://live.hasthemes.com/html/2/sabujcha-preview/sabujcha/index.html">home version 1</a>
                            </h4>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 col-12 mb-50">
                        <div className="demo-item">
                            <a href="https://live.hasthemes.com/html/2/sabujcha-preview/sabujcha/index-2.html" className="image">
                                <img src="./Sabujcha - Matcha eCommerce Bootstrap4 Template_files/h2.jpg" alt="" />
                                <i className="fa fa-long-arrow-right"></i>
                            </a>
                            <h4 className="title">
                                <a href="https://live.hasthemes.com/html/2/sabujcha-preview/sabujcha/index-2.html">home version 2</a>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="demo-section section pt-120 pb-70">
            <div className="container">
                <div className="row">
                    <div className="section-style">
                        <div className="section-title col-xs-12 mb-70">
                            <h1>Other Layouts.</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-6 col-12 mb-50">
                        <div className="demo-item">
                            <a href="#" className="image">
                            <img src="" alt="" />
                            <i className="fa fa-long-arrow-right"></i>
                            </a>
                            <h4 className="title"><a href="#">about us</a></h4>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 col-12 mb-50">
                        <div className="demo-item">
                            <a href="#" className="image">
                            <img src="" alt="" />
                            <i className="fa fa-long-arrow-right"></i>
                            </a>
                            <h4 className="title"><a href="#">contact us</a></h4>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}
