import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Coffee } from 'lucide-react';

export const WHATSAPP_NUMBER = '966500000000';

export const NAV_ITEMS = [
  { to: '/', label: 'الرئيسية' },
  { to: '/products', label: 'المنتجات' },
  { to: '/about', label: 'عنّا' },
  { to: '/contact', label: 'تواصل' },
];

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#75695d]/10 bg-[#f7f5f1]/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between sm:h-20">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#75695d] text-[#f7f5f1]">
            <Coffee size={18} strokeWidth={1.5} />
          </span>
          <span className="font-en text-3xl font-medium tracking-[0.25em] text-[#3a342e]">MORROW</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative text-sm font-medium transition-colors duration-300 after:absolute after:-bottom-1.5 after:start-0 after:h-px after:bg-[#75695d] after:transition-all after:duration-300 ${
                  isActive
                    ? 'text-[#3a342e] after:w-full'
                    : 'text-[#8a8076] after:w-0 hover:text-[#3a342e] hover:after:w-full'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href={whatsappLink('مرحبًا، لدي استفسار عن أكواب MORROW')}
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp !px-5 !py-2"
          >
            <WhatsAppIcon />
            اطلب الآن
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
          className="flex h-10 w-10 items-center justify-center rounded-full text-[#3a342e] transition-colors hover:bg-[#75695d]/10 md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 top-16 z-40 bg-[#f7f5f1] transition-opacity duration-300 md:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <nav className="container-page flex flex-col gap-1 pt-8">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-xl px-4 py-4 text-lg font-medium transition-colors ${
                  isActive ? 'bg-[#75695d]/10 text-[#3a342e]' : 'text-[#8a8076]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href={whatsappLink('مرحبًا، لدي استفسار عن أكواب MORROW')}
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp mt-6"
          >
            <WhatsAppIcon />
            اطلب عبر واتساب
          </a>
        </nav>
      </div>
    </header>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink('مرحبًا، لدي استفسار عن أكواب MORROW')}
      target="_blank"
      rel="noreferrer"
      aria-label="تواصل عبر واتساب"
      className="fixed bottom-5 z-50 flex items-center gap-2 rounded-full bg-[#5d5348] px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#75695d]/30 transition-all duration-300 hover:scale-105 hover:bg-[#3a342e] end-5 sm:bottom-8 sm:end-8"
    >
      <WhatsAppIcon />
      <span className="hidden sm:inline">اطلب عبر واتساب</span>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[#75695d]/10 bg-[#efece6]">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-en text-2xl tracking-[0.25em] text-[#3a342e]">MORROW</p>
          <p className="mt-3 text-sm leading-7 text-[#8a8076]">
            أكواب رخام مصنوعة بعناية في جدة، تجمع بين الجمال والوظيفة في تفاصيل يومك.
          </p>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold text-[#3a342e]">روابط سريعة</p>
          <ul className="space-y-2.5 text-sm text-[#8a8076]">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition-colors hover:text-[#75695d]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold text-[#3a342e]">تواصل</p>
          <ul className="space-y-2.5 text-sm text-[#8a8076]">
            <li dir="ltr" className="text-end">+966 50 000 0000</li>
            <li>جدة، المملكة العربية السعودية</li>
            <li>يوميًا 10 صباحًا – 10 مساءً</li>
          </ul>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold text-[#3a342e]">تابعنا</p>
          <div className="flex gap-3">
            <SocialLink label="انستغرام" href="https://instagram.com" d={INSTAGRAM_PATH} />
            <SocialLink label="تويتر" href="https://twitter.com" d={TWITTER_PATH} />
            <SocialLink label="تيك توك" href="https://tiktok.com" d={TIKTOK_PATH} />
          </div>
        </div>
      </div>
      <div className="border-t border-[#75695d]/10 py-5 text-center text-xs text-[#8a8076]">
        © {new Date().getFullYear()} MORROW — جميع الحقوق محفوظة
      </div>
    </footer>
  );
}

function SocialLink({ label, href, d }: { label: string; href: string; d: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#75695d]/25 text-[#75695d] transition-all duration-300 hover:bg-[#75695d] hover:text-white"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d={d} />
      </svg>
    </a>
  );
}

const INSTAGRAM_PATH =
  'M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.5.6.2 1 .5 1.5 1 .5.5.7.9 1 1.5.2.5.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.4-.2.6-.5 1-1 1.5-.5.5-.9.7-1.5 1-.5.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.5-.6-.2-1-.5-1.5-1-.5-.5-.7-.9-1-1.5-.2-.5-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.4.2-.6.5-1 1-1.5.5-.5.9-.7 1.5-1 .5-.2 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2zm0 4.6a5.2 5.2 0 100 10.4 5.2 5.2 0 000-10.4zm0 8.6a3.4 3.4 0 110-6.8 3.4 3.4 0 010 6.8zm6.6-8.8a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z';

const TWITTER_PATH =
  'M22 5.9c-.7.3-1.5.6-2.4.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 00-7 3.7A11.6 11.6 0 013.5 4.6a4.1 4.1 0 001.3 5.5c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4a4.2 4.2 0 01-1.9.1 4.1 4.1 0 003.8 2.9A8.2 8.2 0 012 18.4a11.6 11.6 0 006.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1z';

const TIKTOK_PATH =
  'M16.7 2h-3.1v13.5a2.9 2.9 0 11-2.9-2.9c.3 0 .7 0 1 .1V9.5a6.1 6.1 0 00-1-.1 6 6 0 106 6V8.9a7.8 7.8 0 004.5 1.4V7.2A4.6 4.6 0 0116.7 2z';

export function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
      <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm5.5 14.1c-.2.7-1.3 1.3-1.8 1.3-.5.1-1 .2-1.7 0a11.4 11.4 0 01-4.4-2.7 10 10 0 01-2.1-3.2c-.2-.6-.3-1.2 0-1.7.2-.3.5-.7.8-1 .2-.2.5-.2.7-.2h.5c.2 0 .4 0 .5.4l.7 1.7c.1.2 0 .4-.1.6l-.4.5c-.1.2-.3.3-.1.6.2.4.7 1.1 1.4 1.7.9.8 1.6 1 1.9 1.2.2.1.4.1.6-.1l.7-.9c.2-.2.4-.2.6-.1l1.6.8c.5.2.5.5.4.8z" />
    </svg>
  );
}
