import React from 'react';

type AccordionProps = {
    header: string,
    content: string;
};

const Accordion = ({ header, content }: AccordionProps) => {
    return (
        <div className="collapse bg-base-200 border border-base-300">
            <input type="radio" name="accordion" />
            <div className="collapse-title font-semibold">{header}</div>
            <div className="collapse-content text-sm">{content}</div>
        </div>
    );
};

export default Accordion;