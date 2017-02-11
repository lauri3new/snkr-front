import React from "react";
import { connect } from "react-redux";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactGA from 'react-ga';
import { getData } from "../actions/actions";
import Styles from "./league.css";

class League extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getTable();
    const autoUpdate = setInterval(() => {
      this.props.getTable(); }, 30000);
    this.setState({
      autoUpdate
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.autoUpdate);
  }

  purchase(ID) {
    ReactGA.event({
      category: 'league',
      action: `clicked on purchase ID: ${ID} `
    });
  }

  render() {
    const wentUp = <span className={`glyphicon glyphicon-triangle-top ${Styles.increase}`} />;
    const wentDown = <span className={`glyphicon glyphicon-triangle-bottom ${Styles.decrease}`} />;
    return (
      <div className={`${Styles.body} container}`} >
        <div className={Styles.tooltip}>TOP RATED SNEAKERS</div>
        <ReactCSSTransitionGroup
          transitionName={Styles}
          transitionEnterTimeout={500}
          transitionLeave={false}
        >
          <div className={`${Styles.gallery}`} >
          {this.props.Present.map((product, i) => {
            return (
              <div className={Styles.box} key={product.ID}>
                <div className={Styles.image} style={{ backgroundImage: `url('${product.ImageLink}')` }} >
                <div className={Styles.shading} >
                  <h1 style={{ color: 'white', display: 'inline', width: 'auto'}}>
                    &nbsp;&nbsp;{`${i + 1}`}
                    {i < this.props.PastOrder.indexOf(product.ID) || this.props.PastOrder.indexOf(product.ID) === -1 ? wentUp : null}
                    {i > this.props.PastOrder.indexOf(product.ID) && this.props.PastOrder.indexOf(product.ID) !== -1 ? wentDown : null}
                  </h1>
                  <h2></h2>
                  <a href={`${product.buyLink}`} target="_blank" >
                    <div className={Styles.buy} onClick={() => this.purchase(product.ID)}>
                    {`£ ${Math.ceil(parseFloat(product.Price))}`}
                    </div>
                  </a>
                </div>
                </div>
              </div>
            );
          })}
              </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

League.propTypes = {
  Present: React.PropTypes.array,
  PastOrder: React.PropTypes.array,
  getTable: React.PropTypes.func
};

// mapStateToProps tells React which properties of global state do we want to
// use in this component (users, error obj) and to which local properties we want to map them,
// so that they are accessible in from this.props
const mapStateToProps = state => ({
  Present: state.league.Present,
  Past: state.league.Past,
  PastOrder: state.league.PastOrder
});

const mapDispatchToProps = (dispatch) => {
  return {
    getTable() {
      dispatch(getData(`league`, `LEAGUE`));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(League);
