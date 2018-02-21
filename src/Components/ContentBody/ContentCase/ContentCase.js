import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card/Card';
import './ContentCase.css';

class ContentCase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.contentToDisplay,
    };
  }
  render() {
    const display = [];
    const arr = this.state.data;
    for (let i = 0; i < arr.length; i++) {
      const card = <Card value={arr[i]} />;
      console.log('card', card);
      display.push(card);
    }
    return (<div className="ContentCase-outer">
      <div className="ContentCase-header"> <h1>{this.props.author}</h1></div>
      <div className="ContentCase-body" >
        {display}

      </div>
    </div>);
  }
}
ContentCase.defaultProps = {
};
ContentCase.propTypes = {
};
export default ContentCase;
