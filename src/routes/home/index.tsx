import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  document.title = "Cards Quizzes";
  const navigate = useNavigate();

  return (
    <div className="py-10 px-20">
      <div>
        <h1 className="text-4xl font-bold text-center mt-8">
          Bem Vindo aos Cards Quizzes
        </h1>
        <p className="text-xl text-center mt-4">
          Escolha uma categoria para começar
        </p>

        <div className="flex flex-col justify-center gap-2 mt-10">
          <Button onClick={() => navigate("/naruto")}
          className="h-20 w-30 md:w-96 rounded-lg bg-orange-500 text-white shadow-lg my-4 hover:bg-orange-600 text-2xl">
            Naruto
          </Button>
          <Button onClick={() => navigate("/one-piece")}
          className="h-20 w-30 md:w-96 rounded-lg bg-orange-500 text-white shadow-lg my-4 hover:bg-orange-600 text-2xl">
            One Piece
          </Button>
        </div>
      </div>
    </div>
  );
}
