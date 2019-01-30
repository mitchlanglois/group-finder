import Link from 'next/link'
import Layout from '../components/Layout'

const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{ props.title }</a>
    </Link>
  </li>
)

const Index = () => (
  <Layout>
    <h1>Sample Blog</h1>
    <ul>
      <PostLink id="hello-nextjs" title="Hello Next.js"></PostLink>
      <PostLink id="learn-nextjs" title="Learn Next.js"></PostLink>
      <PostLink id="deploy-nextjs" title="Deploy apps with Zeit"></PostLink>
    </ul>
  </Layout>
)

export default Index