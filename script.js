function generateQR(){

    let text = document.getElementById("qrText").value;
    let image = document.getElementById("qrImage");

    if(text === ""){
        alert("Please enter text");
        return;
    }

    image.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="
    + encodeURIComponent(text);
}