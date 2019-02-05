import { withRouter } from 'next/router'
import Markdown from 'react-markdown'

export default withRouter((props) => (
  <div>
    <h1>{props.router.query.title}</h1>
    <div className="markdown">
      <Markdown source={`
  This is our blog post. Yes. We can have a [link](/link). And we can have a title as well.

  ### This is a title

  And here's the content.
      `}></Markdown>
    </div>
  </div>
))
