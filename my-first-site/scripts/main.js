let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pic-for-first-site.jpg') {
      myImage.setAttribute('src','images/my-first-site2.jpg');
    } else {
      myImage.setAttribute('src','images/pic-for-first-site.jpg');
    }
}