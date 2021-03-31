'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
    let _percent = Number(percent);
    let _contribution = Number(contribution);
    let _amount = Number(amount);
    if (Number.isNaN(_percent) || _percent < 0) {
    	return `Параметр 'Процентная ставка' содержит неправильное значение ${percent}`;
    }
    if (Number.isNaN(_contribution) || _contribution < 0) {
    	return `Параметр 'Начальный взнос' содержит неправильное значение ${contribution}`;
    }
    if (Number.isNaN(_amount) || _amount < _contribution) {
    	return `Параметр 'Общая стоимость' содержит неправильное значение ${amount}`;
    }

    let principal = _amount - _contribution;
    let today = new Date();
    let months = ((date.getFullYear() - today.getFullYear()) * 12) + (date.getMonth() - today.getMonth());
    let percentMonth = _percent / 100 / 12;
    let monthlyPayment = principal * (percentMonth + percentMonth / (((1 + percentMonth)**months) - 1));
    let totalAmount = months * monthlyPayment;
    totalAmount = Number(totalAmount.toFixed(2));
    console.log(totalAmount);
    return totalAmount;
}

function getGreeting(name) {
  
	const welcomeName = name ? name : "Аноним";
  	let greeting = `Привет, мир! Меня зовут ${welcomeName}.`;
  	console.log(greeting);
    return greeting;
}
