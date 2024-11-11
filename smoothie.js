// Smoothie Class Definition
class Smoothie {
    constructor(size, base, fruits, addOns) {
      this.size = size;
      this.base = base;
      this.fruits = fruits;
      this.addOns = addOns;
    }
  
    // Method to generate the smoothie description
    getDescription() {
      let description = `Your ${this.size} smoothie has a base of ${this.base}, `;
      description += `with the following fruits: ${this.fruits.join(', ')}, `;
      if (this.addOns.length > 0) {
        description += `and the following add-ons: ${this.addOns.join(', ')}.`;
      } else {
        description += "No add-ons.";
      }
      return description;
    }
  }
  
  // Event listener for form submission
  document.getElementById('smoothieForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from reloading the page
  
    // Collect form data
    const size = document.getElementById('size').value;
    const base = document.getElementById('base').value;
    const fruits = Array.from(document.getElementById('fruits').selectedOptions).map(option => option.value);
    const addOns = [];
    if (document.getElementById('protein').checked) addOns.push('Protein');
    if (document.getElementById('sweetener').checked) addOns.push('Sweetener');
    if (document.getElementById('seeds').checked) addOns.push('Seeds');
  
    // Create a new smoothie object
    const smoothie = new Smoothie(size, base, fruits, addOns);
  
    // Display the smoothie description
    document.getElementById('orderDescription').innerText = smoothie.getDescription();
  });
  