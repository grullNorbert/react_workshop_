import { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { FaPen } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle, onUpdate }) => {
  const [thisTask, setThisTask] = useState(task)
  const [isUpdating, setIsUpdating] = useState(false)
  useEffect(()=>{
    setThisTask(task)
  },[task])

  const handleChange=(e)=>{
    setThisTask(
      {
        ...thisTask,
        [e.target.name]:e.target.value
      }
    )
  }

  return (
    <div
      className={`task ${task.reminder && 'reminder'}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <div className='d-flex flex-row justify-content-between'>
      
        

        {isUpdating?<input name='text' onChange={(e)=>handleChange(e)} value={thisTask.text}></input>:<h3 onClick={()=>{setIsUpdating(true)}}>
          {thisTask.text}
          
        </h3>}
   
        

        <div className='buttons'>
          {isUpdating?<FaPen
          style={{ color: 'green', cursor: 'pointer' }}
          onClick={() => {setIsUpdating(false); onUpdate(task.id, thisTask)} }
          
        />:null}
        
        
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() =>onDelete(task.id) }
          
        />
        </div>
       
       
      
      </div>
      
      <p>{task.day}</p>
    </div>
  )
}

export default Task
