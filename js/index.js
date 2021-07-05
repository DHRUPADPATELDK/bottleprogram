function personDesignation() {
	var text;
	var designations = document.getElementById("personInfo").value;
    
	switch(true) {
	  case (designations >=1 && designations<=10):
	  text = designations * 10
	  break;
	case (designations >=11 && designations<=50):
	  text = 100 + ((designations-10) *9)
	  break;
	case (designations >=51 && designations<=100):
	  text = 460 + ((designations-50) *8)
	  break;
	case (designations >=100 ):
	  text = 860 + ((designations-100) *7)
	  break;
	  
	default:
	  text = "Please Enter Valid Qty";
	}
	document.getElementById("personInfoResult").innerHTML = text;
  }