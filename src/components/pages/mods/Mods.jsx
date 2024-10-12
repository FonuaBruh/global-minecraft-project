import React from "react";

export default function Mods() {
    return (
        <section>
            <div className="mods_container">
                <div className="mods-header">
                    <h1>Популярные моды</h1>
                    <h2>Библиотека популярных модов с фильтрами</h2>
                    <div className="mods-filter">
                        <button className="all">Все</button>
                        <button className="techno">Технические</button>
                        <button className="magic">Магические</button>
                        <button className="rpg">RPG</button>
                        <button className="decor">Декор</button>
                    </div>
                </div>
                <div className="mods-catalog">
                    <div className="mods-card ic2">
                        <div className="mods-image"></div>
                        <h2>Industrial Craft 2</h2>
                        <p>Большой и старый технический мод, который 
                            дарит игроку множество работающих на электричестве 
                            механизмов для самых разных сфер игровой жизни, 
                            включая добычу руд, обработку ресурсов и управление 
                            сельским хозяйством.
                        </p>
                        <a href="https://www.curseforge.com/minecraft/mc-mods/industrial-craft">Ссылка на скачивание</a>
                    </div>
                    <div className="mods-card thaumcraft">
                        <div className="mods-image"></div>
                        <h2>Thaumcraft</h2>
                        <p>Изучение этого мода очень интересное, вы будете открывать множество исследований, 
                            изучать аспекты, создавать алтари с помощью которого вы будете делать 
                            таинственные магические артефакты.</p>
                        <a href="https://www.curseforge.com/minecraft/mc-mods/thaumcraft">Ссылка на скачивание</a>
                    </div>
                    <div className="mods-card create">
                        <div className="mods-image"></div>
                        <h2>Create</h2>
                        <p>Create - это модификация для Minecraft созданная simibubi, 
                            позволяющая создавать штуковины и автоматизировать процесс 
                            используя силу вращения.</p>
                        <a href="https://www.curseforge.com/minecraft/mc-mods/create">Ссылка на скачивание</a>
                    </div>
                    <div className="mods-card divine">
                        <div className="mods-image"></div>
                        <h2>DivineRPG</h2>
                        <p>Divine RPG — одна из крупнейших модификаций для Minecraft. 
                            Она массово расширяет игру, добавляя в мир большое разнообразие 
                            мобов, измерений, инструментов, оружия, брони, блоков, предметов.</p>
                        <a href="https://www.curseforge.com/minecraft/mc-mods/official-divinerpg">Ссылка на скачивание</a>
                    </div>
                    <div className="mods-card draconic">
                        <div className="mods-image"></div>
                        <h2>Draconic Evolution</h2>
                        <p>Draconic Evolution - это популярный индустриальный мод который сочетает 
                            в себе магию и технологии и позволяет создать чрезвычайно мощные предметы.</p>
                        <a href="https://www.curseforge.com/minecraft/mc-mods/draconic-evolution">Ссылка на скачивание</a>
                    </div>
                </div>
            </div>
        </section>
    );
}