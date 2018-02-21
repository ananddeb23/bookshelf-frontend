import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
// import { connect } from 'react-redux';
// import { updateLike } from '../redux/actions';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likeStatus: this.props.value.likeStatus,
      bookid: this.props.value.bookid,
      bookname: this.props.value.bookname,
      rating: this.props.value.rating,
      author: this.props.value.author,
    };
    this.handleupdate = this.handleupdate.bind(this);
  }
  handleupdate() {
    const url = '/togglelike/';
    const urltoreq2 = url + this.state.bookid;
    fetch(urltoreq2)
      .then((responserec) => {
        responserec.text().then((records) => {
          console.log((records));
          // const recordsparsed = JSON.parse(records);
          this.setState({ likeStatus: records });
        });
      });
  }
  render() {
    return (<div className="Card-outer">
      <img src="https://images-na.ssl-images-amazon.com/images/I/51VNlzbfpXL._SX331_BO1,204,203,200_.jpg" width="120px" height="40px" />
      <h4 onClick={this.handleupdate}>{this.state.likeStatus}</h4>
      <h4>{this.state.bookid}</h4>
      <h4>{this.state.bookname}</h4>
      <h4>{this.state.rating}</h4>
      <h4>{this.state.author}</h4>

    </div>);
  }
}
Card.defaultProps = {
};
Card.propTypes = {
};

// const mapDispatchToProps = dispatch => ({
//   updateLike: bookid => dispatch(updateLike(bookid)),

// });

export default (Card);

