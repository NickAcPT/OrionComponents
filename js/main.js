document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("button-save").addEventListener("click", function () {
        let elementCounter = 0;
        let scalesArray = [1];
        let elementHTMLCollectionOf = document.getElementsByClassName("component-container");
        for (let elementHTMLCollectionOfElement of elementHTMLCollectionOf) {
            for (let scale of scalesArray) {
                let counter = elementCounter;
                domtoimage.toBlob(elementHTMLCollectionOfElement, {
                    scale: scale
                }).then(function (blob) {
                    let s = "node" + counter;
                    if (counter === 0) {
                        s = "button";
                    } else if (counter === 1) {
                        s = "button_hover";
                    } else if (counter === 2) {
                        s = "button_pressed";
                    }
                    window.saveAs(blob, s + "_" + (scale * 2.0) + "x.png");
                })
            }
            elementCounter++;
        }
    });
});


