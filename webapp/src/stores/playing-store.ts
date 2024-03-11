
import {create} from 'zustand';

interface PlayingState {
    playing: boolean,
    isGameOver: boolean,
    startPlaying: () => void,
    stopPlaying: () => void,
    gameOver: () => void
  }
  

export const usePlayingState = create<PlayingState>((set) => ({
    playing: false,
    isGameOver: false,
    startPlaying: () => {set({playing: true}); set({isGameOver: false})},
    stopPlaying: () => {set({playing: false}); set({isGameOver: false})},
    gameOver: () => set({isGameOver: true})
  }));

interface ShowCancellingDialog {
    show: boolean,
    setShow: (show: boolean) => void,
    functionToExecute: () => void,
    setFunctionToExecute: (func: () => void) => void,
}

export const useShowCancellingDialog = create<ShowCancellingDialog>((set) => ({
    show: false,
    setShow: (show: boolean) => set({show: show}),
    functionToExecute: () => {},
    setFunctionToExecute: (func: () => void) => set({functionToExecute: func}),
  }));

export const handleShowDialog = ( func: () => void) =>  {
    if(usePlayingState.getState().playing && !usePlayingState.getState().isGameOver){
      useShowCancellingDialog.getState().setShow(true);
      useShowCancellingDialog.getState().setFunctionToExecute(func);
    } else {
      func();
    }
}

export type Question = {
    text: string,
    answers: string[],
    correctAnswer: number
}

interface GameQuestions{
    questions: Question[],
    setQuestions: (questions: any[]) => void,
    questionCount: number,
    nextQuestion: () => void
}

const retrieveQuestions = ():Question[] =>{
  try {
    fetch('https:localhost:7259/WikiData/GetQuestions').then((response) => response.json())
      .then(data => {
        useGameQuestions.getState().setQuestions(data);
      }); 
  } catch (error) {
    console.error('There was a problem with the questions:', error); 
  }
  const questions: Question[] = [];
  return questions;
}

export const useGameQuestions = create<GameQuestions>((set) => ({
  questions: retrieveQuestions(),
  setQuestions: (questions: any[]) => set({questions: questions}),
  questionCount: 0,
  nextQuestion: () => set(state => ({questionCount: state.questionCount + 1}))
}));

export const getQuestion= (questions:Question[], questionCount:number) => questions[questionCount].text;
export const getAnswersList= (questions:Question[], questionCount:number) => questions[questionCount].answers;
export const getCorrectAnswer= (questions:Question[], questionCount:number) => questions[questionCount].correctAnswer;



