import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '../../utils/Email.js';
import ScrollAnimation from 'react-animate-on-scroll';
import MoonLoader from "react-spinners/MoonLoader";

const Contact = () => {
  const { handleSubmit, errors, register } = useForm();

  // Contact Me states
  const [isBtnClicked, setBtnClicked] = useState(false);
  const [isSending, setSending] = useState(false);
  const [isMsgSent, setMsgSent] = useState(false);

  // Send E-mail
  const onClickSend = values => {
    if (isSending) {
      return;
    }

    setBtnClicked(true);
    setSending(true);

    sendEmail(values.email, values.name, values.subject, values.message).then((response) => {
      setMsgSent(true);
      setSending(false);
    }, (err) => {
      setMsgSent(false);
      setSending(false);
    });
  }

  return (
    <div id="contacts">
      <ScrollAnimation animateIn="fadeInUp" animateOnce>
        <h1 id="contacts-title" className="content-title">&lt;Contact/&gt;</h1>
      </ScrollAnimation>
      <ScrollAnimation animateIn="slideInUp" animateOnce style={{ width: '90%' }}>
        <form onSubmit={handleSubmit(onClickSend)} id="email-form">
          <input
            id="email-input"
            type="email"
            className="textbox"
            placeholder="E-mail Address"
            name="email"
            ref={register({
              required: 'Required',
              maxLength: 255
            })}
          />
          {
            errors.email && errors.email.type === "required" &&
            <p className="error-message">Please enter your E-mail address</p>
          }
          {
            errors.email && errors.email.type === "maxLength" &&
            <p className="error-message">Your input exceeds the maximum length</p>
          }
          <input
            id="name-input"
            type="text"
            className="textbox"
            placeholder="Name"
            name="name"
            ref={register({
              required: 'Required',
              maxLength: 70
            })}
          />
          {
            errors.name && errors.name.type === "required" &&
            <p className="error-message">Please enter your name</p>
          }
          {
            errors.name && errors.name.type === "maxLength" &&
            <p className="error-message">Your input exceeds the maximum length</p>
          }
          <input
            id="subject-input"
            type="text"
            className="textbox"
            placeholder="Subject"
            name="subject"
            ref={register({
              required: 'Required',
              maxLength: 80
            })}
          />
          {
            errors.subject && errors.subject.type === "required" &&
            <p className="error-message">Please enter the subject of your message</p>
          }
          {
            errors.subject && errors.subject.type === "maxLength" &&
            <p className="error-message">Your input exceeds the maximum length</p>
          }
          <textarea
            id="message-input"
            type="text"
            className="textbox"
            style={{ resize: "none" }}
            placeholder="Message"
            name="message"
            ref={register({
              required: 'Required',
              maxLength: 500
            })}
          />
          {
            errors.message &&
            errors.message.type === "required" &&
            <p className="error-message">Please enter your message</p>
          }
          {
            errors.message &&
            errors.message.type === "maxLength" &&
            <p className="error-message">Your input exceeds the maximum length</p>
          }
          {
            isSending ?
              <MoonLoader size={50} loading={isSending} color={"#FF6569"} /> :
              <button id="send-email-button" className="button" type="submit">Send</button>
          }
          {
            isBtnClicked &&
            !isSending &&
            !isMsgSent &&
            <p className="error-message">Something went wrong, please try again later...</p>
          }
          {
            isBtnClicked &&
            !isSending &&
            isMsgSent &&
            <p className="success-message">Message sent!</p>
          }
        </form>
      </ScrollAnimation>
    </div>
  )
};

export default Contact;