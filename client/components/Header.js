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
        {this.props.headButtons.map((buttons,idx) =>{
          return <Buttons key={idx} buttonStyle='topButtons' link={buttons.path} text={buttons.name}/>
        })
        }
      </div>
    );
  }
}

export default Radium(Header);
