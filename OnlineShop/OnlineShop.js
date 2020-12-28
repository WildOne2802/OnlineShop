// let menu =  document.querySelector('#menu');
// let box =  document.querySelector('#general');
// let boxPosition = box.getBoundingClientRect().top;
// window.addEventListener('scroll', function() {
//     if (window.pageYOffset >= boxPosition / 50) {
//         menu.style.top = '0px';
//     } else {
//         menu.style.top = '645px';
//     }
// });

function openFirst() {
    document.getElementById("firstSection").style.display = 'block';
}

function closeFirst() {
    document.getElementById("firstSection").style.display = 'none';
}

function openSecond() {
    document.getElementById("secondSection").style.display = 'block'
}

function closeSecond() {
    document.getElementById("secondSection").style.display = 'none';
}

function openThird() {
    document.getElementById("thirdSection").style.display = 'block'
}

function closeThird() {
    document.getElementById("thirdSection").style.display = 'none';
}

function openFourth() {
    document.getElementById("fourthSection").style.display = 'block'
}

function closeFourth() {
    document.getElementById("fourthSection").style.display = 'none';
}

const array = []

function acceptReport() {
    array.push({
        email: document.getElementById("emailInput").value,
        text: document.getElementById("reportInput").value
    });
    document.getElementById("emailInput").value = '';
    document.getElementById("reportInput").value = '';
    console.log(array)
}
