import React, { Component, PropTypes as T } from 'react';
import Radium from 'radium';

const styles = {
  container: {
    width: '1080px',
    height: '300px',
    display: 'flex',
    flex: '1',
    backgroundColor: 'blue',
  },
  foot: {
    width: '1080px',
    height: '100px',
    flex: '1',
    textColor: 'red',
  }
};

class Footer extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div>
          <a style={styles.foot}>footer test</a>
        </div>
      </div>
    );
  }
}

export default Radium(Footer);
