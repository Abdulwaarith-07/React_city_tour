import React, { Component } from "react";
import Tour_lists from "../Tour_lists/Tour_lists";
import "./Tour.scss";
import { tourData } from "../tourData";
// import Tour_list from "../Tour_lists/Tour_lists";

class Tour extends Component {
  state = {
    tours: tourData,
  };

  removeTour = id => {
    const { tours } = this.state;
    const sortedTours = tours.filter(tour_ => tour_.id !== id);
    this.setState ({
      tours: sortedTours
    });
  };
  render() {
    
    const { tours } = this.state;
    return (
      <section className="tourlist">
        {tours.map(tour_ => {
          // eslint-disable-next-line
          return <Tour_lists key={tour_.id} tour={tour_} removeTour= {this.removeTour} />;
        })}
        {/* <Tour_lists /> */}
      </section>
    );
  }
}

export default Tour;
