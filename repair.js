/*
instructions to add new category:
create div in html 

*/
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
 



//open subMenus
document.getElementById("brakesbtn").onclick=function(){
    document.getElementById("brakesSubMenu").toggleAttribute("hidden");
    closeDivs();
    //close other menus
    document.getElementById("steeringSuspensionSubMenu").setAttribute("hidden","hidden");
    document.getElementById("engineSubMenu").setAttribute("hidden","hidden");
    document.getElementById("acSubMenu").setAttribute("hidden","hidden");
    document.getElementById("electricalSubMenu").setAttribute("hidden","hidden");
}
document.getElementById("steeringbtn").onclick=function(){
    document.getElementById("steeringSuspensionSubMenu").toggleAttribute("hidden");
    closeDivs();
    //close other menus
    document.getElementById("brakesSubMenu").setAttribute("hidden","hidden");
    document.getElementById("engineSubMenu").setAttribute("hidden","hidden");
    document.getElementById("acSubMenu").setAttribute("hidden","hidden");
    document.getElementById("electricalSubMenu").setAttribute("hidden","hidden");
}
document.getElementById("enginebtn").onclick=function(){
    document.getElementById("engineSubMenu").toggleAttribute("hidden");
    closeDivs();
    //close other menus
    document.getElementById("steeringSuspensionSubMenu").setAttribute("hidden","hidden");
    document.getElementById("brakesSubMenu").setAttribute("hidden","hidden");
    document.getElementById("acSubMenu").setAttribute("hidden","hidden");
    document.getElementById("electricalSubMenu").setAttribute("hidden","hidden");
}
document.getElementById("acbtn").onclick=function(){
    document.getElementById("acSubMenu").toggleAttribute("hidden");
    closeDivs();
    //close other menus
    document.getElementById("steeringSuspensionSubMenu").setAttribute("hidden","hidden");
    document.getElementById("brakesSubMenu").setAttribute("hidden","hidden");
    document.getElementById("electricalSubMenu").setAttribute("hidden","hidden");
    document.getElementById("engineSubMenu").setAttribute("hidden","hidden");    
}
document.getElementById("elecbtn").onclick=function(){
    document.getElementById("electricalSubMenu").toggleAttribute("hidden");
    closeDivs();
    //close other menus
    document.getElementById("steeringSuspensionSubMenu").setAttribute("hidden","hidden");
    document.getElementById("brakesSubMenu").setAttribute("hidden","hidden");
    document.getElementById("engineSubMenu").setAttribute("hidden","hidden");
    document.getElementById("acSubMenu").setAttribute("hidden","hidden");
}
//declare hidden items
    //brakes
        let brakesSubPadsHidden = document.getElementById("brakes/pads");
        let brakesSubBoosterHidden = document.getElementById("brakes/booster");
        let brakesSubMasterCylinderHidden = document.getElementById("brakes/masterCylinder");
    //suspension
        let steeringSuspensionSubTiresHidden = document.getElementById("steeringSuspension/tires");
        let steeringSuspensionSubCvAxleBootHidden = document.getElementById("steeringSuspension/cvAxleBoot");  
        let steeringSuspensionSubPowerSteeringHidden = document.getElementById("steeringSuspension/powerSteering");  
        let steeringSuspensionSubSuspensionHidden = document.getElementById("steeringSuspension/suspension");  
        let steeringSuspensionSubWheelBearingHidden = document.getElementById("steeringSuspension/WheelBearings");  
        let steeringSuspensionSubuJointHidden = document.getElementById("steeringSuspension/uJointDriveshaft");      

//subMenu to show Divs
//brakes
    document.getElementById("padsMenuButton").onclick=function(){
        closeDivs();
        console.log("padsbuttonpressed");
        if(brakesSubPadsHidden.style.display==="none"){
            brakesSubPadsHidden.style.display="inline-block";
        }
        else if(brakesSubPadsHidden.style.display==="inline-block"){
            brakesSubPadsHidden.style.display="none";
        }
    }
    document.getElementById("boosterMenuButton").onclick=function(){
        closeDivs();

        if(brakesSubBoosterHidden.style.display==="none"){
            brakesSubBoosterHidden.style.display="inline-block";
        }
        else if(brakesSubBoosterHidden.style.display==="inline-block"){
            brakesSubBoosterHidden.style.display="none";
        }
    }
    document.getElementById("masterMenuButton").onclick=function(){
        closeDivs();

        if(brakesSubMasterCylinderHidden.style.display==="none"){
            brakesSubMasterCylinderHidden.style.display="inline-block";
        }
        else if(brakesSubMasterCylinderHidden.style.display==="inline-block"){
            brakesSubMasterCylinderHidden.style.display="none";
        }
    }
//suspension
    document.getElementById("tiresMenuButton").onclick=function(){
        closeDivs();

        if(steeringSuspensionSubTiresHidden.style.display==="none"){
            steeringSuspensionSubTiresHidden.style.display="inline-block";
        }
        else if(steeringSuspensionSubTiresHidden.style.display==="inline-block"){
            steeringSuspensionSubTiresHidden.style.display="none";
        }

    }
    document.getElementById("cvMenuButton").onclick=function(){
        closeDivs();

        if(steeringSuspensionSubCvAxleBootHidden.style.display==="none"){
            steeringSuspensionSubCvAxleBootHidden.style.display="inline-block";
        }
        else if(steeringSuspensionSubCvAxleBootHidden.style.display==="inline-block"){
            steeringSuspensionSubCvAxleBootHidden.style.display="none";
        }
        
    }
    document.getElementById("psMenuButton").onclick=function(){
        closeDivs();

        if(steeringSuspensionSubPowerSteeringHidden.style.display==="none"){
            steeringSuspensionSubPowerSteeringHidden.style.display="inline-block";
        }
        else if(steeringSuspensionSubPowerSteeringHidden.style.display==="inline-block"){
            steeringSuspensionSubPowerSteeringHidden.style.display="none";
        }
    }
    document.getElementById("suspensionMenuButton").onclick=function(){
        closeDivs();

        if(steeringSuspensionSubSuspensionHidden.style.display==="none"){
            steeringSuspensionSubSuspensionHidden.style.display="inline-block";
        }
        else if(steeringSuspensionSubSuspensionHidden.style.display==="inline-block"){
            steeringSuspensionSubSuspensionHidden.style.display="none";
        }
        
    }
    document.getElementById("wheelBearingsMenuButton").onclick=function(){
        closeDivs();

        if(steeringSuspensionSubWheelBearingHidden.style.display==="none"){
            steeringSuspensionSubWheelBearingHidden.style.display="inline-block";
        }
        else if(steeringSuspensionSubWheelBearingHidden.style.display==="inline-block"){
            steeringSuspensionSubWheelBearingHidden.style.display="none";
        }
        
    }
    document.getElementById("uJointMenuButton").onclick=function(){
        closeDivs();

        
        if(steeringSuspensionSubuJointHidden.style.display==="none"){
            steeringSuspensionSubuJointHidden.style.display="inline-block";
        }
        else if(steeringSuspensionSubuJointHidden.style.display==="inline-block"){
            steeringSuspensionSubuJointHidden.style.display="none";
        }
    }
function closeDivs(){
    steeringSuspensionSubuJointHidden.style.display="none";
    steeringSuspensionSubWheelBearingHidden.style.display="none";
    steeringSuspensionSubSuspensionHidden.style.display="none";
    steeringSuspensionSubPowerSteeringHidden.style.display="none";
    steeringSuspensionSubCvAxleBootHidden.style.display="none";
    steeringSuspensionSubTiresHidden.style.display="none";
    brakesSubMasterCylinderHidden.style.display="none";
    brakesSubBoosterHidden.style.display="none";
    brakesSubPadsHidden.style.display="none";






}

