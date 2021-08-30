function removeEmoji(textWith) {
    reg = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?)*/g
    return textWith.replace(reg, "*");
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {


        let title = document.querySelector(".AHFaub").textContent;
        let description = document.querySelector(".DWPxHb").innerText;
        let author = document.querySelector("a.hrTbp.R8zArc").textContent;
        let mail = document.querySelector(".euBY6b").textContent;
        let imgUrl = document.querySelector("img.T75of.sHb2Xb").src;

        description = removeEmoji(description);


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