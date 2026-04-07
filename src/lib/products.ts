export const SAMPLE_IMAGE =
  "https://12storeez.kz/cdn/shop/files/69303263e8a5c-01-12-2025-anastasiya-2110_2048x2048.jpg?v=1770365186";

export interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  tag?: string;
  image: string;
  details?: string[];
  sizes?: string[];
  description?: string;
}

export const products: Product[] = [
  { id: 1, name: "Платье «Элегия»", price: "185 000 ₸", category: "Платья", tag: "NEW", image: SAMPLE_IMAGE, sizes: ["XS","S","M","L"], description: "Изысканное платье из итальянского шёлка с драпировкой ручной работы.", details: ["100% шёлк", "Ручная работа", "Потайная молния"] },
  { id: 2, name: "Костюм «Аврора»", price: "245 000 ₸", category: "Костюмы", tag: "NEW", image: SAMPLE_IMAGE, sizes: ["XS","S","M","L","XL"], description: "Элегантный костюм-двойка из японской шерсти. Приталенный жакет с атласной подкладкой.", details: ["Японская шерсть", "Атласная подкладка", "Пуговицы ручной работы"] },
  { id: 3, name: "Блуза «Грация»", price: "78 000 ₸", category: "Блузы", image: SAMPLE_IMAGE, sizes: ["XS","S","M","L"], description: "Воздушная блуза из французского шифона с рукавами-буфами.", details: ["Французский шифон", "Перламутровые пуговицы"] },
  { id: 4, name: "Платье «Серенада»", price: "210 000 ₸", category: "Платья", tag: "NEW", image: SAMPLE_IMAGE, sizes: ["XS","S","M","L"], description: "Коктейльное платье с асимметричным подолом.", details: ["Шёлк + вискоза", "Ручная отделка"] },
  { id: 5, name: "Жакет «Виктория»", price: "165 000 ₸", category: "Верхняя одежда", image: SAMPLE_IMAGE, sizes: ["XS","S","M","L","XL"], description: "Структурированный жакет из смесовой ткани.", details: ["Смесовая ткань", "Подкладка из купро"] },
  { id: 6, name: "Юбка «Кармен»", price: "95 000 ₸", category: "Юбки", tag: "NEW", image: SAMPLE_IMAGE, sizes: ["XS","S","M","L"], description: "Миди-юбка с запахом из натурального шёлка.", details: ["100% шёлк", "Пояс на резинке"] },
  { id: 7, name: "Платье «Ноктюрн»", price: "198 000 ₸", category: "Платья", image: SAMPLE_IMAGE, sizes: ["XS","S","M","L"], description: "Вечернее платье с открытой спиной.", details: ["Бархат + шёлк", "Ручная вышивка"] },
  { id: 8, name: "Брюки «Софи»", price: "89 000 ₸", category: "Брюки", image: SAMPLE_IMAGE, sizes: ["XS","S","M","L","XL"], description: "Широкие брюки с высокой посадкой.", details: ["Шерсть Premium", "Стрелки"] },
  { id: 9, name: "Топ «Аделина»", price: "62 000 ₸", category: "Блузы", tag: "NEW", image: SAMPLE_IMAGE, sizes: ["XS","S","M","L"], description: "Шёлковый топ с тонкими бретелями.", details: ["100% шёлк", "Свободный крой"] },
  { id: 10, name: "Пальто «Монако»", price: "320 000 ₸", category: "Верхняя одежда", image: SAMPLE_IMAGE, sizes: ["XS","S","M","L"], description: "Классическое пальто из итальянской шерсти.", details: ["Итальянская шерсть", "Атласная подкладка"] },
  { id: 11, name: "Платье «Луна»", price: "175 000 ₸", category: "Платья", image: SAMPLE_IMAGE, sizes: ["XS","S","M","L"], description: "Нежное платье А-силуэта.", details: ["Органза", "Ручная отделка"] },
  { id: 12, name: "Шарф «Кашемир»", price: "45 000 ₸", category: "Аксессуары", image: SAMPLE_IMAGE, sizes: ["ONE SIZE"], description: "Мягкий шарф из 100% кашемира.", details: ["100% кашемир", "Бахрома"] },
];
