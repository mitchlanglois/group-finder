import Header from './Header';
import Meta from './Meta';

const Page = (props) => (
  <div>
    <Meta />
    <Header />
    <div>{props.children}</div>
  </div>
)

export default Page;
