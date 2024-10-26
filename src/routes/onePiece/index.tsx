import QuestionCard from "@/components/common/QuestionCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OnePiece() {
  
  document.title = "Quiz One Piece";

  const onePiceQuestions = [
    {
      id: 1,
      question: "Quem foi o primeiro tripulante dos Chapéu de Palha?",
      answer: "Roronoa Zoro",
      img1: "https://i.pinimg.com/564x/c9/5b/de/c95bde62b2936a56c9edb7f560d628f1.jpg",
      img2: "https://i.pinimg.com/564x/89/a8/e8/89a8e8b5e83e2d6d298ad196299eb5d9.jpg",
    },
    {
      id: 2,
      question: "Em qual batalha o Luffy despertou o Gear Fifth?",
      answer: "Contra o Kaido no teto de Onigashima",
      img1: "https://i.pinimg.com/564x/b6/31/89/b6318971c22c51be76fe1d17472327c1.jpg",
      img2: "https://i.pinimg.com/564x/bf/28/89/bf288937cdcc1668a6f84dc9fd3adbfc.jpg",
    },
    {
      id: 3,
      question: "Quem deu o chapéu de palha a Luffy?",
      answer: "Shank, O ruivo",
      img1: "https://i.pinimg.com/564x/07/7b/b3/077bb37b4449697c6270774614f24dde.jpg",
      img2: "https://i.pinimg.com/564x/60/cc/c0/60ccc02b205b82f624db9af79e4ce772.jpg",
    },
    {
      id: 4,
      question:
        "Quem é o pai do Luffy?",
      answer: "O líder revolucionário Monkey D. Dragon",
      img1: "https://i.pinimg.com/564x/57/30/2c/57302c0749f86843295d8c1d5759a814.jpg",
      img2: "https://i.pinimg.com/564x/74/e2/18/74e218c16d2d47fd1469843ea2bba69c.jpg",
    },
    {
      id: 5,
      question: "Qual o nome da espada que Roronao Zoro herdou de Kuina?",
      answer: "Wado Ichimonji",
      img1: "https://i.pinimg.com/564x/a3/46/54/a34654dd11cfe78b867e65fd44921a05.jpg",
      img2: "https://i.pinimg.com/736x/4e/5c/f2/4e5cf267a886791f374473b96ea025a3.jpg",
    },
    {
      id: 6,
      question: "Quem foi o primeiro shichibukai a aparecer no anime?",
      answer: "Dracule Mihawk",
      img1: "https://i.pinimg.com/564x/ae/a0/ad/aea0ad5bb048e274fd85248111a6c13a.jpg",
      img2: "https://i.pinimg.com/564x/47/47/a0/4747a071f125bf1f8534040990e6c4a5.jpg",
    },
    {
      id: 7,
      question: "Quantos dias durou a batalha de Punk Hazard entre Akainu e Aokiji?",
      answer: "10 dias",
      img1: "https://i.pinimg.com/564x/55/bf/6c/55bf6c70bffaa14c2201a55c97adb377.jpg",
      img2: "https://i.pinimg.com/564x/19/e4/56/19e4561da129f373f57add294062f2bb.jpg",
    },
    {
      id: 8,
      question: "Quem foi o personagem que comeu a Ito Ito no Mi?",
      answer: "Donquixote Doflamingo",
      img1: "https://i.pinimg.com/564x/68/a0/e6/68a0e6270ada272e62fc00f6f937f511.jpg",
      img2: "https://i.pinimg.com/564x/20/2b/fb/202bfbd1d100a77c3e4dd6917e0a0337.jpg",
    },
    {
      id: 9,
      question: "Quando Luffy utilizou o haki do rei pela primeira vez?",
      answer: "Contra o Duval, Motobaro",
      img1: "https://i.pinimg.com/564x/0e/b2/fc/0eb2fc415db5a9142925c40285285091.jpg",
      img2: "https://i.pinimg.com/564x/e6/7e/bb/e67ebb03b27477ba049d42408c97673f.jpg"
    }
    ,
    {
      id: 10,
      question: "Quem são os irmãos do Luffy?",
      answer: "Portgas D. Ace e Sabo",
      img1: "https://i.pinimg.com/564x/6d/a9/0a/6da90a0ffbe7bf5d0c42af87a5946e04.jpg",
      img2: "https://i.pinimg.com/564x/9d/40/f3/9d40f3cfc04a5fc1729811bc7a9c4101.jpg"
    }
    ,
    {
      id: 11,
      question: "Qual a atual recompensa do Luffy?",
      answer: "3.000.000.000 de berries",
      img1: "https://i.pinimg.com/564x/35/57/9e/35579e05c41d838a53add61b10659dc1.jpg",
      img2: "https://i.pinimg.com/564x/b3/c9/c0/b3c9c067e0bb02daf287f38dbf19684e.jpg"
    }
    ,
    {
      id: 12,
      question: "Qual a comida favorita do Chopper?",
      answer: "Algodão doce",
      img1: "https://i.pinimg.com/564x/25/e5/13/25e513fc1c5edbc3ecc159525f2d22b1.jpg",
      img2: "https://pbs.twimg.com/media/Ehg9P2fXYAImwwR.jpg"
    }
  ];

  const getRandomQuestions = (count: number) => {
    const selectedIndices = new Set();
    while (selectedIndices.size < count) {
      const randomIndex = Math.floor(Math.random() * onePiceQuestions.length);
      selectedIndices.add(randomIndex);
    }
    return Array.from(selectedIndices).map(
      (index) => onePiceQuestions[index as number]
    );
  };

  const [randomQuestions, setRandomQuestions] = useState(getRandomQuestions(6));

  const handleRandomClick = () => {
    setRandomQuestions(getRandomQuestions(6));
  };

  const navigate = useNavigate();

  return (
    <div>
      <div className="grid grid-cols-3 items-center justify-center bg-zinc-100">
        <div className="flex justify-center items-center">
          <Button
            className="w-20 h-12 rounded-lg bg-orange-500 text-white shadow-lg hover:bg-orange-600"
            onClick={() => navigate("/")}
          >
            Início
          </Button>
        </div>
        <h1 className="text-4xl text-center font-bold text-orange-500 p-4 bg-zinc-100">
          Quiz One Piece
        </h1>
      </div>
      <div className="flex flex-wrap justify-center bg-slate-100 p-4">
        {randomQuestions.map((question) => (
          <QuestionCard key={question.id} {...question} />
        ))}
      </div>
      <div className="flex justify-center bg-zinc-100">
        <Button
          className="h-20 w-42 md:w-96 rounded-lg bg-orange-500 text-white shadow-lg my-4 hover:bg-orange-600"
          onClick={handleRandomClick}
        >
          Novas Perguntas
        </Button>
      </div>
    </div>
  );
}
