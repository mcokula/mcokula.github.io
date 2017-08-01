
function passWord() {
var testV = 1;
var pass1 = prompt('Please Enter Password To Unlock Site: ');
      while (testV < 3) {
      if (!pass1)
      history.go(-1);
      if (pass1.toLowerCase() == "mcdezign") {
      // alert('You Got it Right!');
      window.open('portfolio.html', '_self');
      break;
    };
      testV+=1;
      var pass1 =
      prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
    };
  if (pass1.toLowerCase()!="password" & testV ==3)
  history.go(-1);
  return " ";
  };
