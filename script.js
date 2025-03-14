function indexOfIgnoreCase(s1, s2) {
  s1 = s1.toLowerCase().trim();
  s2 = s2.toLowerCase().trim();

  if(s1.includes(s2)){
	  return s1.indexoF(s2)
  }
  else if(!s1.includes(s2)){
	  return -1
  }
	
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));

