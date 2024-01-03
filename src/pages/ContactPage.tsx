import React from "react";
import { Form, ActionFunctionArgs, redirect } from "react-router-dom";

interface Contact {
  name: string;
  email: string;
  reason: string;
  notes: string;
}

const fieldStyle = "flex flex-col mb-2";
const redAsterisk = <span className="text-red-400 font-bold">*</span>;

export async function contactPageAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const contact = {
    name: formData.get("name"),
    email: formData.get("email"),
    reason: formData.get("reason"),
    notes: formData.get("notes"),
  } as Contact;

  console.log("Contact information submitted.", contact);

  return redirect(`/thank-you/${formData.get("name")}`);
}

function ContactPage() {
  return (
    <div className="flex flex-col py-10 max-w-md mx-auto">
      <h2 className="text-3xl font-bold underline mb-3">Contact Us</h2>
      <p className="mb-3">
        Enter your contact information and we'll get back to you as soon as we can.
      </p>
      <p>Fields marked with a red asterisk ({redAsterisk}) are required.</p>
      <Form method="post" className="pt-4">
        <div className={fieldStyle}>
          <label htmlFor="name">Your name {redAsterisk}</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="email">Your email address {redAsterisk}</label>
          <input type="text" id="email" name="email" />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="reason">Reason you need to contact us {redAsterisk}</label>
          <select id="reason" name="reason">
            <option value=""></option>
            <option value="Support">Support</option>
            <option value="Feedback">Feedback</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className={fieldStyle}>
          <label htmlFor="notes">Additional notes</label>
          <textarea id="notes" name="notes"></textarea>
        </div>
        <div>
          <button type="submit" className="mt2 h-10 px-6 font-semibold bg-black text-white">
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
}

export default ContactPage;
