import React, { Component, PropTypes as T } from 'react';
import Radium from 'radium';

const styles = {
  introduce: {
    height: '400px',
    width: '1000px',
    backgroundImage: `url(${require('../images/landing_2.jpg')})`,
    backgroundSize: '1000px 400px',
    backgroundRepeat: 'no-repeat',
  },
  cooperate:{
    width: '1000px',
    height: '400px',
    backgroundImage: `url(${require('../images/landing_3.jpg')})`,
    backgroundSize: '1000px 400px',
    backgroundRepeat: 'no-repeat',
  },
};

class ArticleImages extends Component {
  render() {
    return (
      <div style={styles[this.props.pic]}/>
    );
  }
}

export default Radium(ArticleImages);
