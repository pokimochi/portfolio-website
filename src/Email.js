import emailjs from 'emailjs-com';

const sendEmail = (name, subject, message) => {
  const templateValues = {
    from_name: name,
    subject: subject,
    message: message
  }

  return emailjs.send('gmail', process.env.REACT_APP_EMAIL_JS_TEMPLATE, templateValues, process.env.REACT_APP_EMAIL_JS_USER);
}

export {
  sendEmail
}