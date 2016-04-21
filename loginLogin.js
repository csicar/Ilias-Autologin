(function() {
  var submitButton  = document.querySelector('#sbmt')
  var nameInput     = document.querySelector('input[name="j_username"]');
  var passwdInput   = document.querySelector('input[name="j_password"]');


  if (!nameInput || !passwdInput || !submitButton) {
    //out of luck
    return;
  }
  submitButton.onautocomplete = function() {
    console.log(1);
  }
  function checkIfIsCorrect() {
    if(nameInput.value.length == 5) {
        console.log(nameInput, passwdInput.value);
        submitButton.click();
    }else {
	   setTimeout(checkIfIsCorrect, 1000);
    }
  }

  nameInput.addEventListener('change', function() {
    console.log("change1")
    checkIfIsCorrect();
  })

  passwdInput.addEventListener('change', function() {
    console.log("change2")
    checkIfIsCorrect();
  })

}())
