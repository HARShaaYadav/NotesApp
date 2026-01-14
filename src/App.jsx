import React from "react";
const App = () => {
  return ( <div className="h-screen bg-black text-white">
 <form className="flex flex-col p-10">
  <input type="text" placeholder="Enter Notes Heading " className="px-5 py-2 border-2 rounded" />
  <input type="text" placeholder="Enter Details"/>
 </form>
  </div>
   )

}
export default App;