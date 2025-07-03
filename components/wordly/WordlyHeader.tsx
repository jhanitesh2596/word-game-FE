import React from "react";
import { ChartBar, Settings, Info } from "lucide-react";
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
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
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
              <DialogTitle>Are you absolutely sure? chart</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger className="bg-secondary-gray transition-colors hover:bg-hover-brown hover:text-hover-text text-light-black font-semibold rounded-lg border-primary-gray  px-3 py-2 cursor-pointer">
            <Settings />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure? settings</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
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
              <DialogTitle>Are you absolutely sure? info</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default WordlyHeader;
