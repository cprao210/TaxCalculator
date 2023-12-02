function getIncomeTax(income, age) {
  let totalTax = 0;

  if (income < 250001) {
    totalTax = 0;
  } else if (250000 < income && age < 60) {
    totalTax = (income - 250000) * 0.05;
  } else if (500000 < income && age < 60) {
    totalTax = 12500 + (income - 500000) * 0.2;
  } else if (1000000 < income) {
    totalTax = 112500 + (income - 1000000) * 0.3;
  }
  if (totalTax < 12501) {
    totalTax = 0;
  }

  return totalTax;
}

export { getIncomeTax };
