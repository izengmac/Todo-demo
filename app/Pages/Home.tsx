import { Input } from "postcss";
import React from "react";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      {/*Head*/}
      <div className="flex flex-col pt-[40px] items-center gap-[18px]">
        <h1 className="">TODO LIST</h1>
        {/* Search Bar/ Togle button*/}
        <div className="flex flex-row ">
          <div className="flex flex-row">
            <input placeholder="Search" />
            <p>Image</p>
          </div>
          <div className="bg-blue-500 mx-4 flex flex-row">
            <h1>ALL</h1>
            <p>Image</p>
          </div>
          <div className="bg-blue-500 ">Moon</div>
        </div>
      </div>

      {/*List todos*/}
      <div>Todo list</div>
    </div>
  );
}

export default Home;
