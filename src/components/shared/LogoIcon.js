var React = require('react/addons');

var LogoIcon = React.createClass({
  render: function() {
    var logoStyle = {
      width: 60,
      height: 60,
      verticalAlign: 'middle'
    };

    return <img style={logoStyle} src="img/logo.png" />
  }
});

module.exports = LogoIcon;