import { FormEvent, useState } from "react";
import { json } from "stream/consumers";
import classes from "./contact-form.module.css";

const ContactForm = () => {
  const [enteredEmail, SetEnteredEmail] = useState("");
  const [enteredName, SetEnteredName] = useState("");
  const [enteredMessage, SetEnteredMessage] = useState("");

  const sendMessageHandler = (event: FormEvent) => {
    event.preventDefault();

    fetch("/api/contact", {
      method: "POST",

      body: JSON.stringify({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      }),

      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <section className={classes.contact}>
      <h1>Como poderei ajudar?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">O seu endereço eletrónico</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(event) => SetEnteredEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">O seu nome</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(event) => SetEnteredName(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">A sua mensagem</label>
          <textarea
            id="message"
            rows={5}
            value={enteredMessage}
            onChange={(event) => SetEnteredMessage(event.target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Enviar Mensagem</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
