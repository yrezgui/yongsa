var React       = require('react/addons');

var LoginMessage = React.createClass({
  signIn: function () {
  },
  render: function() {
    var messageStyle = {
      flex: 1,
      margin: 0,
      textAlign: 'center',
      fontSize: 20,
      lineHeight: '60px',
      cursor: 'pointer'
    };

    var serviceStyle = {
      margin: '0 10px',
      height: 50,
      verticalAlign: 'middle'
    };

    return (
      <p style={messageStyle} onClick={this.signIn}>
        Click here to login with your
        <img style={serviceStyle} src="img/services/gmail.png" />
        account
      </p>
    );
  }
});

module.exports = LoginMessage;