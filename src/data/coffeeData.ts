export interface Coffee {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  zodiacSigns: string[];
  moods: string[];
}

const coffeeData: Coffee[] = [
  {
    id: 1,
    name: "Bold Aries Espresso",
    description: "A strong, intense espresso with notes of dark chocolate and spice. Perfect for the adventurous Aries who needs energy for their next conquest.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    price: "₹180",
    zodiacSigns: ["Aries", "Leo", "Sagittarius"],
    moods: ["energetic", "stressed"]
  },
  {
    id: 2,
    name: "Taurus Comfort Latte",
    description: "A rich, creamy latte with hints of caramel and vanilla. The perfect indulgence for the sensual Taurus who appreciates life's pleasures.",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1037&q=80",
    price: "₹220",
    zodiacSigns: ["Taurus", "Virgo", "Capricorn"],
    moods: ["relaxed", "happy"]
  },
  {
    id: 3,
    name: "Gemini Dual Brew",
    description: "A fascinating blend of light and dark roasts, offering complex flavors that change as you drink. Perfect for the dual-natured Gemini.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    price: "₹200",
    zodiacSigns: ["Gemini", "Libra", "Aquarius"],
    moods: ["energetic", "happy"]
  },
  {
    id: 4,
    name: "Cancer Comfort Mocha",
    description: "A soothing mocha with rich chocolate and a hint of cinnamon. Brings comfort and warmth, just like the nurturing Cancer.",
    image: "https://images.unsplash.com/photo-1579888944880-d98341245702?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    price: "₹240",
    zodiacSigns: ["Cancer", "Scorpio", "Pisces"],
    moods: ["relaxed", "tired"]
  },
  {
    id: 5,
    name: "Leo's Royal Macchiato",
    description: "A majestic caramel macchiato topped with gold dust. As bold and impressive as Leo, this drink is sure to turn heads.",
    image: "https://images.unsplash.com/photo-1534687941688-13b0d8f5df5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    price: "₹260",
    zodiacSigns: ["Leo", "Aries", "Sagittarius"],
    moods: ["happy", "energetic"]
  },
  {
    id: 6,
    name: "Virgo Precision Pour",
    description: "A meticulously crafted pour-over with clean, bright flavors and perfect balance. The attention to detail will satisfy any Virgo.",
    image: "https://images.unsplash.com/photo-1558122104-ebc101c101c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    price: "₹190",
    zodiacSigns: ["Virgo", "Taurus", "Capricorn"],
    moods: ["focused", "stressed"]
  },
  {
    id: 7,
    name: "Libra Balance Blend",
    description: "A harmonious blend with equal notes of sweetness and acidity. Perfectly balanced, as all things should be - just like Libra.",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    price: "₹210",
    zodiacSigns: ["Libra", "Gemini", "Aquarius"],
    moods: ["relaxed", "happy"]
  },
  {
    id: 8,
    name: "Scorpio Intensity Cold Brew",
    description: "A mysterious cold brew with intense depth and complexity. Dark, powerful, and transformative - just like Scorpio.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1069&q=80",
    price: "₹230",
    zodiacSigns: ["Scorpio", "Cancer", "Pisces"],
    moods: ["focused", "energetic"]
  },
  {
    id: 9,
    name: "Sagittarius Adventure Brew",
    description: "An exotic blend featuring beans from around the world. Perfect for the adventurous Sagittarius who loves to explore new tastes.",
    image: "https://images.unsplash.com/photo-1497636577773-f1231844b336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    price: "₹250",
    zodiacSigns: ["Sagittarius", "Aries", "Leo"],
    moods: ["energetic", "happy"]
  },
  {
    id: 10,
    name: "Capricorn Classic Americano",
    description: "A traditional, no-nonsense Americano with depth and character. Reliable and strong, just like Capricorn.",
    image: "https://images.unsplash.com/photo-1551030173-122aabc4489c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    price: "₹170",
    zodiacSigns: ["Capricorn", "Taurus", "Virgo"],
    moods: ["focused", "tired"]
  },
  {
    id: 11,
    name: "Aquarius Innovation Infusion",
    description: "An innovative coffee infused with unexpected flavors like lavender and citrus. As unique and forward-thinking as Aquarius.",
    image: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    price: "₹270",
    zodiacSigns: ["Aquarius", "Gemini", "Libra"],
    moods: ["creative", "energetic"]
  },
  {
    id: 12,
    name: "Pisces Dream Latte",
    description: "A dreamy latte with swirls of blue butterfly pea flower and hints of vanilla. As magical and ethereal as the imaginative Pisces.",
    image: "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    price: "₹240",
    zodiacSigns: ["Pisces", "Cancer", "Scorpio"],
    moods: ["relaxed", "creative"]
  }
];

export default coffeeData;