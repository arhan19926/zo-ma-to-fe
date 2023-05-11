import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import './home.scss';
import "../sass/home/home.scss";
import { Carousel } from "react-responsive-carousel";
import Navbar from "../../components/navbar/Navbar";
const items = [
  {
    id: 1,
    name: "Item 1",
    image:
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chan-walrus-958545.jpg&fm=jpg",
  },
  {
    id: 2,
    name: "Item 2",
    image:
      "https://i.pinimg.com/originals/d3/6d/46/d36d462db827833805497d9ea78a1343.jpg",
  },
  {
    id: 3,
    name: "Item 3",
    image:
      "https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?cs=srgb&dl=pexels-dana-tentis-725991.jpg&fm=jpg",
  },
  {
    id: 4,
    name: "Item 4",
    image:
      "https://img.freepik.com/premium-photo/dum-handi-chicken-biryani-is-prepared-earthen-clay-pot-called-haandi-popular-indian-non-vegetarian-food_466689-52344.jpg?w=2000",
  },
  {
    id: 5,
    name: "Item 5",
    image:
      "https://img.freepik.com/premium-photo/whole-yellow-lentil-dal-tadka-fry-with-jeera-rice-selective-focus_466689-14821.jpg?w=2000",
  },
  {
    id: 6,
    name: "Item 6",
    image:
      "https://www.hotelwelkinresidency.com/wp-content/uploads/2017/12/Mutton-Rogan-josh.jpg",
  },
  {
    id: 7,
    name: "Item 7",
    image:
      "https://images5.alphacoders.com/913/913328.jpg",
  },
];

const Home = () => {
  return (
    <>
    <Navbar/>
      <Carousel
        className="carouselWrapper"
        showThumbs={false}
        autoPlay
        infiniteLoop
      >
        {items.map((item) => (
          <img src={item.image} alt={item.name} key={item.id} />
        ))}
      </Carousel>
    </>
  );
};

export default Home;
