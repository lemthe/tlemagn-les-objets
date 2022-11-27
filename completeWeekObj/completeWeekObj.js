function completeWeekObj(object){
    let arr = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
    days = Object.keys(object);
    nb = Object.values(object);
    let count = 0;
    for (i=0; i<arr.length;i++){
        if (!(days.includes(arr[i]))){
            days.push(arr[i]);
            nb.push(0);
        }
    }
    const obj = {};
    days.forEach((element, index) => {
        obj[element] = nb[index];
      });
    return obj;
}

/*
completeWeekObj({
    'monday': 1,
    'tuesday': 7,
    'saturday': 8,
    'sunday': -7,
});
*/
module.exports=completeWeekObj;
