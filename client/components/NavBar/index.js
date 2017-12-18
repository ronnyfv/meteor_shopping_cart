import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import styles from './index.css';
// import { styles as bootstrap } from 'bootstrap/scss/bootstrap.scss';
// import { styles } from './style.scss';

// let navClass;

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.nav_bar_defaults = {
      light: this.props.flat || false,
      dark: this.props.dark || false,
      bgFaded: this.props.bgFaded || false,
      primary : this.props.primary || false
    }

    this.navClass = classNames('navbar', {
      'navbar-light': this.nav_bar_defaults.light,
      'navbar-dark': this.nav_bar_defaults.dark,
      'bg-primary': this.nav_bar_defaults.primary,
      'bg-inverse': this.nav_bar_defaults.inverse,
      'bg-faded': this.nav_bar_defaults.bgFaded
    },this.props.className);
  }

  render() {
    const { links } = this.props;

    return (
      <nav className={this.navClass} style={styles.border}>
        <ul className="nav navbar-nav">
          {links.map((name, index) => {
            return <li className={'nav-item'} key={index}>{name}</li>;
          })}
        </ul>
      </nav>
    );
  }
}

export default NavBar;