import React from "react";

const DisplayData = ({ data }) => <span> {!!data ? data : "N/A"}</span>;

export {DisplayData};
