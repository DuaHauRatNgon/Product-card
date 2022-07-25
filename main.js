var btn = document.querySelectorAll("button");

btn.forEach(function(item){
    item.addEventListener("click", function(){
        alert("Sản phẩm đã được thêm vào giỏ hàng !");        
    });
});