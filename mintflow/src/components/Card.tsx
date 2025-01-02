import "../components-css/Card.css";
import Carousel from "react-bootstrap/Carousel";
import { useCardData } from "./special/CardContext";

function Card() {
    const { cardData } = useCardData();

    return (
        <div id="card">
            {cardData.length === 0 ? (
                <div id="select-deck-message">
                    <h3>Select a Deck</h3>
                </div>
            ) : (
                <Carousel id="carousel">
                    {cardData.map((card) => (
                        <Carousel.Item id="item" key={card._id}>
                            <div id="subitem">
                                <h3>{card.question}</h3>
                                <p>{card.answer}</p>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            )}
        </div>
    );
}

export default Card;
