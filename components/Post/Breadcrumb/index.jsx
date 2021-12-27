const Breadcrumb = ({
    title = "",
    topic = {
        name: "topic-name",
        slug: "#"
    }
}) => {
    return(
        <div className="breadcrumb-area bg-image-3">
            <div className="breadcrumb-content text-center">
                <h1>{title}</h1>
                <ul>
                    <li><a href={topic.slug}>{topic.name}</a></li>
                    <li className="active">{title.toString().replaceAll(' ', '-')}</li>
                </ul>
            </div>
        </div>
    )
}

export default Breadcrumb
