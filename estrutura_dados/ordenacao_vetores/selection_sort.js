let a = [3, 5, 1, 6, 10, 20, 2]

function selectionSort(array) {
    for(i = 0; i < array.length; i++){
        let menor = i
        for (j = i + 1; j < array.length; j++){
            if (array[j] < array[menor]){
                menor = j 
            }
        }
        if (menor != i){
            let temp = array[i];
            array[i] = array[menor];
            array[menor] = temp
        }
    }
    return array
}
console.log(selectionSort(a))