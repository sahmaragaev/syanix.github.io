let HourOfCode = {
    render: async () => {
        let view = `
        <div id="info">
            <div class="video">
                <video autoplay muted>
                    <source src="media/video.mp4" type="video/mp4">
                </video>
                <div class="info-wrapper info-wrapper-web">
                    <span>
                        <p class="header">Website Project</p>
                        We, team of 3 worked together to develop this website using pure HTML, CSS, and JavaScript. SPA (Single Page Application) logic was used to reduce the times of the download on button clicks, and most of the HTML code is stored in JS files to easily render them.
                    </span>
                    <div class="spacer"></div>
                    <span>
                        <p class="header"><a
                                href="https://sahmaragaev.github.io/syanix.github.io/"
                                target="_blank">GitHub pages</a></p>
                    </span>
                </div>
                <div class="info-wrapper">
                    <span>
                        <p class="header">Hour Of Code</p>
                        Our "Hour of Code" event took place in one of the highest-scoring schools of Baku in SEC,
                        Zekalar Lyceum №287. Grabbing the interest of a little over 20 students, our team decided to
                        make it happen on the 14th of November. The roles of the team members were not specifically
                        divided, hence all the members made a speech and explained the things that were covered,
                        helped
                        the students, and answered their further questions about programming and ADA University.
                    </span>
                    <div class="spacer"></div>
                    <span>
                        <p class="header"><a
                                href="https://www.facebook.com/shahmar.aqayev.7/posts/pfbid09UwW1X49tJ1kdHgmgdjqci9gScNYHYVMw3LBRBoYh6YHk6P3mSUw1qhuksBomHTol"
                                target="_blank">Facebook post</a></p>
                    </span>
                </div>
            </div>
        </div>
        `
        return view
    },
}

export default HourOfCode;
