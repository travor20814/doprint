import React, { Component, PropTypes as T } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Radium from 'radium';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

const styles = {
  container: {
    width: '1080px',
    height: '1960px',
    display: 'flex',
    flexWrap: 'Wrap',
  },
};

class App extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Header/>
        <Footer/>
      </div>
    );
  }
}

export default connect(
  state => ({

  }),
)(Radium(App));
