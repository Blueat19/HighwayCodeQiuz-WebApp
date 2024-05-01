import React, { useRef, useState, useEffect, useCallback } from 'react';
import './Quiz.css';
import { roadData } from '../../assets/roadData';

const Quiz1 = () => {
    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(roadData[index]);
    let [lock, setLock] = useState(false);
    let [score, setScore] = useState(0);
    let [result, setResult] = useState(false);

    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);
    let optionArray = [Option1, Option2, Option3, Option4];

    const [timer, setTimer] = useState(420000); // Timer value in milliseconds
    const [timerExpired, setTimerExpired] = useState(false); // Tracks if the timer has expired

    const handleTimerExpired = useCallback(() => {
        setTimerExpired(true);
    }, []);

    // Countdown effect for the timer
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1000); // Decrease timer by 1 second (1000 milliseconds)
        }, 1000); // Run every second (1000 milliseconds)

        if (timer <= 0) {
            clearInterval(interval);
            handleTimerExpired();
        }

        return () => {
            clearInterval(interval); // Cleanup interval on component unmount
        };
    }, [timer, handleTimerExpired]);

    const checkAns = (e, ans) => {
        if (lock === false) {
            if (question.ans === ans) {
                e.target.classList.add('correct');
                setLock(true);
                setScore((prev) => prev + 1);
            } else {
                e.target.classList.add('wrong');
                setLock(true);
                optionArray[question.ans - 1].current.classList.add('correct');
            }
        }
    };

    const next = () => {
        if (lock === true) {
            if (index === roadData.length - 1 || timerExpired) { // Check if it's the last question or timer has expired
                setResult(true); // Display quiz results
                return;
            }
            setIndex(++index);
            setQuestion(roadData[index]);
            setLock(false);
            optionArray.map((option) => {
                option.current.classList.remove('wrong');
                option.current.classList.remove('correct');
                return null;
            });
        }
    };

    const reset = () => {
        setIndex(0);
        setQuestion(roadData[0]);
        setScore(0);
        setLock(false);
        setResult(false);
        setTimer(420000); // Reset timer to initial value
        setTimerExpired(false); // Reset timer expiration flag
    };

    return (
        <div className="container">
            <h1>Highway Code Quiz 1</h1>
            <div className="timer">
                {timer <= 0 ? 'Time is up!' : `Time remaining: ${Math.floor(timer / 1000)} seconds`}
            </div>
            <hr />
            {result ? (
                <>
                    <h2>You Scored {score} out of {roadData.length}</h2>
                    <button onClick={reset}>Reset</button>
                </>
            ) : (
                <>
                    <h2>
                        {index + 1}.{question.question}
                    </h2>
                    <ul>
                        <li ref={Option1} onClick={(e) => checkAns(e, 1)}>
                            {question.option1}
                        </li>
                        <li ref={Option2} onClick={(e) => checkAns(e, 2)}>
                            {question.option2}
                        </li>
                        <li ref={Option3} onClick={(e) => checkAns(e, 3)}>
                            {question.option3}
                        </li>
                        <li ref={Option4} onClick={(e) => checkAns(e, 4)}>
                            {question.option4}
                        </li>
                    </ul>
                    <button onClick={next}>Next</button>
                    <div className="index">
                        {index + 1} of {roadData.length} questions
                    </div>
                </>
            )}
        </div>
    );
};

export default Quiz1;