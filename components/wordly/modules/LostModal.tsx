import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

type LostModal = {
  open: boolean;
  handleClose: () => void;
  word: string;
  setOpen: (boolean: boolean) => void;
  resetGame: () => void;
};

const LostModal: React.FC<LostModal> = ({ open, handleClose, word }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className="flex items-center w-full justify-center text-2xl">
          You Lose !!
        </DialogTitle>
        <DialogContent>
          <p className="mb-2">You played well, correct word is</p>
          <div className="flex flex-col items-center justify-center">
            <span className="border border-primary-gray bg-secondary-gray border-dashed w-fit px-2 py-1 font-semibold">
              {word?.toUpperCase()}
            </span>
            <a className="text-blue-500 text-sm mt-2" href={`https://wordfind.org/dictionary/${word}`} target="_blank">
                What does this word mean?
            </a>
          </div>
        </DialogContent>
        <DialogActions>
          <div className="flex justify-center items-center w-full mb-3">
            <button
              className="bg-secondary-gray transition-colors hover:bg-hover-brown hover:text-hover-text text-light-black font-semibold rounded-sm border-primary-gray  px-3 py-2 cursor-pointer"
              onClick={handleClose}
            >
              Reset Game
            </button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LostModal;
