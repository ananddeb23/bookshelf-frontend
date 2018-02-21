import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends React.Component {
  render() {
    return (<div className="Card-outer">
      <img src="https://images-na.ssl-images-amazon.com/images/I/51VNlzbfpXL._SX331_BO1,204,203,200_.jpg" width="120px" height="40px" />
      <h4>{this.props.value.likeStatus}</h4>
      <h4>{this.props.value.bookname}</h4>
      <h4>{this.props.value.rating}</h4>
      <h4>{this.props.value.author}</h4>

            </div>);
  }
}
Card.defaultProps = {
};
Card.propTypes = {
};
export default Card;
