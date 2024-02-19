var count = 0;

function changeSelectedSeat(id) {
    count++;
    console.log(count);
    document.getElementById('seatCount').innerText = count;
    document.getElementById('leftSeats').innerText = 40 - count;
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
function selectSet(id) {
    const seat = document.getElementById(id);
    seat.classList.add('disabled');
    changeSelectedSeat(id);
    showSelectedSeats(id);
}