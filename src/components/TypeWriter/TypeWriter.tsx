import React, { useEffect, useState } from "react";
import "./TypeWriter.scss";

// source: https://stackoverflow.com/questions/49886123/trying-to-create-a-typing-effect-on-reactjs

enum CONSTANTS {
  TYPING_SPEED_MS = 150,
  DELETING_SPEED_MS = 60,
  WAIT_TIME_MS = 1500,
}

type TypeWriterProps = {
  messages: string[];
  heading?: string;
};

type TypeWriterState = {
  text: string;
  message: string;
  isDeleting: boolean;
  loopNum: number;
  typingSpeed: number;
};

const TypeWriter = ({ messages, heading }: TypeWriterProps) => {
  const [state, setState] = useState<TypeWriterState>({
    text: "",
    message: "",
    isDeleting: false,
    loopNum: 0,
    typingSpeed: CONSTANTS.DELETING_SPEED_MS,
  });

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const handleType = () => {
      setState((cs) => ({
        ...cs, // cs means currentState
        text: getCurrentText(cs),
        typingSpeed: getTypingSpeed(cs),
      }));
      timer = setTimeout(handleType, state.typingSpeed);
    };
    handleType();
    return () => clearTimeout(timer);
  }, [state.isDeleting, state.typingSpeed]);

  useEffect(() => {
    if (!state.isDeleting && state.text === state.message) {
      setTimeout(() => {
        setState((cs) => ({
          ...cs,
          isDeleting: true,
        }));
      }, CONSTANTS.WAIT_TIME_MS);
    } else if (state.isDeleting && state.text === "") {
      setState((cs) => ({
        ...cs, // cs means currentState
        isDeleting: false,
        loopNum: cs.loopNum + 1,
        message: getMessage(cs, messages),
      }));
    }
  }, [state.text, state.message, state.isDeleting, messages]);

  function getCurrentText(currentState: TypeWriterState) {
    return currentState.isDeleting
      ? currentState.message.substring(0, currentState.text.length - 1)
      : currentState.message.substring(0, currentState.text.length + 1);
  }

  function getMessage(currentState: TypeWriterState, data: string[]) {
    return data[Number(currentState.loopNum) % Number(data.length)];
  }

  function getTypingSpeed(currentState: TypeWriterState) {
    return currentState.isDeleting
      ? CONSTANTS.DELETING_SPEED_MS
      : CONSTANTS.TYPING_SPEED_MS;
  }

  return (
    <p className="text">
      {heading ? heading : ""}&nbsp;
      <span className="text__current-text">
        {state.text}
        <span className="text__cursor" />
      </span>
    </p>
  );
};

export default TypeWriter;
