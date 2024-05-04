import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";

export const Home = () => {
  return (
    <div>
      {" "}
      <div className="home border bg-dark ">
        <div className="content text-white p-4 container">
          <h1>Menshion Store</h1>
          <h4>Get Up to 70% Discount</h4>
          <p>
            Discount are offered for limited time period so don't miss the
            chance and grab the opportunity
          </p>
          <a href="tel:9846756632">Contact us</a>
        </div>

        <div
          className="backgroundimage"
          id="image1"
          data-aos="fade-left"
          data-aos-delay="800"
        >
          <img src={image1} alt="" height="100px" width="100px" />
        </div>
        <div
          className="backgroundimage"
          id="image2"
          data-aos="fade-right"
          data-aos-delay="800"
        >
          <img src={image2} alt="" height="100px" width="100px" />
        </div>
        <div className="backgroundimage" id="image3" data-aos="fade-up">
          <img src={image3} alt="" height="100px" width="100px" />
        </div>
      </div>
    </div>
  );
};
