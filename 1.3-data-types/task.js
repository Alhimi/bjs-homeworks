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

    let principal = amount - contribution;
    let today = new Date();
    let months = ((date.getFullYear() - today.getFullYear()) * 12) + (date.getMonth() - today.getMonth());
    // return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
}