import { Clock, Instagram, MapPin, MessageCircle, Phone, Twitter } from 'lucide-react';
import { whatsappLink, WhatsAppIcon } from '@/components/Layout';

export function ContactPage() {
  return (
    <main className="pt-16 sm:pt-20">
      <section className="container-page py-14 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-label">تواصل</p>
          <h1 className="text-4xl font-medium text-[#3a342e] sm:text-5xl">يسعدنا سماعك</h1>
          <p className="mt-5 text-base leading-8 text-[#8a8076]">
            لأي استفسار عن المنتجات أو الطلبات أو الهدايا، تواصل معنا مباشرة عبر واتساب أو
            من خلال قنواتنا أدناه.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
          <InfoCard
            icon={<WhatsAppIcon />}
            title="واتساب"
            lines={[
              <a
                key="wa"
                dir="ltr"
                href={whatsappLink('مرحبًا، أود التواصل معكم')}
                target="_blank"
                rel="noreferrer"
                className="text-end font-medium text-[#75695d] transition-colors hover:text-[#3a342e]"
              >
                +966 50 000 0000
              </a>,
            ]}
            note="الرقم تجريبي، عدّله برقمك الحقيقي"
          />

          <InfoCard
            icon={<MapPin size={20} strokeWidth={1.5} />}
            title="المدينة"
            lines={[<span key="city">جدة، المملكة العربية السعودية</span>]}
            note="التوصيل داخل جدة لجميع الأحياء"
          />

          <InfoCard
            icon={<Clock size={20} strokeWidth={1.5} />}
            title="ساعات العمل"
            lines={[
              <span key="h1">السبت – الخميس: 10 صباحًا – 10 مساءً</span>,
              <span key="h2">الجمعة: 4 عصرًا – 10 مساءً</span>,
            ]}
          />
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-[#75695d]/10 bg-[#efece6] p-8 text-center sm:p-10">
          <h2 className="text-xl font-semibold text-[#3a342e]">تابعنا على منصاتنا</h2>
          <p className="mt-2 text-sm text-[#8a8076]">حسابات تجريبية — حدّثها بروابطك الحقيقية</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#75695d]/30 px-5 py-2.5 text-sm font-medium text-[#75695d] transition-all duration-300 hover:bg-[#75695d] hover:text-white"
            >
              <Instagram size={16} />
              انستغرام
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#75695d]/30 px-5 py-2.5 text-sm font-medium text-[#75695d] transition-all duration-300 hover:bg-[#75695d] hover:text-white"
            >
              <Twitter size={16} />
              تويتر / X
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#75695d]/30 px-5 py-2.5 text-sm font-medium text-[#75695d] transition-all duration-300 hover:bg-[#75695d] hover:text-white"
            >
              <MessageCircle size={16} />
              تيك توك
            </a>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href={whatsappLink('مرحبًا، أود الاستفسار عن منتجاتكم')}
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp"
          >
            <Phone size={16} />
            ابدأ محادثة واتساب الآن
          </a>
        </div>
      </section>
    </main>
  );
}

function InfoCard({
  icon,
  title,
  lines,
  note,
}: {
  icon: React.ReactNode;
  title: string;
  lines: React.ReactNode[];
  note?: string;
}) {
  return (
    <div className="rounded-2xl border border-[#75695d]/10 bg-[#fffefc] p-8 text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#75695d]/10 text-[#75695d]">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-[#3a342e]">{title}</h3>
      <div className="mt-3 space-y-1.5 text-sm leading-7 text-[#8a8076]">{lines}</div>
      {note && <p className="mt-3 text-xs text-[#b0a89c]">{note}</p>}
    </div>
  );
}
