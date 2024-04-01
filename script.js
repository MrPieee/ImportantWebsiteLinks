//   catched those Sections------>
const display=({edu,health,entr,Uv})=>{
    document.querySelector('.section1Edu').style.display=edu;
    document.querySelector('.section2Hlth').style.display=health;
    document.querySelector('.section3Entr').style.display=entr;
    document.querySelector('.section4UV').style.display=Uv;
}

// Those text color of button----->
const btnTextColor=({edu="",health="",entr="",uv=""})=>{
    document.getElementById("educationBtn").style.color=edu;
    document.getElementById("healthBtn").style.color=health;
    document.getElementById("entertainmentBtn").style.color=entr;
    document.getElementById("universityBtn").style.color=uv;
}

// Those text color of button----->
const btnBgColor=({edu="",health="",entr="",uv=""})=>{
    document.getElementById("educationBtn").style.backgroundColor=edu;
    document.getElementById("healthBtn").style.backgroundColor=health;
    document.getElementById("entertainmentBtn").style.backgroundColor=entr;
    document.getElementById("universityBtn").style.backgroundColor=uv;
   }
   


const education = ()=>{
    btnTextColor({edu:'aliceblue',health:'black',entr:'black',uv:'black'});
    btnBgColor({edu:'rgb(0, 14, 21)',health:'white',entr:'white',uv:'white'});
    display({edu:'flex',health:'none',entr:'none',Uv:'none'});
}; 


const health = ()=>{
    btnTextColor({edu:'black',health:'aliceblue',entr:'black',uv:'black'});
    btnBgColor({edu:'white',health:'rgb(0, 14, 21)',entr:'white',uv:'white'});
    display({edu:'none',health:'flex',entr:'none',Uv:'none'});
}; 

const entertainment = ()=>{
    btnTextColor({edu:'black',health:'black',entr:'aliceblue',uv:'black'});
    btnBgColor({edu:'white',health:'white',entr:'rgb(0, 14, 21)',uv:'white'});
    display({edu:'none',health:'none',entr:'flex',Uv:'none'});
}; 


const university = ()=>{
    btnTextColor({edu:'black',health:'black',entr:'black',uv:'aliceblue'});
    btnBgColor({edu:'white',health:'white',entr:'white',uv:'rgb(0, 14, 21)'});
    display({edu:'none',health:'none',entr:'none',Uv:'flex'});
}; 



