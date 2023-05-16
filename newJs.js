document.addEventListener('DOMContentLoaded', function() {
    var myButton = document.getElementById('myButton');
  
    myButton.addEventListener('click', function() {
      alert('Hello World');
    });
  });

  function changeText() {
    document.getElementById("myP").innerHTML = "hi everyone!";
}

function changeColor(b_id) {       
  elem = document.getElementById(b_id)
 
  // get current color:
  current_color = elem.style.backgroundColor    
 
  if (current_color == "red") {
      elem.style.backgroundColor = "blue"
  }else {
      elem.style.backgroundColor = "red"
  }
}

function changeBgColor(_id){

  elem = document.getElementById(_id)
 
  // get current color:
  current_color = body.style.backgroundColor    
 
  if (current_color == "orange") {
      elem.body.style.backgroundColor = "blue"
  }else {
      elem.body.style.backgroundColor = "orange"
  }
}


function myfunc(event){
  elem = event.target
  elem.innerHTML = parseInt(elem.innerHTML) + 1;
}

function create_element_inside_div(div_id){
  new_p = document.createElement("p");

  text_node = document.createTextNode("new text");
  new_p.appendChild(text_node);

  // or:
  // new_p.innerHTML = "new text"

  div = document.getElementById(div_id);
  div.appendChild(new_p);
}


function comparePasswords(id1, id2, resID) {
  elem1 = document.getElementById(id1);
  elem2 = document.getElementById(id2);

  if (elem1.value != elem2.value) {
      resElem = document.getElementById(resID);
      resElem.style.visibility = "visible";
  } else {
      resElem = document.getElementById(resID);
      resElem.style.visibility = "hidden";
  }
}


const passwordField = document.getElementById('passwordField');
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', function() {
  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    toggleButton.textContent = 'Hide Password';
  } else {
    passwordField.type = 'password';
    toggleButton.textContent = 'Show Password';
  }
});

function insertToLeftDiv(colorId, textId, left){
  color = document.getElementById(color_id).value
  text = documment.getElementById(textId).value
}
// // Get references to the buttons
// var orangeBtn = document.getElementById('orangeBtn');
// var blueBtn = document.getElementById('blueBtn');

// // Add event listeners to the buttons
// orangeBtn.addEventListener('click', function() {
//   document.body.className = 'orange';
// });

// blueBtn.addEventListener('click', function() {
//   document.body.className = 'blue';
// });
