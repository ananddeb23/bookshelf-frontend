import React from 'react';
import PropTypes from 'prop-types';
import './ContentBody.css';

class ContentBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'no-content',
    };
  }
  render() {
    if (this.state.page === 'no-content') {
      return (
        <div className="ContentBody-layout">
          <div className="ContentBody-noContent">
            <h1> Oops ! No books found! </h1> <br />
            <h1>Import them Now ? </h1>
            <br />
            <br />
            <center><h1><i className="material-icons">refresh</i></h1> </center>
          </div>
        </div>);
    }
    return (
      <div className="ContentBody-layout" />);
  }
}
ContentBody.defaultProps = {
};
ContentBody.propTypes = {
};
export default ContentBody;
