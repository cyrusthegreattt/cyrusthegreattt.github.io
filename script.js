// Inject map into placeholder
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('auto-map');

    if (container) {
        container.innerHTML = `
        <div class="map-container">
            <img src="MAP.png" usemap="#image-map">
        </div>

        <map name="image-map">
            <area alt="Go Home" title="Go Home" href="index.html" coords="74,169,64,158" shape="rect">
            <area alt="How to Contact CYRUS" title="How to Contact CYRUS" href="contacts.html" coords="66,193,55,183" shape="rect">
            <area alt="My Friends" title="My Friends" href="friends.html" coords="116,197,123,207" shape="rect">
            <area alt="My Portfolio" title="My Portfolio" href="portfolio.html" coords="81,196,91,211" shape="rect">
            <area alt="About Me" title="About Me" href="about.html" coords="75,229,82,245" shape="rect">
            <area alt="My Interests" title="My Interests" href="interests.html" coords="97,261,109,271" shape="rect">
            <area alt="My Art" title="My Art" href="art.html" coords="111,233,123,250" shape="rect">
            <area alt="The Edge" title="The Edge" href="edge.html" coords="103,298,111,306" shape="rect">
            <area alt="My Music" title="My Music" href="music.html" coords="138,277,144,285" shape="rect">
        </map>
        `;
    }
});