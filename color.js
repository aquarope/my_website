function ChangeDisplayMode(self){
    var body = document.querySelector('body');
    var bttn = document.getElementById('bttnChangeMode');



    if(self.value === '다크모드'){
        body.style.backgroundColor = 'black';
        bttn.style.backgroundColor = 'yellow';
        bttn.style.color = "blue";
        body.style.color = 'white';
       
        self.value = '라이트모드';
    }else {
        body.style.backgroundColor = 'beige';
        bttn.style.backgroundColor = 'black';
        bttn.style.color = 'white';
        body.style.color = 'black';
        self.value = '다크모드';
    }
}

function btn(){
    alert('입력되었습니다');
}