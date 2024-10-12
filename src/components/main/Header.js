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
                            <a href='' className='mods'>
                                <span className="material-symbols-outlined">
                                    contract_edit
                                </span>
                                Моды
                            </a>
                        </li>
                        <li><a href=''>Наборы текстур</a></li>
                        <li><a href=''>Шейдеры</a></li>
                        <li><a href=''>Сервера</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}