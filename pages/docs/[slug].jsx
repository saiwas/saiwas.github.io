import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Link from 'next/link'

import { Header, Footer, StickyHeader } from '../../components/Layout'
import { Breadcrumb, Content } from '../../components/Post'
import { getPostBySlug, getAllPosts, markdownToHtml } from '../../utils'

import Loading from '../../components/Loading'

const Post = ({ post }) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      {
        router.isFallback
          ? <Loading />
          : (<>
            <Header title={`${post.title} | Johnny Personal Blog`} />
            <StickyHeader title={post.title} TopBtn={() => (<Link href="/"><a className="top-btn btn" >HOME</a></Link>)}/>
            <Breadcrumb title={post.title}/>
            <Content />
            <Footer />
          </>)
      }
    </>
  )
}

/* 
  Fetching Data
*/
export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug)
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts()
  const slugs = posts.map(post => post.slug)
  const paths = slugs.map(slug => ({params: { slug }}))

  return {
    paths,
    fallback: false
  }
}

export default Post
