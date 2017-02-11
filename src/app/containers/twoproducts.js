import React from "react";
import zenscroll from "zenscroll";
import Product from "../components/product";
import Styles from "./twoproducts.css";
import Share from '../components/share';

class TwoProducts extends React.Component {
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
    this.setState({
      clicked: true
    });
    this.state.noClick = setTimeout(() => {
      this.setState({
        clicked: false
      }); }, 1000);
  }

  scrollDown() {
    // TODO: implement scrollDown
    zenscroll.toY(window.innerHeight);
  }

  render() {
    return (
      <div className={Styles.twoProducts} >
        <div className={Styles.share}> <Share /> </div>
        <div className={Styles.versus}> V S </div>
        <div className={Styles.scroll} onClick={() => {this.scrollDown();}}>
          <span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>
        </div>
        {this.props.products.map((product, i) => {
          return (
            <Product
              handleClick={() => { this.handleClick(); }}
              onClickProp={this.props.onClickProp}
              clicked={this.state.clicked}
              noPointer={Styles.noPointer}
              key={i}
              boxStyle={this.props.order === 2 ? Styles.boxIn : Styles.box}
              image={product.ImageLink}
              buyLink={product.buyLink}
              Price={product.Price}
              ID={product.ID}
            />
          );
        })}
      </div>
    );
  }
}

TwoProducts.propTypes = {
  products: React.PropTypes.array,
  order: React.PropTypes.number,
  onClickProp: React.PropTypes.func
};

export default TwoProducts;
