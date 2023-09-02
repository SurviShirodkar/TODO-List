import React, { useState } from 'react'

export default function TodoList() {
    const [Text,setText]= useState("");
    const[Msg,setMsg]= useState();
    const [storeData, setStoreData]= useState([]);
    const [ edit, setEdit] = useState("");
    console.log(edit);
    const getText = (e) => {
     setText(e.target.value);
    };
    const processData = () => {
        setStoreData((oldData)=>{
            return[...oldData,Text];

        })
        setText("");
    };
    const deleteEvent = (e , indexd)=>{
        console.log(e);
        setStoreData((oldData)=>{
            return oldData.filter((arrElem, index) => {
                return index !== indexd;
            })
        });

    };
    const EditText = (e)=>{
       setMsg(e.target.value);
    };
    console.log(Msg);

    const processEditData = (e , index)=>{
        console.log("find",index );
        storeData.map((se, sindex)=>{
            console.log("find2",sindex );
            console.log("msg",Msg);
            console.log("data",se);
            if(index === sindex){
                return { ...se, Msg};
               
               
            }
            else 
            return se;
        })
        console.log("storeData", storeData);
        }




  return (
    <div className="todo">
        <h4> Todo List Project</h4>
        <input className="todoinput" onChange={getText} value={Text}/>
        <button className="btn btn-primary" onClick={processData}>+</button>
        {
            storeData.map((e , index)=>(
              
                    // <div className="delete">
                    <div className="delete">
                        <div>
                        {/* { edit === index ?  <input className="todoinput " onChange={getText} value={Text}/> : */} <p >{e}</p>
                    
                    <button key={index} onClick={(e)=> deleteEvent(e, index)}  >delete</button>
                    <button key={index} onClick={(e)=> setEdit(index)}  >Edit</button>
                    </div>
                    { edit === index ? <>
                    <input className="todoinput " onChange={EditText} value={Msg}/>
                    <button className="btn btn-primary" onClick={processEditData(e, index)} >+</button>
                    </>  : ""}
                    </div>

                //     <button onClick={deleteEvent(index)}>Delete</button>
   
                //    </div>
             
              
                
            ))
        }      
        
    
    </div>
  )
}
