"use client";
import { alphaString, initialGridState } from "@/utils/constants";
import { Letter } from "@/utils/types";
import React, { useEffect, useRef, useState } from "react";
import Keyboard from "./modules/Keyboard";
import WinningModal from "./modules/WinningModal";
import LostModal from "./modules/LostModal";

function WordlyGame() {
  const [word] = useState("flame");
  const [letters, setLetters] = useState(initialGridState);
  const [lost, setLost] = useState(false);
  const [won, setWon] = useState(false)

  const index = useRef(0);
  const innerIndex = useRef(0);
  const isActive = useRef(true);
  const trackBackspace = useRef(4);

  const applyStyles = (letter: Letter) => {
    if (letter?.isInOrder) {
      return "border w-[4rem] h-[4rem] bg-primary-green rounded-lg border-2 border-primary-green text-white flex items-center justify-center font-bold text-[28px]";
    } else if (letter?.presentInWord) {
      return "border w-[4rem] h-[4rem] bg-primary-orange rounded-lg border-2 border-primary-orange text-white flex items-center justify-center font-bold text-[28px]";
    } else if (letter?.notPresent) {
      return "border w-[4rem] h-[4rem] bg-filled-gray rounded-lg border-2 border-filled-gray text-white flex items-center justify-center font-bold text-[28px]";
    }

    return "border w-[4rem] h-[4rem] rounded-lg bg-primary-gray border-2 border-border-gray flex items-center justify-center font-bold text-[28px]";
  };

  const checkLetterOrder = (letter: string, order: number) => {
    let temp = false;

    const originWord = word?.split("");
    originWord?.forEach((li, idx) => {
      if (idx + 1 === order && letter?.toLowerCase() === li) {
        temp = true;
      }
    });

    return temp;
  };

  const checkOrder = () => {
    const isInWord = letters[index.current]?.map((li) => {
      if (li?.value && word.includes(li?.value?.toLowerCase())) {
        return {
          ...li,
          presentInWord: true,
          isChecked: true,
          isInOrder: checkLetterOrder(li?.value, li?.id),
        };
      } else {
        return { ...li, notPresent: true };
      }
    });

    setLetters((prev) => {
      const newArr = [...prev];
      newArr.splice(index.current, 1, isInWord);
      isActive.current = true;
      index.current += 1;
      innerIndex.current = 0;
      return newArr;
    });
    const isCombination = isInWord?.every((li) => li?.isInOrder);
    if (isCombination) {
      setWon(true);
    }
    if (!isCombination && index.current === 5 && innerIndex.current === 4) {
      setLost(true);
    }
  };

  const handleKeyPress = (key: string) => {
    if (key === "Backspace") {
      const elem = letters?.[index.current];
      const isAnyFilled = elem?.some((li) => !!li?.value);
      if (isAnyFilled) {
        const item = elem[trackBackspace.current];
        if (item?.value) {
          delete item?.value;
        }
        elem.splice(trackBackspace.current, 1, item);
        setLetters((prev) => {
          const newArr = [...prev];
          innerIndex.current = trackBackspace.current;
          trackBackspace.current = trackBackspace.current - 1;
          isActive.current = true;
          newArr.splice(index.current, 1, elem);
          return newArr;
        });
      }
      return;
    }
    if (alphaString.includes(key.toLowerCase()) && isActive.current) {
      setLetters((prev) => {
        const newArr = [...prev];
        const elem = newArr[index.current];
        const item = elem[innerIndex.current];
        item.value = key;
        elem.splice(innerIndex.current, 1, item);
        const isAllFilled = elem?.every((li) => !!li?.value);
        if (isAllFilled) {
          isActive.current = false;
          trackBackspace.current = innerIndex.current;
        } else {
          trackBackspace.current = innerIndex.current;
          innerIndex.current += 1;
        }
        return newArr;
      });
    }
    const elem = letters?.[index.current];
    const isAllFilled = elem?.every((li) => !!li?.value);
    if (key === "Enter" && isAllFilled) {
      checkOrder();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      const { key } = e;
      handleKeyPress(key);
    });
    return () => window.removeEventListener("keydown", () => {});
  }, []);

  const resetGame = () => {
    window.location.reload()
  };
  const handleClose = () => {
    setLost(false);
    resetGame();
  };
  const handleWinClose = () => {
    setWon(false);
    resetGame();
  }
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <section className="w-[25rem]">
        <div className="grid grid-cols-5 gap-3">
          {letters?.[0]?.map((li) => (
            <div key={li?.id} className={applyStyles(li)}>
              <span> {li?.value ? li?.value?.toUpperCase() : ""}</span>
            </div>
          ))}
          {letters?.[1]?.map((li) => (
            <div key={li?.id} className={applyStyles(li)}>
              {" "}
              {li?.value ? li?.value?.toUpperCase() : ""}
            </div>
          ))}
          {letters?.[2]?.map((li) => (
            <div key={li?.id} className={applyStyles(li)}>
              {" "}
              {li?.value ? li?.value?.toUpperCase() : ""}
            </div>
          ))}
          {letters?.[3]?.map((li) => (
            <div key={li?.id} className={applyStyles(li)}>
              {" "}
              {li?.value ? li?.value?.toUpperCase() : ""}
            </div>
          ))}
          {letters?.[4]?.map((li) => (
            <div key={li?.id} className={applyStyles(li)}>
              {" "}
              {li?.value ? li?.value?.toUpperCase() : ""}
            </div>
          ))}
          {letters?.[5]?.map((li) => (
            <div key={li?.id} className={applyStyles(li)}>
              {" "}
              {li?.value ? li?.value?.toUpperCase() : ""}
            </div>
          ))}
        </div>
      </section>
      {lost && <div>You lose</div>}
      <div>
        <Keyboard handleKeyPress={handleKeyPress} letters={letters} />
      </div>
      <WinningModal open={won} handleWinClose={handleWinClose} />
      <LostModal
        open={lost}
        handleClose={handleClose}
        word={word}
        setOpen={setLost}
        resetGame={resetGame}
      />
    </section>
  );
}

export default WordlyGame;
