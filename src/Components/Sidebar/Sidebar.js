import React from 'react';
import PropTypes from 'prop-types';
import './Sidebar.css';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="Sidebar-black">

        <div >    <br /><center> <strong><h1>Bs </h1></strong></center> </div>
        <div> <center> <i className="material-icons">refresh</i> </center>
          <br />
          <div> <center><i className="material-icons">settings</i>  </center></div>
          <br />
        </div>

      </div>);
  }
}
Sidebar.defaultProps = {
};
Sidebar.propTypes = {
};
export default Sidebar;
