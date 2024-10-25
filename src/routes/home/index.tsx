import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="py-10 px-20">
      <div>
        <h1 className="text-4xl font-bold text-center mt-8">
          Bem Vindo aos Cards Quizzes
        </h1>
        <p className="text-xl text-center mt-4">
          Escolha uma categoria para começar
        </p>

        <div className="flex gap-4">
          <Button onClick={() => window.location.href = "/naruto"}
          className="h-20 w-96 rounded-lg bg-orange-500 text-white shadow-lg my-4 hover:bg-orange-600 text-2xl">
            Naruto
          </Button>
          <Button onClick={() => window.location.href = "/one-piece"}
          className="h-20 w-96 rounded-lg bg-orange-500 text-white shadow-lg my-4 hover:bg-orange-600 text-2xl">
            One Piece
          </Button>
        </div>
      </div>
    </div>
  );
}
