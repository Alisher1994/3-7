var usd = 9433.34; 
var euro = 10534.33;
var trueprice = 8000000;


var yourmoney = prompt("1. Turizm uchun qancha pul ajratgansiz ?");
console.log(yourmoney * usd);


var trips = prompt("2. Samolyot xarajatlari 250 dollarni tashkil qiladi. Samolyot uchun qancha ajratdingiz ?");
console.log(trips * usd);

var hotel = prompt("3. Mexmonxona xarajatlar 500 dollarni tashkil qiladi. Mexmonxona xarajatlari uchun qancha ajratingiz ?");
console.log(hotel * usd);

var toursm = prompt("4. Turistik xarajatlar 120 yevroni tashkil qiladi. Turistik xarajatlar uchun qancha ajratdingiz ?");
console.log(toursm * euro);


var otvet = (toursm + hotel + trips + yourmoney);
console.log (otvet);

if (otvet > trueprice) {
    alert('Siz sayohat uchun chipta sotib olishingiz mumkin');  
} else {
    alert('Hozirda sizda yetarli mablag\' mavjud emas! ' + "Jami saohat xarajatlari: " + (trueprice - otvet) + " so\'mni tashkil qiladi.");
}
