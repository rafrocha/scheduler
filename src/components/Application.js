import React from "react";

import "components/Application.scss";

export default function Application(props) {
    return (
        <main className="layout">
            <section className="sidebar">
                <img
                    className="sidebar--centered"
                    src="images/logo.png"
                    alt="Interview Scheduler"
                />
                <hr className="sidebar__separator sidebar--centered" />
                <nav className="sidebar__menu" />
                <img
                    className="sidebar__lhl sidebar--centered"
                    src="images/lhl.png"
                    alt="Lighthouse Labs"
                />
            </section>
            <section className="schedule">
                <section className="schedule" />
            </section>
        </main>
    );
}
