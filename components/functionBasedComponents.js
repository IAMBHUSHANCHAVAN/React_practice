import React, { useEffect, useState } from 'react'

const Fncbased = (props) => {
const [data,setData]=useState(1)
useEffect(()=>{
    console.log("rendered");
},[data])

    return (
        <div>
            hello from React function based component
            <h1>title changes using {props.title} and props are {props.feature}</h1>
            <h2>value is {data}</h2>
            <button onClick={()=>{
                setData(data+1)
            }}>add by one </button>
        </div>
    )
}

export default Fncbased

/*Functional components lack a significant amount of features as compared to class-based components and they do not have access to dedicated state variables 
like class-based components. The gap is made up with the help of a special ReactJS concept called “hooks”. ReactJS has access to a special hook 
called useState(). The useState() is used to initialize only one state variable to multiple state variables. The first value returned is 
the initial value of the state variable, while the second value returned is a reference to the function that updates it. */