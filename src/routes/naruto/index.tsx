import QuestionCard from "@/components/common/QuestionCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Naruto() {
  
  document.title = "Quiz Naruto";

  const narutoQuestions = [
    {
      id: 1,
      question: "Quem selou a raposa de 9 caudas em Naruto?",
      answer: "Minato Namikaze",
      img1: "https://i.pinimg.com/originals/6c/a9/13/6ca91356068daeb7c42142be3b261da7.png",
      img2: "https://i.pinimg.com/736x/13/af/09/13af09d7f76daf2f6f470a0747a2b95b.jpg",
    },
    {
      id: 2,
      question: "Qual foi o primeiro vilão que o Naruto derrotou?",
      answer: "Mizuki",
      img1: "https://conteudo.imguol.com.br/c/entretenimento/17/2016/11/22/naruto-1479840636274_900x506.jpg",
      img2: "https://images.uncyc.org/pt/thumb/f/fb/Mizukisorrindo.jpg/300px-Mizukisorrindo.jpg",
    },
    {
      id: 3,
      question: "Quantas vezes o Naruto reprovou no exame para Genin?",
      answer: "2 vezes",
      img1: "https://pt.quizur.com/_image?href=https%3A%2F%2Fimg.quizur.com%2Ff%2Fimg656268b56f59f2.61863406.jpg%3FlastEdited%3D1700948169&w=400&h=400&f=webp",
      img2: "https://i.pinimg.com/736x/30/5d/e7/305de7a2a8d663a513ab88ef4f8d40a3.jpg",
    },
    {
      id: 4,
      question:
        "Quantas caudas Naruto despertou quando lutou contra Orochimaru? (Shippuden) ",
      answer: "4 caudas",
      img1: "https://i.ytimg.com/vi/bAH9U3ZV328/maxresdefault.jpg",
      img2: "https://cmsapi-frontend.naruto-official.com/site/api/naruto/Image/get?path=/naruto/import/images/naruto02/221%EF%BD%9E300/262/C154_0103.jpg",
    },
    {
      id: 5,
      question: "Qual foi o primeiro membro da Akatsuki a morrer? ",
      answer: "Sasori",
      img1: "https://pt.quizur.com/_image?href=https%3A%2F%2Fimg.quizur.com%2Ff%2Fimg6562da82ef44b3.37468070.jpg%3FlastEdited%3D1700977292&w=400&h=400&f=webp",
      img2: "https://img.quizur.com/f/img6562dacf371fa1.91093375.jpg?lastEdited=1700977371",
    },
    {
      id: 6,
      question: "Qual é o verdadeiro nome da Bijuu de nove caudas? ",
      answer: "Kurama",
      img1: "https://criticalhits.com.br/wp-content/uploads/2022/05/naruto-raking-forca-bijuus-kurama.jpg",
      img2: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/de8em7r-9ee6e28a-1e16-41ef-9e04-4c3d8f3dfd4e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGU4ZW03ci05ZWU2ZTI4YS0xZTE2LTQxZWYtOWUwNC00YzNkOGYzZGZkNGUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.l2w4z7EKTp-_AuizLZ8zp6kam3yTxxV0WtIewLRbp0E",
    },
    {
      id: 7,
      question: "Qual é o dia do aniversário do Naruto?",
      answer: "10 de Outubro",
      img1: "https://pt.quizur.com/_image?href=https%3A%2F%2Fimg.quizur.com%2Ff%2Fimg60e361385042c5.96334551.jpg%3FlastEdited%3D1625514334&w=400&h=400&f=webp",
      img2: "https://i.pinimg.com/originals/61/48/a2/6148a26c64bbd0d9b9ab5bfc766c8d8d.jpg",
    },
    {
      id: 8,
      question: "Quem era o parceiro original de Tobi na Akatsuki?",
      answer: "Deidara",
      img1: "https://pt.quizur.com/_image?href=https%3A%2F%2Fimg.quizur.com%2Ff%2Fimg6109bb1292ebc4.85206758.jpg%3FlastEdited%3D1628027671&w=400&h=400&f=webp",
      img2: "https://static.fanfiction.com.br/userfiles/4/E/B/7/capa_10_1257198738_DediaraTobi.jpg",
    },
  ];

  const getRandomQuestions = (count: number) => {
    const selectedIndices = new Set();
    while (selectedIndices.size < count) {
      const randomIndex = Math.floor(Math.random() * narutoQuestions.length);
      selectedIndices.add(randomIndex);
    }
    return Array.from(selectedIndices).map(
      (index) => narutoQuestions[index as number]
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
          Quiz Naruto
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
