import { Letter } from "@/utils/types";
import React from "react";

type Keyboard = {
  handleKeyPress: (key: string) => void;
  letters: Letter[][];
};

const keys = {
  row1: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  row2: ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  row3: ["Backspace", "Z", "X", "C", "V", "B", "N", "m", "Enter"],
};

const Keyboard: React.FC<Keyboard> = ({ handleKeyPress, letters }) => {
  const computeStyles = (key: string) => {
    const letter: Letter | undefined = letters
      ?.flat()
      ?.find((li) => li?.value?.toLowerCase() === key?.toLowerCase());
    if (letter) {
      if (letter?.isInOrder) {
        return "border  bg-primary-green rounded-md border-2 border-primary-green text-white flex items-center justify-center flex-1 px-4 py-3 cursor-pointer";
      } else if (letter?.presentInWord) {
        return "border  bg-primary-orange rounded-md border-2 border-primary-orange text-white flex items-center justify-center flex-1 px-4 py-3 cursor-pointer";
      } else if (letter?.notPresent) {
        return "border bg-filled-gray rounded-md border-2 border-filled-gray text-white flex items-center justify-center flex-1 px-4 py-3 cursor-pointer";
      }
      return "border rounded-md bg-secondary-gray border-2 border-border-gray flex items-center justify-center  flex-1 px-4 py-3 cursor-pointer";
    }

    return "border rounded-md bg-secondary-gray border-2 border-border-gray flex items-center justify-center  flex-1 px-4 py-3 cursor-pointer";
  };

  return (
    <div className="mt-[4rem] w-fit flex flex-col gap-3">
      <div className="flex justify-stretch gap-3">
        {keys?.row1?.map((key) => (
          <div
            onClick={() => handleKeyPress(key)}
            className={computeStyles(key)}
            key={key}
          >
            <span className="font-semibold">{key}</span>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-stretch gap-3">
        {keys?.row2?.map((key) => (
          <div
            onClick={() => handleKeyPress(key)}
            className={computeStyles(key)}
            key={key}
          >
            <span className="font-semibold">{key}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-stretch gap-3">
        {keys?.row3?.map((key) => (
          <div
            onClick={() => handleKeyPress(key)}
            className={computeStyles(key)}
            key={key}
          >
            <span className="font-semibold">{key}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
