module.exports = function toReadable (number) {
  number += '';

	let numbers = {
		0: 'zero',
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9: 'nine',
		10: 'ten',
		11: 'eleven',
		12: 'twelve',
		13: 'thirteen',
		14: "fourteen",
		15: "fifteen",
		16: "sixteen",
		17: "seventeen",
		18: "eighteen",
		19: "nineteen",
		20: "twenty",
		30: "thirty",
		40: "forty",
		50: "fifty",
		60: "sixty",
		70: "seventy",
		80: "eighty",
		90: "ninety",
	}

  if (number % 100 === 0 && number.length === 3) {
		return `${numbers[number[0]]} hundred`
	}

	if (number % 100 !== 0 && number.length === 3) {
		if (number[1]+number[2] > 9 && number[1]+number[2] < 19) {
			let num = `${number[1]}${number[2]}`
			return `${numbers[number[0]]} hundred ${numbers[num]}`
		}

		if (number[1]+number[2] <= 9) {
			return `${numbers[number[0]]} hundred ${numbers[number[2]]}`
		}
		
		if ((number[1]+number[2]) % 10 === 0) {
			return `${numbers[number[0]]} hundred ${numbers[number[1] + 0]}`
		} 
		
		if (number[1]+number[2] <= 19) {
			return `${numbers[number[0]]} hundred ${numbers[number[1]+number[2]]}`
		}

		return `${numbers[number[0]]} hundred ${numbers[number[1] + 0]} ${numbers[number[2]]}`
	}

	if (number <= 19 || number % 10 === 0) {
		return `${numbers[number]}`
	}

	if (number % 10 !== 0 && number.length === 2) {
		return `${numbers[number[0] + 0]} ${numbers[number[1]]}`
	}
}
