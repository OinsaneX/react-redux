import React from 'react'
import { useSelector, useDispatch } from 'react-redux'



function TaskList() {

    const tasks = useSelector(state =>state.data)
    const dispatch = useDispatch()



    function deleteTask(pos){
        dispatch({type: 'DELETE_TASK', pos})
    }

    return (
        <div>
            <ul className="flex justify-center flex-wrap">
                {tasks.map((task,index) =><li key={task}>
                    <div className="card flex flex-col justify-between bg-red-400 p-4 rounded m-5 h-44 w-60 ">
                        <h2 className="text-xl">{task.title}</h2>
                        <div className="description overflow-hidden  h-20 ">
                        <p className="text-sm overflow-ellipsis">{task.description}</p>

                        </div>
                        <button className="bg-gray-500 hover:bg-gray-400 px-4 py-2 m-2 rounded" onClick={()=>deleteTask(index)}>Delete</button>
                    </div>
                </li>)}
            </ul>

        </div>
    )
}

export default TaskList
