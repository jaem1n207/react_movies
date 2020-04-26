import React, { useState, useEffect } from "react";
import { useToasts, ToastProvider } from "react-toast-notifications";

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
  const [optional, setOptional] = useState(true);
  const handleClick = () => onClick(name);
  const { addToast } = useToasts();

  useEffect(() => {
    if (optional === false) {
      addToast("내용이 숨겨졌습니다!", {
        appearance: "success",
        autoDismiss: true,
      });
    } else if (optional === true) {
      addToast("내용이 나타났습니다!", {
        appearance: "success",
        autoDismiss: true,
      });
    }
  }, [optional]);

  const changeOptional = () => {
    if (status === true) {
      setOptional(false);
      setStatus(false);
    } else if (status === false) {
      setOptional(true);
      setStatus(true);
    }
    console.log(optional);
  };

  return (
    <>
      <button onClick={changeOptional}>{status ? "숨기기" : "보이기"}</button>
      {optional && <Sentence name={name} mark={mark} />}
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </>
  );
};

export default Greetings;
