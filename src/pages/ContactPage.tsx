import React, { useState, FormEvent } from "react";

interface Contact {
  name: string;
  email: string;
  reason: string;
  notes: string;
}

const defaultContact: Contact = {
  name: "",
  email: "",
  reason: "",
  notes: "",
};

const fieldStyle = "flex flex-col mb-2";
const redAsterisk = <span className="text-red-400 font-bold">*</span>;

function ContactPage() {
  const [contact, setContact] = useState<Contact>(defaultContact);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Contact information submitted.", contact);
  };

  return (
    <div className="flex flex-col py-10 max-w-md mx-auto">
      <h2 className="text-3xl font-bold underline mb-3">Contact Us</h2>
      <p className="mb-3">
        Enter your contact information and we'll get back to you as soon as we can.
      </p>
      <p>Fields marked with a red asterisk ({redAsterisk}) are required.</p>
      <form onSubmit={handleSubmit} className="pt-4">
        <div className={fieldStyle}>
          <label htmlFor="name">Your name {redAsterisk}</label>
          <input
            type="text"
            id="name"
            value={contact.name}
            onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
          />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="email">Your email address {redAsterisk}</label>
          <input
            type="text"
            id="email"
            value={contact.email}
            onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
          />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="reason">Reason you need to contact us {redAsterisk}</label>
          <select
            id="reason"
            value={contact.reason}
            onChange={(e) => setContact((c) => ({ ...c, reason: e.target.value }))}
          >
            <option value=""></option>
            <option value="Support">Support</option>
            <option value="Feedback">Feedback</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className={fieldStyle}>
          <label htmlFor="notes">Additional notes</label>
          <textarea
            id="notes"
            value={contact.notes}
            onChange={(e) => setContact((c) => ({ ...c, notes: e.target.value }))}
          ></textarea>
        </div>
        <div>
          <button type="submit" className="mt2 h-10 px-6 font-semibold bg-black text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactPage;
