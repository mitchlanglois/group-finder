import { withRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'

const Content = withRouter((props) => (
  <div>
    <h1>{ props.router.query.title }</h1>
    <p>This is the blog post content.</p>
  </div>
))

const Page = (props) => (
  <Layout>
    <Content />
  </Layout>
)

const Post = (props) => (
  <Layout>
  </Layout>
)

Post.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}


export default Post