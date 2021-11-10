document.addEventListener('load', () => {
    if (cakeQty == 0 & bagelQty == 0 & breadQty == 0) {
        document.getElementById('title').style.display = "none"

    }
})
document.getElementById("form1").addEventListener('submit', function(e) {

    e.preventDefault()
    var qtyText = document.getElementById('breadPrice').textContent
    var breadPrice = parseFloat(qtyText)
    var breadQty = document.getElementById('breadQty')
    var totalBreadPrice = (breadPrice * breadQty.value).toFixed(2);

    var bagelPriceText = document.getElementById('bagelPrice').textContent
    var bagelPrice = parseFloat(bagelPriceText)
    var bagelQty = document.getElementById('bagelQty')
    var totalBagelPrice = (bagelPrice * bagelQty.value).toFixed(2);

    var cakePriceText = document.getElementById('cakePrice').textContent
    var cakePrice = parseFloat(cakePriceText)
    var cakeQty = document.getElementById('cakeQty')
    var totalCakePrice = (cakePrice * cakeQty.value).toFixed(2);
    

    var displayBread = document.getElementById('bread')
    var displayBagel = document.getElementById('bagel')
    var displayCake = document.getElementById('cake')
    document.getElementById('title').style.display = "block"
    var grandTotal = document.getElementById('grandTotal')
    displayBread.innerHTML = 'Bread: ' + qtyText + ' @ Qty ' + breadQty.value + ' = ' + totalBreadPrice;
    displayBagel.innerHTML = 'Bagel: ' + bagelPriceText + ' @ Qty ' + bagelQty.value + ' = ' + totalBagelPrice;
    displayCake.innerHTML = 'Cake: ' + cakePriceText + ' @ Qty ' + cakeQty.value + ' = ' + totalCakePrice;
   
    var grandTotalPrice = parseFloat(totalBreadPrice) + parseFloat(totalBagelPrice) + parseFloat(totalCakePrice);
    
    grandTotal.innerHTML = 'Grand Total = ' + grandTotalPrice.toFixed(2);
  
});
