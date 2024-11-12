import React from 'react';
import image from './me.png';

const Image = () => {
    return (
        <div>
            <img src = {image} width = {500} height = {350} alt = "Me" />
        </div>
    );
};

export default Image;