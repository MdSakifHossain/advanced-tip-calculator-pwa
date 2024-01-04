export const calculateTotal = (billAmount, tipPercentage) => {
	if (isNaN(billAmount) || isNaN(tipPercentage)) {
		return {
			error: "Please enter valid numbers for bill amount and tip percentage."
		};
	} else {
		const tip = (billAmount * tipPercentage) / 100;
		const totalBill = billAmount + tip;

		return {
			tip: tip.toFixed(2),
			totalBill: totalBill.toFixed(2)
		};
	}
};
