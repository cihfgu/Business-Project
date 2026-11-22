import { Link } from 'react-router-dom';
import { ArrowLeft, Gift, Sparkles, Star } from 'lucide-react';
import { whatsappLink, WhatsAppIcon } from '@/components/Layout';
import { MarbleCup, ProductImage } from '@/components/MarbleCup';
import { PRODUCTS } from '@/data/products';

const FEATURES = [
  {
    icon: Sparkles,
    title: 'تصميم فريد',
    text: 'كل كوب يحمل عروق رخام طبيعية لا تتكرر، فلا يشبهه قطعة أخرى في العالم.',
  },
  {
    icon: Star,
    title: 'تفاصيل أنيقة',
    text: 'تشطيب مصقول وملمس ناعم، بأوزان مدروسة تجعل رشفة القهوة لحظة مختلفة.',
  },
  {
    icon: Gift,
    title: 'هدايا مميزة',
    text: 'تغليف راقٍ جاهز للإهداء، لمن تبحث له عن هدية تُروى قصتها.',
  },
];

const TESTIMONIALS = [
  {
    name: 'سارة المطيري',
    role: 'مصممة داخلية — جدة',
    text: 'أضفت الأكواب إلى مشاريعي الجيدة، وجدت أن لمسة الرخام تضيف فخامة هادئة لأي طاولة ضيافة.',
  },
  {
    name: 'عبدالله الحربي',
    role: 'صاحب مقهى',
    text: 'جودة التشطيب ممتازة والوزن متوازن. ضيوفنا يلاحظون الفرق من أول رشفة.',
  },
  {
    name: 'نورة العتيبي',
    role: 'عميلة — هدايا',
    text: 'طلبت طقم الضيافة كهدية عيد، والتغليف كان أنيقًا جدًا. هدية أرضت من استلمتها.',
  },
];

export function HomePage() {
  return (
    <main className="pt-16 sm:pt-20">
      <section className="relative overflow-hidden">
        <div className="container-page grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2">
          <div>
            <p className="section-label">MORROW — أكواب الرخام</p>
            <h1 className="text-4xl leading-tight font-medium text-[#3a342e] sm:text-5xl lg:text-6xl">
              الجمال في تفاصيل يومك
            </h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-[#8a8076] sm:text-lg">
              أكواب رخام مصنوعة بعناية في جدة، تحوّل رشفة قهوتك الصباحية إلى لحظة هادئة
              تليق بذوقك. قطع محدودة، بعروق لا تتكرر.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/products" className="btn-whatsapp">
                تسوّق المجموعة
                <ArrowLeft size={16} />
              </Link>
              <a
                href={whatsappLink('مرحبًا، أود الاستفسار عن مجموعات أكواب MORROW')}
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                <WhatsAppIcon />
                استفسر عبر واتساب
              </a>
            </div>
          </div>
          <div className="relative">
            <div
              className="marble-grain marble-veins relative mx-auto aspect-square w-full max-w-md rounded-[2rem] border border-[#75695d]/10 shadow-xl shadow-[#75695d]/10"
              style={{ backgroundColor: '#e5dfd5' }}
            >
              <div className="absolute inset-0 flex items-center justify-center p-10">
                <MarbleCup tone="#e5dfd5" variant={0} className="drop-shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#efece6] py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-10 sm:grid-cols-3">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-[#75695d]/10 bg-[#fffefc] p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#75695d]/10"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#75695d]/10 text-[#75695d] transition-colors duration-300 group-hover:bg-[#75695d] group-hover:text-white">
                  <f.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-[#3a342e]">{f.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#8a8076]">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="mb-10 text-center">
            <p className="section-label">المعرض</p>
            <h2 className="text-3xl font-medium text-[#3a342e] sm:text-4xl">لمحات من مجموعتنا</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
            {PRODUCTS.slice(0, 6).map((p, i) => (
              <Link
                key={p.name}
                to="/products"
                className="group relative overflow-hidden rounded-2xl border border-[#75695d]/10 transition-shadow duration-300 hover:shadow-lg hover:shadow-[#75695d]/15"
              >
                <ProductImage product={p} variant={i} />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#3a342e]/70 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-sm font-semibold text-white">{p.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#efece6] py-16 sm:py-20">
        <div className="container-page">
          <div className="mb-10 text-center">
            <p className="section-label">آراء عملائنا</p>
            <h2 className="text-3xl font-medium text-[#3a342e] sm:text-4xl">ماذا قالوا عنّا</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-2xl border border-[#75695d]/10 bg-[#fffefc] p-8"
              >
                <div className="mb-4 flex gap-1 text-[#75695d]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="flex-1 text-sm leading-8 text-[#3a342e]">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-6 border-t border-[#75695d]/10 pt-4">
                  <p className="text-sm font-semibold text-[#3a342e]">{t.name}</p>
                  <p className="mt-1 text-xs text-[#8a8076]">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
