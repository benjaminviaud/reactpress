const React = require ("react");
const ReactDOM = require ("react-dom");
const { BrowserRouter: Router, Route, Link} = require('react-router-dom');

class Nav extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount(){
    fetch("https://demo.wp-api.org/wp-json/wp/v2/pages")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          items: result
        })
      }
    )
  }

  render(){
    const { items } = this.state;

    return(
      <Router >
        <div>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                 <Link to={"/"+item.slug}>{item.title.rendered}</Link>
              </li>
            ))}
          </ul>
            {items.map((item, index) => (
              <Route
                key={index}
                path={"/"+item.slug}
                exact={true}
                component={() => <div dangerouslySetInnerHTML={ {__html: item.excerpt.rendered} } />}
              />
            ))}
        </div>
      </Router>
    )
  }

}

module.exports = Nav;
