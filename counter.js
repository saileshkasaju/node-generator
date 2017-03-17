function* create3To4Counter() {
	yield 3
	return 4
}
function* createCounter() {
	yield 1
	yield 2
	const four = yield* create3To4Counter()
	console.log(four)
	yield 5
}

const counter = createCounter()
for(i of counter) {
	console.log(i)
}

