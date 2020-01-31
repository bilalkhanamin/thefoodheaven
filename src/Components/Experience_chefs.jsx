import React, { Component } from "react";
import { createClient } from "contentful";
import facebook from "../images/fooven/icons/facebook.svg";
import instagram from "../images/fooven/icons/instagram.svg";
import twitter from "../images/fooven/icons/twitter.svg";


var client = createClient({
  space: "25ssd66677ja",
  accessToken:
    "5ExF3ytwPFzwAS3P3EBWX3lUP_SrnVZh-KGueOP5jvg  "
});
class Experience_chefs extends Component {
  constructor() {
    super();
    this.state = {
      chefs: []
    };
  }

  componentDidMount() {
    client.getEntries({content_type: 'chefs'})
    .then(res =>{
       this.setState({chefs:res.items})
    });
  }

  chef = () =>
    this.state.chefs.map(chef => {
      return (
        <div className="card">
          <img src={chef.fields.profile.fields.file.url} alt="" className="card_img" />
          <div className="card_text ex-chefs-text">
            <h3>{chef.fields.name}</h3>
            <p>{chef.fields.status}</p>
            <div>
              <img src={facebook} alt="" className="social" />
              <img src={twitter} alt="" className="social" />
              <img src={instagram} alt="" className="social" />
            </div>
          </div>
        </div>
      );
    });

  render() {
    return (
      <div className="exp_chefs">
        <div className="container">
          <div className="exp_chefs_heading">
            <p>popular menu</p>
            <h1>our experienced chefs</h1>
          </div>

          <div className="cards_container">{this.chef()}</div>
        </div>
      </div>
    );
  }
}

export default Experience_chefs;
