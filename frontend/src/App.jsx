import React,{useState} from 'react'
import Welcome from './Welcome'
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from './Alert';

function App() {
    const welcome=(a)=>{
        alert("Welcome "+a);
    }

    let [a, setA] = useState(1);
    let [txt, setTxt] = useState("");
    const add = ()=>{
        setA(a+1);

    //    if(a===3){
    //     setTxt("raju khopra phor")
    //    }
        
    }

    const [list, setList] = useState(["Chirag", "Ashish", "Ravi"]);
    const [alt, setAlt] = useState(false);
    const fun = ()=>{
        setAlt(true);

        setTimeout(() => {  
            setAlt(false);
        }
        , 2000);
    }
  return (
    <>
     {/* <Welcome name="Chirag" fun={welcome}/>
     <Welcome name="Ashish" fun={welcome}/> */}

        {/* <h1>{a}</h1>
        <button onClick={add}>Add</button>
        <p>{a===3?"hello ashish":""}</p> */}

        {/* <ul>
            {list.map((item,index)=>{
                return(
                    <li key={index}>{item}</li>
                )
            })}
        </ul> */}
        <p>
            {alt && <Alert/>}
        </p>
        <button onClick={fun}>click</button>
    </>
  )
}

export default App
