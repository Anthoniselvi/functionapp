export default function TotalEntry({ entries }) {
  // return entries
  //   .map((entry) => entry.amount)
  //   .reduce((acc, value) => acc + value, 0);
  const totalAmount = entries
    .map((entry) => entry.amount)
    .reduce((acc, value) => acc + +value, 0);
  console.log(totalAmount);

  const totalGift = entries
    .map((entry) => entry.gift)
    .reduce((acc, value) => acc + +value, 0);
  console.log(totalGift);

  // console.log(total);
}
