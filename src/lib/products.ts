const GRAY = [
  "https://api.therlgn.com/storage/uploads/product/390977/conversions/01KKEZ3MSXCG9DPSNBR8RQS0DF-md.webp",
  "https://api.therlgn.com/storage/uploads/product/390977/conversions/01KKEXA3NS2RE06KHEVG1VTH43-md.webp",
  "https://api.therlgn.com/storage/uploads/product/390977/conversions/01KKEZ57Q1EFX2RDC03P4WXMM3-md.webp",
];

const NAVY = [
  "https://api.therlgn.com/storage/uploads/product/391669/conversions/01KKEXXGWMQ2BWXB231YGP6MYV-md.webp",
  "https://api.therlgn.com/storage/uploads/product/391669/conversions/01KM2X1FVBDDGVNXGTFK4ES4YN-md.webp",
  "https://api.therlgn.com/storage/uploads/product/391669/conversions/01KM2X1FWBFE5KAWB5062ZTMZP-md.webp",
];

const WOMAN = "https://12storeez.kz/cdn/shop/files/69303263e8a5c-01-12-2025-anastasiya-2110_2048x2048.jpg?v=1770365186";

// 4 distinct image sets for visual variety
const A = [GRAY[0], GRAY[1], GRAY[2]];
const B = [NAVY[0], NAVY[1], NAVY[2]];
const C = [WOMAN, GRAY[0], NAVY[0]];
const D = [NAVY[1], WOMAN, GRAY[1]];

export const SAMPLE_IMAGE = GRAY[0];

export interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  tag?: string;
  images: string[];
  colors?: { name: string; hex: string }[];
  details?: string[];
  sizes?: string[];
  description?: string;
}

const COLORS_1 = [
  { name: "Синий",    hex: "#1B365D" },
  { name: "Бежевый", hex: "#D4C5A9" },
  { name: "Чёрный",  hex: "#1a1a1a" },
];
const COLORS_2 = [
  { name: "Серый",   hex: "#888888" },
  { name: "Синий",   hex: "#1B365D" },
  { name: "Кремовый",hex: "#EDE6D6" },
];

export const products: Product[] = [
  { id: 1,  name: "Платье «Элегия»",   price: "185 000 ₸", category: "Платья",         tag: "NEW", images: A, colors: COLORS_1, sizes: ["XS","S","M","L"],    description: "Изысканное платье из итальянского шёлка с драпировкой ручной работы.", details: ["100% итальянский шёлк","Ручная драпировка","Потайная молния","Подкладка из натурального шёлка"] },
  { id: 2,  name: "Костюм «Аврора»",   price: "245 000 ₸", category: "Костюмы",        tag: "NEW", images: B, colors: COLORS_2, sizes: ["XS","S","M","L","XL"], description: "Элегантный костюм-двойка из японской шерсти. Приталенный жакет.", details: ["Японская шерсть Premium","Атласная подкладка","Пуговицы ручной работы"] },
  { id: 3,  name: "Блуза «Грация»",    price: "78 000 ₸",  category: "Блузы",                      images: C, colors: COLORS_1, sizes: ["XS","S","M","L"],    description: "Воздушная блуза из французского шифона с рукавами-буфами.", details: ["Французский шифон","Перламутровые пуговицы","Свободный крой"] },
  { id: 4,  name: "Платье «Серенада»", price: "210 000 ₸", category: "Платья",         tag: "NEW", images: D, colors: COLORS_2, sizes: ["XS","S","M","L"],    description: "Коктейльное платье с асимметричным подолом.", details: ["Шёлк + вискоза","Ручная отделка","Асимметричный подол"] },
  { id: 5,  name: "Жакет «Виктория»",  price: "165 000 ₸", category: "Верхняя одежда",             images: A, colors: COLORS_1, sizes: ["XS","S","M","L","XL"], description: "Структурированный жакет из смесовой ткани.", details: ["Смесовая ткань","Подкладка из купро","Два накладных кармана"] },
  { id: 6,  name: "Юбка «Кармен»",     price: "95 000 ₸",  category: "Юбки",           tag: "NEW", images: B, colors: COLORS_2, sizes: ["XS","S","M","L"],    description: "Миди-юбка с запахом из натурального шёлка.", details: ["100% шёлк","Пояс на резинке","Длина миди"] },
  { id: 7,  name: "Платье «Ноктюрн»",  price: "198 000 ₸", category: "Платья",                     images: C, colors: COLORS_1, sizes: ["XS","S","M","L"],    description: "Вечернее платье с открытой спиной.", details: ["Бархат + шёлк","Ручная вышивка","Открытая спина"] },
  { id: 8,  name: "Брюки «Софи»",      price: "89 000 ₸",  category: "Брюки",                      images: D, colors: COLORS_2, sizes: ["XS","S","M","L","XL"], description: "Широкие брюки с высокой посадкой.", details: ["Шерсть Premium","Высокая посадка","Стрелки"] },
  { id: 9,  name: "Топ «Аделина»",     price: "62 000 ₸",  category: "Блузы",          tag: "NEW", images: A, colors: COLORS_1, sizes: ["XS","S","M","L"],    description: "Шёлковый топ с тонкими бретелями.", details: ["100% шёлк","Тонкие бретели","Свободный крой"] },
  { id: 10, name: "Пальто «Монако»",   price: "320 000 ₸", category: "Верхняя одежда",             images: B, colors: COLORS_2, sizes: ["XS","S","M","L"],    description: "Классическое пальто из итальянской шерсти.", details: ["Итальянская шерсть","Атласная подкладка","Классический крой"] },
  { id: 11, name: "Платье «Луна»",     price: "175 000 ₸", category: "Платья",                     images: C, colors: COLORS_1, sizes: ["XS","S","M","L"],    description: "Нежное платье А-силуэта из органзы.", details: ["Органза","Ручная отделка","А-силуэт"] },
  { id: 12, name: "Шарф «Кашемир»",   price: "45 000 ₸",  category: "Аксессуары",                 images: D, colors: COLORS_2, sizes: ["ONE SIZE"],           description: "Мягкий шарф из 100% кашемира.", details: ["100% кашемир","Бахрома","Размер 200×70 см"] },
];
