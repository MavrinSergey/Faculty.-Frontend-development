/**
 * Функция ищет элементы в списке по значению(value), в результирующий массив попадают индексы элементов которые равны нашему значению(value)
 * @type {*[]}
 * @param array - массив в котором ищем
 * @param value - значение которое ищем
 */
function searchingElementInArrayByValue(array, value) {
    const resArr = [];
    for (let i = 0; array.length > i; i++) {
        if (array[i] === value) {
            resArr.push(i);
        }
    }
    return resArr;
}
/**
 * Функция ищет элементы в списке по значению(value), в результирующий массив попадают индексы элементов которые равны нашему значению(value)
 * @type {*[]}
 * @param sourceArray - массив который меняем
 * @param dataArray - массив с индексами значений которые надо изменить
 * @param value - новое значение
 */
function replacingElementsInArray(sourceArray, dataArray, value) {
    const resArr = sourceArray;
    for (let i = 0; dataArray.length > i; i++) {
        sourceArray[dataArray[i]] = value;
    }
    return resArr;
}
/**
 * Функция ищет элементы в списке по значению(value), в результирующий массив попадают индексы элементов которые равны нашему значению(value)
 * @type {*[]}
 * @param array - массив который меняем
 * @param searchValue - значение которое ищем
 * @param newValue - новое значение
 */
function replaceValuesInArray(array, searchValue, newValue) {
    const intermedia = searchingElementInArrayByValue(array, searchValue);
    return replacingElementsInArray(array, intermedia, newValue);
}

const arr = [1, 2, 3, 2, 5, 6];
console.log(replaceValuesInArray(arr, 2, 10))