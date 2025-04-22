import React from 'react'

function Welcome(props) {
    const {name,fun} = props;

    // const demo = ()=>{
    //     alert(name);
    // }
  return (
    <>
      <h1>Welcome {name} </h1>
      <button onClick={()=>fun(name)}>{name}</button>
    </>
  )
}

export default Welcome
