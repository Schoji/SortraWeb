import React from 'react';

type WorkSectionProps = {
    index: number,
    header: string,
    footer: string;
};

const WorkSection = ({ index, header, footer }: WorkSectionProps) => {
    return (
        <div className='flex flex-col items-center gap-3 md:gap-5'>
            <div className="flex items-center justify-center w-15 h-15 md:w-20 md:h-20 rounded-full bg-primary">
                <h1 className="text-4xl md:text-6xl">{index}</h1>
            </div>
            <h1 className='text-xl font-bold'>{header}</h1>
            <p className="text-gray-700 dark:text-gray-400">{footer}</p>
        </div>
    );
};

export default WorkSection;