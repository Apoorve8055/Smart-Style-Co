import { HiChevronDoubleDown } from "react-icons/hi2";
import { Fade } from "react-awesome-reveal";
import "./Home.scss";
import electronics from "../../assets/img/electronics.jpg";
import jewelry from "../../assets/img/jewelery.jpg";
import men from "../../assets/img/men.jpg";
import women from "../../assets/img/women.jpg";
import { useNavigate } from "react-router-dom";
import { memo } from "react";
const categories = [
  {
    name: "electronics",
    des: "Explore our range of cutting-edge electronics, from high-performance laptops to state-of-the-art audio systems. Stay ahead of the curve with our latest tech products.",
    imgUrl: electronics,
  },
  {
    name: "jewelery",
    des: "Our jewelry collection is designed to make you shine. Choose from our selection of exquisite pieces, crafted from the finest materials and finished to perfection. Elevate your look with our stunning range of jewelry.",
    imgUrl: jewelry,
  },
  {
    name: "men's Clothing",
    des: "Look sharp and feel confident with our range of stylish men's clothing. From classic formal wear to casual streetwear, we've got you covered. Discover the perfect outfit for any occasion.",
    imgUrl: men,
  },
  {
    name: "women's Clothing",
    des: "Make a statement with our collection of women's clothing. From elegant dresses to comfortable athleisure, we have something for every style. Shop our range today and find your next favorite outfit.",
    imgUrl: women,
  },
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-msg">
          <Fade top>Elevate your style </Fade>
          <Fade top delay={200}>
            with our latest collection
          </Fade>
        </div>
        <div
          className="scroll-down"
          onClick={() => {
            document
              .getElementById("collection")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          <Fade top delay={300}>
            <HiChevronDoubleDown />
          </Fade>
        </div>
      </div>
      <Fade>
        <div className="featured-category" id="collection">
          <div className="featured-category-title">Our Collection</div>
          <div className="category-list">
            {categories.map((item, index) => (
              <div
                className="category-card"
                key={index}
                onClick={() => navigate(`/Shop/${item.name}`)}
              >
                <div className="category-card-img-wrapper">
                  <div
                    className="category-card-img"
                    style={{
                      backgroundImage: `url(${item.imgUrl})`,
                    }}
                  ></div>
                </div>

                <div className="category-card-details-wrapper">
                  <div className="category-card-title">{item.name}</div>
                  <div>{item.des}</div>
                  <b onClick={() => navigate(`/Shop/${item.name}`)}>SHOP NOW</b>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
};
export default memo(Home);
