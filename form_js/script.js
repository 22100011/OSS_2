function country_select(){
  let selected = document.getElementById("country").value;
  document.getElementById('country').style.color = selected;
}

function state_select(){
  let selected = document.getElementById("state").value;
  document.getElementById('state').style.color = selected;
}

function Redeem_button(){
  let redeem = document.getElementById("Redeem").value;
  if(redeem == "EXAMPLECODE"){
    alert("정상 할인 쿠폰 입니다.");
  }else{
    alert("쿠폰 번호가 맞지 않습니다.")
  }
}

function fname_Over() {
  const element = document.getElementById("Fname");
  element.style.borderColor = "green";   
  element.style.borderWidth = "2px";    
  element.style.borderStyle = "solid";   
  element.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.3)";
}

function fname_Out(){
  const element = document.getElementById("Fname");
  element.style.borderColor = "gray";   
  element.style.borderWidth = "1px";    
  element.style.borderStyle = "solid";   
  element.style.boxShadow = "none";
}

function lname_Over() {
  const element = document.getElementById("Lname");
  element.style.borderColor = "green";   
  element.style.borderWidth = "2px";    
  element.style.borderStyle = "solid";   
  element.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.3)";
}

function lname_Out(){
  const element = document.getElementById("Lname");
  element.style.borderColor = "gray";   
  element.style.borderWidth = "1px";    
  element.style.borderStyle = "solid";   
  element.style.boxShadow = "none";
}

function checkKey(event){
  let email = document.getElementById("email").value
  let key = event.key;
  if(key === "@"){
    document.getElementById("email").value = email + "@gmail.com";
    event.preventDefault();
  }
}

function left_button(){
  // 폼 요소 가져오기
  const form = document.getElementById('formAll');
  // 폼의 유효성 검사
  if (form.checkValidity()) {
      // 모든 필수 입력이 채워진 경우
      alert("구매 완료");
  } else {
      // 필수 입력이 채워지지 않은 경우
      form.reportValidity(); // 유효하지 않은 필드를 사용자에게 알림
  }
}