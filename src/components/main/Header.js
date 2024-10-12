import React from 'react';

export default function Header() {
    return (
        <header>
            <div className="container">
                <h1>Global Minecraft</h1>
                <h2>База знаний для комфортной и веселой игры</h2>
                <nav>
                    <ul>
                        <li>
                            <a href='' className='mods'><span className="material-icons">sports_esports</span>Моды</a>
                        </li>
                        <li>
                            <a href='' className='textures'><span className="material-icons">perm_media</span>Наборы текстур</a>
                        </li>
                        <li><a href='' className='shaders'><span className="material-icons">emoji_objects</span>Шейдеры</a></li>
                        <li><a href='' className='servers'><span className="material-icons">dns</span>Сервера</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}