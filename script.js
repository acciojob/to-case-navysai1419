function toCase(text) {
	 const lowercaseStr = text.toLowerCase();
  const uppercaseStr = text.toUpperCase();
  const result = `${lowercaseStr}-${uppercaseStr}`;
  return result;
  // write your code here
	
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
