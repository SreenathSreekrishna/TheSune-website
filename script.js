const links = {
    discord: "https://discord.gg/wqdDZRhpP",
}

const linkElements = document.querySelectorAll('.link');
for (let i of linkElements) {
    i.onclick = () => {
        let linkName = i.getAttribute('aria-roledescription');
        window.location.href = links[linkName];
    }
}