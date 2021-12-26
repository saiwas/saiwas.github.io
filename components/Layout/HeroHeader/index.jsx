const HeroHeader = () => {
    return(
        <div className="hero-section section overlay">
            <div className="container">
                <div className="row" style={{display: "block"}}>
                    <div className="hero-content text-center col-xs-12">
                        <h1><strong>Johnny Zhang</strong> A Lazy Fullstack Engineer</h1>
                        <p>
                            Be familiar with React/Nodejs/Ruby/Golang etc development language.<br />
                            Be familiar with some devops skills, like the github, docker, k8s, jenkins pipline, terraform, ansible etc.
                        </p>
                        {/* <a className="buy-btn" href="#"></a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroHeader
