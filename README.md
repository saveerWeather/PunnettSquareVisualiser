# Punnett Square Visualizer

A real-time Punnett Square visualizer for single and dihybrid crosses.

This project takes any two alleles provided as input and generates a Punnett square table, calculates the genotype and phenotype percentages, and displays all relevant information. Built using JavaScript with an HTML frontend, the visualizer updates in real time as users input alleles.

## Features

- **Single Trait Punnett Square**: Visualize and calculate for a single trait (e.g., `A` and `a`).
- **Dihybrid Punnett Square**: Support for two traits at once (e.g., `Aa` and `Bb`).
- **Real-time Updates**: The application instantly reflects any changes in input alleles.
- **Genotype and Phenotype Percentages**: Automatically calculates and displays genotype and phenotype distributions.
- **Interactive UI**: A clean and intuitive interface for seamless interaction.

## File Structure

1. **README.md**  
   This file. Provides an overview of the project, setup instructions, and usage details.

2. **index.html**  
   The main HTML file that contains the structure of the application, including:  
   - Input fields for alleles  
   - Display section for Punnett square table  
   - Results for genotype and phenotype percentages  

3. **styles.css**  
   Defines the visual appearance of the application, including:  
   - Layout and spacing  
   - Styling for the input fields, buttons, and tables  
   - Responsive design to ensure compatibility across devices  

4. **script.js**  
   The core JavaScript file that handles:  
   - Input validation for alleles  
   - Logic to generate single and dihybrid Punnett squares  
   - Calculation of genotype and phenotype percentages  
   - Real-time updating of results on the webpage  

5. **utils.js** (optional but recommended)  
   A helper file containing reusable functions, such as:  
   - Parsing input alleles  
   - Generating combinations for dihybrid crosses  
   - Sorting and formatting results  

6. **data.json** (optional)  
   A JSON file to store example allele combinations and expected results for testing purposes.

7. **assets/** (directory)  
   Contains images, icons, or other media used in the project.

8. **tests/** (directory)  
   Contains unit and integration tests to ensure the accuracy of:  
   - Punnett square generation logic  
   - Percentage calculations  
   - Real-time updating mechanism  

## Setup Instructions

1. **Clone the repository**:  
   ```bash
   git clone https://github.com/saveerWeather/PunnettSquareVisualiser.git
2. **Navigate to the project directory:**
   ```bash
   cd punnett-square-visualizer
3. **Open index.html in your browser to run the application**
   
## Usage
1. **Input Alleles: Enter alleles for two parents in the input fields (e.g., A and a for a single trait, or AaBb for dihybrid).**
2. **View Results: The Punnett square and percentages will update in real time below the input fields.**
3. **Interpret Data: Use the displayed information to analyze genotype and phenotype distributions.**


