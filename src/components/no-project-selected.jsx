/* eslint-disable react/prop-types */
import noProjectImage from "../assets/no-projects.png";
import Button from "./button";

const NoProjectSelected = ({onStartAddProject}) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImage}
        alt="An empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold capitalize text-stone-500 my-4">
        No Project selected
      </h2>
      <p className="text-stone-400 mb-4">Select a project or get started with a new project</p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
};

export default NoProjectSelected;
