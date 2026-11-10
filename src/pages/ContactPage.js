import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', property: '', message: '' });
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate('/success', { state: { enquiry: form } });
  }

  function updateField(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  return (
    <main className="min-h-screen bg-[#F5F3EF] pt-20 text-[#172A35]">
      <section className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:py-20">
        <div>
          <p className="mb-3 text-xs font-medium tracking-[0.12em] text-[#C6A77B]">GET IN TOUCH</p>
          <h1 className="mb-3 font-manrope text-3xl font-bold sm:text-4xl">Tell us what you’re looking for</h1>
          <p className="mb-8 max-w-2xl leading-7 text-[#777F83]">Share a few details and prepare an enquiry for the Haven Estates team.</p>
          <form onSubmit={handleSubmit} className="grid gap-5 rounded-xl border border-[#E8E5DF] bg-white p-5 sm:p-8">
            <label className="grid gap-2 text-sm font-medium">Your name<input required name="name" value={form.name} onChange={updateField} autoComplete="name" className="h-12 rounded-lg border border-[#E8E5DF] px-4 font-normal outline-[#C6A77B]" /></label>
            <label className="grid gap-2 text-sm font-medium">Email address<input required type="email" name="email" value={form.email} onChange={updateField} autoComplete="email" className="h-12 rounded-lg border border-[#E8E5DF] px-4 font-normal outline-[#C6A77B]" /></label>
            <label className="grid gap-2 text-sm font-medium">Property of interest<input name="property" value={form.property} onChange={updateField} className="h-12 rounded-lg border border-[#E8E5DF] px-4 font-normal outline-[#C6A77B]" /></label>
            <label className="grid gap-2 text-sm font-medium">Message<textarea required name="message" value={form.message} onChange={updateField} rows="5" className="resize-y rounded-lg border border-[#E8E5DF] p-4 font-normal outline-[#C6A77B]" /></label>
            <button type="submit" className="h-12 rounded-lg bg-[#172A35] px-6 text-sm font-medium text-white">Review Enquiry</button>
          </form>
        </div>
        <aside className="h-fit rounded-xl bg-[#172A35] p-6 text-white sm:p-8">
          <h2 className="mb-6 font-manrope text-xl font-semibold">Speak with our team</h2>
          <p className="mb-2 text-sm text-[#D1D5DB]">Direct Desk</p><a className="mb-6 block text-lg" href="tel:+919876543210">+91 98765 43210</a>
          <p className="mb-2 text-sm text-[#D1D5DB]">Email</p><a className="mb-6 block break-all" href="mailto:hello@havenestates.com">hello@havenestates.com</a>
          <p className="text-sm leading-6 text-[#D1D5DB]">Monday – Saturday · 9:00 AM – 7:30 PM</p>
        </aside>
      </section>
    </main>
  );
}
