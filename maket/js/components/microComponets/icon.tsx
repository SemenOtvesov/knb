import React, { HTMLAttributes } from 'react';

interface Tprops extends HTMLAttributes<HTMLDivElement> {
    src: string;
}

export default ({ src, ...props }: Tprops) => {
    return (
        <div
            {...props}
            style={{
                position: 'relative',
                ...props.style,
            }}
        >
            <img
                style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    transform: 'scale(0.5)',
                    width: '200%',
                    height: '200%',
                }}
                src={src}
            ></img>
        </div>
    );
};
