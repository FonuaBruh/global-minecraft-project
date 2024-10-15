import React from 'react';

const ModCard = ({ mod }) => {
    const imagePath = mod.image;

    return (
        <div className="mod-card">
            <img src={imagePath} alt={mod.name} />
            <h3>{mod.name}</h3>
            <p>{mod.description}</p>
            <a href={mod.downloadLink} target="_blank" rel="noopener noreferrer">
                Ссылка на скачивание
            </a>
        </div>
    );
};

export default ModCard;