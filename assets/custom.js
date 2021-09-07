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


// Total Price Calculation
function updateValue(value, type) {
    document.getElementById(type + "-price").innerHTML = value;

    const basic = document.getElementById("basic-price").innerHTML;
    const memory = document.getElementById("memory-price").innerHTML;
    const storage = document.getElementById("storage-price").innerHTML;
    const delivery = document.getElementById("delivery-price").innerHTML;

    const subtotal = document.getElementById("basic-subtotal");
    subtotal.innerHTML = parseFloat(basic) + parseFloat(memory) + parseFloat(storage) + parseFloat(delivery);
    document.getElementById("total").innerHTML = subtotal.innerHTML;
}

// 20% Discount Function (Promo code)
function promoCode() {
    const promo = document.getElementById("promo-code").value;
    if (promo === "stevekaku") {
        const basic_subtotal = document.getElementById("basic-subtotal").innerHTML;
        const final_subtotal = parseFloat(basic_subtotal) - (parseFloat(basic_subtotal) * 0.20);
        document.getElementById("total").innerHTML = final_subtotal;
        document.getElementById("promo-code").value = "";
    } else {
        alert("Promo Code in not valid");
    }
}
document.getElementById("promo-code-click").addEventListener("click", function () {
    promoCode();
});