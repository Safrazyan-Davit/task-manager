
import './App.css';
import Slidebar from "./component/slidebar";
import ProjectForm from "./component/main/projectForm";
import {useState} from "react";
import Lists from "./component/main/lists";

function App() {
const [projectList,setProjectList]=useState([])
const [taskList,setTaskList]=useState([{
    id:1,
    projectId:1,
    task:"hac petqa utem"
}])
const [diplay,setDisplay]=useState({
  active:null,
  show:'welcome'
})




  return (
    <div className="App">
      <div className="d-flex">
     <Slidebar data={projectList} setDisplay={setDisplay}/>
        <div className="main">
          {
            diplay.show==='project-form'?(
                <ProjectForm setProjectList={setProjectList} setDisplay={setDisplay}/>
            ):diplay.show==='list'?(

                    diplay.active&&<Lists display={diplay} setProjectList={setProjectList} setDisplay={setDisplay} setTask={setTaskList} tasks={taskList}/>


            ): (
                <div id="defaultView" className="project-card">
                    <h3>Welcome</h3>
                    <p>Select a project or add a new one.</p>
                </div>


            )
          }


        </div>
      </div>
    </div>
  );
}

export default App;
