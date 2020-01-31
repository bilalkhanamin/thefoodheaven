import React, { Component } from "react";
import { createClient } from "contentful";

var client = createClient({
  space: "25ssd66677ja",
  accessToken: "5ExF3ytwPFzwAS3P3EBWX3lUP_SrnVZh-KGueOP5jvg"
});

class Exclusive_dishes extends Component {
  constructor(props) {
    super();
    this.state = {
      dishes: []
    };
  }

  componentDidMount() {
    client.getEntries({ content_type: "dishes" }).then(res => {
      console.log(res.items);
      this.setState({ dishes: res.items });
    });
  }

  render() {
    const { fields } = this.state.dishes;
    console.log(fields);

    const dish = this.state.dishes.map(e => {
      return (
        <div className="card">
          <img
            src={e.fields.profile.fields.file.url}
            alt=""
            className="card_img"
          />
          <div className="card_text">
            <h3>{e.fields.title}</h3>
            <p>{e.fields.description}</p>
            <button className="btn card_btn">Order now</button>
          </div>
        </div>
      );
    });

    return (
      <div className=" exclusive_dishes">
        <div className="container">
          <div className="heading">
            <p>our best</p>
            <h1>Exclusive Dishes</h1>
          </div>
          <div className="cards_container">{dish}</div>
        </div>
      </div>
    );
  }
}

export default Exclusive_dishes;
