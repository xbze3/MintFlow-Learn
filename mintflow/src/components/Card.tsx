import "../components-css/Card.css";
import Carousel from "react-bootstrap/Carousel";

function Card() {
    return (
        <div id="card">
            <Carousel id="carousel">
                <Carousel.Item id="item">
                    <div id="subitem">
                        <h3>First slide label</h3>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                    </div>
                </Carousel.Item>
                <Carousel.Item id="item">
                    <div id="subitem">
                        <h3>Second slide label</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </div>
                </Carousel.Item>
                <Carousel.Item id="item">
                    <div id="subitem">
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Card;
