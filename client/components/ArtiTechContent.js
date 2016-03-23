import React, { Component, PropTypes as T } from 'react';
import Radium from 'radium';

const styles = {
  contentBlocks:{
    height: '350px',
    flex: '1',
  },
  contentSlogan:{
    height: '34px',
    fontSize:'12px',
    letterSpacing:'8px',
    color: '#9b9b9b',
    marginLeft: '120px',
  },
  contentTopic:{
    height:'33px',
    fontSize: '24px',
    letterSpacing: '8px',
    marginLeft: '118px',
    marginTop: '20px',
    color: '#000000',
  },
  contentContent:{
    height: '288px',
    fontSize: '12px',
    letterSpacing: '4px',
    lineHeight: '24px',
    marginLeft: '48px',
    marginTop: '10px',
  },
};

class ArtiTechContent extends Component {
  render() {
    return (
      <div style={styles.contentBlocks}>
        <div style={styles.contentSlogan}>{this.props.Slogan}</div>
        <div style={styles.contentTopic}>{this.props.Topic}</div>
        <div style={styles.contentContent}>{this.props.Content}</div>
      </div>
          
    );
  }
}

export default Radium(ArtiTechContent);
