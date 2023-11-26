import minimist from "minimist";

const argv = minimist(process.argv.slice(2));

const today = new Date();
const year = argv["y"] || today.getFullYear();
const month = argv["m"] || today.getMonth() + 1;

const startOfMonth = new Date(year, month - 1, 1);
const endOfMonth = new Date(year, month, 0);
const endDate = endOfMonth.getDate();
const startDay = startOfMonth.getDay();

console.log(`      ${month}月 ${year}`);
console.log("日 月 火 水 木 金 土");
for (let i = 0; i < startDay; i++) {
  process.stdout.write("   ");
}

let formattedDate;
for (let i = 1; i <= endDate; i++) {
  if (i < 10) {
    formattedDate = ` ${i} `;
  } else {
    formattedDate = `${i} `;
  }
  process.stdout.write(formattedDate);

  if ((i + startDay) % 7 === 0 || i === endDate) {
    console.log();
  }
}
