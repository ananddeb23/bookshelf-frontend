import React from 'react';
import PropTypes from 'prop-types';
import './ContentBody.css';
import ContentCase from './ContentCase/ContentCase';

const urltoreq = '/getData';
const urltoreq2 = '/populateandgetData';
class ContentBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'no-content',
      content: {},
    };
    this.populate = this.populate.bind(this);
  }
  populate() {
    fetch(urltoreq2)
      .then((responserec) => {
        responserec.text().then((records) => {
          console.log(JSON.parse(records));
          const recordsparsed = JSON.parse(records);
          this.setState({ content: recordsparsed, page: 'content' });
        });
      });
  }
  componentDidMount() {
    // this.props.getNotes();
    fetch(urltoreq)
      .then((response) => {
        response.text().then((notes) => {
          // console.log(notes);
          console.log(JSON.parse(notes));
          const notesparsed = JSON.parse(notes);
          // console.log(notesparsed[0]);
          for (const index in notesparsed) {
            console.log(notesparsed[index]);
          }
          if (notesparsed === 'EMPTYDB') {
            this.setState({ page: 'no-content' });
          } else {
            this.setState({ page: 'content', content: notesparsed });
          }
        });
      });
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
            <center><h1><div onClick={this.populate} ><i className="material-icons">refresh</i></div></h1> </center>
          </div>
        </div>);
    }
    const displaycontent = [];

    for (const index in this.state.content) {
      const val = this.state.content[index];
      console.log('val', val);
      const frame1 = <ContentCase contentToDisplay={val} author={index} key={index} />;
      // console.log(this.props.notes[i].title, this.props.notes[i].note);
      displaycontent.push(frame1);
      // console.log(notesparsed[index]);
    }
    return (
      <div className="ContentBody-layout">

        <div>
          {displaycontent}
        </div>

      </div>);
  }
}
ContentBody.defaultProps = {
};
ContentBody.propTypes = {
};
export default ContentBody;
