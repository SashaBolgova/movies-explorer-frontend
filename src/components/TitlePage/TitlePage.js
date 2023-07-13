import React from "react";
import "./TitlePage.css";

function TitlePage(props) {
    const { title } = props;
    return (
        <h2 className="title-page">{title}</h2>
    );
}

export default TitlePage;
