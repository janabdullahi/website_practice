var index = 0;

function changeColor(){
    var color = ["red", "green", "blue", "yellow", "purple", "orange"]

    // accessing element bt html tag name
    document.getElementsByTagName("body")[0]
    // using CSS background to change background color
    style.background = color[index++];

    if (index > color.length - 1)
    index = 0;
}