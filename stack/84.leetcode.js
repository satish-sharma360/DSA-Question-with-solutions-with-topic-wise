// 84. Largest Rectangle in Histogram

function findMaxAre(heights){
    let maxArea = 0;

    for (let i = 0; i < heights.length; i++) {
        let minHeight = heights[i];
        for (let j = i; j < heights.length; j++) {
            minHeight = Math.min(minHeight , heights[j]);
            let width = j - i + 1;
            let area = minHeight * width;

            maxArea = Math.max(maxArea , area)
        }
    }
    return maxArea;
}

console.log(findMaxAre([2,1,5,6,2,3]))