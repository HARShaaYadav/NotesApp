import React from "react";
const App = () => {
  return ( <div className='h-screen bg-black text-white'>
 <form className="flex items-start justify-between   p-10">
  <div className="flex items-start w-1/2 gap-4 flex-col">
  <input type="text" placeholder="Enter Notes Heading "
   className="px-5 py-2 border-2 rounded w-full outline-none" />
  <input type="text" placeholder="Enter Details"
  className="px-5 py-2 border-2 rounded w-full outline-none"/>
  <button className="bg-white text-black px-5 py-2 rounded w-1/2 ">Add Note</button>
   </div>
   
 </form>
  </div>
   )

}
export default App;