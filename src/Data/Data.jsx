import calathea from '../assets/calathea.png';
import monsteraDeliciosa from '../assets/monsteraDeliciosa.png';
import zamioculcas from '../assets/zamioculcas.png';
import fiddleLeafFig from '../assets/fiddleLeafFig.png';
import snakePlant from '../assets/snakePlant.png';
import peaceLily from '../assets/peaceLily.png';
import pothos from '../assets/pothos.png';
import aloeVera from '../assets/aloeVera.png';
import spiderPlant from '../assets/spiderPlant.png';
import rubberPlant from '../assets/rubberPlant.png';
import dracaena from '../assets/dracaena.png';
import jadePlant from '../assets/jadePlant.png';
import bostonFern from '../assets/bostonFern.png';
import chineseEvergreen from '../assets/chineseEvergreen.png';
import begonia from '../assets/begonia.png';
import philodendron from '../assets/philodendron.png';
import hoya from '../assets/hoya.png';
import cactus from '../assets/cactus.png';
import caladium from '../assets/caladium.png';
import anthurium from '../assets/anthurium.png';
import kentiaPalm from '../assets/kentiaPalm.png';
import birdOfParadise from '../assets/birdOfParadise.png';
import dieffenbachia from '../assets/dieffenbachia.png';
import peperomia from '../assets/peperomia.png';
import maranta from '../assets/maranta.png';



const products = [
  {
    id: 1,
    name: "Calathea",
    description:
      "Calathea plants are tropical plants known for their vibrant, patterned leaves. They thrive in indirect sunlight and require high humidity. Calathea makes an excellent indoor decorative plant, bringing lush greenery to your home.",
    price: 499,
    image: calathea,
  },
  {
    id: 2,
    name: "Monstera Deliciosa",
    description:
      "Monstera Deliciosa, also called the Swiss Cheese Plant, has large, glossy leaves with unique splits. It prefers bright, indirect light and moderate watering. A perfect choice for indoor gardening enthusiasts.",
    price: 799,
    image: monsteraDeliciosa,
  },
  {
    id: 3,
    name: "Zamioculcas",
    description:
      "Zamioculcas, or ZZ plant, is a hardy indoor plant that tolerates low light and irregular watering. Its glossy green leaves make it a popular choice for home and office spaces.",
    price: 399,
    image: zamioculcas,
  },
  {
    id: 4,
    name: "Fiddle Leaf Fig",
    description:
      "Fiddle Leaf Fig is a striking indoor plant with large, violin-shaped leaves. It thrives in bright, filtered light and needs consistent watering.",
    price: 899,
    image: fiddleLeafFig,
  },
  {
    id: 5,
    name: "Snake Plant",
    description:
      "Snake Plant, also known as Sansevieria, is extremely low-maintenance and perfect for beginners.",
    price: 349,
    image: snakePlant,
  },
  {
    id: 6,
    name: "Peace Lily",
    description:
      "Peace Lily is a beautiful indoor plant with glossy green leaves and white blooms.",
    price: 449,
    image: peaceLily,
  },
  {
    id: 7,
    name: "Pothos",
    description:
      "Pothos is a fast-growing vine plant, known for its heart-shaped leaves.",
    price: 299,
    image: pothos,
  },
  {
    id: 8,
    name: "Aloe Vera",
    description:
      "Aloe Vera is a succulent plant known for its medicinal properties.",
    price: 199,
    image: aloeVera,
  },
  {
    id: 9,
    name: "Spider Plant",
    description:
      "Spider Plant is a resilient indoor plant with arching leaves and baby plantlets.",
    price: 249,
    image: spiderPlant,
  },
  {
    id: 10,
    name: "Rubber Plant",
    description:
      "Rubber Plant is a popular indoor plant with glossy, dark green leaves.",
    price: 699,
    image: rubberPlant,
  },
  {
    id: 11,
    name: "Dracaena",
    description:
      "Dracaena is an elegant indoor plant with long, slender leaves.",
    price: 399,
    image: dracaena,
  },
  {
    id: 12,
    name: "Jade Plant",
    description:
      "Jade Plant is a succulent that symbolizes prosperity.",
    price: 299,
    image: jadePlant,
  },
  {
    id: 13,
    name: "Boston Fern",
    description:
      "Boston Fern is a lush indoor plant with delicate, arching fronds.",
    price: 449,
    image: bostonFern,
  },
  {
    id: 14,
    name: "Chinese Evergreen",
    description:
      "Chinese Evergreen is a low-maintenance indoor plant with attractive variegated leaves.",
    price: 349,
    image: chineseEvergreen,
  },
  {
    id: 15,
    name: "Begonia",
    description:
      "Begonias are vibrant flowering plants suitable for indoor and outdoor spaces.",
    price: 399,
    image: begonia,
  },
  {
    id: 16,
    name: "Philodendron",
    description:
      "Philodendron is an easy-care indoor plant with heart-shaped leaves.",
    price: 599,
    image: philodendron,
  },
  {
    id: 17,
    name: "Hoya",
    description:
      "Hoya, also called Wax Plant, is a climbing plant with thick, waxy leaves.",
    price: 499,
    image: hoya,
  },
  {
    id: 18,
    name: "Cactus",
    description:
      "Cactus plants are low-maintenance succulents that require bright light.",
    price: 199,
    image: cactus,
  },
  {
    id: 19,
    name: "Caladium",
    description:
      "Caladium plants have colorful, heart-shaped leaves.",
    price: 399,
    image: caladium,
  },
  {
    id: 20,
    name: "Anthurium",
    description:
      "Anthurium has glossy green leaves and bright red flowers.",
    price: 599,
    image: anthurium,
  },
  {
    id: 21,
    name: "Kentia Palm",
    description:
      "Kentia Palm is a graceful indoor palm with long, arching fronds.",
    price: 999,
    image: kentiaPalm,
  },
  {
    id: 22,
    name: "Bird of Paradise",
    description:
      "Bird of Paradise is an exotic plant with large leaves.",
    price: 1299,
    image: birdOfParadise,
  },
  {
    id: 23,
    name: "Dieffenbachia",
    description:
      "Dieffenbachia is a popular indoor plant with patterned leaves.",
    price: 499,
    image: dieffenbachia,
  },
  {
    id: 24,
    name: "Peperomia",
    description:
      "Peperomia is a compact indoor plant with succulent-like leaves.",
    price: 299,
    image: peperomia,
  },
  {
    id: 25,
    name: "Maranta",
    description:
      "Maranta, also called Prayer Plant, has striking leaf patterns.",
    price: 449,
    image: maranta,
  },
];

export default products;
