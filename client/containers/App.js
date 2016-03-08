import React, { Component, PropTypes as T } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Radium from 'radium';

const styles = {
  container: {
    
  },
};

class App extends Component {
  render() {
    return (
      <div style={styles.container}>

      </div>
    );
  }
}

export default connect(
  state => ({

  }),
)(Radium(App));
