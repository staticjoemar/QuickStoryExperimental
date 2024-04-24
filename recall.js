

document.addEventListener('keypress', function(e) { 
    if (e.keyCode === 13) {
        document.getElementById("copybutton").click();
    }});  
    document.addEventListener('keypress', function(e){ 
        if (e.keyCode == 32) {
            document.getElementById("insertbutton").click();
        }});
document.getElementById("insertbutton").onclick = function()
{
}
document.getElementById("copybutton").onclick = function(){
    var text = document.getElementById('storyFinal');
    text.select();
    document.execCommand('copy');
}  
document.getElementById("spencerbutton").onclick = function(){
    document.getElementById("spencerimg").toggleAttribute("hidden");
}
document.getElementById("frontbrakebutton").onclick = function (){
    document.getElementById("storyFinal").value = "MACHINED FRONT ROTORS\nREPLACED PADS AND SHIMS\nCLEAN AND LUBE SLIDE PINS\nTORQUED ALL FASTENERS TO SPEC\nROAD TEST AND BURNISH BRAKES, OK"
}
document.getElementById("rearbrakebutton").onclick = function (){
    document.getElementById("storyFinal").value = "MACHINED REAR ROTORS\nREPLACED PADS AND SHIMS\nCLEAN AND LUBE SLIDE PINS\nTORQUED ALL FASTENERS TO SPEC\nADJUST PARKING BRAKE\nROAD TEST AND BURNISH BRAKES, OK" 
}
document.getElementById("frontandrearbrakebutton").onclick = function (){
    document.getElementById("storyFinal").value = "MACHINED FRONT AND REAR ROTORS\nREPLACED ALL PADS AND SHIMS\nCLEAN AND LUBE SLIDE PINS\nTORQUED ALL FASTENERS TO SPEC\nADJUST PARKING BRAKE\nROAD TEST AND BURNISH BRAKES, OK" 
}
