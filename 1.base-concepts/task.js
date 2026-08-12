"use strict";

function solveEquation(a, b, c) {
    const d = b ** 2 - 4 * a * c;

    if (d < 0) {
        return [];
    }

    if (d === 0) {
        return [-b / (2 * a)];
    }

    return [
        (-b + Math.sqrt(d)) / (2 * a),
        (-b - Math.sqrt(d)) / (2 * a),
    ];
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    const values = [percent, contribution, amount, countMonths];

    for (let i = 0; i < values.length; i++) {
        if (typeof values[i] === "string") {
            values[i] = Number(values[i]);
        }

        if (typeof values[i] !== "number" || Number.isNaN(values[i])) {
            return false;
        }
    }

    percent = values[0];
    contribution = values[1];
    amount = values[2];
    countMonths = values[3];

    const monthlyPercent = percent / 100 / 12;
    const creditBody = amount - contribution;

    if (creditBody <= 0) {
        return 0;
    }

    const monthlyPayment =
        creditBody *
        (monthlyPercent +
            monthlyPercent /
                ((1 + monthlyPercent) ** countMonths - 1));

    const totalPayment = monthlyPayment * countMonths;

    return Number(totalPayment.toFixed(2));
}