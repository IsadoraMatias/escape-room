import { useState } from 'react';
import { ToDoForm } from './ToDoForm';
import { TiEdit } from 'react-icons/ti';
import { RiCloseCircleLine } from 'react-icons/ri';

export interface ToDo {
  id: string ;
  text: string;
}

type Props = {
  toDos: Array<ToDo>,
  removeToDo: (id: string ) => void,
  updateToDo: (toDoId: string, newValue: ToDo) => void;
};

interface EditState {
  id: string | null;
  value: string;
}

export function ToDo({ toDos, removeToDo, updateToDo }: Props) {
  const [edit, setEdit] = useState<EditState>({ id: null, value: '' });


  const submitUpdate = (toDo: ToDo) => {
    if (edit.id) {
      updateToDo(edit.id, toDo);
      setEdit({ id: null, value: '' });
    }
  };

  if (edit.id) {
    
    return <ToDoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return toDos.map((toDo, index) => (
    <div className='toDo-row' key={index}>
      <div key={toDo.id}>
        {toDo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine onClick={() => removeToDo(toDo.id)} className='delete-icon' />
        <TiEdit onClick={() => setEdit({ id: toDo.id, value: toDo.text })} />
      </div>
    </div>
  ));
}

export default ToDo;
