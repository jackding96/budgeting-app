// Data shape: 
// [{ timestamp(str), category(str), store(str), cost(2-decimal float) }]

const categories = ['Fast Food', 'Restaurants & Bars', 'Groceries', 'Clothes', 'Health & Beauty', 'Home', 'Bills', 'Misc.'];
const stores = ['Fast Food', 'Restaurants & Bars', 'Groceries', 'Clothes', 'Health & Beauty', 'Home', 'Bills', 'Misc.'];

function randomDate(start, end, startHour, endHour) {
  var date = new Date(+start + Math.random() * (end - start));
  var hour = startHour + Math.random() * (endHour - startHour) | 0;
  date.setHours(hour);
  return date.getTime();
}

dict = {};

for (let i = 0; i < 1000; i++) {
  id = '_' + Math.random().toString(36).substr(2, 9);
  dict[id] = JSON.stringify({
    id: id,
    timestamp: randomDate(new Date('August 1, 2018 00:00:00'), new Date(), 0, 23),
    category: categories[Math.floor(Math.random()*categories.length)],
    store: stores[Math.floor(Math.random()*stores.length)], 
    cost: (Math.random() * 20).toFixed(2)
  });
}

export default dict;