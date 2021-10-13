function onLoad() {
    document.getElementById("go-to-input").focus();
}

window.onload = onLoad;


function getName(url) {
    let reg = RegExp('(?<=id=)[a-zA-Z0-9._]+', 'g');
    return reg.exec(url)[0];
}

baseUrl = "https://play.google.com/store/apps/details?id=";

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (tabs[0].url.startsWith(baseUrl))
        chrome.tabs.reload(tabs[0].id);
})


function copy(text) { navigator.clipboard.writeText(text); }


chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
    let url = tabs[0].url;

    if (url.startsWith(baseUrl)) {
        document.getElementById("name").innerText = getName(url);

    } else {
        document.getElementById("gpa").style.display = "none";
        document.getElementById("go-to").style.display = "block";
    }
});

// document.querySelector("#go-to-input").addEventListener("input", data => {
//     document.querySelector("#go-to-input").style.backgroud = "#4d90fe"
// });


let copyName = document.querySelector(".copy-name");
copyName.addEventListener("click", async () => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {

        copy(getName(tabs[0].url));
        copyName.textContent = "Copied!";
    });
});

document.getElementById("go-to-form").addEventListener("submit", function () {
    console.log(document.querySelector("#go-to-input"))
    // if (!(isNaN(document.querySelector("#go-to-input")))) {

        chrome.tabs.query({ url: "https://play.google.com/*" }, tabs => {
            let name = document.getElementById("go-to-input").value;
            if (tabs[0] != undefined) {
                chrome.tabs.update(tabs[0].id, { highlighted: true, url: baseUrl + name });
            } else
                chrome.tabs.create({ active: true, url: baseUrl + name })
        })
    // }
});


document.getElementById("show-info").addEventListener("click", function () {
    var info = {};
    document.getElementById("info-div").style.display = "block";
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.reload(tabs[0].id);

        function getInfo() {

            chrome.tabs.sendMessage(tabs[0].id, { get: "info" }, function (response) {

                title = document.getElementById("title");
                author = document.getElementById("author");
                mail = document.getElementById("mail");
                description = document.getElementById("description");

                try {
                    info = response.info;
                } catch (e) {
                    // info = { title: "Please REFRESH the info section!" }
                    getInfo();
                }

                title.value = info.title;
                author.value = info.author;
                mail.value = info.mail;
                description.value = info.description;

                if (typeof info !== 'undefined' || typeof title.value !== 'undefined')
                    chrome.tabs.reload(tabs[0].id);

                document.getElementById("copy-ces").addEventListener("click", copy(info.description));


            })
        }
        getInfo();
    });


});