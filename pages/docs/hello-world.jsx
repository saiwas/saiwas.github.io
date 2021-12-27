import {
    Header,
    Footer,
    StickyHeader
} from '../../components/Layout'

import {
    Breadcrumb,
    Content
} from '../../components/Post'

const data = {
    title: "BLOG DETAILS STANDARD"
}

export default function Post() {
    return (
        <>
            <Header title={`${data.title} | Johnny Personal Blog`} />
            <StickyHeader title={data.title} TopBtn={() => (<a className="top-btn btn" href="#"> HOME </a>)}/>
            <Breadcrumb title={data.title}/>
            <Content />
            <Footer />
        </>
    )
}