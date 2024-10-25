import React, { useState } from 'react';

interface QuestionCardProps {
  id: number;
  question: string;
  answer: string;
  img1: string;
  img2: string;
}

const QuestionCard: React.FC<QuestionCardProps> = (props) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="h-96 w-96 [perspective:1000px] m-4" onClick={handleFlip}>
      <div
        className={`relative h-full w-full rounded-xl shadow-xl transition-transform duration-500 ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <img
            className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
            src={props.img1}
            alt="Pergunta"
          />
          {/* Overlay para a Pergunta */}
          <div className="absolute inset-0 bg-black/20 rounded-xl flex items-center justify-center cursor-pointer">
            <div className="text-center text-white bg-black/20 w-[80%] rounded-lg">
              <h1 className="text-3xl font-bold">Pergunta</h1>
              <p className="text-lg">{props.question}</p>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="cursor-pointer absolute inset-0 h-full w-full rounded-xl bg-black/40 [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center text-center text-slate-200">
          <div
            className="absolute inset-0 bg-cover bg-center rounded-xl shadow-xl shadow-black/40"
            style={{ backgroundImage: `url(${props.img2})` }}
          >
            <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-3xl font-bold">Resposta</h1>
                <p className="text-lg">{props.answer}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
