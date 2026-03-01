let browserType = "edge";

function launchBrowser(browserName) {
    if (browserName === "Chrome") {
        console.log("Chrome is launched");
    }
    else {
        console.log("Browser Name is " + browserName);
    }
}
launchBrowser(browserType);

