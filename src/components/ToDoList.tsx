import {useState} from 'react';
import {ToDoForm} from './ToDoForm';
import {ToDo} from './ToDo';

export function ToDoList () {
    const [toDos,setToDos] = useState <Array<ToDo>>([]);
    
    const addToDo = (toDo: ToDo) => {
        if (!toDo.text || /^\s*$/.test(toDo.text)) { 
          return 
        }
        const newToDos = [toDo, ...toDos];
        setToDos (newToDos);
        console.log(newToDos)
    }

    const removeToDo = (id: string | null) => {
      if (id === null) return;
      const removeArr = [ ...toDos].filter(toDo => toDo.id !== id);
      setToDos ( removeArr);
    }

    const updateToDo = (toDoId: string, newValue: ToDo) => {
      if (!newValue.text || /^\s*$/.test(newValue.text)){
        return
      }
      setToDos (prev => prev.map( item =>(item.id === toDoId ? newValue : item)))
    };
    
  return (
    <>
    <h1>
        What's your plan for today?
    </h1>
    <ToDoForm onSubmit={addToDo} edit={undefined} />
    <ToDo toDos= {toDos} removeToDo= {removeToDo} updateToDo= {updateToDo} />
    </>
  )
}

export default ToDoList


