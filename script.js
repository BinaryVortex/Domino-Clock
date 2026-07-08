const numberdots = [
	"000000000000000000",
	"000010000000000000",
	"000010000000010000",
	"100000001000010000",
	"100000001100000001",
	"100010001100000001",
	"100010001100010001",
	"101000101100010001",
	"101000101101000101",
	"101010101101000101",
	"101010101101010101",
	"101101101101010101",
	"101101101101101101"
];
const dominos = document.querySelectorAll(".domino");
const ampm_el = document.querySelector(".ampm");
const time_el = document.querySelector(".time");

intfunc();
const interval = setInterval(intfunc, 1000);

function intfunc() {
	const [values, ampm, time] = getValues();

	dominos.forEach((domino, domino_index) => {
		const dots = domino.querySelectorAll(".part > *");
		dots.forEach(
			(dot, dot_index) =>
				(dot.dataset.active = +numberdots[values[domino_index]][dot_index])
		);
	});

	ampm_el.innerText = ampm;
	time_el.innerText = time;
}

function getValues() {
	const d = new Date();
	const h = d.getHours();
	const minutes = d.getMinutes();
	const seconds = d.getSeconds();
	const ampm = h >= 12 ? "pm" : "am";
	const hours = h % 12 || 12;
	const minutesLeft = Math.floor(minutes / 10);
	const minutesRight = minutes % 10;
	const secondsLeft = Math.floor(seconds / 10);
	const secondsRight = seconds % 10;
	const time = d.toLocaleTimeString("en-us");
	return [
		[hours, minutesLeft, minutesRight, secondsLeft, secondsRight],
		ampm,
		time
	];
}