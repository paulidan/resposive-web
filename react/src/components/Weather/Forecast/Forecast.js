import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import "./Forecast.module.css";

const Forecast = ({ data }) => {
    return (
        <>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>

            </Accordion>
        </>
    )
}

export default Forecast;