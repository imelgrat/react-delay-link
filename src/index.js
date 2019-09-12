/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

/**
 * A React component to trigger Router links with a delay
 */
export class DelayLink extends React.Component {
  /**
   * Constructor. Sets up basic properties and calls parent constructor
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.timeout = null;
    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * Component is about to unmount from the DOM
   */
  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  /**
   * Click (and keyboard) event handler.
   * Invokes the function specified in the clickAction property.
   * Then, update browser history (provided by React Router) after a given delay.
   *
   * @param {Event} e
   */
  handleClick(e) {
    const {
      to, clickAction, history,
    } = this.props;
    let { delay, replace } = this.props;

    delay = parseInt(delay, 10);
    replace = !!replace;

    if (clickAction instanceof Function) {
      clickAction();
    }

    if (e.defaultPrevented) {
      return;
    }
    e.preventDefault();

    this.timeout = setTimeout(() => {
      if (replace) {
        history.push.replace(to);
      } else {
        history.push(to);
      }
    }, delay);
  }

  /**
   * Render method. Wraps the component's children around a DIV and sets up event handlers
   */
  render() {
    const props = Object.assign({}, this.props);
    const { children } = this.props;
    delete props.delay;
    return (
      <Router history={history}>
      <div role="link" onClick={this.handleClick} onKeyPress={this.handleClick}>{children}</div>
      </Router>
    );
  }
}

DelayLink.propTypes = {
  /**
   * Milliseconds to wait before registering the click.
   */
  delay: PropTypes.number,
  /**
   * Whether to replace the current URL with the link's or push a new one.
   */
  replace: PropTypes.bool,
  /**
   * The Link's URL
   */
  to: PropTypes.string,
  /**
   * The history object (provided by React Router)
   */
  history: PropTypes.oneOfType([PropTypes.object]),
  /**
   * The Component's child elements (provided by React)
  */
  children: PropTypes.oneOfType([PropTypes.element]),
  /**
   * An optional function to invoke before setting up the timeout
  */
  clickAction: PropTypes.oneOfType([PropTypes.func]),
};

DelayLink.defaultProps = {
  delay: 0,
  replace: false,
  to: '',
  history: {},
  children: null,
  clickAction: () => {},
};

// Apply the "withRouter" HOC and enable history access
export default withRouter(DelayLink);
