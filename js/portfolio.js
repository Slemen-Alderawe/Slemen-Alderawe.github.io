let imgs = document.getElementsByClassName('myworkImg');

let curImg = 0; // track the pics to update
let imgCount = 3; // out the 9
let allImgs = [
    'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg',
   'img7.jpg','img8.jpg', 'img9.jpg', 'img10.jpg','img11.jpg',
    
];
let imgTimer = setInterval('ChangeImg()', 500);

function ChangeImg() {
   imgs[curImg].setAttribute('src', 'assets/images/' + allImgs[imgCount]);
    curImg++;
    imgCount++;
    if(curImg >= 3)
        curImg = 0;
    if(imgCount >= 9)
        imgCount = 0;
}
