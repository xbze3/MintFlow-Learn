import ListGroup from "react-bootstrap/ListGroup";
import "../components-css/SearchResults.css";

interface Deck {
    _id: string;
    courseCode: string;
    topicName: string;
    courseName: string;
    cards: string[];
}

interface DeckProps {
    decks: Deck[];
}

function SearchResults({ decks }: DeckProps) {
    return (
        <ListGroup as="ul">
            {decks.map((deck) => (
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start searchItem"
                    key={deck._id}
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold searchHeading">
                            {deck.topicName}
                        </div>
                        <strong>Course Name:</strong> {deck.courseName} |{" "}
                        <strong>Cards:</strong> {deck.cards.length}
                    </div>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}

export default SearchResults;
