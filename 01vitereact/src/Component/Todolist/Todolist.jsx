import { useState } from "react";
import  "./Todolist.css";
const Todolist = () => {
    let list = [
        {
            checked: false,
            text: "This is some text 1"
        },
        {
            checked: false,
            text: "This is some text 2"
        },
        {
            checked: false,
            text: "This is some text 3"
        }

    ]
    const [todoList,setTodoList] = useState(list);
    const [count,setCount] = useState(0);
    const handleCheck = (index,value) => {
        let newTodoList = todoList;
        newTodoList[index].checked = !todoList[index].checked;
        if(newTodoList[index].checked)
            setCount(count+1);
        else 
            setCount(count-1);
        setTodoList([...newTodoList]);
    }
    return ( 
        <div className="main">
            <div className="todoList-back">
                <b>Task List</b>
            
                <p>{count}/{todoList.length} done</p>
            </div>
            <ul>
                {todoList.map((list,index) => (
                    <li key={list.text}>
                        <input type="checkbox" checked={list.checked} onChange={(e) => handleCheck(index,e.target.value)}/>
                        <span className={`${list.checked?'stikeThrough':''}`}> 
                            {list.text}
                        </span>
                </li>
                ))}
            </ul>
            <button >+ Add Task</button>
        </div>
     );
}
 
export default Todolist;