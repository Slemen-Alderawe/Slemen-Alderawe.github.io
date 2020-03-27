// select dom elements
let pics = document.getElementsByClassName('productImg');

let curPic = 0; // track the pics to update
let picCount = 3; // out the 6
let allPics = [
    'pic1.jpg', 'pic2.jpg', 'pic3.jpg',
    'pic4.jpg', 'pic5.jpg', 'pic6.jpg',
    
];
let picTimer = setInterval('ChangePic()', 600);

function ChangePic() {
    pics[curPic].setAttribute('src', 'assets/images/' + allPics[picCount]);
    curPic++;
    picCount++;
    if(curPic >= 3)
        curPic = 0;
    if(picCount >= 6)
        picCount = 0;
}

