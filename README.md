[![Build Status](https://travis-ci.org/zrrrzzt/buttonconfigurator3000.svg?branch=master)](https://travis-ci.org/zrrrzzt/buttonconfigurator3000)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Greenkeeper badge](https://badges.greenkeeper.io/zrrrzzt/buttonconfigurator3000.svg)](https://greenkeeper.io/)

# buttonconfigurator3000

Configure the buttons for your [NodeConf EU badge](http://nodeconfeubadge.org).

See it live at [nodeconfeubadge.allthethings.win](https://nodeconfeubadge.allthethings.win/)

## About

The NodeConf EU Badges are amazing. This repo is for a website that will help you to create actions for each of the buttons.

An action is that it will display a text on the screen and broadcast an url via NFC.

Nifty, if you should happen to be on a conference ;-)

## Usage

The website contains a form with 2 fields for each button. Enter your content and press Generate code. 
This will generate the code and send you to the [Espruino IDE](https://www.espruino.com/ide) where your code will be imported and you can flash it to your badge.

## Deploy

### Zeit/Now

Update [production.env](production.env) and now:alias in [package.json](package.json)

Then simply 

```
$ npm run deploy
```

### Docker

Update [production.env](production.env)

Build the image

```
$ docker build -t buttonconfigurator3000 .
```

Run the image

```
$ docker run -d -p 80:3000 -E production.env --name buttonconfigurator3000 buttonconfigurator3000
```

## License

[MIT](LICENSE)

![Robohash image of buttonconfigurator3000](https://robots.kebabstudios.party/buttonconfigurator3000.png "Robohash image of buttonconfigurator3000")