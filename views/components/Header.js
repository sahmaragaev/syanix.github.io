let Header = {
    render: async () => {
        let view = `
        <div class="people">
            <div id="shahmar" class="person-logo">
                <img class="img" src="media/shahmar.png" />
            </div>
            <div id="turkana" class="person-logo">
                <img class="img" src="media/turkana.png" />
            </div>
            <div id="vaqif" class="person-logo">
                <img class="img" src="media/vaqif.png" />
            </div>
        </div>
       
        `
        return view
    },
}

export default Header;