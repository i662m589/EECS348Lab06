function get_paragraph_color() {
    var bor_R = document.getElementById("bor_R").value;
    var bor_G = document.getElementById("bor_G").value;
    var bor_B = document.getElementById("bor_B").value;
    var bor_width = document.getElementById("bor_width").value;
    var back_R = document.getElementById("back_R").value;
    var back_G = document.getElementById("back_G").value;
    var back_B = document.getElementById("back_B").value;
    var para = document.getElementById("paragraph");
    para.style.borderColor = `rgb(${bor_R},${bor_G},${bor_B})`;
    para.style.borderWidth = bor_width
    para.style.backgroundColor = `rgb(${back_R},${back_G},${back_B})`;
}