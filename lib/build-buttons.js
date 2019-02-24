'use strict'

module.exports = data => {
  let buttons = ['A', 'B', 'U', 'D', 'L', 'R']
  return JSON.stringify(buttons.map(button => Object.assign({ button: button, message: data[`button-${button}-text`], url: data[`button-${button}-url`], function: `BTN${button}` })), null, 2)
}
