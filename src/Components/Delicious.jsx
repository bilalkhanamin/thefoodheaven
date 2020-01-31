import React, { Component } from "react";
import { createClient } from "contentful";
 



var client = createClient({
  space: "25ssd66677ja",
  accessToken:
    "5ExF3ytwPFzwAS3P3EBWX3lUP_SrnVZh-KGueOP5jvg  "
});


class Delicious extends Component {
  constructor(props) {
    super();

    this.state = {
      menu: []
  }
}
  componentDidMount() {
    client.getEntries({content_type: 'delicious'})
    .then(res =>{
       this.setState({menu:res.items})
    });
  }
  render() {
  const dishItems = this.state.menu.map(item => {
      return (
        <div className="d_comp">
          <img src={item.fields.profile.fields.file.url} alt="" className="d_img" />
          <div>
            <h2>{item.fields.title}</h2>
            <p>{item.fields.description}</p>
            <h3>{item.fields.price}</h3>
          </div>
        </div>
      );
    });

    return (
      <div className="  delicious">
        <div className="container">
          <div className="slug">
            <p>popular menu</p>
            <h1>our delicious food menu</h1>
          </div>

          <div className="delicious_nav">
            <ul>
              <li>
                <a href="#dinner">Special</a>
              </li>
              <li>
                <a href="#dinner">breakfast</a>
              </li>
              <li>
                <a href="#dinner">lanuch</a>
              </li>
              <li>
                <a href="#dinner">dinner</a>
              </li>
            </ul>
          </div>

          <div className="delicious_menu" id="dinner">
            {dishItems}
          </div>
          <div className="delicious_menu" id="launch">
            {dishItems}
          </div>
        </div>
      </div>
    );
  }
}

export default Delicious;
