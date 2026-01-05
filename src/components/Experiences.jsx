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
                &nbsp;{item.title} @&nbsp;
                {item.company}
              </div>
              <div className="right-section">
                {item.timeframe}
                &nbsp;&nbsp;
                &nbsp;&nbsp;
                {(index !== activeIndex) && (
                  <>
                    +
                  </>
                )}
                {(index === activeIndex) && (
                  <>
                    -
                  </>
                )}
              </div>
            </div>
            <div className={index === activeIndex ? "accordion-answer" : "accordion-hidden"}>
              <div>
                🌐&nbsp;
                {item.location}
              </div>
              <br></br>
              <div>
                <p>
                  {item.description}
                </p>
              </div>
              <br></br>
              <div className="bubble-list">
                {item.skills.map((skill) => (
                  <>
                    <div className="bubble-item">
                      <h3>{skill}</h3>
                    </div>
                  </>
                ))}
              </div>
            </div>
            <br></br>
          </div>
        </>
      })}
    </div>
  );
};

export default Experiences;