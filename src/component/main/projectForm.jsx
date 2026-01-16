import React, {useRef, useState} from 'react';

function ProjectForm({setProjectList,setDisplay}) {

    const inputTitleRef=useRef(null)
    const inputDescRef=useRef(null)
    const inputDateRef=useRef(null)


function save(){
        let mainObj={
            id:Date.now(),
            title:inputTitleRef.current.value,
            description:inputDescRef.current.value,
            date:inputDateRef.current.value
        }
    setProjectList((prevState)=>([
        ...prevState,
        mainObj
    ]))
    setDisplay((prev)=>({...prev,show:'list',active:mainObj}))

}
    return (
        <div id="addProjectForm">
            <div>
                <label className="form-label">TITLE</label>
                <input ref={inputTitleRef} type="text" id="title" className="form-control" placeholder="Project title" required=""/>

                <label className="form-label mt-3">DESCRIPTION</label>
                <textarea ref={inputDescRef} id="description" className="form-control" rows="3" placeholder="Project description"
                          required=""></textarea>

                <label className="form-label mt-3">DUE DATE</label>
                <input ref={inputDateRef} type="text" id="dueDate" className="form-control" placeholder="dd.mm.yyyy" required=""/>



                <div className="form-buttons">
                    <button type="button" className="btn btn-light" onClick={()=>{
                        setDisplay((prev)=>({...prev,show:'welcome',active:null}))
                    }}>Cancel</button>
                    <button onClick={save} type="submit" className="btn btn-dark">Save</button>
                </div>
            </div>
        </div>
    );
}

export default ProjectForm;