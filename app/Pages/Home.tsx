"use client";

import React, { useEffect, useState } from "react";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Checkbox from "@mui/material/Checkbox";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Note_Modal from "../components/Note_Modal";
import Image from "next/image";
import SVG from "../assets/empty.svg";
import LightModeIcon from "@mui/icons-material/LightMode";
import useDarkMode from "../hook/useDarkMode";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Home() {
  const [colorTheme, setTheme] = useDarkMode();
  const [notes, setNotes] = useState([]);
  console.log(notes);

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    console.log(storedNotes);
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);
  // Handle Delete Note
  const deleteNote = (id) => {
    
    setNotes(notes.filter((note) => note.id !== id));
    localStorage.setItem("notes", JSON.stringify(notes));
  };

  return (
    <div className="flex flex-col h-full w-full justify-center items-center dark:text-white px-[15px]">
      {/*Head*/}
      <div className="flex flex-col w-full pt-[40px] items-center gap-[16px]">
        <h1 className="font-kanit text-[26px] font-medium">TODO LIST</h1>
        {/* Header */}
        <div className="flex justify-between w-full sm:gap-10 lg:gap-[18px]">
          <div className="flex flex-row justify-between  sm:w-[80%] lg:w-[75%] rounded-[5px] border-blue-300 border-2 px-[16px] py-[8px]">
            <input
              placeholder="Search note..."
              className="focus:outline-none sm:w-[30%] lg:w-[75%] dark:bg-black dark:text-white"
            />
            <SearchSharpIcon color="primary" sx={{ fontSize: 22 }} />
          </div>
          <div className="bg-blue-500 sm:w-[25%] lg:w-[11%] flex flex-row justify-center items-center gap-[10px] px-1 rounded-[5px] text-white">
            <h1 className="font-kanit text-[18px] font-medium uppercase">
              ALL
            </h1>
            <KeyboardArrowDownIcon fontSize="small" />
          </div>
          <div
            className="bg-blue-500 sm:w-[20%] lg:w-[5%] rounded-[5px] flex justify-center items-center text-white "
            onClick={() => setTheme(colorTheme)}
          >
            {colorTheme == "light" ? (
              <LightModeIcon sx={{ fontSize: 32 }} />
            ) : (
              <DarkModeOutlinedIcon sx={{ fontSize: 32 }} />
            )}
          </div>
        </div>
      </div>

      {/*Body*/}
      <div className="flex justify-center items-center w-full sm:px-8 lg:px-24  ">
        {/*List*/}
        <div className="   sm:w-full w-[88%]  mt-[30px] flex flex-col gap-[17px] divide-y-[2px] divide-blue-300">
          {/* Render Notes Dynamically */}
          {notes.length > 0 ? (
            notes.map((note) => (
              <div
                className="flex flex-row justify-between items-center py-[17px] "
                key={note.id}
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
                      color: "#3C82F6",
                      '&.Mui-disabled': {
                      color: "primary",
                       },
                    }}
                    checked={note.completed}
                  />
                  <p className="font-kanit text-[20px] font-medium text-center">
                    {note.text}
                  </p>
                </div>
                <div className="flex flex-row gap-[10px]">
                  <CreateOutlinedIcon color="inherit" sx={{ fontSize: 20 }} />
                  <DeleteOutlineOutlinedIcon
                    color="inherit"
                    sx={{ fontSize: 20, cursor: "pointer" }}
                    onClick={() => deleteNote(note.id)}
                  />
                </div>
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center">
              <Image
                src={SVG}
                width={500}
                height={500}
                alt="No notes available"
              />
            </div>
          )}
        </div>
        
      </div>
      <Note_Modal />
    </div>
  );
}

export default Home;
