import React, { Component } from "react";
import "./Tour_list.scss";
// import London from "../../img/london.jpeg";
// import New_york from "../../img/newyork.jpeg";
// import Paris from "../../img/paris.jpeg";
// import Tokyo from "../../img/tokyo.jpeg";

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

        {/* <div className='new-york'>
            <img src={New_york} alt="New-york" />
            <span className="close-btn">
            <i className="fas fa-window-close" />
          </span>
          </div>
          <div className="tour-info">
          <h3>New-York</h3>
          <h4>New-York bridge Tour</h4>

          <h5>
            Info {" "}
            <span>
              <i class="fas fa-caret-square-down"></i>
            </span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            accusantium architecto odio, similique iste cupiditate?
          </p>
          
        </div>


        <div className='paris'>
            <img src={Paris} alt="paris" />
            <span className="close-btn">
            <i className="fas fa-window-close" />
          </span>
          </div>
          <div>
          <div className="tour-info">
          <h3>New-York</h3>
          <h4>Paris Lights Tour</h4>
          <h5>
            Info {" "}
            <span>
              <i class="fas fa-caret-square-down"></i>
            </span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            accusantium architecto odio, similique iste cupiditate?
          </p>
        </div>
        </div>


        <div className='tokyo'>
            <img src={Tokyo} alt="tokyo " />
            <span className="close-btn">
            <i className="fas fa-window-close" />
          </span>
          </div>
          <div className="tour-info">
          <h3>New-York</h3>
          <h4>Tokyo Sushi Tour</h4>
          <h5>
            Info {" "}
            <span>
              <i class="fas fa-caret-square-down"></i>
            </span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            accusantium architecto odio, similique iste cupiditate?
          </p>
        </div> */}
      </section>
    );
  }
}

export default Tour_list;
