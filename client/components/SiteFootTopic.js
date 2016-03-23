import React, { Component, PropTypes as T } from 'react';
import Radium from 'radium';


const styles = {
  topic:{
    fontSize:'14px',
    letterSpacing:'8px',
    color:'#000000',
    marginBottom:'23px',
  },
};

class SiteFootTopic extends Component {
  render() {
    return (
      <h3 style={styles.topic}>{this.props.topic}</h3>
    );
  }
}

export default Radium(SiteFootTopic);
