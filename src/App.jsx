import React from "react";
import { useState } from "react";

const App = () => {
   const [notes, setNotes] = React.useState('');
    const [details,setdetails] = React.useState('');
    const [task,setTask] = React.useState([' ']);

    const deletebtn = (idx) => {
      const Copytask = [...task];
      Copytask.splice(idx,1);
      setTask(Copytask);
    }

  const submitHandler = (e) => {
    e.preventDefault();
    const Copytask = [...task];
    Copytask.push({notes,details});
    setTask(Copytask);
    console.log(notes,details);
    setNotes('');
    setdetails('');
  }
  

  return ( <div className='h-screen bg-black lg:flex text-white'>
 <form className="flex items-start lg:w-1/2 gap-6 p-12 flex-col" 
 onSubmit={(e) => submitHandler(e)}
 >
 
  <h1 className="text-4xl font-bold">Add Notes</h1>

  <input type="text"
   placeholder="Enter Notes Heading "
   className="px-6 py-4 border-2 text-2xl font-medium rounded w-full outline-none"
   value={notes}
 onChange={(e)=>{
  console.log(e.target.value)
  setNotes(e.target.value)
 }
 } />
  
 
  <textarea type="text"
   placeholder="Enter Details"
  className="px-6 py-4 border-2 h-40 text-2xl rounded font-medium w-full outline-none"
  value={details}
  onChange={(e)=>{
    console.log(e.target.value);
    setdetails(e.target.value)
  }}
 />
  
  <button className="bg-white active:bg-gray-200 text-black px-6 py-4 rounded font-bold text-2xl w-full ">
    Add Note
  </button>
  
   
 </form>

 <div className="bg-black lg:w-1/2 lg:border-l-2 p-12">
 <h1 className="text-4xl font-bold">Notes</h1>

 <div className="flex flex-wrap gap-8 mt-8 overflow-auto h-100 w-100">
  {task.map(function(elem,idx){
    return(
  <div key={idx} className="bg-white text-black p-6 rounded-lg w-80 flex flex-col gap-4 bg-[url(data:image/jpeg;base64,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)] bg-cover ">
   
     <h3 className="leading-tight text-3xl font-bold">
      {elem.notes}
      </h3 >

      <p className="leading-tight text-2xl font-medium">
      {elem.details}
      </p>
      <button onClick={() => deletebtn(idx)} className="bg-red-500 text-white px-4 py-2 rounded mt-auto self-start">
        Delete
      </button>
  </div>
  )
  })}
  
 </div>
 
 </div>
 
  </div>
   )

}

export default App;
