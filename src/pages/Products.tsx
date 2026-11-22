import { WhatsAppIcon, whatsappLink } from '@/components/Layout';
import { ProductImage } from '@/components/MarbleCup';
import { PRODUCTS } from '@/data/products';

export function ProductsPage() {
  return (
    <main className="pt-16 sm:pt-20">
      <section className="container-page py-14 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-label">المجموعة</p>
          <h1 className="text-4xl font-medium text-[#3a342e] sm:text-5xl">منتجاتنا</h1>
          <p className="mt-5 text-base leading-8 text-[#8a8076]">
            ست قطع مختارة من الرخام الطبيعي، كل واحدة منها بحالتها التي تشبهها. الأسعار
            تشمل التغليف الراقي، والكميات محدودة.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <article
              key={p.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#75695d]/10 bg-[#fffefc] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#75695d]/10"
            >
              <ProductImage product={p} variant={i} />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-lg font-semibold text-[#3a342e]">{p.name}</h2>
                  <p className="shrink-0 rounded-full bg-[#75695d]/10 px-3 py-1 text-sm font-semibold text-[#75695d]">
                    {p.price} ر.س
                  </p>
                </div>
                <p className="mt-3 flex-1 text-sm leading-7 text-[#8a8076]">{p.description}</p>
                <a
                  href={whatsappLink(`مرحبًا، أود الاستفسار عن «${p.name}» بسعر ${p.price} ر.س`)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp mt-6 w-full text-sm"
                >
                  <WhatsAppIcon />
                  استفسار عبر واتساب
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
