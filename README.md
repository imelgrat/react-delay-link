# react-delay-link
A React component to trigger Router links with a delay

[![GitHub license](https://img.shields.io/github/license/imelgrat/react-delay-link?color=blue)](https://github.com/imelgrat/react-delay-link/blob/master/LICENSE.txt) ![GitHub package.json version](https://img.shields.io/github/package-json/v/imelgrat/react-delay-link) ![Scrutinizer build (GitHub/Bitbucket)](https://img.shields.io/scrutinizer/build/g/imelgrat/react-delay-link/master) [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/imelgrat/react-delay-link/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/imelgrat/react-delay-link/?branch=master) ![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/imelgrat/react-delay-link)  [![GitHub issues](https://img.shields.io/github/issues/imelgrat/react-delay-link)](https://github.com/imelgrat/react-delay-link/issues)

This component works in a similar way to React Router's <Link> but adding a configurable delay before jumping to the target route. This makes it easier to add click effects that require a brief delay to display.

The component also has a property for adding a custom JavaScript function, to be executed right after the user clicks on the link, before the link is actually triggered. This component uses React Router's withRouter Higher-order Component (HOC) to get access to and manipulate the history object.

This function may be used for a variety of things, such as updating state, setting up a component or even invoking an asynchronous API.

## Install
Install the module with npm:
```
npm install --save react-delay-link
```
## Dependencies
This component relies on the react-router-dom component. Please add it to your project by running:
 ```
 npm install --save react-router-dom
  ```
  Alternatively, you can add the package to your package.json file and run 
```
  npm install
```
## Usage
You can create an instance of this component by importing the component and then specifying the link's properties. 

In this case, the click will be triggered after 2 seconds, pushing a new route (homepage) to the history object and invoking the action() function.

```
import React from 'react';
import ReactDOM from 'react-dom';
import DelayLink from 'react-delay-link';

function action() {
  console.log('clickAction invoked');
}

ReactDOM.render(
   <DelayLink delay={2000} to="/" clickAction={action} replace={false}>
    <p>Hello, I'm a clickable link.</p>
 </DelayLink>, document.getElementById('roots'),
);
```

 ## Properties

__delay__
Milliseconds to wait before triggering the click event.

__replace__
Whether to replace the current URL with the link's or push a new one.

__to__
The target URL

__clickAction__
An optional function to invoke before setting up the timeout

## Share it!
[![Twitter](https://img.shields.io/twitter/url/https/github.com/imelgrat/react-delay-link)](https://twitter.com/intent/tweet?text=A%20React%20component%20to%20trigger%20Router%20links%20with%20a%20delay&hashtags=react,react-router,react-component&url=https%3A%2F%2Fgithub.com%2Fimelgrat%2Freact-delay-link)
