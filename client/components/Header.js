import React, { Component, PropTypes as T } from 'react';
import Radium from 'radium';

const styles = {
  container: {
    width: '1080px',
    height: '1080px',
    display: 'flex',
  },
  titleString: {
    width: '1080px',
    flex: '1',
    textAlign: 'center',
  },
  title: {
    width: '1080px',
    height: '60px',
    backgroundColor: 'Red',
    flex: '1',
  },

};

class Header extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div>
          <h3 style={styles.titleString}>test</h3>
          <div style={styles.title}></div>
        </div>
      </div>
    );
  }
}

export default Radium(Header);
