function loadJSON(file,callback){
  let xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function() {
    if(xhr.readyState===4&&xhr.status=="200") {
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}

loadJSON("data.json",function(text) {
  var data=JSON.parse(text);
  console.log(data);
  personal(data.personalDetails);
  co(data.careerobject);
  education(data.educationalqualification);
  Tech(data.TECNICALSKILLS);
  Habb(data.Hobbies);
});
var main=document.querySelector(".main");

function personal(details) {

  var left=document.createElement("div");
  left.classList.add("left");
  main.appendChild(left);

  var left1=document.createElement("div");
  left1.classList.add("left1");
  left.appendChild(left1);
  var left2=document.createElement("div");
  left2.classList.add("left1");
  left.appendChild(left2);

  let image=document.createElement("img");
  image.src="img.png";
  left1.appendChild(image);
  var myname=document.createElement("h2");
myname.textContent=details.myname;
  left1.appendChild(myname);
  var designation=document.createElement("h3");
designation.textContent=details.designation;
  left1.appendChild(designation);
  left.appendChild(document.createElement("hr"));
  var fname=document.createElement("h3");
fname.textContent=details.fname;
  left1.appendChild(fname);
  var email=document.createElement("h3");
email.textContent=details.email;
  left1.appendChild(email);
  var phoneno=document.createElement("h3");
phoneno.textContent=details.phoneno;
  left1.appendChild(phoneno);
  var address=document.createElement("h3");
address.textContent=details.address;
  left1.appendChild(address);
}
var right=document.createElement("div");
right.classList.add("right");
main.appendChild(right);

function co(details1) {
  var obj=document.createElement("h2");
  obj.textContent=details1.infer;
  right.appendChild(obj)
  var obj=document.createElement("h3");
  obj.textContent=details1.info;
  right.appendChild(obj)
}
functiont education(details2){
  for (i in details2){
  var obj=document.createElement("h2");
  obj.textContent=details2[i].qualification1;
  right.appendChild(obj)
  var obj=document.createElement("h2");
  obj.textContent=details2[i].inst1;
  right.appendChild(obj)
  var obj=document.createElement("h2");
  obj.textContent=details2[i].qualification2;
  right.appendChild(obj)
  var obj=document.createElement("h2");
  obj.textContent=details2[i].inst2;
  right.appendChild(obj)
  var obj=document.createElement("h2");
  obj.textContent=details2[i].qualification3;
  right.appendChild(obj)
  var obj=document.createElement("h2");
  obj.textContent=details2[i].inst3;
  right.appendChild(obj)
}

}
