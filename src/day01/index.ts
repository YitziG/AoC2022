import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

// splits blank line delimited input into an array of strings
const getNumberGroups = (rawInput: string) => rawInput.split("\n\n");

// splits newline character delimited input into an array of strings
const splitInput = (rawInput: string) => rawInput.split("\n");

// sums a numberGroup
const sumNumberGroup = (numberGroup: string) => {
	const numbers = splitInput(numberGroup).map((number) => parseInt(number));
	return numbers.reduce((sum, number) => sum + number, 0);
};

function topNSum(rawInput: string, n = 1) {
  const input = parseInput(rawInput);
  const numberGroups = getNumberGroups(input);
  const largestSums = numberGroups
    .map((numberGroup) => sumNumberGroup(numberGroup))
    .sort((a, b) => b - a)
    .slice(0, n);
  return largestSums.reduce((sum, largestSum) => sum + largestSum, 0);
}

const part1 = (rawInput: string) => {
	return topNSum(rawInput);
};

const part2 = (rawInput: string) => {
	return topNSum(rawInput,3);
};

run({
	part1: {
		tests: [
			// {
			//   input: ``,
			//   expected: "",
			// },
		],
		solution: part1,
	},
	part2: {
		tests: [
			// {
			//   input: ``,
			//   expected: "",
			// },
		],
		solution: part2,
	},
	trimTestInputs: true,
	onlyTests: false,
});
