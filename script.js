var a = document.getElementById('btn');
a.addEventListener('click',()=>{
    async function getQRImage() {
        var input = document.getElementById('input');
        var feed =input.value;
        var response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${feed}`);
        var blob = await response.blob();

        
      
     var imageUrl = URL.createObjectURL(blob);
        // console.log(imageUrl)
        var img1 = document.querySelector('img');
        img1.setAttribute('src',`${imageUrl}`)
        // console.log(img1)
    }
    getQRImage()
})


var b = document.getElementById('clr');
b.addEventListener('click',()=>{
    var input = document.getElementById('input');
    input.value="";
    var img1 = document.querySelector('img');
        img1.setAttribute('src',"")

})

