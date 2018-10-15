export default {
  pizza: {
    'margarita': {
      name: "Маргарита",
      weight: 400,
      price: 105,
      img: "images/dish-imgs/margarita.jpg",
      desc: "Соус пілаті, моцарелла, базилік",
      url: "margarita",
      extra: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
    },
    'quadro': {
      name: "Кватро формаджи",
      weight: 450,
      price: 150,
      img: "images/dish-imgs/pizza1.jpg",
      desc: "Соус вершковий, моцарелла, горгонзола, гауда, пармезан",
      url: "quadro",
      extra: [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18]
    },
    'panariello': {
      name: "Панаріелло",
      weight: 480,
      price: 170,
      img: "images/dish-imgs/pizza1.jpg",
      desc: "Соус вершковий, шпинат, моцарелла, лосось, помідори черрі",
      url: "panariello",
      extra: [12, 13, 18]
    },
    'porcini': {
      name: "Білі гриби та горгонзола",
      weight: 450,
      price: 150,
      img: "images/dish-imgs/pizza1.jpg",
      desc: "Соус вершковий, білі гриби, горгонзола, часник, моцарелла",
      url: "porcini",
      extra: [1, 7, 8, 10, 11, 12, 13, 16, 18]
    },
    'podjoreale': {
      name: "Поджореале",
      weight: 550,
      price: 180,
      img: "images/dish-imgs/pizza1.jpg",
      desc: "Соус вершковий, моцарелла, горгонзола, сир твердий, прошутто, руккола, помідор",
      url: "podjoreale",
      extra: [1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 16, 18]
    },
    'frutti': {
      name: "Фруті Ді Маре",
      weight: 550,
      price: 205,
      img: "images/dish-imgs/pizza1.jpg",
      desc: "Соус вершковий, морепродукти, руккола,  помідори черрі",
      url: "frutti",
      extra: [11, 12, 13, 18]
    },
    'hawaiian': {
      name: "Гавайська",
      weight: 450,
      price: 120,
      img: "images/dish-imgs/pizza1.jpg",
      desc: "Соус пілаті, курка, ананас, моцарела",
      url: "hawaiian",
      extra: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
    },
    'meat': {
      name: "М’ясна",
      weight: 480,
      price: 130,
      img: "images/dish-imgs/pizza1.jpg",
      desc: "Соус пілаті, бекон, курка, мисливські ковбаски, салямі, моцарелла, руккола, пармезан, помідори черрі",
      url: "meat",
      extra: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
    },
    'piquant': {
      name: "Салямі 'Піканте'",
      weight: 480,
      price: 125,
      img: "images/dish-imgs/pizza1.jpg",
      desc: "Соус пілаті, салямі піканте, пармезан, моцарелла, руккола, помідори черрі",
      url: "piquant",
      extra: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
    },
    'caesar': {
      name: "Цезар",
      weight: 450,
      price: 130,
      img: "images/dish-imgs/pizza1.jpg",
      desc: "Соус «цезар», кабачок, курка, томати, бекон, моцарелла, салат айсберг, пармезан",
      url: "caesar",
      extra: [1, 2, 5, 7, 8, 9, 10, 11, 12, 13, 16, 18]
    },
  },
  burgers: {
    'bigTasty': {
      name: "Біг Тейсті",
      price: 148,
      weight: 380,
      img: "images/dish-imgs/burger1.jpg",
      desc: "Булочка пшенична, котлета з яловичини, сир, помідор свіжий, огірок солений, листя салату, цибуля червона, соус «Біг тейсті», картопля фрі",
      url: "bigTasty"
    },
    'chicken': {
      name: "Чікен Бургер «Хай Син»",
      price: 120,
      weight: 400,
      img: "images/dish-imgs/burger1.jpg",
      desc: "Булочка пшенична, смажене куряче філе, салат Айсберг, помідор свіжий, соус, картопля фрі",
      url: "chicken"
    },
    'salmon': {
      name: "Блек Салмон",
      price: 210,
      weight: 250,
      img: "images/dish-imgs/burger1.jpg",
      desc: "Булочка чорна, лосось слабо солений, шпинат свіжий, огірок свіжий, соус, картопля фрі",
      url: "salmon"
    },
    'crudo': {
      name: "Прошутто Крудо",
      price: 172,
      weight: 300,
      img: "images/dish-imgs/burger1.jpg",
      desc: "Булочка солодова, Прошутто ді Парма, груша камарелізована, руккола, соус сирний, картопля фрі",
      url: "crudo"
    }
  },
  salads: {
    'caesar': {
      title: "Салат «Цезар» з куркою",
      smallTitle: '',
      price: 55,
      weight: 150,
      img: "images/dish-imgs/salad1.jpg",
      url: "caesar"
    },
    'mixChicken': {
      title: 'Мікс Салат з куркою «Су-Від»',
      smallTitle: 'Та персиком під медово-гірчичним соусом',
      price: 43,
      weight: 150,
      img: "images/dish-imgs/salad1.jpg",
      url: "mixChicken"
    },
    'veggy': {
      title: "Салат з печених овочів і гарбузом",
      smallTitle: 'З медово-гірчичним соусом та гарбузовим насінням',
      price: 38,
      weight: 150,
      img: "images/dish-imgs/salad1.jpg",
      url: "veggy"
    },
    'veggy2': {
      title: "Крудите з овочів",
      smallTitle: '',
      price: 30,
      weight: 150,
      img: "images/dish-imgs/salad1.jpg",
      url: "veggy2"
    }
  },
  drinks: {
    'freshes': {
      name: "Фреші",
      drinks: [
        { name: 'Апельсиновий', volume: 250, price: 60 },
        { name: 'Грейпфрутовий', volume: 250, price: 60 },
        { name: 'Морквяний', volume: 250, price: 40 },
        { name: 'Яблучний', volume: 250, price: 50 },
      ],
    },
    'juices': {
      name: "Соки Jaffa в асортименті",
      drinks: [
        { name: 'Апельсин', volume: 250, price: 25 },
        { name: 'Яблуко', volume: 250, price: 25 },
        { name: 'Мультифрукт', volume: 250, price: 25 },
        { name: 'Томат', volume: 250, price: 25 },
        { name: 'ТоВишнямат', volume: 250, price: 25 },
      ],
    },
    'soda': {
      name: "Газовані напої",
      drinks: [
        { name: 'Coca Cola', volume: 250, price: 30 },
        { name: 'Fanta', volume: 250, price: 30 },
        { name: 'Sprite', volume: 250, price: 30 },
      ],
    },
  },
  extra: [
    { id: 1, name: 'Мисливські ковбаски', weight: 50, price: 25 },
    { id: 2, name: 'Помідор свіжий', weight: 100, price: 25 },
    { id: 3, name: 'Перець болгарський', weight: 30, price: 15 },
    { id: 4, name: 'Баклажани', weight: 50, price: 25 },
    { id: 5, name: 'Цукіні', weight: 50, price: 20 },
    { id: 6, name: 'Цибуля', weight: 30, price: 5 },
    { id: 7, name: 'Бекон', weight: 50, price: 30 },
    { id: 8, name: 'Спек', weight: 30, price: 30 },
    { id: 9, name: 'Помідори Черрі', weight: 50, price: 35 },
    { id: 10, name: 'Шампіньйони', weight: 30, price: 15 },
    { id: 11, name: 'Руккола', weight: 20, price: 25 },
    { id: 12, name: 'Пармезан', weight: 20, price: 30 },
    { id: 13, name: 'Моцарелла', weight: 50, price: 25 },
    { id: 14, name: 'Ананас', weight: 50, price: 15 },
    { id: 15, name: 'Кукурудза', weight: 50, price: 15 },
    { id: 16, name: 'Салямі', weight: 50, price: 25 },
    { id: 17, name: 'Соус «Пілаті»', weight: 100, price: 15 },
    { id: 18, name: 'Маслини', weight: 50, price: 20 }
  ]
};