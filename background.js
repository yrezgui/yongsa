chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    'bounds': {
      'width': 400,
      'height': 500
    }
  });
});

chrome.commands.onCommand.addListener(function(command) {
  console.log('Command:', command);

  var width         = 500;
  var height        = 300;
  var screenWidth   = screen.availWidth;
  var screenHeight  = screen.availHeight;

  chrome.app.window.create('window.html', {
    'bounds': {
      width: width,
      height: height,
      left: Math.round((screenWidth-width)/2),
      top: Math.round((screenHeight-height)/2)
    }
  });
});