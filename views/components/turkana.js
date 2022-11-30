let Turkana = {
    render: async () => {
        let view = `
        <div class="info-wrapper">
            <span>
                <p class="header">Professional Summary</p>
                Turkana, 17 years old.
                Self-motivated, precise, and dedicated freshmen student studying toward a BS in Information Technology at ADA university. A skilled, knowledgeable, and qualified student with an extensive background in computer programming and project management. Already know how to develop websites, familiar with Python, C, C++, JavaScript, HTML, and CSS, and am eager to learn more to make a positive contribution to the future of the technical world. Experience in the management field like - Records manager of the Secretariat Department in ADA Student Council, the Head of SMM in "ADAli" Magazine, as well as in personal projects like "Fiesta.az".
            </span>
            <div class="spacer"></div>
            <span>
                <p class="header">Skills</p>
                <ul>
                    <li>Capability to multitask and work under stress</li>
                    <li>Excellent verbal and written communication abilities</li>
                    <li>Capability to meet both short-term and long-term goals</li>
                    <li>Possess strong managerial and organizational abilities</li>
                </ul>
            </span>
            <div class="spacer"></div>
            <span><p class="header"><a href="https://www.codecademy.com/profiles/turkana.aliyeva" target="_blank">CodeAcademy Profile</a></p></span>
        </div>
        <div id="slideshow">
            <div class="slide-wrapper">
                <div class="slide">
                    <img src="media/turkana-slide-1.jpg" />
                </div>
                <div class="slide">
                    <img src="media/turkana-slide-2.jpg" />
                </div>
                <div class="slide">
                    <img src="media/turkana-slide-3.jpg" />
                </div>
                <div class="slide">
                    <img src="media/turkana-slide-4.jpg" />
                </div>
            </div>
        </div>
        `
        return view
    },
}

export default Turkana;