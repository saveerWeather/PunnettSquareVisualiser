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
    table = createTableContent((possibleCombosParent1), (possibleCombosParent2));

    displayTable(possibleCombosParent1, possibleCombosParent2, table);
    //create hashmap in order to count the occurences of each genotype in table
    let countMap = new Map();
    for(i=0; i<table.length; i++){
        for(j=0; j<table[i].length; j++){
            if(countMap.has(table[i][j])){
                countMap.set(table[i][j], countMap.get(table[i][j])+1);
            }else{
                countMap.set(table[i][j], 1);
            }
        }
    }
    console.log(countMap);
    genotypes = countMap;
    //get countmap's keys
    let keys = Array.from(countMap.keys());
    let values = Array.from(countMap.values());
 
    let phenotypes = new Map();
    for(i=0; i<keys.length; i++){
        unreduced= keys[i];
        reduced = "";
        for(j=0; j<unreduced.length; j+=2){
            reduced += unreduced[j];
        }
        if(phenotypes.has(reduced)){
            phenotypes.set(reduced, phenotypes.get(reduced)+values[i]);
        }else{
            phenotypes.set(reduced, values[i]);
        }
    }
    displayStatTable(genotypes, phenotypes);
   

    
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
            row.push(''); 
        }
        blankTable.push(row); 
    }
    return blankTable;
}

//MOSTLY GPT-4o GENERATED FUNCTIONS BELOW
function displayTable(rowHeads, colHeads, contents) {
    const container = document.getElementById('punnett-square');
    container.innerHTML = ''; 

    const table = document.createElement('table');
    table.style.border = "1px solid black";
    table.style.borderCollapse = "collapse";

    const headerRow = document.createElement('tr');

    const emptyCorner = document.createElement('th');
    emptyCorner.style.border = "1px solid black";
    emptyCorner.style.padding = "5px";
    headerRow.appendChild(emptyCorner);

    colHeads.forEach(colHead => {
        const th = document.createElement('th');
        th.textContent = colHead;
        th.style.border = "1px solid black";
        th.style.padding = "5px";
        headerRow.appendChild(th);
    });

    table.appendChild(headerRow);

    rowHeads.forEach((rowHead, rowIndex) => {
        const row = document.createElement('tr');
        const th = document.createElement('th');
        th.textContent = rowHead;
        th.style.border = "1px solid black";
        th.style.padding = "5px";
        row.appendChild(th);

        contents[rowIndex].forEach(content => {
            const td = document.createElement('td');
            td.textContent = content;
            td.style.border = "1px solid black";
            td.style.padding = "5px";
            row.appendChild(td);
        });

        table.appendChild(row);
    });

    container.appendChild(table);
}


function displayStatTable(genotypes, phenotypes) {
    const container = document.getElementById('data');
    container.innerHTML = '';
    const table = document.createElement('table');
    table.style.border = "1px solid black";
    table.style.borderCollapse = "collapse";

    const headerRow = document.createElement('tr');
    ["Genotype", "Count", "Percent", "\t", "Phenotype", "Count", "Percent"].forEach(col => {
        const th = document.createElement('th');
        th.textContent = col;
        th.style.border = "1px solid black";
        th.style.padding = "5px";
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    const genotypeKeys = Array.from(genotypes.keys());
    const genotypeValues = Array.from(genotypes.values());
    const phenotypeKeys = Array.from(phenotypes.keys());
    const phenotypeValues = Array.from(phenotypes.values());

    const totalGenotypes = genotypeValues.reduce((a, b) => a + b, 0);
    const totalPhenotypes = phenotypeValues.reduce((a, b) => a + b, 0);
    const rows = Math.max(genotypeKeys.length, phenotypeKeys.length);

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');

        if (i < genotypeKeys.length) {
            [genotypeKeys[i], genotypeValues[i], ((genotypeValues[i] / totalGenotypes) * 100).toFixed(2) + "%"].forEach(val => {
                const td = document.createElement('td');
                td.textContent = val;
                td.style.border = "1px solid black";
                td.style.padding = "5px";
                row.appendChild(td);
            });
        } else {
            for (let j = 0; j < 3; j++) {
                const td = document.createElement('td');
                td.textContent = '';
                td.style.border = "1px solid black";
                td.style.padding = "5px";
                row.appendChild(td);
            }
        }

        const separator = document.createElement('td');
        separator.textContent = "\t";
        separator.style.border = "none";
        row.appendChild(separator);

        if (i < phenotypeKeys.length) {
            [phenotypeKeys[i], phenotypeValues[i], ((phenotypeValues[i] / totalPhenotypes) * 100).toFixed(2) + "%"].forEach(val => {
                const td = document.createElement('td');
                td.textContent = val;
                td.style.border = "1px solid black";
                td.style.padding = "5px";
                row.appendChild(td);
            });
        } else {
            for (let j = 0; j < 3; j++) {
                const td = document.createElement('td');
                td.textContent = '';
                td.style.border = "1px solid black";
                td.style.padding = "5px";
                row.appendChild(td);
            }
        }

        table.appendChild(row);
    }

    container.appendChild(table);
}
