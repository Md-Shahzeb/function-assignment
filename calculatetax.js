function calculateTax() {
    
    const taxRates = [
        { threshold: 10000, rate: 0.1 },   // 10% for income up to $10,000
        { threshold: 20000, rate: 0.15 },  // 15% for income up to $20,000
        { threshold: 50000, rate: 0.2 },   // 20% for income up to $50,000
        { threshold: Infinity, rate: 0.25 } // 25% for income above $50,000
    ];

    return function(income) {
        let tax = 0;
        for (let i = 0; i < taxRates.length; i++) {
            const { threshold, rate } = taxRates[i];
            if (income <= threshold) {
                tax += income * rate;
                break;
            } else {
                tax += (threshold - (taxRates[i-1]?.threshold || 0)) * rate;
                income -= threshold;
            }
        }
        return tax;
    }
}

// Create the tax calculator
const getTax = calculateTax();

// Test the function with various incomes
console.log(`Tax for $8,000: $${getTax(8000).toFixed(2)}`);
console.log(`Tax for $15,000: $${getTax(15000).toFixed(2)}`);
console.log(`Tax for $25,000: $${getTax(25000).toFixed(2)}`);
console.log(`Tax for $55,000: $${getTax(55000).toFixed(2)}`);
