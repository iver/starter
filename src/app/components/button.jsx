import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './button.scss';

const Button = class extends Component {
  render() {
    const { label } = this.props;
    return (
      <button type="button" className={styles.button}>{label}</button>
    );
  }
};

Button.propTypes = {
  label: PropTypes.string,
};

Button.defaultProps = {
  label: '',
};

export default Button;
