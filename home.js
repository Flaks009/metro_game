var btn = document.querySelector("button[id=start]");
btn.addEventListener('click', function() {
    var mode = document.querySelector("input[id=flexSwitchCheckCPTM]");

    if (mode.checked) {
        document.location.href = "./metro.html?mode=CPTM";
    } else {
        document.location.href = "./metro.html"
    }
});