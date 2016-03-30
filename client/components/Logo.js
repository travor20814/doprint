import React, { Component, PropTypes as T } from 'react';
import Radium from 'radium';


const styles = {
  topLogo: {
    width: '60px',
    height: '60px',
    float: 'left',
    marginTop: '32px',
    marginLeft: '48px',
    backgroundColor:'white',
    backgroundImage: `url(${require('../images/brand.png')})`,
    backgroundSize: '60px 60px',
    backgroundRepeat: 'no-repeat',
  },
};

class Logo extends Component {
  render() {
    return (
      <div style={styles[this.props.logoStyle]}/>
    );
  }
}

export default Radium(Logo);
