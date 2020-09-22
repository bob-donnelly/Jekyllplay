function createWindow() {
    let url ="https://firefox.com";
    let win = window.open(url, "My new window", "width=300, height=200")
    document.getElementById("result").innerHTML= win.name + " - " + win.opener.location;
}