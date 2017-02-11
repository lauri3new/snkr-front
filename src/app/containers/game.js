import React from "react";
import { connect } from "react-redux";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TwoProducts from "./twoproducts";
import Styles from "./game.css";
import { getData, selectWinner } from "../actions/actions";

// Game container - game involves choosing preferred product, next product is loaded behind
// for smooth transition, fades in from opacity 0.
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeIn: Styles.enterInit,
      opacityZero: Styles.opacityZero,
      firstClick: false
    };
  }

  componentDidMount() {
    if (this.props.products.length === 0) {
      this.props.getInit('random/init');
    }
  }

  componentWillReceiveProps() {
    this.setState({
      fadeIn: Styles.enterActive,
      opacityZero: Styles.opacityZero
    });
  }

  handleFirstClick() {
    this.setState({
      ...this.state,
      firstClick: true
    });
  }

  render() {
    return (
// react css transition group animates twoProducts fade out when they leave DOM
      <div className={Styles.enterInit}>
        <div className={`${Styles.tooltip} ${this.state.firstClick === true ? Styles.opacityZero : null}`}>CLICK ON THE SNEAKERS YOU PREFER</div>
        <ReactCSSTransitionGroup
          transitionName={Styles}
          transitionEnter={false}
          transitionLeaveTimeout={1000}
        >
          { this.props.products.map((twoProducts, i) => {
// key is product ID or i as index when no products loaded.. index is not recommended to use as key
            return (
              <TwoProducts
                key={twoProducts[0] && twoProducts[0].ID ? twoProducts[0].ID : i}
                order={i}
                products={twoProducts}
                styleProp={Styles}
                style={this.state}
                onClickProp={(id) => {
                  this.handleFirstClick();
                  this.props.selectWinner(id);
                }}
              />);
          })}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

Game.propTypes = {
  selectWinner: React.PropTypes.func,
  getInit: React.PropTypes.func,
  products: React.PropTypes.array
};

const mapStateToProps = state => ({
  products: state.products
});

const mapDispatchToProps = (dispatch) => {
  return {
    getInit() {
      dispatch(getData('random/init'));
    },
    selectWinner(id) {
      dispatch(getData('random/' + id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
