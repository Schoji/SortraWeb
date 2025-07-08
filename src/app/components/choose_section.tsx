import { LucideIcon } from 'lucide-react';
import React from 'react';

type ChooseSectionProps = {
    icon: LucideIcon,
    color: string;
    header: string,
    footer: string;
};

const ChooseSection = ({ icon: Icon, header, footer, color }: ChooseSectionProps) => {
    return (
        <div className='flex flex-col items-center gap-2 md:gap-5 p-10'>
            <div className={`rounded-xl p-4 flex items-center justify-center ${color}`}>
                <Icon />
            </div>
            <h1 className='text-lg md:text-3xl font-semibold text-center'>{header}</h1>
            <p className='text-sm md:text-base text-center text-gray-400 w-2/3'>{footer}</p>
        </div>
    );
};

export default ChooseSection;