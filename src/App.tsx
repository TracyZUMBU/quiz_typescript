import React, { useState } from 'react';
import { fetchQuizQuestions } from './API'

//Components
import QuestionsCard from './components/QuestionsCard'

//Types
import { QuestionState, Difficulty } from './API'

const TOTAL_QUESTIONS = 10;

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const App = () => {

  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])// this will be a array from QuestionState
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  console.log(questions);
  

  const startTrivia = async () => {
    setLoading(true)
    setGameOver(false)

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0)
    setUserAnswers([])
    setNumber(0)
    setLoading(false);


  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(!gameOver) {
      // 1.user answer
      const answer = e.currentTarget.value;
      // 2. check answer against correct answer
      const correct = questions[number].correct_answer === answer
      // 3. if answer is correct add scroe
      if (correct) setScore(prev => prev + 1);
      // 4. save answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer, // equal to write (answer : answer)
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev)=> [...prev, answerObject])

    }
  }

  const nextQuestion = () => {
    // Move on to the next question if not the last question
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true)
    } else {
      setNumber(nextQuestion)
    }
  }

  return (
    <div className="App">
      <h1>React quiz</h1>
      { gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button className="start" onClick={startTrivia}>Start</button>
      ) : null }
      { !gameOver ? <p className="score">Score:</p> : null }
      { loading && <p>Loading Questions ...</p> }
      { !loading && !gameOver && ( <QuestionsCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      />
      )}
      {/* check if the user select a answer by addind +1 to 'number' */}
      { !gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
        <button className="next" onClick={nextQuestion}>Next question</button>
      ) : null } 

    </div>
  )
}

export default App