
/* your js goes here */

// refs to anything in the DOM that we need to manipulate
let isOpen = false;
const imgTag = document.getElementsByTagName('img');
const section = document.getElementsByTagName('section');

// functions declared here
// CreateImage()
function CreateImage(){
    // write the code to create an image element
    // add that image to the main
    imgTag[0].style.cssText = `width: 60%; height: 500px; position: absolute; 
        margin-top: 20px; margin-left: 30px; `;
    imgTag[0].src = 'assets/images3.jpeg';
    section[0].style.visibility = 'hidden';
}

// CreateSection()
function CreateSection(){
    // write the code to create a section element
    // add that section to the main
    section[0].style.cssText = `width: 100%; height: 500px; position: absolute;
        margin-top: 20px; background: #5e2129; `;
    imgTag[0].style.visibility = 'hidden';
}
// TogglePanel()
    // slide the panel up or down
function TogglePanel(){
    if(isOpen) { // if the form is open
        section[0].style.visibility = 'hidden';
        imgTag[0].style.visibility = 'hidden';
        $('#panel').animate({
            top: '290px' // close it
        }, 330, 'swing');
        isOpen = false;
    }
    else { // if the form is closed
        $('#panel').animate({
            top: '350px' // open it
        }, 300, 'swing');
        isOpen = true;
    }
}