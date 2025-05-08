import { useState } from 'react';
import './tooltip.scss';
import * as React from "react";

type TooltipProps = {
    text: string;
    children: React.ReactNode;
    position?: 'top' | 'bottom' | 'left' | 'right' | 'center'; // Optionales Prop für die Position
};

const Tooltip = ({ text, children, position = 'top' }: TooltipProps) => {
    const [visible, setVisible] = useState(false);

    const handleMouseEnter = () => {
        setVisible(true);
    };

    const handleMouseLeave = () => {
        setVisible(false);
    };

    return (
        <div
            className="tooltip-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
            {visible && (
                <div className={`tooltip tooltip-${position}`}>
                    <p>{text}</p>
                </div>
            )}
        </div>
    );
};

export default Tooltip;
