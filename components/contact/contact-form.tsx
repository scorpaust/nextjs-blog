import { ContactDetails } from "@/types/post";
import { FormEvent, useEffect, useState } from "react";
import Notification from "../ui/notification";
import classes from "./contact-form.module.css";

async function sendContactData(contactDetails: ContactDetails) {
  const response = await fetch("/api/contact", {
    method: "POST",

    body: JSON.stringify(contactDetails),

    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Algo correu mal.");
  }
}

const ContactForm = () => {
  const [enteredEmail, SetEnteredEmail] = useState("");
  const [enteredName, SetEnteredName] = useState("");
  const [enteredMessage, SetEnteredMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState("");
  const [requestError, setRequestError] = useState("");

  useEffect(() => {
    if (requestStatus === "pending" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus("");
        setRequestError("");
        clearTimeout(timer);
      }, 3000);
    }
  }, [requestStatus]);

  function clearInputs() {
    SetEnteredMessage("");
    SetEnteredEmail("");
    SetEnteredName("");
  }

  const sendMessageHandler = async (event: FormEvent) => {
    event.preventDefault();

    setRequestStatus("pending");

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus("success");
      clearInputs();
    } catch (error: any) {
      setRequestStatus("error");
      setRequestError(error.message);
    }
  };

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "A enviar mensagem...",
      message: "A sua mensagem está a caminho.",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Sucesso",
      message: "Mensagem enviada com sucesso.",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Erro",
      message: requestError,
    };
  }
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
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
