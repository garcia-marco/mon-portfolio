const loading = document.getElementById("blank");

window.onload = function loaded() {
    loading.classList.add("fadeOut");
    window.setTimeout(deleteLoad, 1000)
};

function deleteLoad() {
    loading.parentNode.removeChild(loading);
}