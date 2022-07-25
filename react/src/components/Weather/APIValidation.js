import React from "react";

const DisplayData = ({ data }) => {
  if(!!data) {
    return <span>{data}</span>;
  }else{
    return <>N/A</>;
  }
};

export { DisplayData };
