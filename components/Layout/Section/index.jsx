const randomId = (min, max) => {
    return Math.floor(
        Math.random() * (max - min + 1) + min
    )
}

const Title = ({text}) => {
    return(
        <h2 className="section-title col-xs-12 mb-70">
            {text}
        </h2>
    )
}

const ItemCard = ({
    link,
    text,
    backgroupImage,
    style
}) => {
    const bgImage = backgroupImage ? backgroupImage : `/replace-holder-bg/${randomId(1, 3)}.jpeg`
    return(
        <div className="col-md-4 col-sm-6 col-12 mb-50">
            <div className="section-item" style={style}>
                <a href={link} className="background-image">
                    <img className="image" src={bgImage} alt="background image" /> 
                    <i className="fa fa-long-arrow-right"></i>
                </a>
                {text && (
                    <h3 className="card-title">
                        <a href={link}>{text}</a>
                    </h3>
                )}
                
            </div>
        </div>
    )
}

const Section = ({
    index,
    title,
    items = []
}) => {
    return(
        <div className={"section pt-120 pb-70"} style={index % 2 == 0  ? {backgroundColor: "#D4E6F1"} : {}}>
            <div className="container">
                <div className="row">
                    <Title text={title}/>
                </div>
                <div className="row">
                {
                    items.map((item, index) => (<ItemCard key={index} link={item.link} text={item.title} backgroupImage={item.image} style={item.style} />))
                }
                </div>
            </div>
        </div>
    )
}

export default Section
