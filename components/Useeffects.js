import React,{useState,Useeffects} from 'react'

const Useeffectsgt = () => {
    const [count, setCount] = useState(0);

    Useeffects(() => {
      let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  
    return () => clearTimeout(timer)
    }, []);
  return (
    <div>

        <h1>i have rendered ${count} times</h1>
    </div>
  )
}

export default Useeffectsgt
