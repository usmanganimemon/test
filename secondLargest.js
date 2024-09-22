const findSecondLargest = (arr)  => {

    let largest = 0; // SET INITIAL VALUE TO ZERO
    let secondLargest = 0; // SET INITIAL VALUE TO ZERO

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) { // CHECK IF CURRENT ELEMENT IS GREATER THAN LARGEST
            secondLargest = largest; // ASSIGN LARGEST's DATA TO SECOND LARGEST
            largest = arr[i]; //ASSIGN CURRENT ELEMENT DATA TO LARGEST
        } else if (arr[i] > secondLargest && arr[i] !== largest) { // CHECK IF CURRENT ELEMENT IS GREATER THAN SECOND's LARGEST and ITS VALUE IS NOT SAME AS LARGEST
            secondLargest = arr[i];
        }
    }

    console.log("Second largest element is:", secondLargest);
}

const arr = [6, 13, 22, 18, 0, 3, 45, 57, 5, 12];
const arr2 = [25,25,45,55,65,65];
findSecondLargest(arr);
findSecondLargest(arr2);