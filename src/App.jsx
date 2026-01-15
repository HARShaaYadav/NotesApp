import React from "react";
const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();//To prevent reloading of page
    console.log("Form Submitted");
  }
  return ( <div className='h-screen bg-black  lg:flex text-white'>
 <form className="flex items-start lg:w-1/2 gap-4 p-10 flex-col" onSubmit={(e) => submitHandler(e)}>
  <h1 className="text-xl font-bold">Add Notes</h1>
  <input type="text" placeholder="Enter Notes Heading "
   className="px-5 py-2 border-2  font-medium rounded w-full outline-none" />
  <textarea type="text" placeholder="Enter Details"
  className="px-5 py-2 border-2  h-32 rounded font-medium w-full outline-none rounded "/>
  <button className="bg-white text-black px-5 py-2 rounded font-medium w-full ">Add Note</button>
  
   
 </form>
 <div className="bg-black lg:w-1/2 lg:border-l-2 p-10">
 <h1 className="text-xl font-bold">Notes</h1>
 <div className="flex bg-gray-9 flex-wrap gap-5 mt-5 overflow-auto h-full">
  <div className="h-32 w-32 rounded-2xl bg-white">
  </div>
  <div className="h-32 w-32 rounded-2xl bg-white">
  </div>
 </div>
 
 </div>
 
  </div>
   )

}
export default App;