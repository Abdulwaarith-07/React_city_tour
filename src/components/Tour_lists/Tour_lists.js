import React, { Component } from "react";
import "./Tour_list.scss";


class Tour_list extends Component {
  // state for handling showInfo
  state = {
    showInfo: false,
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.setState.showInfo,
    });
  };
  render() {
    const { id, city, img, name, info } = this.props.tour;
    // function for removing any tour components
    const { removeTour } = this.props;

    return (
      <section className="container">
        <div className="london">
          <img src={img} alt="London" />
          <span className="close-btn" onClick={() => {
            removeTour(id);}}>
            <i class="fa-solid fa-rectangle-xmark"></i>
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            Info{" "}
            <span onClick={this.handleInfo}>
              <i class="fas fa-caret-square-down"></i>
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>

        
        
      </section>
    );
  }
}

export default Tour_list;
