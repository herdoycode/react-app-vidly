import React from "react";

const Like = ({ like, onClick }) => {
  let classes = "clickable fa fa-heart";
  if (!like) classes += "-o";
  return <i onClick={onClick} className={classes}></i>;
};

export default Like;
