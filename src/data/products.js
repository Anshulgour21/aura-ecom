import ringImg from '../assets/ring.png';
import braceletImg from '../assets/bracelet.png';
import necklaceImg from '../assets/necklace.png';
import lookbookImg from '../assets/lookbook.png';

export const PRODUCTS = [
  { id: 1, name: "Solitaire Minimalist Ring", price: "Rs. 1,250", img1: ringImg, img2: necklaceImg },
  { id: 2, name: "Ethereal Chain Bracelet", price: "Rs. 890", img1: braceletImg, img2: lookbookImg },
  { id: 3, name: "Lumière Diamond Necklace", price: "Rs. 2,100", img1: necklaceImg, img2: ringImg },
  { id: 4, name: "Classic Gold Hoops", price: "Rs. 650", img1: lookbookImg, img2: braceletImg },
  { id: 5, name: "Pavé Diamond Ring", price: "Rs. 3,400", img1: ringImg, img2: lookbookImg },
  { id: 6, name: "Signature Link Necklace", price: "Rs. 1,850", img1: necklaceImg, img2: braceletImg },
];

export const getProductById = (id) => {
  return PRODUCTS.find(p => p.id === parseInt(id));
};
