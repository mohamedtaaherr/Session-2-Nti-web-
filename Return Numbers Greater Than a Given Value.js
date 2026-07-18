function greaterThan(arr, value) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > value) {
            result.push(arr[i]);
        }
    }
    return result;
}