import React from "react";

function DateIcon() {
    const current = new Date();
    const date = `${current.getDate()}`;
    const months=["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC" ]
    const month=  months[`${current.getMonth()}`];
  
    return (
      <div className="DateIcon">
        <div className="Month">{month}</div>
        <div className="Date">{date}</div>
      </div>)
}
export default DateIcon;
