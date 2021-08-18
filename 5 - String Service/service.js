const checkStringType = (string) => {
	const arrayOfStrings = string.split(" ");
	const alphaNumericRegEx = /((^[0-9]+[a-z]+[A-Z]+)|(^[a-z]+[0-9]+[A-Z]+))+[0-9a-zA-Z]+$/i;
	const numericRegEx = /^\d+$/;
	const alphabeticRegEx = /^[a-zA-Z]+$/i;
	let noOfStrings = 0, noOfNumerics = 0, noOfAlphaNumerics = 0;

	for (let i = 0; i < arrayOfStrings.length; i++) {
		if (arrayOfStrings[i].match(alphaNumericRegEx)) {
			noOfAlphaNumerics++;
		} else if (arrayOfStrings[i].match(numericRegEx)) {
			noOfNumerics++;
		} else if (arrayOfStrings[i].match(alphabeticRegEx)) {
			noOfStrings++;
		}
	}

	console.log(`The Given String contains 
	${noOfStrings} strings,
	${noOfNumerics} numeric strings,
	${noOfAlphaNumerics} alphanumeric strings,
	`);
}

const string = '876 records are there for 3A block';
checkStringType(string);