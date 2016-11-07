import React from 'react';
import { connect } from 'react-redux';

class ProfilePage extends React.Component {
  static propTypes = {
    user : React.PropTypes.object
  }

  render() {
    return <span>Implement me</span>
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth
  };
}

export default connect(mapStateToProps)(ProfilePage);

