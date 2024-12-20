import React from "react";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Checkbox from "@mui/material/Checkbox";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Note_Modal from "../components/Note_Modal";
import Image from "next/image";
import SVG from '../assets/empty.svg'

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Home() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      {/*Head*/}
      <div className="flex flex-col w-full pt-[40px] items-center gap-[16px]">
        <h1 className="font-kanit text-[26px] font-medium">TODO LIST</h1>
        {/* Header */}
        <div className="flex flex-start w-full gap-[18px]">
          <div className="flex flex-row justify-between w-[80%] rounded-[5px] border-blue-300 border-2 px-[16px] py-[8px]">
            <input
              placeholder="Search note..."
              className="focus:outline-none w-[75%]"
            />
            <SearchSharpIcon color="primary" sx={{ fontSize: 22 }} />
          </div>
          <div className="bg-blue-500 w-[11%] flex flex-row justify-center items-center gap-[10px] rounded-[5px] text-white">
            <h1 className="font-kanit text-[18px] font-medium uppercase">
              ALL
            </h1>
            <KeyboardArrowDownIcon fontSize="small" />
          </div>
          <div className="bg-blue-500 w-[5%] rounded-[5px] flex justify-center items-center text-white ">
            <DarkModeOutlinedIcon sx={{ fontSize: 32 }} />
          </div>
        </div>
      </div>

      {/*Body*/}
      <div className="flex flex-row w-full">
        {/*List*/}
        <div className="w-[88%] ml-24 mt-[30px] flex flex-col gap-[17px] divide-y-[2px] divide-blue-300">
          {/*Note*/}
          <div className="flex flex-row justify-between items-center py-[17px]">
            <div className="flex flex-row items-center justify-center gap-[10px]">
              <Checkbox
                {...label}
                sx={{
                  padding: 0, // Removes default padding
                  "& .MuiSvgIcon-root": {
                    fontSize: 28, // Ensures consistent size
                    margin: 0, // Removes margin from the SVG
                  },
                }}
              />
              <p className="font-kanit text-[20px] font-medium text-center">
                Note #1
              </p>
            </div>
            <div className="flex flex-row gap-[10px]">
              <CreateOutlinedIcon color="inherit" sx={{ fontSize: 20 }} />
              <DeleteOutlineOutlinedIcon
                color="inherit"
                sx={{ fontSize: 20 }}
              />
            </div>
          </div>
          {/* Additional Notes */}
          {[2, 3].map((num) => (
            <div
              className="flex flex-row justify-between items-center py-[17px]"
              key={num}
            >
              <div className="flex flex-row items-center justify-center gap-[10px]">
                <Checkbox
                  {...label}
                  sx={{
                    padding: 0,
                    "& .MuiSvgIcon-root": {
                      fontSize: 28,
                      margin: 0,
                      padding: 0,
                    },
                  }}
                  defaultChecked={num === 2}
                />
                <p className="font-kanit text-[20px] font-medium text-center">
                  Note #{num}
                </p>
              </div>
              <div className="flex flex-row gap-[10px]">
                <CreateOutlinedIcon color="inherit" sx={{ fontSize: 20 }} />
                <DeleteOutlineOutlinedIcon
                  color="inherit"
                  sx={{ fontSize: 20 }}
                />
              </div>
            </div>
          ))}
        </div>
        <Note_Modal />
      </div>
      <Image
        src={SVG}
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </div>
  );
}

export default Home;
