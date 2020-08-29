//  𝑀𝑎𝑑𝒉𝑎𝑣 𝑛𝑎𝑟𝑎𝑦𝑎𝑛: 
// ★彡 RiFtVulture 彡★
// ✏ 𝑂𝑛 𝑟𝑜𝑎𝑑 𝑜𝑓 𝑔𝑒𝑒𝑘 𝑡𝑜 𝑑𝑒𝑣𝑒𝑙𝑜𝑝𝑒𝑟 
// ✏ 𝑎𝑙𝑤𝑎𝑦𝑠 𝑙𝑒𝑎𝑟𝑛𝑖𝑛𝑔
// ✏ ɯσɾƙιɳɠ σɳ Fυʅʅ ʂƚαƈƙ
// ✏  || Pɾσԃυƈƚ ɱαɾƙҽƚιɳɠ ||
// COntact For Make Projects


//Page cursors

document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
    t.style.left = n.clientX + "px", 
    t.style.top = n.clientY + "px", 
    e.style.left = n.clientX + "px", 
    e.style.top = n.clientY + "px", 
    i.style.left = n.clientX + "px", 
    i.style.top = n.clientY + "px"
});
var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2");
function n(t) {
    e.classList.add("hover")
}
function s(t) {
    e.classList.remove("hover")
}
s();
for (var r = document.querySelectorAll(".hover-link"), a = r.length - 1; a >= 0; a--) {
    o(r[a])
}
function o(t) {
    t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
}

// cyan
$('.section li:nth-child(2)').on('mouseover', function(event) {				
    $('body').addClass('color-cyan');
});	
$('.section li:nth-child(2)').on('mouseout', function(event) {			
    $('body').removeClass('color-cyan');
});
// red
$('.section li:nth-child(3)').on('mouseover', function(event) {				
    $('body').addClass('color-red');
});				
$('.section li:nth-child(3)').on('mouseout', function(event) {			
    $('body').removeClass('color-red');
});
// Blue
$('.section li:nth-child(4)').on('mouseover', function(event) {				
    $('body').addClass('color-blue');
});				
$('.section li:nth-child(4)').on('mouseout', function(event) {			
    $('body').removeClass('color-blue');
});
// Yellow
$('.section li:nth-child(5)').on('mouseover', function(event) {				
    $('body').addClass('color-yellow');
});				
$('.section li:nth-child(5)').on('mouseout', function(event) {			
    $('body').removeClass('color-yellow');
});
// voilet
$('.section li:nth-child(6)').on('mouseover', function(event) {				
    $('body').addClass('color-violet');
});				
$('.section li:nth-child(6)').on('mouseout', function(event) {		
    $('body').removeClass('color-violet');
});
// water pointing or preload
$('.section li:nth-child(7)').on('mouseover', function(event) {				
    $('body').addClass('preload');
});				
$('.section li:nth-child(7)').on('mouseout', function(event) {		
    $('body').removeClass('preload');
});
// loding
$('.section li:nth-child(8)').on('mouseover', function(event) {				
    $('body').addClass('preload1');
});				
$('.section li:nth-child(8)').on('mouseout', function(event) {		
    $('body').removeClass('preload1');
});