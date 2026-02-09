// 11. Container With Most Water


var maxArea = function(height) {
    let mostWater = 0;

    for(let i = 0; i < height.length - 1; i++){
        for(let j = i + 1 ; j < height.length; j++){

            let width = j - i;

            let minHeight  = Math.min(height[i] , height[j])

            let area = minHeight  * width
            mostWater = Math.max(mostWater , area)
        }
    }

    return mostWater
};

// T.C -> O(n^2)

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    let rightPt = height.length - 1;
    let leftPt = 0;

    let mostWater = 0;

    while(leftPt < rightPt){
        let width = rightPt - leftPt;
        let heightOfContainer = Math.min(height[rightPt] , height[leftPt])

        let area = width * heightOfContainer;

        mostWater = Math.max(mostWater , area);

        if(height[rightPt] > height[leftPt]){
            leftPt++
        }else{
            rightPt--
        }
    }
    return mostWater
};

// T.C -> O(n)