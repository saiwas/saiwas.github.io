// import './styles.css'

const HeroHeader = () => {
    return(
        <div className="hero-section section overlay" style={{ backgroundImage: "url(&#39;p2/img/sabujcha/hero-bg.jpg&#39;)" }}>
            <div className="container">
                <div className="row" style={{display: "block"}}>
                    <div className="hero-content text-center col-xs-12">
                        <h1><strong>Sabujcha</strong> Matcha eCommerce Bootstrap4 Template</h1>
                        <p>A perfect eCommerce template for business websites. Nice and clean design.</p>
                        <a className="buy-btn" href="#">View Demo</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroHeader
