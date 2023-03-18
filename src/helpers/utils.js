export const DisplayMoney = (n) => {
    const numFormat = new Intl.NumberFormat('uk', {
        style: 'currency',
        currency: 'UAH',
    });

    return numFormat.format(n).split('.', 1);
};

export const calculateDiscount = (discountedPrice, originalPrice) => {
    const discountedPercent = (discountedPrice / originalPrice) * 100;

    return Math.round(discountedPercent);
};

export const CalculateTotal = (arr) => {
    const total = arr.reduce((accum, val) => accum + val, 0);

    return total;
};