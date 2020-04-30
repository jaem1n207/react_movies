import React, { useState, useEffect } from "react";

interface GreetingsProps {
  name: string;
  mark: string;
  optional?: boolean;
  onClick: (name: string) => void;
}

interface Sentence {
  name: string;
  mark: string;
}

const Sentence = ({ name, mark }: Sentence) => {
  return (
    <div>
      Hello, {name}
      {mark}
    </div>
  );
};

const Greetings = ({ name, mark, onClick }: GreetingsProps) => {
  const [status, setStatus] = useState(true);
  const handleClick = () => onClick(name);

  const changeOptional = () => {
    if (status === true) {
      setStatus(false);
    } else if (status === false) {
      setStatus(true);
    }
  };

  return (
    <>
      <button onClick={changeOptional}>{status ? "숨기기" : "보이기"}</button>
      {status && <Sentence name={name} mark={mark} />}
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </>
  );
};

export default Greetings;
