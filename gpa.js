chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {


        let title = document.querySelector(".AHFaub").textContent;
        let description = document.querySelector(".DWPxHb").innerText;
        let author = document.querySelector("a.hrTbp.R8zArc").textContent;
        let mail = document.querySelector(".euBY6b").textContent;
        let imgUrl = document.querySelector("img.T75of.sHb2Xb").src;

        if (request.get === "info")

        {

            sendResponse({
                info: {
                    title: title,
                    author: author,
                    description: description,
                    mail: mail,
                    imgUrl: imgUrl
                }
            });
        }
    }
);