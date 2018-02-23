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
      <div className="Card-img-container">  <img className="Card-image" src="https://therabbitfilm.files.wordpress.com/2012/09/hp3.jpg" width="251px" height="210px" z-index="-1" />
        </div>
      <div className="Card-button">
        <button className={this.state.likeStatus} onClick={this.handleupdate}> <i className="material-icons">favorite</i> </button>
      </div>
      <h5 className="Card-text-align">{this.state.bookname}</h5>
      <p className="Card-rating">{this.state.rating}</p>
      <h4 className="Card-text-author">{this.state.author.toUpperCase()}</h4>

            </div>);
  }
}
Card.defaultProps = {


};
Card.propTypes = {
  value: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.shape({
    bookname: PropTypes.string,
    author: PropTypes.string,
    bookid: PropTypes.number,
    likestatus: PropTypes.string,
    rating: PropTypes.number,

  }))).isRequired,
};

// const mapDispatchToProps = dispatch => ({
//   updateLike: bookid => dispatch(updateLike(bookid)),

// });

export default (Card);

