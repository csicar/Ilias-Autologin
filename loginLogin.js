(function() {
  var submitButton  = document.querySelector('#sbmt')
  var nameInput     = document.querySelector('input[name="j_username"]');
  var passwdInput   = document.querySelector('input[name="j_password"]');


  if (!nameInput || !passwdInput || !submitButton) {
    //out of luck
    return;
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
    checkIfIsCorrect();
  })

  passwdInput.addEventListener('change', function() {
    checkIfIsCorrect();
  })

}())
