import React, { Component } from "react";


export default class Book_table extends Component {
 


  render() {
    return (
      <div className="table-bg">
        <div className="container">
          <div className="tableHeader">
            <p>reservation</p>
            <h1>Book your Table</h1>
          </div>
          <div className="formContainer">
            <form className="form">
                 <div>
              <input
                type="text"
                name="name"
                id=""
                placeholder="&#xf2bd; &nbsp; Name"
                required
              />
              <input
                type="email"
                name="email"
                id=""
                placeholder="&#xf0e0; &nbsp; Email"
                required
              />
              <input
                type="number"
                name="perons"
                id=""
                placeholder="&#xf0c0; &nbsp;  Persons"
                min="1" max="10"
                required
              />
              <input
                type="number"
                name="tel"
                id=""
                placeholder="&#xf1e4; &nbsp;  Phone number"
                pattern="[0-9]{3} [0-9]{3} [0-9]{4}" 
                min="0" max="99999999999"
                 required
              />
              <input
                type="date"
                onfocus="(this.type='date')"
                name="date"
                id=""
                placeholder="&#xf073; &nbsp; Date"
                 required
              />
              <input
                type="time"
                name="time"
                id=""
                placeholder="&#xf017; &nbsp; Time"
                required
              />
              
              </div>
              <textarea name="" id=""   rows="5" placeholder="&#xf27a; &nbsp;  Note" />
              <input type="submit" onClick={() => this.handlefrom()} value="Book now" href="home" className="btn submit-btn" />
                
               
            </form>
          </div>
        </div>
      </div>
    );
  }
}
