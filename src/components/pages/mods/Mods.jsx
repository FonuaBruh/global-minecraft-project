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
                    <div>12312312312313</div>
                    <div>12312312312313</div>
                    <div>12312312312313</div>
                    <div>12312312312313</div>
                    <div>12312312312313</div>
                    <div>12312312312313</div>
                    <div>12312312312313</div>
                </div>
            </div>
        </section>
    );
}