const productsData = [
  {
    id: 1,
    title: 'starter',
    routeName: 'starter',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        imgSrc: 'https://elanta.app/nazar/starbelly-demo/img/menu/1.jpg',
        price: 25,
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imgSrc: 'https://elanta.app/nazar/starbelly-demo/img/menu/2.jpg',
        price: 18,
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imgSrc: 'https://elanta.app/nazar/starbelly-demo/img/menu/3.jpg',
        price: 35,
      },
      {
        id: 4,
        name: 'Grey Brim',
        imgSrc: 'https://elanta.app/nazar/starbelly-demo/img/menu/4.jpg',
        price: 25,
      },
      {
        id: 5,
        name: 'Green Beanie',
        imgSrc: 'https://elanta.app/nazar/starbelly-demo/img/menu/5.jpg',
        price: 18,
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imgSrc: 'https://elanta.app/nazar/starbelly-demo/img/menu/6.jpg',
        price: 14,
      },
      {
        id: 7,
        name: 'Red Beanie',
        imgSrc: 'https://elanta.app/nazar/starbelly-demo/img/menu/7.jpg',
        price: 18,
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imgSrc: 'https://elanta.app/nazar/starbelly-demo/img/menu/8.jpg',
        price: 14,
      },
    ],
  },
  {
    id: 2,
    title: 'maindishes',
    routeName: 'maindishes',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imgSrc: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        price: 220,
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imgSrc: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        price: 280,
      },
      {
        id: 12,
        name: 'Black Converse',
        imgSrc: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        price: 110,
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imgSrc: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        price: 160,
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imgSrc: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        price: 160,
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imgSrc: 'https://i.ibb.co/fMTV342/nike-brown.png',
        price: 160,
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imgSrc: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 190,
      },
      {
        id: 17,
        name: 'Timberlands',
        imgSrc: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 200,
      },
    ],
  },
  {
    id: 3,
    title: 'drinks',
    routeName: 'drinks',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        imgSrc: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        price: 125,
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imgSrc: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
        price: 90,
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imgSrc: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
        price: 90,
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imgSrc: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        price: 165,
      },
      {
        id: 22,
        name: 'Tan Trench',
        imgSrc: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 185,
      },
    ],
  },
  {
    id: 4,
    title: 'desserts',
    routeName: 'desserts',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imgSrc: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        price: 25,
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imgSrc: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        price: 20,
      },
      {
        id: 25,
        name: 'Floral Dress',
        imgSrc: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        price: 80,
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imgSrc: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        price: 80,
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imgSrc: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        price: 45,
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imgSrc: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        price: 135,
      },
      {
        id: 29,
        name: 'White Blouse',
        imgSrc: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        price: 20,
      },
    ],
  },
  {
    id: 5,
    title: 'beverages',
    routeName: 'beverages',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imgSrc: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 325,
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imgSrc: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 20,
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imgSrc: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: 25,
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imgSrc: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 25,
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imgSrc: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40,
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imgSrc: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25,
      },
    ],
  },
]

export default productsData
