import { useState } from "react";

function Accordion({ title, content }) {
    // active state false so accordion is not in expanded onload
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion-item">
            {/* function on accordion title to expand and close accordion by using useState */}
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <div>{title}</div>
                {/*using ternary operator for change sign '-' and '+' for active nd not active state*/}
                <div>{isActive ? '-' : '+'}</div>
            </div>
            {/* set if 'isActive' than show 'accordion-content' or show nothing */}
            {isActive && <div className="accordion-content">{content}</div>}
        </div>
    );
};

export default Accordion;