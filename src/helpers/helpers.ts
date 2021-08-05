const currencyCost = {
    'RUB': 0,
    'USD': 1,
    'EUR': 2,
    'GBP': 3,
}

const typeCost = {
    'debit': 0,
    'credit': 1,
    'external': 2,
    'saving': 3,
    'loan': 4
}

export function getWeight(item){
    return typeCost[item.type]*(Object.keys(currencyCost).length + 1) + (item.currency ? currencyCost[item.currency]:0)
}

export function customSort(a,b) {
    const firstSum = getWeight(a);
    const secondSum = getWeight(b);
    return firstSum - secondSum;
}


export function formatDate(date: Date) {

    var dd = date.getDate().toString();
    if (Number(dd) < 10) dd = '0' + dd;

    var mm = (date.getMonth() + 1).toString();
    if (Number(mm) < 10) mm = '0' + mm;

    var yy = date.getFullYear()

    return `${dd}.${mm}.${yy}`;
}
