import { Link } from 'react-router-dom';
import livingRoomImage from '../img/LandingPage/ArchitecturalLivingRoomHavenEstates.png';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F5F3EF] pt-20 text-[#172A35]">
      <section className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-14 sm:px-8 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="mb-3 text-xs font-medium tracking-[0.12em] text-[#C6A77B]">WHO WE ARE</p>
          <h1 className="mb-6 font-manrope text-3xl font-bold leading-tight sm:text-4xl">Real Estate Built on Trust &amp; Relationships</h1>
          <p className="mb-5 text-base leading-7 text-[#777F83]">We believe finding the right property should be an exciting experience, not a complicated one. Our team brings together local market knowledge, deep legal diligence, and a genuine commitment to helping clients make confident property decisions.</p>
          <ul className="mb-8 space-y-4 text-sm leading-6 text-[#777F83]">
            <li><strong className="text-[#172A35]">Local Market Expertise.</strong> Deep familiarity with municipal zoning, road expansions, and Coimbatore neighbourhoods.</li>
            <li><strong className="text-[#172A35]">Personalised Property Guidance.</strong> Shortlists matched to your priorities and property goals.</li>
            <li><strong className="text-[#172A35]">Transparent Communication.</strong> Clear legal scrutiny and verified property information.</li>
          </ul>
          <Link to="/contact" className="inline-flex rounded-lg bg-[#172A35] px-6 py-3 text-sm font-medium text-white">Talk to Our Team</Link>
        </div>
        <img src={livingRoomImage} alt="Architectural living room at Haven Estates" className="h-72 w-full rounded-xl object-cover sm:h-96" />
      </section>
    </main>
  );
}
