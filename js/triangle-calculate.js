/**
 * objective : get base, height of a triangle.Calculate the area by using the provided formula,and then display the area.
 * step-1 : get base value of the input field
 * step-2 : added an id in text input field
 * step-3 : use get getElementById to access the input field
 * step-4 : get value from the input field
 * step-5 : convert the value to a number using parsefloat
 * */ 



function calculateTriangleArea(){
    // get triangle base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const triangleBase = parseFloat(triangleBaseText);

    // get triangle height value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const triangleHeight = parseFloat(triangleHeightText);

    const area = 0.5 * triangleBase * triangleHeight;

    // display triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}