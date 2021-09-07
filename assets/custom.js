// Extra Price
document.getElementById("8GB-RAM").addEventListener("click", function () {
    updateValue(0, "memory");
});
document.getElementById("16GB-RAM").addEventListener("click", function () {
    console.log("I Love U");
    updateValue(180, "memory");
});
// For Extra Storage Price
document.getElementById("256GB-Storage").addEventListener("click", function () {
    updateValue(0, "storage");
});
document.getElementById("512GB-Storage").addEventListener("click", function () {
    updateValue(100, "storage");
});
document.getElementById("1TB-Storage").addEventListener("click", function () {
    updateValue(180, "storage");
});
// For Extra Delivery Price
document.getElementById("delivery").addEventListener("click", function () {
    updateValue(0, "delivery");
});
document.getElementById("fastDelivery").addEventListener("click", function () {
    updateValue(20, "delivery");
});