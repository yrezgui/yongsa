var React         = require('react/addons');
var LogoIcon      = require('../shared/LogoIcon');
var LoginMessage  = require('./LoginMessage');

var LoginPage = React.createClass({
  render: function() {
    var componentStyle = {
      marginBottom: 10,
      display: 'flex',
      padding: 5
    };

    return (
      <section style={componentStyle}>
        <LogoIcon />
        <LoginMessage />
      </section>
    );
  }
});

module.exports = LoginPage;