const addCatPicture = function (){ 
    const catDiv = document.querySelector('div'); //getting the element we want to append the new element to 
    const wrapperDiv = document.createElement('div'); //creating a wrapper div for each cat 
    wrapperDiv.setAttribute('class', 'cat-cards');
    catDiv.appendChild(wrapperDiv); //appending the new element 

    const catName = document.getElementById('cat-name').value; //getting the value from the input field
    const newCatName = document.createElement('h3'); //creating a new element (p)
    newCatName.innerText = catName; //assigning the value received earlier to the new element
    wrapperDiv.appendChild(newCatName); //appending the cat name to the wrapper div
    
    const newCatImage = document.createElement('img'); //creating img element 
    const randomNumber1 = generateNumber(); //generating random number 1
    const randomNumber2 = generateNumber(); //generating random number 2
    newCatImage.setAttribute('src', `http://placekitten.com/${randomNumber1}/${randomNumber2}`); //setting "src" attribute to the url of random cat
    wrapperDiv.appendChild(newCatImage); //appending the new image element to the wrapper div 
    
    document.getElementById('cat-name').value = ''; //Clearing the input field 

    //Removing a cat-card div from the page 
    const catCardsArray = document.querySelectorAll('.cat-cards');
        catCardsArray.forEach((cat) => {
            cat.addEventListener('click', function(event){
                event.currentTarget.remove();
            });
        })
}

function generateNumber(){ //Generating random number function 
    return Math.floor(Math.random() * 1000);
}

window.addEventListener('load', () => {
    const addCatButton = document.getElementById('add-cat');
    addCatButton.addEventListener('click', addCatPicture);
    // addCatButton.onclick = addCatPicture; ---> this does the same thing as the line above 

    //Adding a keyup event listener (If the user presses "enter (id=13)" it will click the button)
    document.getElementById('cat-name')
        .addEventListener("keyup", function(event){ 
            if (event.keyCode === 13)  {
                document.getElementById('add-cat').click();
            }
        })
}); 