import Link from 'next/link'

const getPosts = () => {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js' },
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' },
  ]
}

const PostLink = ({ post }) => (
  <li>
    <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
      <a>{post.title}</a>
    </Link>
  </li>
)

export default () => (
  <div>
    <h1>Sample Blog</h1>
    <ul>
      {getPosts().map((post) => (
        <PostLink key={post.id} post={post} />
      ))}
    </ul>
  </div>
)
