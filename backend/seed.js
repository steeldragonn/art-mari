const mongoose = require("mongoose");
const Work = require("./models/Works");
const Collection = require("./models/Collections");

mongoose
  .connect("mongodb://localhost:27017/art-mari")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

const collectionsData = [
  {
    name: "море",
    imageUrl: "/works/сонце, що падає.jpg",
    works: [
      new mongoose.Types.ObjectId("6717c20a23aa3be335b24e5e"),
      new mongoose.Types.ObjectId("6717c20a23aa3be335b24e5f"),
      new mongoose.Types.ObjectId("6717c20a23aa3be335b24e60"),
      new mongoose.Types.ObjectId("6717c20a23aa3be335b24e61"),
      new mongoose.Types.ObjectId("6717c20a23aa3be335b24e62"),
      new mongoose.Types.ObjectId("6717c20a23aa3be335b24e63"),
      new mongoose.Types.ObjectId("6717c20a23aa3be335b24e64"),
      new mongoose.Types.ObjectId("6717c20a23aa3be335b24e65"),
    ],
  },
  {
    name: "флора",
    imageUrl: "/works/феєрверк кольору.jpg",
    works: [
      new mongoose.Types.ObjectId("6717c20a23aa3be335b24e66"),
      new mongoose.Types.ObjectId("6717c20a23aa3be335b24e67"),
      new mongoose.Types.ObjectId("6717c20a23aa3be335b24e68"),
      new mongoose.Types.ObjectId("6717c20a23aa3be335b24e69"),
      new mongoose.Types.ObjectId("6717c20a23aa3be335b24e6a"),
      new mongoose.Types.ObjectId("6717c20a23aa3be335b24e6b"),
      new mongoose.Types.ObjectId("6717c20a23aa3be335b24e6c"),
      new mongoose.Types.ObjectId("6717c20a23aa3be335b24e6d"),
      new mongoose.Types.ObjectId("6717c20a23aa3be335b24e6e"),
    ],
  },
  {
    name: "торунь",
    imageUrl: "/works/зелений куток.jpg",
    works: [
      new mongoose.Types.ObjectId("6717c20a23aa3be335b24e6f"),
      new mongoose.Types.ObjectId("6717c20a23aa3be335b24e70"),
      new mongoose.Types.ObjectId("6717c20a23aa3be335b24e71"),
      new mongoose.Types.ObjectId("6717c20a23aa3be335b24e72"),
      new mongoose.Types.ObjectId("6717c20a23aa3be335b24e73"),
      new mongoose.Types.ObjectId("6717c20a23aa3be335b24e74"),
      new mongoose.Types.ObjectId("6717c20a23aa3be335b24e75"),
      new mongoose.Types.ObjectId("6717c20a23aa3be335b24e76"),
      new mongoose.Types.ObjectId("6717c20a23aa3be335b24e77"),
    ],
  },
];

const worksData = [
  {
    url: "art-name",
    imageUrl: "/works/сонце, що падає.jpg",
    name: "сонце, що падає",
    size: "20x30",
    year: 2023,
    material: "Acrylic",
    description: "Sunset over the horizon",
    price: "300$",
  },
  {
    url: "",
    name: "в погоні за дитинством",
    imageUrl: "/works/в погоні за дитинством.jpg",
    size: "30x40",
    year: 2023,
    material: "Oil",
    description: "Chasing childhood dreams",
    price: "350$",
  },
  {
    url: "",
    name: "відпливаємо",
    imageUrl: "/works/відпливаємо.jpg",
    size: "25x35",
    year: 2023,
    material: "Watercolor",
    description: "Sailing away",
    price: "280$",
  },
  {
    url: "",
    name: "сонце, що встає",
    imageUrl: "/works/сонце, що встає.jpg",
    size: "30x40",
    year: 2023,
    material: "Acrylic",
    description: "Sunrise on the beach",
    price: "320$",
  },
  {
    url: "",
    name: "Де горизонт зникає",
    imageUrl: "/works/Де горизонт зникає.jpg",
    size: "40x50",
    year: 2023,
    material: "Oil",
    description: "Where the horizon disappears",
    price: "400$",
  },
  {
    url: "",
    name: "в хвилях",
    imageUrl: "/works/в хвилях.jpg",
    size: "25x25",
    year: 2023,
    material: "Watercolor",
    description: "In the waves",
    price: "270$",
  },
  {
    url: "",
    name: "в морі",
    imageUrl: "/works/в морі.jpg",
    size: "30x40",
    year: 2023,
    material: "Acrylic",
    description: "In the sea",
    price: "350$",
  },
  {
    url: "",
    name: "на березі",
    imageUrl: "/works/на березі.jpg",
    size: "35x45",
    year: 2023,
    material: "Oil",
    description: "On the shore",
    price: "340$",
  },
  {
    url: "",
    name: "феєрверк кольору",
    imageUrl: "/works/феєрверк кольору.jpg",
    size: "30x30",
    year: 2023,
    material: "Watercolor",
    description: "Fireworks of color",
    price: "300$",
  },
  {
    url: "",
    name: "муза",
    imageUrl: "/works/муза.jpg",
    size: "20x30",
    year: 2023,
    material: "Acrylic",
    description: "The muse",
    price: "310$",
  },
  {
    url: "",
    name: "гра флори",
    imageUrl: "/works/гра флори.jpg",
    size: "30x40",
    year: 2023,
    material: "Oil",
    description: "Floral play",
    price: "330$",
  },
  {
    url: "",
    name: "дві частини цілого",
    imageUrl: "/works/дві частини цілого.jpg",
    size: "25x35",
    year: 2023,
    material: "Watercolor",
    description: "Two parts of a whole",
    price: "290$",
  },
  {
    url: "",
    name: "очі посеред темряви",
    imageUrl: "/works/очі посеред темряви.jpg",
    size: "35x45",
    year: 2023,
    material: "Acrylic",
    description: "Eyes in the darkness",
    price: "320$",
  },
  {
    url: "",
    name: "розмова",
    imageUrl: "/works/розмова.jpg",
    size: "30x30",
    year: 2023,
    material: "Oil",
    description: "A conversation",
    price: "310$",
  },
  {
    url: "",
    name: "звʼязок",
    imageUrl: "/works/звʼязок.jpg",
    size: "25x30",
    year: 2023,
    material: "Watercolor",
    description: "Connection",
    price: "280$",
  },
  {
    url: "",
    name: "троянди серця",
    imageUrl: "/works/троянди серця.jpg",
    size: "40x50",
    year: 2023,
    material: "Acrylic",
    description: "Roses of the heart",
    price: "370$",
  },
  {
    url: "",
    name: "вогонь троянд",
    imageUrl: "/works/вогонь троянд.jpg",
    size: "30x30",
    year: 2023,
    material: "Oil",
    description: "Fire of roses",
    price: "340$",
  },
  {
    url: "",
    name: "зелений куток",
    imageUrl: "/works/зелений куток.jpg",
    size: "35x45",
    year: 2023,
    material: "Watercolor",
    description: "Green corner",
    price: "300$",
  },
  {
    url: "",
    name: "Золото Торуня",
    imageUrl: "/works/Золото Торуня.jpg",
    size: "25x35",
    year: 2023,
    material: "Acrylic",
    description: "Gold of Toruń",
    price: "330$",
  },
  {
    url: "",
    name: "Торунь і осінь",
    imageUrl: "/works/Торунь і осінь.jpg",
    size: "30x40",
    year: 2023,
    material: "Oil",
    description: "Toruń and autumn",
    price: "350$",
  },
  {
    url: "",
    name: "Помаранчевий охоронець",
    imageUrl: "/works/Помаранчевий охоронець.jpg",
    size: "20x30",
    year: 2023,
    material: "Watercolor",
    description: "Orange guardian",
    price: "290$",
  },
  {
    url: "",
    name: "Торунь і вечір",
    imageUrl: "/works/Торунь і вечір.jpg",
    size: "35x45",
    year: 2023,
    material: "Acrylic",
    description: "Toruń in the evening",
    price: "320$",
  },
  {
    url: "",
    name: "Торунь і сяйво свята",
    imageUrl: "/works/Торунь і сяйво свята.jpg",
    size: "30x30",
    year: 2023,
    material: "Oil",
    description: "Toruń and the glow of the holiday",
    price: "340$",
  },
  {
    url: "",
    name: "Торунь і день",
    imageUrl: "/works/Торунь і день.jpg",
    size: "25x35",
    year: 2023,
    material: "Watercolor",
    description: "Toruń and the day",
    price: "310$",
  },
  {
    url: "",
    name: "Торунь",
    imageUrl: "/works/Торунь.jpg",
    size: "40x50",
    year: 2023,
    material: "Acrylic",
    description: "Toruń",
    price: "360$",
  },
  {
    url: "",
    name: "Торунь і сонце",
    imageUrl: "/works/Торунь і сонце.jpg",
    size: "30x40",
    year: 2023,
    material: "Oil",
    description: "Toruń and the sun",
    price: "370$",
  },
];

const seedDatabase = async () => {
  try {
    await Work.deleteMany({});
    await Work.insertMany(worksData);
    console.log("Database seeded with works data");
  } catch (err) {
    console.error("Error seeding works database:", err);
  }
};

const seedCollectionsDatabase = async () => {
  try {
    await Collection.deleteMany({});
    await Collection.insertMany(collectionsData);
    console.log("Collections database seeded");
  } catch (err) {
    console.error("Error seeding collections database:", err);
  }
};

// to seed both databases
const seedAllDatabases = async () => {
  await seedDatabase();
  await seedCollectionsDatabase();
  mongoose.disconnect();
};

seedCollectionsDatabase();
