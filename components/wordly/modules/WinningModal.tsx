import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Trophy } from "lucide-react";

type WinningModal = {
  open: boolean;
  handleWinClose: () => void;
};

const WinningModal: React.FC<WinningModal> = ({ open, handleWinClose }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleWinClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className="flex items-center w-full justify-center text-2xl">
          You Won!! <Trophy className="text-gold" />
        </DialogTitle>
        <DialogContent>
          <p>You are an expert!!</p>
          <div>
            <p>Share your score</p>
          </div>
        </DialogContent>
        <DialogActions>
          <div className="flex justify-center items-center w-full mb-3">
            <button
              className="bg-secondary-gray transition-colors hover:bg-hover-brown hover:text-hover-text text-light-black font-semibold rounded-sm border-primary-gray  px-3 py-2 cursor-pointer"
              onClick={handleWinClose}
            >
              Reset Game
            </button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default WinningModal;
