import React, { useState } from 'react';
import { contactInfo } from '../../helpers/context';
import { initialInput } from '../../helpers/utils';

interface Input {
  name: string;
  email: string;
  message: string;
}

export const Questions = () => {
  const [input, setInput] = useState<Input>(initialInput);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    type: keyof Input,
  ) => {
    setInput((prev) => ({ ...prev, [type]: e.target.value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setInput(initialInput);
  };

  const isButtonDisabled =
    !input.name.trim() || !input.email.trim() || !input.message.trim();

  return (
    <section className="questions" id="message-us">
      <div className="questions__top">
        <div className="questions__text">
          <h2 className="questions__title">have any questions?</h2>

          <p className="questions__pre-form-text">
            Here few ways to get in touch with us:
          </p>
        </div>

        <form
          action="#"
          className="questions__form"
          onSubmit={handleFormSubmit}
        >
          Message us
          <input
            type="text"
            className="questions__input"
            placeholder="Name"
            value={input.name}
            onChange={(e) => handleChange(e, 'name')}
          />

          <input
            type="email"
            className="questions__input"
            placeholder="Email"
            value={input.email}
            onChange={(e) => handleChange(e, 'email')}
          />

          <textarea
            className="questions__input questions__input--textarea"
            placeholder="Message"
            value={input.message}
            onChange={(e) => handleChange(e, 'message')}
          />

          <button
            className="questions__submit button button--turqoise"
            disabled={isButtonDisabled}
          >
            <p className="button-text button-text--white">Submit</p>

            <div className="button-icon">
              <div className="button-arrow button-arrow--white" />
            </div>
          </button>
        </form>
      </div>

      <div className="questions__bottom">
        {contactInfo.map((contact) => (
          <div className="questions__contact">
            <h3 className="questions__contact-title">{contact.title}</h3>

            <a href={contact.href} className="questions__contact-link">
              {contact.description}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
