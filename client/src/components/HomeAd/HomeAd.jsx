import { Container, Carousel } from "react-bootstrap";
import images from "../../data/homeAds.json";
import './HomeAd.scss';

const HomeAd = () => {
  return (
    <Container fluid className="homeAd mx-0 px-5 d-flex justify-content-center">
      <Carousel className="w-75 px-4">
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image.src}
              alt={image.alt}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default HomeAd;
