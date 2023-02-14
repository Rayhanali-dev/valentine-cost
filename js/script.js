// kitkat chocolate price
document.getElementById('kitkat-buy-btn').addEventListener('click', function(){
    const quantity = document.getElementById('kitkat-quantity');
    const quantityValue = parseInt(quantity.value);
    const kitkatPrice = document.getElementById('kitkat-price');
    const kitkatPriceText = parseInt(kitkatPrice.innerText);
    const chocolate = document.getElementById('chocolate');
    const totalKitkat = quantityValue * kitkatPriceText;
    chocolate.innerText = totalKitkat
    const rose = document.getElementById('rose');
    const roseText = parseInt(rose.innerText);
    const diary = document.getElementById('diary');
    const diaryText = parseInt(diary.innerText);
    const totalCost = roseText + diaryText + totalKitkat;
    const total = document.getElementById('total');
    total.innerText = totalCost;
})

// rose price
document.getElementById('rose-buy-btn').addEventListener('click', function(){
    const quantity = document.getElementById('rose-quantity');
    const quantityValue = parseInt(quantity.value);
    const rosePrice = document.getElementById('rose-price');
    const rosePriceText = parseInt(rosePrice.innerText);
    const rose = document.getElementById('rose');
    const totalRose = quantityValue * rosePriceText;
    rose.innerText = totalRose;
    const diary = document.getElementById('diary');
    const diaryText = parseInt(diary.innerText);
    const chocolate = document.getElementById('chocolate');
    const chocolateText = parseInt(chocolate.innerText);
    const totalCost = chocolateText + totalRose + diaryText;
    const total = document.getElementById('total');
    total.innerText = totalCost;
})

// dairy price
document.getElementById('diary-buy-btn').addEventListener('click', function(){
    const quantity = document.getElementById('diary-quantity')
    const quantityValue = parseInt(quantity.value);
    const diaryPrice = document.getElementById('diary-price');
    const diaryPriceText = parseInt(diaryPrice.innerText);
    const totalDiaryPrice = quantityValue * diaryPriceText;
    const diary = document.getElementById('diary');
    diary.innerText = totalDiaryPrice;
    const chocolate = document.getElementById('chocolate');
    const chocolateText = parseInt(chocolate.innerText);
    const rose = document.getElementById('rose');
    const roseText = parseInt(rose.innerText);
    const totalCost = chocolateText + roseText + totalDiaryPrice;
    const total = document.getElementById('total');
    total.innerText = totalCost;
})

document.getElementById('apply-btn').addEventListener('click', function(){

    const promo = document.getElementById('promo-code');
    const promoValue = parseInt(promo.value);
    const allTotal = document.getElementById('all-total');


    if (promoValue == 101) {
        const total = document.getElementById('total');
        const totalText = parseInt(total.innerText);
        const percentage = totalText - totalText * .1;
        allTotal.innerText = percentage
    } else {
        const total = document.getElementById('total');
        const totalText = parseInt(total.innerText);
        allTotal.innerText = totalText
        alert('your promo code is wrong');
    }
})

