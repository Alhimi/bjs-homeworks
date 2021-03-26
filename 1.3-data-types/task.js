'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
    let percent2 = Number(percent);
    let contribution2 = Number(contribution);
    let amount2 = Number(amount);
    if (Number.isNaN(percent2)) {
    	return `Параметр 'Процентная ставка' содержит неправильное значение ${percent}`;
    }
    if (Number.isNaN(contribution2)) {
    	return `Параметр 'Начальный взнос' содержит неправильное значение ${contribution}`;
    }
    if (Number.isNaN(amount2)) {
    	return `Параметр 'Общая стоимость' содержит неправильное значение ${amount}`;
    }

    let principal = amount2 - contribution2;
    let today = new Date();
    let months = ((date.getFullYear() - today.getFullYear()) * 12) + (date.getMonth() - today.getMonth());
    let percentMonth = percent2 / 100 / 12;
    let monthlyPayment = principal * (percentMonth + percentMonth / (((1 + percentMonth)**months) - 1));
    let totalAmount = contribution2 + months * monthlyPayment;
    totalAmount = Number(totalAmount.toFixed(2));
    console.log(totalAmount);
    return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
}

// S*(P+P/(((1+P)^n)-1)), где: S - тело кредита, 
// P - 1/12 процентной ставки (от 0 до 1), n - количество месяцев ^ - возведение в степень