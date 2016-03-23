import React, { Component, PropTypes as T } from 'react';
import Radium from 'radium';
import Buttons from './Buttons.js'

const styles = {
  container: {
    width: '1000px',
    height: '40px',
    position: 'absolute',
    bottom: '0',
  },
  navActive:{
    width: '80px',
    height: '1px',
    marginLeft: '48px',
    bottom: '50',
    position: 'absolute',
    backgroundColor: '#ffffff',
  },
};
class Topicfooter extends Component {
  render() {
    //var names = this.props.buttonNames.buttonStrings;

    // <Buttons buttonStyle='footButtons' link={this.props.aboutLink} text={this.props.about}/>
    // <Buttons buttonStyle='footButtons' link={this.props.newsLink} text={this.props.news}/>
    // <Buttons buttonStyle='footButtons' link={this.props.menusLink} text={this.props.menus}/>
    // <Buttons buttonStyle='footButtons' link={this.props.storesLink} text={this.props.stores}/>
    // <Buttons buttonStyle='footButtons' link={this.props.pricesLink} text={this.props.prices}/>
    // <Buttons buttonStyle='footButtons' link={this.props.membersLink} text={this.props.members}/>

    return (
      <div style={styles.container}>
        <div style={styles.navActive}></div>
        {this.props.buttons.map((button,idx) => {
          return <Buttons key={idx} buttonStyle='footButtons' link={button.path} text={button.name} />
        })}

      </div>
    );
  }
}

export default Radium(Topicfooter);
