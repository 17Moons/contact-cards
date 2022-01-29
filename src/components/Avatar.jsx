import react from "react";

function Avatar(props){
  return (
    <img className="circle-img" src={props.image} alt="team-member"/>
  );

}

export default Avatar;
