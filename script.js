document.getElementById('generate').addEventListener('click', initPunnett);

function initPunnett(){
    parent1 = document.getElementById('parent1').value;
    parent2 = document.getElementById('parent2').value;

    if(parent1.length%2!=0 || parent2.length%2!=0){
        alert("Please enter a valid genotype");
        return;
    }
    //break the strings into arrays of 2 characters
    parent1 = parent1.match(/.{2}/g);
    parent2 = parent2.match(/.{2}/g);
  
    possibleCombosParent1 = [];
    for(i=0; i<parent1.length; i++){
        if(i==0){
            possibleCombosParent1.push(parent1[i].substring(0,1));
            possibleCombosParent1.push(parent1[i].substring(1,2));
        }
        else{
            temp = [];
            for(j=0; j<possibleCombosParent1.length; j++){
                temp.push(possibleCombosParent1[j]+parent1[i].substring(0,1));
                temp.push(possibleCombosParent1[j]+parent1[i].substring(1,2));
            }
            possibleCombosParent1 = temp;
        }
    }
    
    possibleCombosParent2 = [];
    for(i=0; i<parent2.length; i++){
        if(i==0){
            possibleCombosParent2.push(parent2[i].substring(0,1));
            possibleCombosParent2.push(parent2[i].substring(1,2));
        }
        else{
            temp = [];
            for(j=0; j<possibleCombosParent2.length; j++){
                temp.push(possibleCombosParent2[j]+parent2[i].substring(0,1));
                temp.push(possibleCombosParent2[j]+parent2[i].substring(1,2));
            }
            possibleCombosParent2 = temp;
        }
    }
    blanktable = createTableContent((possibleCombosParent1), (possibleCombosParent2));

    displayTable(possibleCombosParent1, possibleCombosParent2, blanktable);
    
  
}
function createTableContent(rowHeads, colHeads) {
    const rows = rowHeads.length;
    const cols = colHeads.length;
    const blankTable = createBlankTable(rows, cols);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            //splice every character in the rowHeads and colHeads
            rowHead = rowHeads[i].split('');
            colHead = colHeads[j].split('');
            
            spliced = "";
            for(k = 0; k<rowHead.length; k++){
                if(rowHead[k].toUpperCase()==rowHead[k]){
                    spliced += rowHead[k]+colHead[k];
                }else{
                    spliced += colHead[k]+rowHead[k];
                }
            }
            blankTable[i][j] = spliced;
        }
    }
    console.log(blankTable);
    return blankTable;
}
function createBlankTable(rows, cols) {
    const blankTable = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            row.push(''); // Fill each cell with an empty string
        }
        blankTable.push(row); // Add the row to the table
    }
    return blankTable;
}

//GPT GENERATED FUNCTION
function displayTable(rowHeads, colHeads, contents) {
   
    const container = document.getElementById('punnett-square');
    container.innerHTML = ''; 
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');

    const emptyCorner = document.createElement('th');
    headerRow.appendChild(emptyCorner);

    colHeads.forEach(colHead => {
        const th = document.createElement('th');
        th.textContent = colHead;
        headerRow.appendChild(th);
    });

    table.appendChild(headerRow); 

    rowHeads.forEach((rowHead, rowIndex) => {
        const row = document.createElement('tr');
        const th = document.createElement('th');
        th.textContent = rowHead;
        row.appendChild(th);

        contents[rowIndex].forEach(content => {
            const td = document.createElement('td');
            td.textContent = content;
            row.appendChild(td);
        });

        table.appendChild(row);
    });

    container.appendChild(table);
}
