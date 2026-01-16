import React, {useEffect, useRef, useState} from 'react';
import projectForm from "./projectForm";

function Lists({display,tasks,setTask,setProjectList,setDisplay}) {
    const taskInputRef=useRef(null)
    const [taskList,setTaskList]=useState([])
    useEffect(() => {
        setTaskList(tasks.filter(res=>res.projectId===display.active.id))
    }, [display.active]);

    function deleteHandle(id){

        setTaskList(taskList.filter(task => task.id !== id))

    }

    function deleteProject(id){

        setTaskList(taskList.filter(project => project.projectId!== id))
        setProjectList(taskList.filter(project => project.id!== id))
        setDisplay({
            active:null,
            show:'welcome'
        })
    }


    return (
        <div>
            <div id="projectDetails">
                <div className="project-card">
                    <div className="d-flex justify-content-between align-items-center">
                        <h3>{display.active.title}</h3>
                        <button onClick={()=>deleteProject(display.active.id)} className="btn btn-sm btn-danger">Delete</button>
                    </div>
                    <p className="text-muted">{display.active.date}</p>
                    <p>{display.active.description}</p>
                    <hr/>
                    <h5>Tasks</h5>
                    <div className="input-group mb-3">
                        <input type="text" ref={taskInputRef} id="taskInput" className="form-control"
                               placeholder="Add Task"/>
                        <button className="btn btn-outline-secondary" onClick={()=>{
                            let d={
                                id:Date.now(),
                                projectId:display.active.id,
                                title:taskInputRef.current.value
                            }
                            setTask([...tasks,d])
                            setTaskList([...taskList,d])
                            taskInputRef.current.value=''

                        }}>Add Task</button>
                    </div>
                    <ul className="list-group">
                        {
                            taskList.map(res=> (
                                <li className="list-group-item d-flex justify-content-between" key={res.id}>{res.title}
                                    <button onClick={()=>deleteHandle(res.id)} className="btn btn-sm btn-link text-danger"
                                    >Clear
                                    </button>
                                </li>
                            ))
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Lists;