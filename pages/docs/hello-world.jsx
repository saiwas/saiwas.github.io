import {
    Header,
    Footer,
    StickyHeader
} from '../../components/Layout'

import {
    Breadcrumb,
    Content
} from '../../components/Post'

import Link from 'next/link'

const data = {
    title: "BLOG DETAILS STANDARD"
}

export default function Post() {
    return (
        <>
            <Header title={`${data.title} | Johnny Personal Blog`} />
            <StickyHeader title={data.title} TopBtn={() => (<Link href="/"><a className="top-btn btn" >HOME</a></Link>)}/>
            <Breadcrumb title={data.title}/>
            <Content />
            <Footer />
        </>
    )
}