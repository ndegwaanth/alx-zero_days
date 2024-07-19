import './CSS/TodoItem.css'
import check_mark from './Assets/check_mark.png';
import remove from './Assets/remove.png';

export const TodoItem = ({no, text, display}) => {
  return (
    <div className='todoitems'>
      <div className='todoitems-container'>
        <img src={check_mark} alt="no image" />
        <img src={remove} alt="no image" />
        <div className='todoitems-text'>
          {text}
        </div>
      </div>
      <img className='last' src={remove} alt="no ima ge" />

    </div>
  )
}


export default TodoItem