import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
function TaskForm() {

    const dispatch = useDispatch()

    const [form, setform] = useState({title:'', description :''})

    function addNote() {
        dispatch({type: 'ADD_TASK',newTask:form})
        clearInputs()
    }

    function clearInputs () {
        setform({title:'', description :''})
    }

    function onType(e) {
        setform({...form,[e.target.name]: e.target.value})
    }
    
    return (
        <div className="flex justify-center ">
            <div className="card bg-green-400 m-4 p-4 flex flex-col justify-center rounded">
                <h3>NewTask</h3>
                <span>Title :</span> <input onChange={(e)=>onType(e)} name="title" value={form.title} className="m-2 rounded p-2 bg-gray-500" type="text" />
                <span>Description :</span> <input onChange={(e)=>onType(e)} name="description" value={form.description} className="m-2 rounded p-2 bg-gray-500" type="text"/>

                <button className="bg-red-500 py-3 mx-4 mt-2 rounded hover:bg-red-300" onClick={addNote}>Create</button>
            </div>
        </div>
    )
}

export default TaskForm
