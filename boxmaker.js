let size = -1; //this size can be changed and will alter the size of the finished box as it is the length + width of the box


function makeBox(size){
    if (size < 1){
        console.log("[[]]");
    }
    else if (size == 1){
        console.log("[[#]]");
    }
    else{
        const tempAry = []; //holds individual rows
        for (let i =0 ; i < size; i++){
            if (i == 0 || i == (size - 1)){ //for the first and last rows
                for (let k = 0; k < size; k++){
                    tempAry.push('#');
                }
            }
            else {
                for (let k = 0; k < size; k++){
                    if (k == 0 || k == (size - 1)){
                        tempAry.push('#');
                    }
                    else {
                        tempAry.push(',');
                    }
                }
            }
            console.log(tempAry);
            tempAry.splice(0,size); //reset tempAry
        }
    }
}

makeBox(size);