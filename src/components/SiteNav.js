import { Link, useLocation } from 'react-router-dom';

export default function SiteNav() {
  const { pathname } = useLocation();
  const propertyHref = pathname === '/' ? '#properties' : '/#properties';
  const agentsHref = pathname === '/' ? '#agents' : '/#agents';
  return (
    <header className="site-nav fixed inset-x-0 top-0 z-50 border-b border-[#E8E5DF] bg-[rgba(255,255,255,0.96)] shadow-sm backdrop-blur">
      <div className="mx-auto flex min-h-20 w-full max-w-[1280px] items-center justify-between gap-4 px-4 sm:px-8 lg:px-16">
        <Link to="/" className="flex items-center gap-3 text-[#172A35]" aria-label="Haven Estates home">
          <img src={`${process.env.PUBLIC_URL}/logo512.png`} alt="" className="h-9 w-9 rounded-lg object-contain" />
          <span className="font-manrope text-sm font-bold tracking-[0.12em] sm:text-lg">HAVEN ESTATES</span>
        </Link>
        <nav aria-label="Main navigation" className="flex items-center gap-3 text-xs sm:gap-6 sm:text-sm">
          <Link to="/" className="site-link">Home</Link>
          <a href={propertyHref} className="site-link">Properties</a>
          <Link to="/about" className="site-link hidden sm:inline">About Us</Link>
          <a href={agentsHref} className="site-link hidden lg:inline">Our Agents</a>
          <Link to="/contact" className="site-link">Contact</Link>
        </nav>
        <Link to="/contact" className="hidden rounded-lg bg-[#172A35] px-4 py-3 text-xs font-semibold text-white transition hover:bg-[#735A35] md:inline-flex">Find Your Property</Link>
      </div>
    </header>
  );
}
