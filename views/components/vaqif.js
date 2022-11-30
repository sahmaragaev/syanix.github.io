let Vaqif = {
    render: async () => {
        let view = `
        <div class="info-wrapper">
            <span>
                <p class="header">Professional Summary</p>
                Name and Surname: Vagif Aliyev
                I was born on October 19, 2003 in Baku. My first education was in school number of 187. After 4th grade, I continued my education in school number of 82 . After graduating, I admitted to ADA University in 2021. I graduated EAPP course in 2022 at the university. Also, I had several certificates for participating in organizations actively. My major is Bachelor of Computer Science (BCS 2026).
            </span>
            <div class="spacer"></div>
            <span>
                <p class="header">Skills</p>
                <ul>
                    <li>Math</li>
                    <li>HTML & CSS</li>                    
                </ul>
            </span>
            <div class="spacer"></div>
            <span><p class="header"><a href="https://www.codecademy.com/profiles/beta7839468970" target="_blank">CodeAcademy Profile</a></p></span>
        </div>
        <div id="slideshow">
            <div class="slide-wrapper">
                <div class="slide">
                    <img src="media/vaqif-slide-1.jpg" />
                </div>
                <div class="slide">
                    <img src="media/vaqif-slide-2.jpg" />
                </div>
                <div class="slide">
                    <img src="media/vaqif-slide-3.jpg" />
                </div>
                <div class="slide">
                    <img src="media/vaqif-slide-4.jpg" />
                </div>
            </div>
        </div>
        `
        return view
    },
}

export default Vaqif;