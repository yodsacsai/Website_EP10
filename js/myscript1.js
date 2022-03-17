let id_headname = document.getElementById('id_headname');
let chk_male = document.getElementById('chk_male');
let txt_male = document.getElementById('txt_male');
let chk_female = document.getElementById('chk_female');
let txt_female = document.getElementById('txt_female');
let chk_kid = document.getElementById('chk_kid');
let txt_kid = document.getElementById('txt_kid');
let rdo_country = document.getElementsByName('rdo_country');
let disCount = document.getElementsByName('disCount');
let cal = document.getElementById('cal');
let cancel = document.getElementById('cancel');
let show_name = document.getElementById('show_name');
let show_male = document.getElementById('show_male');
let show_female = document.getElementById('show_female');
let show_kid = document.getElementById('show_kid');
let show_traget = document.getElementById('show_traget');
let show_discount = document.getElementById('show_discount');
let show_total_pay = document.getElementById('show_total_pay');


let calAndSHowtour = () => {
    let payMale = 0, payFemale = 0, payKid = 0;
    if(id_headname.value.trim().length == 0){
        alert("ป้อนชื่อด้วย");
    }else{
    show_name.innerHTML = id_headname.value;
    }
    //----------------------------------------
    if(chk_male.checked){
        if(txt_male.value.trim().length == 0){
        alert("ป้อนจำนวนชาย");
        }else{
        show_male.innerHTML = txt_male.value;
        payMale = Number(txt_male.value) * 500;
        }
    }else{
        show_male.innerHTML = 0;
        payMale = 0;
    }
    
    if(chk_female.checked){
        if(txt_female.value.trim().length == 0){
            alert("ป้อนจำนวนหญิง");
         }else{
            show_female.innerHTML = txt_female.value;
            payFemale = Number(txt_female.value) * 550;
            }
    }else{
        show_female.innerHTML = 0;
        payFemale = 0;
    }

    if(chk_kid.checked){
        if(txt_kid.value.trim().length == 0){
            alert("ป้อนจำนวนเด็ก");
         }else{
            show_kid.innerHTML = txt_kid.value;
            payKid = Number(txt_kid.value) * 200;
            }
    }else{
        show_kid.innerHTML = 0;
        payKid = 0;
    }
   
    //----------------------------------------
    if(rdo_country[0].checked){
        show_traget.innerHTML = "ญี่ปุ่น";
    }else if(rdo_country[1].checked){
        show_traget.innerHTML = "เกาหลี";
    }else if(rdo_country[2].checked){
        show_traget.innerHTML = "จีน";
    }else{
        show_traget.innerHTML = "ฮ่องกง";
    }
    //---------------------------------------
    show_discount.innerHTML = (payMale + payFemale + payKid) * disCount[0].value;
    show_total_pay.innerHTML = (payMale + payFemale + payKid) - ((payMale + payFemale + payKid) * disCount[0].value);

}

let disEnMale = () => {
    if(chk_male.checked){
        txt_male.disabled = false;
    }else{
        txt_male.disabled = true;
        txt_male.value = "";
    }
}

let disEnFemale = () => {
    if(chk_female.checked){
        txt_female.disabled = false;
    }else{
        txt_female.disabled = true;
        txt_female.value = "";
    }
}

let disEnKid = () => {
    if(chk_kid.checked){
        txt_kid.disabled = false;
    }else{
        txt_kid.disabled = true;
        txt_kid.value = "";
    }
}

let CancelFuc = () => {
    id_headname.value = "";
    txt_male.value = "";
    txt_female.value = "";
    txt_kid.value = "";
    chk_male.checked = false;
    chk_female.checked = false;
    chk_kid.checked = false;
    txt_male.disabled = true;
    txt_female.disabled = true;
    txt_kid.disabled = true;
    rdo_country[0].checked = true;
    disCount[0].selectedIndex = 0;

    show_name.innerHTML = "xxx";
    show_male.innerHTML = "xxx";
    show_female.innerHTML = "xxx";
    show_kid.innerHTML = "xxx";
    show_traget.innerHTML = "xxx";
    show_discount.innerHTML = "xxx";
    show_total_pay.innerHTML = "xxx";

}

chk_male.addEventListener('click', disEnMale);
chk_female.addEventListener('click', disEnFemale);
chk_kid.addEventListener('click', disEnKid);

cal.addEventListener('click', calAndSHowtour);
cancel.addEventListener('click',CancelFuc);
