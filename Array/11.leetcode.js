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