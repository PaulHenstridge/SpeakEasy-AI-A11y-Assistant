# SpeakEasy - AI Accessibility Assistant

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Features](#features)
- [Issues and Challenges](#issues-and-challenges)
- [Future Improvements](#future-improvements)
- [Contribution](#contribution)


## Description

SpeakEasy is an AI-powered accessibility assistant application aimed at helping users navigate the web and interact with their computer using voice commands. This prototype provides an AI supported chat and memo functionality. The application uses speech synthesis to communicate aurally with the user, offering an intuitive and inclusive user experience.

## Installation


```bash
# Clone this repository
$ git clone https://github.com/PaulHenstridge/SpeakEasy-AI-A11y-Assistant

# Go into client directory and install dependencies
$ cd SpeakEasy/client
$ npm install

# Run the app
$ npm start

# navigate to server and repeat
$ cd ../server
$ npm install
$ npm start
```

## Usage

Keyboard Control

The application can be fully controlled with just 5 keys, and voice input. <br>
To provide voice input press and hold `Q` + `A` together, and release when finished.
use `tab` to move around the application, and `return` to interact with each section.
If tabbing through memo items, press `S` to speak the memo, or `D` to delete it.

Voice Activation

Use the keyword '*speakeasy*' anywhere in the user input, in conjunction with predefined command words (currently these are '*memo*' and '*chat*'), to launch the appropriate component with data response pertaining to the given input.



## Technologies

-  React.js
- Node.js
- Express
- Java Spring
- PostgreSQL
- Web Speech API 
- OpenAI's GPT-3.5
- Socket.io

## Features

- Voice-controlled navigation.
- Chat functionality that users can invoke with a voice command.
- Memo functionality that allows users to save notes using voice commands.
- Keyboard navigation for accessibility.
- High contrast mode for better visibility.


## Issues and Challenges

One of the recurring challlenges in the project was returning reliable, JavaScript readable data from the AI model. The first system prompt was around 3 lines long, where as the final one was over 20. Understanding how prompts are consumed and what affects the response helped control the variation to a large extent, and a try-catch block picked up the exceptions and handled them via another api call.

## Future Improvements

The system was designed to be extendable, and has many possibilites, such as:  <br>

- multi-user communication (facilitated by websockets)
- launching other applications, e.g. word doc, email client and pre-populating data
- customisation of voice detection to assist speech impaired users
- other mini-apps can be added to the React front end and easily integrated to be voice controled and interactive

## Contribution

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ by Paul Henstridge


## Contact Information

<br>Github: [@PaulHenstridge](https://github.com/PaulHenstridge)
<br>LinkedIn: [LinkedIn](https://www.linkedin.com/in/paul-henstridge-68221833) 
