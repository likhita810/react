import { useState } from "react";


import ProjectSideBar from "./components/ProjectSideBar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

function App () {

  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject () {
    setProjectState((previousState) => {
      return {
        ...previousState,
        selectedProjectId: null,
      };
    });
  };

  let content;
  if (projectState.selectedProjectId === null) {
    content = <NewProject />
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject = {handleStartAddProject}/>
  }

  return (
    <>
      <main className= "h-screen my-8">
        <ProjectSideBar onStartAddProject = {handleStartAddProject} />
        {content}
      </main>
    </>
  )
}

export default App;
