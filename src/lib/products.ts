const A = [
  "https://api.therlgn.com/storage/uploads/product/390977/conversions/01KKEZ3MSXCG9DPSNBR8RQS0DF-md.webp",
  "https://api.therlgn.com/storage/uploads/product/390977/conversions/01KKEXA3NS2RE06KHEVG1VTH43-md.webp",
  "https://api.therlgn.com/storage/uploads/product/390977/conversions/01KKEZ57Q1EFX2RDC03P4WXMM3-md.webp",
];

const B = [
  "https://api.therlgn.com/storage/uploads/product/391669/conversions/01KKEXXGWMQ2BWXB231YGP6MYV-md.webp",
  "https://api.therlgn.com/storage/uploads/product/391669/conversions/01KM2X1FVBDDGVNXGTFK4ES4YN-md.webp",
  "https://api.therlgn.com/storage/uploads/product/391669/conversions/01KM2X1FWBFE5KAWB5062ZTMZP-md.webp",
];

export const SAMPLE_IMAGE = A[0];

export interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  tag?: string;
  images: string[];
  details?: string[];
  sizes?: string[];
  description?: string;
}

export const products: Product[] = [
  { id: 1,  name: "Платье «Элегия»",   price: "185 000 ₸", category: "Платья",          tag: "NEW", images: A, sizes: ["XS","S","M","L"],    description: "Изысканное платье из итальянского шёлка с драпировкой ручной работы. Силуэт подчёркивает фигуру.", details: ["100% итальянский шёлк","Ручная драпировка","Потайная молния"] },
  { id: 2,  name: "Костюм «Аврора»",   price: "245 000 ₸", category: "Костюмы",         tag: "NEW", images: B, sizes: ["XS","S","M","L","XL"], description: "Элегантный костюм-двойка из японской шерсти. Приталенный жакет с атласной подкладкой.",             details: ["Японская шерсть Premium","Атласная подкладка","Пуговицы ручной работы"] },
  { id: 3,  name: "Блуза «Грация»",    price: "78 000 ₸",  category: "Блузы",                       images: A, sizes: ["XS","S","M","L"],    description: "Воздушная блуза из французского шифона с изящными рукавами-буфами.",                            details: ["Французский шифон","Перламутровые пуговицы","Свободный крой"] },
  { id: 4,  name: "Платье «Серенада»", price: "210 000 ₸", category: "Платья",          tag: "NEW", images: B, sizes: ["XS","S","M","L"],    description: "Коктейльное платье с асимметричным подолом из смеси шёлка и вискозы.",                          details: ["Шёлк + вискоза","Ручная отделка","Асимметричный подол"] },
  { id: 5,  name: "Жакет «Виктория»",  price: "165 000 ₸", category: "Верхняя одежда",              images: A, sizes: ["XS","S","M","L","XL"], description: "Структурированный жакет из смесовой ткани с подкладкой из купро.",                             details: ["Смесовая ткань","Подкладка из купро","Два накладных кармана"] },
  { id: 6,  name: "Юбка «Кармен»",     price: "95 000 ₸",  category: "Юбки",            tag: "NEW", images: B, sizes: ["XS","S","M","L"],    description: "Миди-юбка с запахом из натурального шёлка.",                                                    details: ["100% шёлк","Пояс на резинке","Длина миди"] },
  { id: 7,  name: "Платье «Ноктюрн»",  price: "198 000 ₸", category: "Платья",                      images: A, sizes: ["XS","S","M","L"],    description: "Вечернее платье с открытой спиной из бархата и шёлка.",                                         details: ["Бархат + шёлк","Ручная вышивка","Открытая спина"] },
  { id: 8,  name: "Брюки «Софи»",      price: "89 000 ₸",  category: "Брюки",                       images: B, sizes: ["XS","S","M","L","XL"], description: "Широкие брюки с высокой посадкой и стрелками из шерсти Premium.",                              details: ["Шерсть Premium","Высокая посадка","Стрелки"] },
  { id: 9,  name: "Топ «Аделина»",     price: "62 000 ₸",  category: "Блузы",           tag: "NEW", images: A, sizes: ["XS","S","M","L"],    description: "Шёлковый топ с тонкими бретелями — базовый элемент гардероба.",                                 details: ["100% шёлк","Тонкие бретели","Свободный крой"] },
  { id: 10, name: "Пальто «Монако»",   price: "320 000 ₸", category: "Верхняя одежда",              images: B, sizes: ["XS","S","M","L"],    description: "Классическое пальто из итальянской шерсти с атласной подкладкой.",                             details: ["Итальянская шерсть","Атласная подкладка","Классический крой"] },
  { id: 11, name: "Платье «Луна»",     price: "175 000 ₸", category: "Платья",                      images: A, sizes: ["XS","S","M","L"],    description: "Нежное платье А-силуэта из органзы с ручной отделкой.",                                        details: ["Органза","Ручная отделка","А-силуэт"] },
  { id: 12, name: "Шарф «Кашемир»",   price: "45 000 ₸",  category: "Аксессуары",                  images: B, sizes: ["ONE SIZE"],           description: "Мягкий шарф из 100% кашемира с бахромой.",                                                     details: ["100% кашемир","Бахрома","Размер 200×70 см"] },
];
