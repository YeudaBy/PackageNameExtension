let btn = document.getElementById("btn");


chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
    let url = tabs[0].url;

    if (url.startsWith("https://play.google.com/store/apps/details")) {

        const regex1 = RegExp('(?<=id=)[a-zA-Z0-9._]+', 'g');
        let name = regex1.exec(url)[0];

        code = document.getElementById("name");
        code.innerHTML = name;
    } else {
        code = document.getElementById("name");
        code.innerHTML = "please go to <span><a href='https://play.google.com' target='_blank'>play.google.com</a></span> and choose an application.";
        btn.style.display = "none";
    }
});

btn.addEventListener("click", async() => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        let url = tabs[0].url;

        if (url.startsWith("https://play.google.com/store/apps/details")) {

            const regex1 = RegExp('(?<=id=)[a-zA-Z0-9._]+', 'g');
            let name = regex1.exec(url)[0];

            navigator.clipboard.writeText(name);

        }

    });
});