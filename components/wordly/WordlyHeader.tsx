import React from "react";
import { ChartBar, Info } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function WordlyHeader() {
  return (
    <div className="w-full flex justify-center gap-[15rem] items-center mt-4 mb-4">
      <div>
        <Dialog>
          <DialogTrigger className="bg-secondary-gray transition-colors hover:bg-hover-brown hover:text-hover-text text-light-black font-semibold rounded-lg border-primary-gray  px-3 py-2 cursor-pointer">
            Give Up
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Nice Try!</DialogTitle>
              <DialogDescription className="text-center">The answer was:</DialogDescription>
              <div className="flex flex-col items-center justify-center">
                <span className="border border-primary-gray bg-secondary-gray border-dashed w-fit px-2 py-1 font-semibold">
                  {"FLAME"}
                </span>
                <a
                  className="text-blue-500 text-sm mt-2"
                  href={`https://wordfind.org/dictionary`}
                  target="_blank"
                >
                  What does this word mean?
                </a>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex gap-2">
        <Dialog>
          <DialogTrigger className="bg-secondary-gray transition-colors hover:bg-hover-brown hover:text-hover-text text-light-black font-semibold rounded-lg border-primary-gray  px-3 py-2 cursor-pointer">
            <ChartBar />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Stats:</DialogTitle>
              <DialogDescription>
                Coming Soon
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

       
        <Dialog>
          <DialogTrigger className="bg-secondary-gray transition-colors hover:bg-hover-brown hover:text-hover-text text-light-black font-semibold rounded-lg border-primary-gray  px-3 py-2 cursor-pointer">
            <Info />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>How To Play</DialogTitle>
              <DialogDescription>
                You have to guess the hidden word in 6 tries and the color of
                the letters changes to show how close you are. To start the
                game, just enter any word, for example:
              </DialogDescription>
              <div className="flex w-full gap-4 justify-center">
                <div className="row-letter w-[4rem] h-[4rem] bg-primary-green rounded-lg border-2 border-primary-green text-white flex items-center justify-center font-bold text-[28px]">
                  <span>F</span>
                </div>
                <div className="row-letter border w-[4rem] h-[4rem] bg-primary-green rounded-lg  border-primary-green text-white flex items-center justify-center font-bold text-[28px]">
                  <span>L</span>
                </div>
                <div className="row-letter border w-[4rem] h-[4rem] bg-primary-orange rounded-lg border-primary-orange text-white flex items-center justify-center font-bold text-[28px]">
                  <span>A</span>
                </div>
                <div className="row-letter border w-[4rem] h-[4rem] bg-primary-orange rounded-lg border-primary-orange text-white flex items-center justify-center font-bold text-[28px]">
                  <span>M</span>
                </div>
                <div className="row-letter  w-[4rem] h-[4rem] bg-filled-gray rounded-lg border-2 border-filled-gray text-white flex items-center justify-center font-bold text-[28px]">
                  <span>E</span>
                </div>
              </div>

              <div className="bg-secondary-gray p-3 rounded-md">
                <div className="flex items-center gap-2">
                  <div className="row-letter  w-[2rem] h-[2rem] bg-filled-gray rounded-lg border-2 border-filled-gray text-white flex items-center justify-center font-bold text-[18px]">
                    <span>E</span>
                  </div>
                  <p>E is not in word at all.</p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <div className="row-letter border w-[2rem] h-[2rem] bg-primary-orange rounded-lg border-primary-orange text-white flex items-center justify-center font-bold text-[18px]">
                    <span>A</span>
                  </div>
                  <div className="row-letter border w-[2rem] h-[2rem] bg-primary-orange rounded-lg border-primary-orange text-white flex items-center justify-center font-bold text-[18px]">
                    <span>M</span>
                  </div>
                  <p>A & M is in the word but in the wrong spot.</p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <div className="row-letter w-[2rem] h-[2rem] bg-primary-green rounded-lg border-2 border-primary-green text-white flex items-center justify-center font-bold text-[18px]">
                    <span>F</span>
                  </div>
                  <div className="row-letter w-[2rem] h-[2rem] bg-primary-green rounded-lg border-2 border-primary-green text-white flex items-center justify-center font-bold text-[18px]">
                    <span>L</span>
                  </div>
                  <p>F & L are in the word and in the correct spot.</p>
                </div>
              </div>
              <div>
                <p>Another try to find matching letters in the target word.</p>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default WordlyHeader;
