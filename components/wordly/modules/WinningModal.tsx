import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Trophy } from "lucide-react";
import { FacebookShareButton, WhatsappShareButton } from "react-share";
import Image from "next/image";

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
        sx={{
          ".MuiDialog-paper": {
            width: "30rem",
          },
        }}
      >
        <DialogTitle className="flex items-center w-full justify-center text-2xl">
          You Won!! <Trophy className="text-gold" />
        </DialogTitle>
        <DialogContent>
          <p className="text-center">You are an expert!!</p>
          <div className="flex flex-col items-center justify-center">
            <p className="font-semibold">Share with friends</p>
            <div className="flex items-center gap-3 mt-3">
              <FacebookShareButton
                hashtag="#wordly #words #guess #winner"
                url="https://wordly.com"
              >
                <Image
                  src="/fb-logo.svg"
                  alt="facebook logo"
                  width={30}
                  height={30}
                />
              </FacebookShareButton>
              <WhatsappShareButton title="Won this awesome word game" url="https://wordly.com">
              <Image
                  src="/whats-app.svg"
                  alt="facebook logo"
                  width={35}
                  height={35}
                />
              </WhatsappShareButton>
            </div>
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
