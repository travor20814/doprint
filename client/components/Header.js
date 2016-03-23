import React, { Component, PropTypes as T } from 'react';
import Radium from 'radium';
import Buttons from './Buttons.js'
import Logo from './Logo.js'

const styles = {
  container: {
    width: '1000px',
    height: '100px',
  },
};

class Header extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Logo logoStyle='topLogo'/>
        <Buttons buttonStyle='topButtons' link={this.props.onlineLink} text={this.props.onlineServe}/>
        <Buttons buttonStyle='topButtons' link={this.props.memberLink} text={this.props.members}/>
      </div>
    );
  }
}

export default Radium(Header);
