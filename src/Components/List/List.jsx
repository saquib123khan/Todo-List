import './List.css'
import { FaCheckCircle } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";
import { MdCancel } from "react-icons/md";
const List = ({ todoList, handleToggle, handleDelete }) => {
return(
 <ul className='list'>
    
        {todoList.map((listItem) => (
        <li key={listItem.id} className={listItem.done ? 'done' : ''}>
            <span>{listItem.item}</span>
            <span className='actions'>
            {listItem.done ? (
              <MdCancel onClick={() => handleToggle(listItem.id)} />
            ) : (
              <FaCheckCircle onClick={() => handleToggle(listItem.id)} />
            )}
              
               <MdDelete onClick={() => handleDelete(listItem.id)}/>
            </span>
        </li>
        )) }
    
</ul>
    )
}

export default List