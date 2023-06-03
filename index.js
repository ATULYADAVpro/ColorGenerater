// /*
// console.log(window.localStorage);
// localStorage.setItem("Theme","light");
// localStorage.setItem("Font","bold");
// localStorage.removeItem('Font');
// localStorage.clear();
// console.log(localStorage.getItem("Theme"));
// */
// localStorage.setItem("Theme","Yellow");
// console.log(localStorage.getItem("Theme"));
// const head = document.querySelector("h1");
// head.innerText = localStorage.getItem('Theme')
// /*
// const userSettings =
// {
//     them:'dark',
//     font:'light',
//     score:100
// }
// const settingString = JSON.stringify(userSettings)
// // console.log(settingString);
// // console.log(typeof settingString);

// localStorage.setItem('userSettings',settingString);
// // const uSettings =  localStorage.getItem('userSettings');
// // console.log( typeof uSettings);
// // console.log(JSON.parse(uSettings)); // str to obj
// const uSettings =  JSON.parse(localStorage.getItem('userSettings'));
// console.log(uSettings.them);
// */

// // where is use localStorage
// // cart save detail
// // user setting sace ex:=> dark mode type etc.
// // fillters search sort etc.
// // form data already email id save
// // game score
// //Note: confidential data not save please


// // const themeSelector = document.querySelector("#themeSelector");

// // const refSave = localStorage.getItem('theme');
// // changeTheme(refSave);

// // themeSelector.addEventListener('change',(e)=>{
// // // console.log(e.target.value);
// // localStorage.setItem('theme',e.target.value)
// // changeTheme(e.target.value);
// // })

// // function changeTheme(theme){
// //     if(theme === 'dark'){
// //         document.body.style.backgroundColor ="black"
// //     }else if(theme === 'light'){
        
// //         document.body.style.backgroundColor ="whiteSmoke"
// //     }else{
// //         document.body.style.backgroundColor ="red"
        
// //     }
// // }


// // window.addEventListener('storage',(e)=>{
// //     if(e.key === 'theme')
// //     {
// //         console.log(e);
// //         changeTheme(e.newValue);
// //         themeSelector.value = e.newValue;
// //     }   
// // });

// //local  storeage store have more cookie 5mb
// //Local storeage haven't expris date


// const allbtn = document.querySelectorAll(".btn button");

// for(let button of allbtn)
// {
//     button.addEventListener('click',(a)=>{
//         console.log(a.target.textContext)
//     })
// }











const mainButton = document.querySelector("button");
// console.log(mainButton);
const body = document.body;
const cuurentColor = document.querySelector(".current-color");


function rondomColorGenerator()
{
    const red =Math.floor(Math.random()*256);
    const green =Math.floor(Math.random()*256);
    const blue =Math.floor(Math.random()*256);
    const randomColor = `rgb(${red},${green},${blue})`;
    return randomColor;
}


mainButton.addEventListener('click',()=>{
    const rondomColor = rondomColorGenerator();
    console.log(rondomColor);
    body.style.backgroundColor = rondomColor;
    cuurentColor.textContent =rondomColor;
})










