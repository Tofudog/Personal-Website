import { useState } from "react";

const Experiences = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleActiveAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(-1);
    }
    else {
      setActiveIndex(index);
    }
  };

  return (
    <div>
      {data.map((item, index) => {
        return <>
          <div className="accordion-wrapper" key={index}>
            <div onClick={() => toggleActiveAccordion(index)} className="accordion-question">
              <div className="left-section">
                {item.title} @&nbsp;
                {item.company}
              </div>
              <div className="right-section">
                {item.timeframe}
                &nbsp;&nbsp;
                &nbsp;&nbsp;
                +
              </div>
            </div>
            <div className={index === activeIndex ? "accordion-answer" : "accordion-hidden"}>
              {item.skills.map((skill) => (
                <>
                  <h3>{skill}</h3>
                </>
              ))}
            </div>
            <br></br>
          </div>
        </>
      })}
    </div>
  );
};

export default Experiences;