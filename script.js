function generateTable() {
    const rows = parseInt(document.getElementById("rows").value);
    const cols = parseInt(document.getElementById("cols").value);
    const output = document.getElementById("output");
  
    output.innerHTML = ""; 
  
    
    if (
      isNaN(rows) || isNaN(cols) ||
      rows < 2 || rows > 10 ||
      cols < 2 || cols > 10
    ) {
      alert("Please enter numbers between 2 and 10");
      return;
    }
  
    const table = document.createElement("table");
  
    for (let i = 1; i <= rows; i++) {
      const tr = document.createElement("tr");
  
      for (let j = 1; j <= cols; j++) {
        const td = document.createElement("td");
        td.textContent = i * j;
        tr.appendChild(td);
      }
  
      table.appendChild(tr);
    }
  
    output.appendChild(table);
  }
  