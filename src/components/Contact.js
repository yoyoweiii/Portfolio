import React, { useState } from "react";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("mjkbylgw");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const additionalSentence =
      "This message was sent from portfolio in Github.io.";
    const fullMessage =
      `Dear Kevin, \n\n` + `${message}\n\n${additionalSentence}`;

    // Create a new FormData object and append the necessary fields
    const formData = new FormData(e.target);
    formData.set("message", fullMessage);

    // Convert FormData to an object to pass it to handleSubmit
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    handleSubmit(formObject);
  };

  if (state.succeeded) {
    return (
      <div>
        <p>Thanks for contacting!</p>
        <p>Let's keep in touch</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="email">Email Address:</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="example@mail.com"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label>Content:</label>
      <textarea
        id="message"
        name="message"
        placeholder="Tell me what you feel"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default Contact;
