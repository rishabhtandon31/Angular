function insertionSort(arr, n) {
    var i, j, key;
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}
var numArray = [5, 2, 7, 1, 9];
insertionSort(numArray, numArray.length);
numArray.forEach(function (element) {
    console.log(element);
});