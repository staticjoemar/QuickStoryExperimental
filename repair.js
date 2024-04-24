
//checkboxes
let onetire = document.getElementById("1tire");
let twotire = document.getElementById("2tire");
let threetire = document.getElementById("3tire");
let fourtire = document.getElementById("4tire");
let replacerotor = document.getElementById("replacerotorscheckbox");
let lhcvchbx = document.getElementById("lhboot");
let rhcvchbx = document.getElementById("rhboot");
//keyboard shortcuts
document.addEventListener('keypress', function(e) { 
    if (e.keyCode === 13) {
        document.getElementById("copybutton").click();
    }});  
    document.addEventListener('keypress', function(e){ 
        if (e.keyCode == 32) {
            document.getElementById("insertbutton").click();
        }});
 //copy function       
document.getElementById("copybutton").onclick = function(){
    var text = document.getElementById('storyFinal');
    text.select();
    document.execCommand('copy');
} 
//clear final text field
document.getElementById("finalstoryclearbutton").onclick=function(){
    document.getElementById("storyFinal").value=null;
}
//spencer 
document.getElementById("spencerbutton").onclick = function(){
    document.getElementById("spencerimg").toggleAttribute("hidden");
}
//brakes main category
    //brakes check if rotors replaced and autofills field
        document.getElementById("frontbrakebutton").onclick = function (){
            if(replacerotor.checked == true){
                document.getElementById("storyFinal").value = "REPLACED FRONT ROTORS\nREPLACED PADS AND SHIMS\nCLEAN AND LUBE SLIDE PINS\nTORQUED ALL FASTENERS TO SPEC\nROAD TEST AND BURNISH BRAKES, OK";
            }
            else{
            document.getElementById("storyFinal").value = "MACHINED FRONT ROTORS\nREPLACED PADS AND SHIMS\nCLEAN AND LUBE SLIDE PINS\nTORQUED ALL FASTENERS TO SPEC\nROAD TEST AND BURNISH BRAKES, OK";
        }}
        document.getElementById("rearbrakebutton").onclick = function (){
            if(replacerotor.checked == true){
                document.getElementById("storyFinal").value = "REPLACED REAR ROTORS\nREPLACED PADS AND SHIMS\nCLEAN AND LUBE SLIDE PINS\nTORQUED ALL FASTENERS TO SPEC\nADJUST PARKING BRAKE\nROAD TEST AND BURNISH BRAKES, OK"; 
            }
            else{
            document.getElementById("storyFinal").value = "MACHINED REAR ROTORS\nREPLACED PADS AND SHIMS\nCLEAN AND LUBE SLIDE PINS\nTORQUED ALL FASTENERS TO SPEC\nADJUST PARKING BRAKE\nROAD TEST AND BURNISH BRAKES, OK"; 
        }}
        document.getElementById("frontandrearbrakebutton").onclick = function (){
            if(replacerotor.checked == true){
                document.getElementById("storyFinal").value = "REPLACED FRONT AND REAR ROTORS\nREPLACED ALL PADS AND SHIMS\nCLEAN AND LUBE SLIDE PINS\nTORQUED ALL FASTENERS TO SPEC\nADJUST PARKING BRAKE\nROAD TEST AND BURNISH BRAKES, OK"; 
            }
            else{
            document.getElementById("storyFinal").value = "MACHINED FRONT AND REAR ROTORS\nREPLACED ALL PADS AND SHIMS\nCLEAN AND LUBE SLIDE PINS\nTORQUED ALL FASTENERS TO SPEC\nADJUST PARKING BRAKE\nROAD TEST AND BURNISH BRAKES, OK"; 
        }}
     //booster autofills
        document.getElementById("replaceboosterbtn").onclick=function(){
            document.getElementById("storyFinal").value ="REPLACED BRAKE BOOSTER ASSY\nCHECK AND ADJUST PUSHROD LENGTH\nTORQUED ALL FASTENERS TO SPEC\nVERIFY PEDAL FREEPLAY AND NORMAL OPERATION"
        }
     //mastery cylinder autofills
        document.getElementById("replacemasterbtn").onclick=function(){
            document.getElementById("storyFinal").value ="DRAIN BRAKE RESERVOIR\nREPLACED BRAKE MASTER CYLINDER ASSY\nCHECK AND ADJUST PUSHROD LENGTH\nTORQUED ALL FASTENERS TO SPEC\nFILL AND BLEED MASTER CYLINDER\nBLEED ALL CALIPERS\nROAD TEST, OK\nVERIFY PEDAL FREEPLAY AND NORMAL OPERATION"

        }
//steering suspension main      
    //tires check how many tires replaced and autofills
        document.getElementById("mountandbalancebutton").onclick = function(){
            if(onetire.checked == true){
                document.getElementById("storyFinal").value = "MOUNT AND BALANCE ONE TIRE\nSET TO 35 PSI\nTORQUED ALL LUG NUTS TO 80 FT LBS";
            }
            else if(twotire.checked == true){
                document.getElementById("storyFinal").value = "MOUNT AND BALANCE TWO TIRES\nSET TO 35 PSI\nTORQUED ALL LUG NUTS TO 80 FT LBS";
            }
            else if(threetire.checked == true){
                document.getElementById("storyFinal").value = "MOUNT AND BALANCE THREE TIRES\nSET TO 35 PSI\nTORQUED ALL LUG NUTS TO 80 FT LBS";
            }
            else if(fourtire.checked == true){
                document.getElementById("storyFinal").value = "MOUNT AND BALANCE FOUR TIRES\nSET TO 35 PSI\nTORQUED ALL LUG NUTS TO 80 FT LBS";
            }
        }
        document.getElementById("frAlignBtn").onclick=function(){
            document.getElementById("storyFinal").value = "ALIGN FRONT SUSPENSION\nADJUST ANGLES TO SPEC\nROAD TEST, OK\nVEHICLE TRACKING STRAIGHT";
        }
        document.getElementById("AlignBtn").onclick=function(){
            document.getElementById("storyFinal").value = "ALIGN FRONT AND REAR SUSPENSION\nADJUST ANGLES TO SPEC\nROAD TEST, OK\nVEHICLE TRACKING STRAIGHT";
        }
    //CV axle autofills  
        document.getElementById("innerouterbtn").onclick=function(){
            if(lhcvchbx.checked==true){
                document.getElementById("storyFinal").value= "REMOVE LH FRONT AXLE\nDISSASEMBLE CV AXLE\nREPLACE LH INNER AND OUTER CV BOOTS\nAPPLY NEW GREASE, CLAMPS, AND REPLACE AXLE NUT\nTORQUED ALL FASTENERS TO SPEC\nROAD TEST AND VERIFY NORMAL OPERATION";
            }
            if(rhcvchbx.checked==true){
                document.getElementById("storyFinal").value= "REMOVE RH FRONT AXLE\nDISSASEMBLE CV AXLE\nREPLACE RH INNER AND OUTER CV BOOTS\nAPPLY NEW GREASE, CLAMPS, AND REPLACE AXLE NUT\nTORQUED ALL FASTENERS TO SPEC\nROAD TEST AND VERIFY NORMAL OPERATION";
            }
            if(lhcvchbx.checked==true&&rhcvchbx.checked==true){
                document.getElementById("storyFinal").value= "REMOVE BOTH FRONT AXLES\nDISSASEMBLE BOTH FRONT CV AXLES\nREPLACE BOTH FRONT INNER AND OUTER CV BOOTS\nAPPLY NEW GREASE, CLAMPS, AND REPLACE AXLE NUTS\nTORQUED ALL FASTENERS TO SPEC\nROAD TEST AND VERIFY NORMAL OPERATION";
            }
        }
        document.getElementById("innerbtn").onclick=function(){
            if(lhcvchbx.checked==true){
                document.getElementById("storyFinal").value= "REMOVE LH FRONT AXLE\nDISSASEMBLE CV AXLE\nREPLACE LH INNER CV BOOT\nAPPLY NEW GREASE, CLAMPS, AND REPLACE AXLE NUT\nTORQUED ALL FASTENERS TO SPEC\nROAD TEST AND VERIFY NORMAL OPERATION";
            }
            if(rhcvchbx.checked==true){
                document.getElementById("storyFinal").value= "REMOVE RH FRONT AXLE\nDISSASEMBLE CV AXLE\nREPLACE RH INNER CV BOOT\nAPPLY NEW GREASE, CLAMPS, AND REPLACE AXLE NUT\nTORQUED ALL FASTENERS TO SPEC\nROAD TEST AND VERIFY NORMAL OPERATION";
            }
            if(lhcvchbx.checked==true&&rhcvchbx.checked==true){
                document.getElementById("storyFinal").value= "REMOVE BOTH FRONT AXLES\nDISSASEMBLE BOTH FRONT CV AXLES\nREPLACE BOTH FRONT INNER CV BOOTS\nAPPLY NEW GREASE, CLAMPS, AND REPLACE AXLE NUTS\nTORQUED ALL FASTENERS TO SPEC\nROAD TEST AND VERIFY NORMAL OPERATION";
            }
        }
        document.getElementById("replaceShaft").onclick=function(){
            if(lhcvchbx.checked==true){
                document.getElementById("storyFinal").value= "REPLACED LH CV AXLE ASSY\nREPLACED AXLE NUT\nTORQUED ALL FASTENERS TO SPEC\nROAD TEST AND VERIFY NORMAL OPERATION, OK";
            }
            if(rhcvchbx.checked==true){
                document.getElementById("storyFinal").value= "REPLACED RH CV AXLE ASSY\nREPLACED AXLE NUT\nTORQUED ALL FASTENERS TO SPEC\nROAD TEST AND VERIFY NORMAL OPERATION, OK";
            }
            if(lhcvchbx.checked==true&&rhcvchbx.checked==true){
                document.getElementById("storyFinal").value= "REPLACED BOTH FRONT CV AXLE ASSY\nREPLACED AXLE NUTS\nTORQUED ALL FASTENERS TO SPEC\nROAD TEST AND VERIFY NORMAL OPERATION, OK";
            }
        }
    //steering rack
        document.getElementById("steeringrackbtn").onclick=function(){
            document.getElementById("storyFinal").value= "LOCK STEERING WHEEL\nDISCONNECT P/S LINES AND DRAIN FLUID\nDISCONNECT INTERMEDIATE SHAFT\nDISCONNECT BOTH OUTER TIE ROD ENDS\nREMOVE AND REPLACE STEERING RACK\nCENTER NEW PART\nREINSTALL TIE ROD ENDS AND REPLACE COTTER PINS\nREINSTALL P/S LINES\nREINSTALL INTERMEDIATE SHAFT\nFILL AND BLEED SYSTEM\nALIGN FRONT SUSPENSION AND ROAD TEST, OK";
        }
        document.getElementById("pspumpbtn").onclick=function(){
            document.getElementById("storyFinal").value= "DRAIN P/S FLUID\nREMOVE DRIVE BELT\nREMOVE AND REPLACE P/S PUMP\nREINSTALL DRIVE BELT\nFILL AND BLEED P/S SYSTEM\nCHECK OPERATION, OK";
        }
        document.getElementById("pslinebtn").onclick=function(){
            document.getElementById("storyFinal").value= "REMOVE P/S LINE\nFILL AND BLEED P/S SYSTEM\nCHECK FOR LEAKS, OK";
        }

//Open Menus
document.getElementById("hdrBtn1").onclick=function(){
    document.getElementById("menu1").toggleAttribute("hidden");
    closeDivs();
    document.getElementById("menu2").setAttribute("hidden","hidden");
    document.getElementById("menu3").setAttribute("hidden","hidden");
    document.getElementById("menu4").setAttribute("hidden","hidden");
    document.getElementById("menu5").setAttribute("hidden","hidden");
    document.getElementById("menu6").setAttribute("hidden","hidden");

}
document.getElementById("hdrBtn2").onclick=function(){
    document.getElementById("menu2").toggleAttribute("hidden");
    closeDivs();
    document.getElementById("menu1").setAttribute("hidden","hidden");
    document.getElementById("menu3").setAttribute("hidden","hidden");
    document.getElementById("menu4").setAttribute("hidden","hidden");
    document.getElementById("menu5").setAttribute("hidden","hidden");
    document.getElementById("menu6").setAttribute("hidden","hidden");

}
document.getElementById("hdrBtn3").onclick=function(){
    document.getElementById("menu3").toggleAttribute("hidden");
    closeDivs();
    document.getElementById("menu1").setAttribute("hidden","hidden");
    document.getElementById("menu2").setAttribute("hidden","hidden");
    document.getElementById("menu4").setAttribute("hidden","hidden");
    document.getElementById("menu5").setAttribute("hidden","hidden");
    document.getElementById("menu6").setAttribute("hidden","hidden");

}
document.getElementById("hdrBtn4").onclick=function(){
    document.getElementById("menu4").toggleAttribute("hidden");
    closeDivs();
    document.getElementById("menu1").setAttribute("hidden","hidden");
    document.getElementById("menu2").setAttribute("hidden","hidden");
    document.getElementById("menu3").setAttribute("hidden","hidden");
    document.getElementById("menu5").setAttribute("hidden","hidden"); 
    document.getElementById("menu6").setAttribute("hidden","hidden");
   
}
document.getElementById("hdrBtn5").onclick=function(){
    document.getElementById("menu5").toggleAttribute("hidden");
    closeDivs();
    document.getElementById("menu1").setAttribute("hidden","hidden");
    document.getElementById("menu2").setAttribute("hidden","hidden");
    document.getElementById("menu3").setAttribute("hidden","hidden");
    document.getElementById("menu4").setAttribute("hidden","hidden");
    document.getElementById("menu6").setAttribute("hidden","hidden");

}
document.getElementById("hdrBtn6").onclick=function(){
    document.getElementById("menu6").toggleAttribute("hidden");
    closeDivs();
    document.getElementById("menu1").setAttribute("hidden","hidden");
    document.getElementById("menu2").setAttribute("hidden","hidden");
    document.getElementById("menu3").setAttribute("hidden","hidden");
    document.getElementById("menu4").setAttribute("hidden","hidden");
    document.getElementById("menu5").setAttribute("hidden","hidden");

}
//Declare hidden items
let brkDiv1 = document.getElementById("brkDiv1");
let brkDiv2 = document.getElementById("brkDiv2");
let brkDiv3 = document.getElementById("brkDiv3");
let sSDiv1 = document.getElementById("sSDiv1");
let sSDiv2 = document.getElementById("sSDiv2");  
let sSDiv3 = document.getElementById("sSDiv3");  
let sSDiv4 = document.getElementById("sSDiv4");  
let sSDiv5 = document.getElementById("sSDiv5");  
let sSDiv6 = document.getElementById("sSDiv6");      
//Menu Btns show Divs
    //BRAKES
        document.getElementById("brkDiv1Btn").onclick=function(){
            closeDivs();
            if(brkDiv1.style.display==="none"){
                brkDiv1.style.display="inline-block";
            }
            else if(brkDiv1.style.display==="inline-block"){
                brkDiv1.style.display="none";
            }}
        document.getElementById("brkDiv2Btn").onclick=function(){
            closeDivs();
            if(brkDiv2.style.display==="none"){
                brkDiv2.style.display="inline-block";
            }
            else if(brkDiv2.style.display==="inline-block"){
                brkDiv2.style.display="none";
            }}
        document.getElementById("brkDiv3Btn").onclick=function(){
            closeDivs();
            if(brkDiv3.style.display==="none"){
                brkDiv3.style.display="inline-block";
            }
            else if(brkDiv3.style.display==="inline-block"){
                brkDiv3.style.display="none";
            }}
    //STEERING AND SUSPENSION
        document.getElementById("sSDiv1Btn").onclick=function(){
            closeDivs();
            if(sSDiv1.style.display==="none"){
                sSDiv1.style.display="inline-block";
            }
            else if(sSDiv1.style.display==="inline-block"){
                sSDiv1.style.display="none";
            }}
        document.getElementById("sSDiv2Btn").onclick=function(){
            closeDivs();
            if(sSDiv2.style.display==="none"){
                sSDiv2.style.display="inline-block";
            }
            else if(sSDiv2.style.display==="inline-block"){
                sSDiv2.style.display="none";
            }}
        document.getElementById("sSDiv3Btn").onclick=function(){
            closeDivs();
            if(sSDiv3.style.display==="none"){
                sSDiv3.style.display="inline-block";
            }
            else if(sSDiv3.style.display==="inline-block"){
                sSDiv3.style.display="none";
            }}
        document.getElementById("sSDiv4Btn").onclick=function(){
            closeDivs();
            if(sSDiv4.style.display==="none"){
                sSDiv4.style.display="inline-block";
            }
            else if(sSDiv4.style.display==="inline-block"){
                sSDiv4.style.display="none";
            }}
        document.getElementById("sSDiv5Btn").onclick=function(){
            closeDivs();
            if(sSDiv5.style.display==="none"){
                sSDiv5.style.display="inline-block";
            }
            else if(sSDiv5.style.display==="inline-block"){
                sSDiv5.style.display="none";
            }}
        document.getElementById("sSDiv6Btn").onclick=function(){
            closeDivs();
            if(sSDiv6.style.display==="none"){
                sSDiv6.style.display="inline-block";
            }
            else if(sSDiv6.style.display==="inline-block"){
                sSDiv6.style.display="none";
            }}
    //ENGINES
    //AC
    //ELECTRICAL    
function closeDivs(){
    sSDiv1.style.display="none";
    sSDiv2.style.display="none";
    sSDiv3.style.display="none";
    sSDiv4.style.display="none";
    sSDiv5.style.display="none";
    sSDiv6.style.display="none";
    brkDiv1.style.display="none";
    brkDiv2.style.display="none";
    brkDiv3.style.display="none";
}

