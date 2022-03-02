import * as S from "./styles";
import Layout from "../../components/Layout";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { GET_MORE_POKEMONS } from "../../store/slices/pokemonSlice";
import axios from "axios";
import { upperCaseFirstLetter } from "../../utils";
import whosThatSrc from "../../assets/logos/WhosThatPokemon.png";

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function shuffledArr(arr) {
  const indexes = [];
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    indexes.push(i);
  }
  while (indexes.length > 0) {
    const baseIndex = randomNumber(0, indexes.length - 1);
    const newIndex = indexes[baseIndex];
    indexes.splice(baseIndex, 1);
    result.push(arr[newIndex]);
  }

  return result;
}




const Quiz = () => {
  const dispatch = useDispatch();

  const { pokemonList, allPokemonData } = useSelector(
    ({ pokemons }) => pokemons
  );

  const [imgSrc, setImg] = useState("");

  const [correctAnswer, setCorrectAnswer] = useState();

  const [allAnswers, setAllAnswers] = useState([]);

  const [userAnswer, setUserAnswer] = useState(null);

  const [score, setScore] = useState(0);

  const [record, setRecord] = useState(
    parseInt(localStorage.getItem("quiz-record")) || 0
  );

  const generateQuestion = useCallback(async () => {
    if (pokemonList.length >= 150) {
      const copyArray = [...pokemonList.slice(0, 150)];
      const answersArr = [];

      let answerIndex = randomNumber(0, copyArray.length - 1);
      const answerPokemon = copyArray[answerIndex];

      answersArr.push(answerPokemon);
      copyArray.splice(answerIndex, 1);

      const answerData =
        allPokemonData[answerPokemon.name] ??
        (await (
          await axios.get(answerPokemon.url)
        ).data);

      while (answersArr.length < 4) {
        answerIndex = randomNumber(0, copyArray.length - 1);
        const pokemon = copyArray[answerIndex];
        answersArr.push(pokemon);
        copyArray.splice(answerIndex, 1);
      }

      setAllAnswers(shuffledArr(answersArr));
      setCorrectAnswer(answerPokemon);
      setUserAnswer(null);

      setTimeout(() => {
        setImg(answerData.sprites.other.dream_world.front_default);
      }, 500); // atrasando a mudança de imagens porque o usuário podia ver qual o próximo pokemon
    }
  }, [allPokemonData, pokemonList]);

  useEffect(() => {
    if (pokemonList.length < 150) {
      dispatch(GET_MORE_POKEMONS());
    } else if (allAnswers.length <= 0) {
      generateQuestion();
    }
  }, [pokemonList, dispatch, allAnswers, generateQuestion]);

  useEffect(() => {
    localStorage.setItem("quiz-record", record);
  }, [record]);

  const handleAnswer = (name) => {
    setUserAnswer(name);
    let newScore = score;
    if (name === correctAnswer.name) newScore++;
    else {
      newScore = 0;
    }

    if (newScore > record) {
      setRecord(newScore);
    }

    setScore(newScore);
  };

  const generateAnswers = () => {
    return allAnswers.map((e) => {
      return (
        <S.AnswerButton
          key={e.name}
          onClick={() => handleAnswer(e.name)}
          correct={e.name === correctAnswer?.name}
          answered={!!userAnswer}
          clicked={userAnswer === e.name}
        >
          {upperCaseFirstLetter(e.name)}
        </S.AnswerButton>
      );
    });
  };

  return (
    <Layout quizPage={true}>
      <S.Quiz answered={!!userAnswer}>
        <div className="image-container">
          <div className="score">Score: {score}</div>
          <img src={imgSrc} alt="" />
          <div className="record">Record: {record}</div>
        </div>
        <div className="buttons-container">
          <div className="who">
            <img src={whosThatSrc} alt="" />
          </div>
          {generateAnswers()}
          <button className="next" onClick={generateQuestion}>
            Next Question
          </button>
        </div>
      </S.Quiz>
    </Layout>
  );
};

export default Quiz;
