
   
import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsFolderName = '_posts'
const postsDirectory = join(process.cwd(), postsFolderName)

const getPostBySlug = (slug) => {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(postsDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
        content,
        slug: realSlug,
        ...data
    }
}

const getAllPosts = () => {
    const slugs = fs.readdirSync(postsDirectory)
    const posts = slugs
        .map((slug) => getPostBySlug(slug))
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    return posts
}

export {
    getPostBySlug,
    getAllPosts
}
