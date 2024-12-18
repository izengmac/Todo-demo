import { Input } from "postcss";
import React from "react";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

function Home() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      {/*Head*/}
      <div className="flex flex-col w-full pt-[40px] items-center gap-[16px]">
        <h1 className="font-kanit text-[26px] font-medium ">TODO LIST</h1>
        {/* header*/}
        <div className="flex flex-start w-full  gap-[18px]">
          <div className="flex flex-row justify-between w-[80%] rounded-[5px] border-blue-300 border-2 px-[16px] py-[8px]">
            <input placeholder="Search note..."  className="focus:outline-none w-[75%]"/>
            <SearchSharpIcon color="primary" sx={{ fontSize: 22 }} />
          </div>
          <div className="bg-blue-500 w-[11%] flex flex-row justify-center items-center gap-[10px] rounded-[5px] text-white">
            <h1 className="font-kanit text-[18px] font-medium uppercase">ALL</h1>
            <KeyboardArrowDownIcon fontSize="small"/>
          </div>
          <div className="bg-blue-500 w-[5%] rounded-[5px] flex justify-center items-center text-white ">
            <DarkModeOutlinedIcon sx={{ fontSize: 32 }}/>
          </div>
        </div>
      </div>

      {/*List todos*/}
      <div>Todo list</div>
    </div>
  );
}

export default Home;
