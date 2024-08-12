


'use client'
import { useEffect,useState } from 'react';
import { redirect } from 'next/navigation'

export default function Home() {
const [number,setNumber] = useState(0)
  useEffect(() => {
    redirect('/home');
  }, []);

  // This component doesn't render anything visible to the user
  return null;
  // return (
  //   <div>
  //     <p>{number}</p>
  //     <button onClick={()=>setNumber(number+1)}>Increment</button>
  // </div>
// )



}
