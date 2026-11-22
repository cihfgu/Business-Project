import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { MarbleCup } from '@/components/MarbleCup';

export function AboutPage() {
  return (
    <main className="pt-16 sm:pt-20">
      <section className="container-page grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2">
        <div>
          <p className="section-label">قصتنا</p>
          <h1 className="text-4xl font-medium text-[#3a342e] sm:text-5xl">
            حيث يلتقي الجمال بالوظيفة
          </h1>
          <div className="mt-6 space-y-5 text-base leading-8 text-[#8a8076]">
            <p>
              بدأت MORROW من فكرة بسيطة في جدة: لماذا تكون أدوات الاستخدام اليومي عادية،
              بينما يمكنها أن تكون قطعًا نحب النظر إليها؟
            </p>
            <p>
              نختار ألواح الرخام بعناية، ونعمل مع حرفيين يتعاملون مع كل لوح كما لو كان قطعة
              فريدة، لأنه كذلك. العروق التي تراها على كل كوب سِمة طبيعية لا تتكرر، فلا يوجد
              كوبان متطابقان في مجموعتنا أبدًا.
            </p>
            <p>
              فلسفتنا أن الجميل ليس ترفًا. الكوب الذي تشرب منه قهوتك صباحًا يمكن أن يكون
              بداية يومك الهادئة، وقطعة تحيط بها على رفّك تُحدث النظراء عن ذوقك دون أن تتكلم.
            </p>
            <p>
              نجمع بين الجمال والوظيفة في كل تفصيلة: وزن متوازن في اليد، تشطيب ناعم لا يحبس
              البقع، وتغليف يجعل الهدية جاهزة من اللحظة الأولى.
            </p>
          </div>
          <Link to="/products" className="btn-whatsapp mt-8">
            تعرّف على المجموعة
            <ArrowLeft size={16} />
          </Link>
        </div>
        <div className="grid gap-6">
          <div
            className="marble-grain marble-veins aspect-square max-w-sm rounded-[2rem] border border-[#75695d]/10 p-10 shadow-lg shadow-[#75695d]/10"
            style={{ backgroundColor: '#d9cfc0' }}
          >
            <MarbleCup tone="#d9cfc0" variant={3} />
          </div>
          <div
            className="marble-grain marble-veins aspect-square max-w-xs rounded-[2rem] border border-[#75695d]/10 p-8 shadow-lg shadow-[#75695d]/10 ltr:ml-auto rtl:mr-auto"
            style={{ backgroundColor: '#4a443d' }}
          >
            <MarbleCup tone="#4a443d" variant={4} />
          </div>
        </div>
      </section>

      <section className="bg-[#efece6] py-16">
        <div className="container-page grid gap-10 text-center sm:grid-cols-3">
          {[
            { num: '+٥٠٠', label: 'قطعة وصلت لبيوت عملائنا' },
            { num: '١٠٠٪', label: 'رخام طبيعي بعروق فريدة' },
            { num: '٤.٩', label: 'متوسط تقييم عملائنا' },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-en text-5xl font-medium text-[#75695d]">{s.num}</p>
              <p className="mt-2 text-sm text-[#8a8076]">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
