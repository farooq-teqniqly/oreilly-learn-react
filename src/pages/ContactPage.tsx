import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, FieldError } from "react-hook-form";
import ValidationError from "../ValidationError";

interface Contact {
  name: string;
  email: string;
  reason: string;
  notes: string;
}

const fieldStyle = "flex flex-col mb-2";
const redAsterisk = <span className="text-red-400 font-bold">*</span>;

const getEditorStyle = (fieldError: FieldError | undefined) => {
  return fieldError ? "border-red-500" : "";
};

function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Contact>();
  const navigate = useNavigate();

  function onSubmit(contact: Contact) {
    console.log("Contact information submitted.", contact);
    navigate(`/thank-you/${contact.name}`);
  }

  return (
    <div className="flex flex-col py-10 max-w-md mx-auto">
      <h2 className="text-3xl font-bold underline mb-3">Contact Us</h2>
      <p className="mb-3">
        Enter your contact information and we'll get back to you as soon as we can.
      </p>
      <p>Fields marked with a red asterisk ({redAsterisk}) are required.</p>
      <form noValidate onSubmit={handleSubmit(onSubmit)} className="pt-4">
        <div className={fieldStyle}>
          <label htmlFor="name">Your name {redAsterisk}</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Enter your name." })}
            className={getEditorStyle(errors.name)}
          />
          <ValidationError fieldError={errors.name} />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="email">Your email address {redAsterisk}</label>
          <input
            type="text"
            id="email"
            {...register("email", {
              required: "Enter your email address.",
              pattern: { value: /\S+@\S+\.\S+/, message: "Enter a valid email address." },
            })}
            className={getEditorStyle(errors.email)}
          />
          <ValidationError fieldError={errors.email} />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="reason">Reason you need to contact us {redAsterisk}</label>
          <select
            id="reason"
            {...register("reason", { required: "Enter your reason for contacting us." })}
            className={getEditorStyle(errors.reason)}
          >
            <option value=""></option>
            <option value="Support">Support</option>
            <option value="Feedback">Feedback</option>
            <option value="Other">Other</option>
          </select>
          <ValidationError fieldError={errors.reason} />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="notes">Additional notes</label>
          <textarea id="notes" {...register("notes")}></textarea>
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
