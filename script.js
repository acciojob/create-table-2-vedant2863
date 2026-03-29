function createTable() {
  const table = document.getElementById("myTable");

  // Clear previous table
  table.innerHTML = "";

  let rn = prompt("Input number of rows");
  let cn = prompt("Input number of columns");

  // Convert to numbers
  rn = Number(rn);
  cn = Number(cn);

  // Validate input
  if (isNaN(rn) || isNaN(cn)) {
    return; // ignore non-numeric input
  }

  if (rn <= 0 || cn <= 0) {
    alert("Please enter positive numbers greater than 0");
    return;
  }

  // Create table
  for (let i = 0; i < rn; i++) {
    const row = table.insertRow();

    for (let j = 0; j < cn; j++) {
      const cell = row.insertCell();
      cell.textContent = `Row-${i} Column-${j}`;
    }
  }
}