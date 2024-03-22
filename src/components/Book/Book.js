import React from "react";
import "./Book.css";
function Book() {
  return (
    <div className="book">
      <div className="container">
        <div className="left">
          <div className="top-text">
            <h1>Certified and Award Winning Car Repair Service Provider</h1>
          </div>
          <div className="bottom-text">
            <p>
              Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd
              ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo
              rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod
              et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit.
              Sea dolore sanctus sed et. Takimata takimata sanctus sed.
            </p>
          </div>
        </div>
        <div className="bg">
        <div className="right">
          <div className="top-text">
            <h1>Book For A Service</h1>
          </div>
          <div className="colomn">
            <input type="text" placeholder="Your Name" className="input" />
            <input type="text" placeholder="Your Mail" />
            <select>
              <option>Select A Service</option>
              <option>Service 1</option>
              <option>Service 2</option>
              <option>Service 3</option>
            </select>
            <input type="datetime-local" className="day" />
            <input
              type="text"
              placeholder="Special request"
              className="coment"
            />
          </div>
          <button>BOOK NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
