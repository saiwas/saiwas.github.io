// import styles from './styles.css'

const ContainerHeader = () => {
    return (
      <div className="header-section section sticker">
        <div className="container">
            <div className="row" style={{display: "block"}}>
                <div className="col-xs-12">
                    <div className="logo float-left">
                        <a className="non-sticky" href="https://live.hasthemes.com/html/2/sabujcha-preview/sabujcha/index.html"><img src="./Sabujcha - Matcha eCommerce Bootstrap4 Template_files/logo-white.png" alt="" /></a>
                        <a href="https://live.hasthemes.com/html/2/sabujcha-preview/sabujcha/index.html"><img src="./Sabujcha - Matcha eCommerce Bootstrap4 Template_files/logo.png" alt="" className="sticky-logo" /></a>
                    </div>
                    <div className="float-right">
                        <a target="_blank" className="buy-btn top-btn" href="#">Buy Sabujcha</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}

export default ContainerHeader
