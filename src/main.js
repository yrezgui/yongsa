var React     = require('react/addons');
var LoginPage = require('./components/LoginPage');

React.render(<LoginPage />, document.getElementById('main'));

window.React = React;