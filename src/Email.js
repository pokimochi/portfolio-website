import emailjs from 'emailjs-com';

const sendEmail = (name, subject, message) => {
  const templateValues = {
    from_name: name,
    subject: subject,
    message: message
  }

  emailjs.send('gmail', process.env.REACT_APP_EMAIL_JS_TEMPLATE, templateValues, process.env.REACT_APP_EMAIL_JS_USER)
  .then((response) => {
    console.log('SUCCESS!', response.status, response.text);
  }, (err) => {
    console.log('FAILED...', err);
  });
}

export {
  sendEmail
}