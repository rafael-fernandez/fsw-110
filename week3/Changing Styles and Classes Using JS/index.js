/* 2) In the JS file, create a list of 5 H2 elements on the DOM using a for loop (Hint: this was covered in the previous assignment). Give them whatever text you would like. */

for (let i = 0; i < 5; i++) {
    var hiFive = document.createElement("h2");
    hiFive.textContent = "I GOT 5 ON IT!";
    document.body.append(hiFive)

    /* 3) Using the .style property, edit the element’s styles in your js to have: Font-size: 20px Font-weight: lighter Font-family: sans-serif Color: cornflowerblue */
    hiFive.style.fontSize = '20px'           //Font-size: 20px
    hiFive.style.fontWeight = 'lighter'      //Font-weight: lighter
    hiFive.style.fontFamily = 'sans serif'   // Font-family: sans-serif
    hiFive.style.color = 'cornflowerblue'    // Color: cornflowerblue
   
    /* 5) Back in your JS, add that class to the elements being created using classList. */
    hiFive.classList.toggle('border')

}
