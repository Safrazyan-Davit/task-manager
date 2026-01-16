import React from 'react';


function Slidebar({data,setDisplay}) {

    function showAddForm(){

            setDisplay((prev)=>({...prev,show:'project-form'}))

    }
    function showProject(data){

        setDisplay((prev)=>({...prev,show:'list',active:data}))
    }

    return (
            <div className="sidebar">
                <h5>YOUR PROJECTS</h5>
                <button className="btn btn-outline-light btn-sm mb-3" onClick={showAddForm}>+ Add Project</button>
                <div id="projectList">

                    {data.map(res => (
                        <div key={res.id} className="project-link" onClick={()=>showProject(res)}>{res.title}</div>
                    ))}
                </div>
            </div>


    );
}

export default Slidebar;