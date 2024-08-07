import "./EightBall.css";
import { useState } from "react";
import answers from "./answers";

const EightBall = () => {
    // Initial State
    const initialAnswer = {
        msg: "Think of a Question",
        color: "black",
    };

    const initialShadow = "0 4px 8px rgba(255, 255, 255, 0.5)"

    // Use State
    const [answer, setAnswer] = useState(initialAnswer);
    const [shadow, setShadow] = useState(initialShadow);

    // Helper Functions
    const randAnswerIdx = () => Math.floor(Math.random() * answers.length);
    const randAnswer = () => answers[randAnswerIdx()];

    // Click Behavior
    const handleClick = () => {
        setAnswer(randAnswer());
        setShadow("none");
    };

    const handleNewClick = () => {
        setAnswer(initialAnswer);
        setShadow(initialShadow);
    };

    return (
        <>
            <div
                className="EightBall"
                onClick={() => handleClick()}
                style={{ backgroundColor: answer.color, boxShadow: shadow }}
            >
                <span>{answer.msg}</span>
            </div>
            <button onClick={() => handleNewClick()}>New Question</button>
        </>
    );
};

export default EightBall;
