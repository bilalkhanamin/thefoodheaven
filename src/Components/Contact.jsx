import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact-heading">
          <p>Contact</p>
          <h1>Send us a message</h1>
        </div>

        <form action="/">
          <div className="form-group">
            <input
              type="text"
              placeholder="&#xf2bd; &nbsp; Name"
              name="name"
              required
            />
            <input
              type="email"
              placeholder="&#xf0e0; &nbsp; Email"
              name="email"
              required
            />
            <input
              type="number"
              placeholder=" &#xf1e4; &nbsp; Phone "
              name="phone"
              required
            />
          </div>
          <textarea
            type="text"
            placeholder="&#xf075; &nbsp; Your Message"
            name="message"
            rows="4"
            required
          />
          <br />
          <input type="submit" value="Send Message" className="btn" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
