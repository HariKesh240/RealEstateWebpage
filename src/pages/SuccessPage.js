import { Link, Navigate, useLocation } from 'react-router-dom';

export default function SuccessPage() {
  const { state } = useLocation();
  if (!state?.enquiry) return <Navigate to="/contact" replace />;

  const { enquiry } = state;
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F5F3EF] px-4 py-12 pt-32 text-[#172A35]">
      <section className="w-full max-w-xl rounded-xl border border-[#E8E5DF] bg-white p-6 text-center shadow-sm sm:p-10">
        <div aria-hidden="true" className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#F5F3EF] text-2xl text-[#C6A77B]">✓</div>
        <p className="mb-2 text-xs font-medium tracking-[0.12em] text-[#C6A77B]">ENQUIRY REVIEW</p>
        <h1 className="mb-3 font-manrope text-3xl font-bold">Thank you, {enquiry.name}</h1>
        <p className="mb-7 leading-7 text-[#777F83]">Your enquiry details are ready. This project preview does not send them to a server; please contact our team directly to submit your request.</p>
        <dl className="mb-8 space-y-3 rounded-lg bg-[#F5F3EF] p-5 text-left text-sm">
          <div><dt className="font-semibold">Email</dt><dd className="break-all text-[#777F83]">{enquiry.email}</dd></div>
          {enquiry.property && <div><dt className="font-semibold">Property</dt><dd className="text-[#777F83]">{enquiry.property}</dd></div>}
          <div><dt className="font-semibold">Message</dt><dd className="whitespace-pre-wrap text-[#777F83]">{enquiry.message}</dd></div>
        </dl>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <a href="tel:+919876543210" className="rounded-lg bg-[#172A35] px-6 py-3 text-sm font-medium text-white">Call +91 98765 43210</a>
          <Link to="/" className="rounded-lg border border-[#E8E5DF] px-6 py-3 text-sm font-medium">Return Home</Link>
        </div>
      </section>
    </main>
  );
}
