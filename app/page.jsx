"use client"
import { useRouter } from "next/navigation";
import {useState} from "react"

export default function Home() {
  const [data,setData] = useState("");
  const router = useRouter()
  function handleSubmit(e){
    e.preventDefault();
    router.push(`/predict/${data}`)
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
   <div className="p-4 shadow-md bg-white rounded-md">
   <h1 className="text-2xl font-semibold mb-4 text-black">
          Enter Your Name
    </h1>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input 
          type="text" 
          value={data} 
          onChange={(e)=>setData(e.target.value)} 
          placeholder="Enter your name"
          className="w-full p-2 border border-gray-300 rounded text-black"
          />
          <button className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" >Submit</button>
        </form>
    </div>
    </div>
  );
}
