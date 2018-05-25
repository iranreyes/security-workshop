import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Bootbox.css';

import checkProps from '../../util/check-props';

class Bootbox extends React.PureComponent {
  state = {};

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}

  render() {
    return <div className={classnames(`Bootbox`, this.props.className)}>Bootbox component</div>;
  }
}

Bootbox.propTypes = checkProps({
  className: PropTypes.string
});

Bootbox.defaultProps = {};

export default Bootbox;
