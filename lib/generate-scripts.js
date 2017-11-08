'use strict'

module.exports = buttons => {
  return `
  let clicked = [];
  g.clear();
  g.drawString('Press button to activate', 0, 0);
  g.flip();

  const buttons = ${buttons};
  
  function isKonami () {
    if (/UUDDLRLRBA/.test(buttons.join(''))) {
      drawMessage('Konami for the Konami Gods');
      clicked = [];
    }
  }
  
  function drawMessage (msg) {
    g.clear();
    g.drawString(msg, 0, 0);
    g.flip();
  }
  
  function initWatch (options) {
    setWatch(function(e) {
      console.log(e);
      drawMessage(options.message);
      NRF.nfcURL(options.url);
      clicked.push(options.button);
      isKonami();
    }, eval(options.function), { repeat: true, debounce: 10, edge: 'rising' });
  }
  
  buttons.map(initWatch);
`
}
