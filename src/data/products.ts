export interface Product {
  name: string;
  description: string;
  price: number;
  alt: string;
  tone: string;
}

export const PRODUCTS: Product[] = [
  {
    name: 'كوب صباح الأبيض',
    description: 'رخام أبيض بعروق رفيعة، تشطيب مصقول لامع يليق بقهوة الصباح.',
    price: 149,
    alt: 'كوب رخام أبيض بعروق رفيعة',
    tone: '#e9e5de',
  },
  {
    name: 'كوب غروب الرملي',
    description: 'درجات دافئة من الرخام الرملي بلمسة مطفية ناعمة الملمس.',
    price: 169,
    alt: 'كوب رخام رملي بلون دافئ',
    tone: '#d9cfc0',
  },
  {
    name: 'كوب لطيفة الداكن',
    description: 'رخام داكن بلمسة كلاسيكية، خيار مثالي لمحبي الإسبريسو.',
    price: 159,
    alt: 'كوب رخام داكن بلون بني',
    tone: '#9a8d7d',
  },
  {
    name: 'طقم ضيافة المنزل',
    description: 'أربعة أكواب بأحجام متدرجة، طقم مثالي لتقديم القهوة للضيوف.',
    price: 529,
    alt: 'طقم أكواب رخام متدرج',
    tone: '#cbbfae',
  },
  {
    name: 'كوب الضيافة الأسود',
    description: 'رخام أسود عميق بلمسة مطفية، حضور أنيق على أي طاولة.',
    price: 189,
    alt: 'كوب رخام أسود عميق',
    tone: '#4a443d',
  },
  {
    name: 'كوب الصحراء المقبل',
    description: 'بُني فاتح بعروق ناعمة، الهدية الأنيقة لمحبي القهوة.',
    price: 139,
    alt: 'كوب رخام بلون بني فاتح',
    tone: '#f2ede4',
  },
];
