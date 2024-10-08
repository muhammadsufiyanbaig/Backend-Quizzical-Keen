const React = require('react');

function ContactFormEmail({ message, senderEmail, senderName }) {
  return React.createElement('div', null,
    React.createElement('h1', null, 'Message from QuizNex Contact Form'),
    React.createElement('p', null, React.createElement('strong', null, 'Email: '), senderEmail),
    React.createElement('p', null, React.createElement('strong', null, 'Name: '), senderName),
    React.createElement('p', null, React.createElement('strong', null, 'Message: '), message)
  );
}

module.exports = ContactFormEmail;
