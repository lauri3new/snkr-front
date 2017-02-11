import React from "react";
import ReactGA from 'react-ga';
import Styles from "./product.css";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  componentWillUnmount() {
    clearTimeout(this.state.noClick);
  }

  handleClick() {
    ReactGA.event({
      category: 'game',
      action: 'clicked on shirt'
    });
    this.setState({
      clicked: true,
      style: `${Styles.noPointer}`
    });
    this.state.noClick = setTimeout(() => {
      this.setState({
        clicked: false
      }); }, 1000);
  }

  purchase(ID) {
    ReactGA.event({
      category: 'game',
      action: `clicked on purchase ID: ${ID} `
    });
  }

  render() {
    return (
      <div
        className={`${this.props.boxStyle} ${this.props.clicked === true ? Styles.noPointer : null}`}
        style={{ backgroundImage: `url("${this.props.image}")` }}
        onClick={() => {
          this.handleClick();
          this.props.handleClick();
          this.props.onClickProp(this.props.ID);
        }}
      >
        <div className={Styles.shading} >
            {this.state.clicked === true ? <span className={`glyphicon glyphicon-heart + ${Styles.heart}`} /> : <div className={Styles.heartEmpty}>o</div>}
          <a href={this.props.buyLink} target="_blank" >
            <button className={Styles.buy} onClick={() => this.purchase(this.props.ID)}> PURCHASE </button>
          </a>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  boxStyle: React.PropTypes.string,
  onClickProp: React.PropTypes.func,
  handleClick: React.PropTypes.func,
  ID: React.PropTypes.number,
  clicked: React.PropTypes.bool,
  image: React.PropTypes.string,
  buyLink: React.PropTypes.string
};

export default Product;
