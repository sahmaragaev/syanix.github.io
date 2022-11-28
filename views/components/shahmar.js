let Shahmar = {
    render: async () => {
        let view = `
        <div class="personal-info">
            <span>
                <p class="header">Professional Summary</p>
                Shahmar, 17 years old. Freshman B.S. in Computer Science student in ADA
                University.<br />
                Creative Software Developer, proficient with Flutter
                and .NET. Analytical problem-solver offering decision-making and time management skills.
                Expertise is developing applications for iOS and Android, as well as back-end development.
                Experienced in online teaching (English and Coding).
            </span>
            <div class="spacer"></div>
            <span>
                <p class="header">Skills</p>
                <ul>
                    <li>Programming Languages and Frameworks: C, C++, C#, Dart, Python,
                        JavaScript, Flutter, .NET, .NET
                        Core</li>
                    <li>Android/iOS Application Development</li>
                    <li>Data Structures and Algorithms</li>
                    <li>Analytical Thinking and Problem Solving</li>
                    <li>Instructional Materials Creation</li>
                    <li>Online Teaching</li>
                </ul>
            </span>
            <div class="spacer"></div>
            <span><p class="header"><a href="https://www.codecademy.com/profiles/sahmaragaev" target="_blank">CodeAcademy Profile</a></p></span>
        </div>
        <div id="slideshow">
            <div class="slide-wrapper">
                <div class="slide">
                    <img src="media/shahmar-slide-1.jpg" />
                </div>
                <div class="slide">
                    <img src="media/shahmar-slide-2.jpg" />
                </div>
                <div class="slide">
                    <img src="media/shahmar-slide-3.jpg" />
                </div>
                <div class="slide">
                    <img src="media/shahmar-slide-4.jpg" />
                </div>
            </div>
        </div>
        `
        return view
    },
}

export default Shahmar;