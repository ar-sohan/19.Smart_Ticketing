var count = 0;

const phoneNumber = document.getElementById('phoneNumber').value;
if (phoneNumber !== "") {
    document.getElementById(next).removeAttribute('disabled');
}
 
function changeSelectedSeat(id) {
    count++;
    document.getElementById('seatCount').innerText = count;
    document.getElementById('leftSeats').innerText = 40 - count;
    document.getElementById('totalPrice').innerText = count * 550;
    if (count > 3) {
        document.getElementById('couponInput').removeAttribute('disabled');
        document.getElementById('couponApply').removeAttribute('disabled');
       
    }
    const a1 = document.getElementById(id);
    a1.style.backgroundColor = "green";
    a1.style.color = "white";
}
function showSelectedSeats(id) {
    const ul = document.createElement('ul');
    ul.style.display = "flex";
    ul.style.gap = "50px";
    const li1 = document.createElement('li');
    li1.innerText = id;
    ul.appendChild(li1);
    const li2 = document.createElement('li');
    li2.innerText = "Economy";
    ul.appendChild(li2);
    const li3 = document.createElement('li');
    li3.innerText = "550";
    ul.appendChild(li3);
    const selectedSeats = document.getElementById('selectedSeats');
    selectedSeats.appendChild(ul);
}

function couponApply() {
    let couponInputField = document.getElementById('couponInput');
    const couponInput = couponInputField.value;
    if (couponInput === "NEW15") {
        const discountedPrice = 22 * 15;
        const discountContainer = document.getElementById('discountedPrice');
        discountContainer.style.fontWeight = '700';
        const discountTitle = document.createElement('h1');
        discountTitle.innerText = "Discounted Price";
        discountContainer.appendChild(discountTitle);

        const discount = document.createElement('p');
        discount.innerText = "BDT " + discountedPrice;
        discountContainer.appendChild(discount);

        document.getElementById('grandTotal').innerText = 2200 - discountedPrice;
        document.getElementById('couponBox').classList.add("hidden");
    }
    else if (couponInput === "Couple 20") {
        const discountedPrice = 22 * 20;
        const discountContainer = document.getElementById('discountedPrice');
        discountContainer.style.fontWeight = '700';
        const discountTitle = document.createElement('h1');
        discountTitle.innerText = "Discounted Price";
        discountContainer.appendChild(discountTitle);

        const discount = document.createElement('p');
        discount.innerText = "BDT " + discountedPrice;
        discountContainer.appendChild(discount);

        document.getElementById('grandTotal').innerText = 2200 - discountedPrice;
        document.getElementById('couponBox').classList.add("hidden");
    }
    else {
        couponInputField.value = "";
        alert("Wrong Coupon code");
    }
}

function selectSet(id) {
    if (count === 4) {
        alert("You are not allowed to select more!");
        return;
    }
    changeSelectedSeat(id);
    showSelectedSeats(id);
    const seat = document.getElementById(id);
    seat.setAttribute('onclick', '');
}