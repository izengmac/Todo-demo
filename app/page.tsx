'use client'

import Home from "./Pages/Home";
import useDarkMode from "./hook/useDarkMode";

function page() {
  useDarkMode()
  return (
    <div className="flex h-screen px-[325px] dark:bg-black">
      
        <Home />

      
    </div>
  );
}

export default page;
