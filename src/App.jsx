import React, { useRef } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { addTodo, deletedtodo, editedTodo   } from './config/redux/reducer/todoSlice'


const App = () => {
  const todoval = useRef()


  // dispatch
  const dispatch = useDispatch()


    //selector
  const selector = useSelector(state => state.todos.todo);
  console.log(selector);

  const Addtodo=(event)=>{
    event.preventDefault()
    dispatch(addTodo({
            title: todoval.current.value
          }))

todoval.current.value=""
  } 

  const deleted = (index)=>{
   dispatch(deletedtodo({
    index
   }))
  
  }
  const edited = (index)=>{
    let title = prompt("Enter new Value")
    dispatch(editedTodo({
     index ,title
    })
  )
  }
  return (
    <div>
      <h1>Redux Toolkit</h1>
      <form onSubmit={Addtodo}>
       <input type="text" placeholder='Add Item' ref={todoval}/>
       <button type='submit'>Add</button>
      </form>
      <ul>
        {selector.length>0 ? selector.map((item,index)=>{
          return<li key={item.id}>{item.title}<button onClick={() => deleted(index)}>Delete</button><button onClick={()=>edited(index)}>Edit</button></li>

        })
        :<h3>No Todo</h3>}
      </ul>

    </div>
  )
}

export default App