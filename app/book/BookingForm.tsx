"use client";

import { FormEvent, useState } from "react";

export function BookingForm() {
  const [prepared, setPrepared] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Booking enquiry — ${form.get("service") || "Salon visit"}`);
    const body = encodeURIComponent([
      `Name: ${form.get("name")}`,
      `Email: ${form.get("email")}`,
      `Phone: ${form.get("phone")}`,
      `Service: ${form.get("service")}`,
      `Preferred stylist: ${form.get("stylist")}`,
      `Preferred date: ${form.get("date")}`,
      `Preferred time: ${form.get("time")}`,
      "",
      `Notes: ${form.get("notes") || "None"}`,
    ].join("\n"));
    setPrepared(true);
    window.location.href = `mailto:hello@carliandco.co.za?subject=${subject}&body=${body}`;
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <p className="form-note field-full">All fields are required unless marked optional.</p>
      <div className="field field-full">
        <label htmlFor="service">What would you like to book?</label>
        <select id="service" name="service" defaultValue="" required>
          <option value="" disabled>Select a service</option>
          <option>Consultation</option><option>Cut &amp; finish</option><option>Considered colour</option><option>Hair ritual</option><option>I am not sure yet</option>
        </select>
      </div>
      <div className="field field-full">
        <label htmlFor="stylist">Preferred stylist</label>
        <select id="stylist" name="stylist" defaultValue="No preference">
          <option>No preference</option><option>Carli Meyer</option><option>Mia Jacobs</option><option>Zara Daniels</option>
        </select>
      </div>
      <div className="field"><label htmlFor="date">Preferred date</label><input id="date" name="date" type="date" required /></div>
      <div className="field"><label htmlFor="time">Time of day</label><select id="time" name="time" defaultValue="Morning"><option>Morning</option><option>Afternoon</option><option>Any time</option></select></div>
      <div className="field"><label htmlFor="name">Your name</label><input id="name" name="name" type="text" autoComplete="name" required /></div>
      <div className="field"><label htmlFor="phone">Phone number</label><input id="phone" name="phone" type="tel" autoComplete="tel" required /></div>
      <div className="field field-full"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" required /></div>
      <div className="field field-full"><label htmlFor="notes">Anything we should know? <span>Optional</span></label><textarea id="notes" name="notes" rows={4} placeholder="Tell us about your current hair, your goals, or anything that will help us prepare." /></div>
      <div className="field-full form-submit">
        <button className="button button-rust" type="submit">Prepare booking email <span aria-hidden="true">↗</span></button>
        <p>Your email app will open with your details ready to send.</p>
      </div>
      {prepared && <p className="form-status field-full" role="status">Your booking email is ready. Send it from your email app and our team will be in touch.</p>}
    </form>
  );
}
