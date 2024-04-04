document.getElementById("okButton").addEventListener("click", function() {
    document.getElementById("notification").style.display = "block";
    var buttonOk = document.getElementById("okButton");
    buttonOk.parentNode.removeChild(buttonOk);
});

function redirectToIndex() {
    window.location.href = "index.html"; // Ganti "index.html" dengan alamat halaman indeks yang benar
}