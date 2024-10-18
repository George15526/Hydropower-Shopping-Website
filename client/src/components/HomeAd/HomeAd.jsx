import { Carousel } from "react-bootstrap";
import './HomeAd.scss';

const HomeAd = () => {
  return (
    <div className="homeAd">
        <Carousel>
            <Carousel.Item className="items">
                <img
                    className="pic"
                    src="src/assets/breadAd_1.jpg"
                    alt="Slide image alt"
                />
            </Carousel.Item>
            <Carousel.Item className="items">
                <img
                    className="pic"
                    src="src/assets/breadAd_2.jpg"
                    alt="Slide image alt"
                />
            </Carousel.Item>
            <Carousel.Item className="items">
                <img
                    className="pic"
                    src="src/assets/breadAd_3.jpg"
                    alt="Slide image alt"
                />
            </Carousel.Item>
            <Carousel.Item className="items">
                <img
                    className="pic"
                    src="src/assets/breadAd_4.jpg"
                    alt="Slide image alt"
                />
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default HomeAd;