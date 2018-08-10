import React, { Component } from "react";

import "./Home.css";
import EntityUl from '../components/EntityUl';

export default class Home extends Component {

  state = {
    entity: [],
  }

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    // console.log('query =' + query)
    const entity = [];
    // let price = 0;
    for (let param of query.entries()) {
      entity.push(param[1]);
    }
    // console.log(entity);
    this.setState({entity: entity});
  }

  render() {
    // console.log(this.state.entity)
    return (
      <div className="Home">
               <EntityUl entity={this.state.entity} />
        <div className="lander">
          <h2>KMBot</h2>
          <p>New Kedb application</p>
        </div>
      </div>
    );
  }
}
