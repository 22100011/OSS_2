function input_button() {
  // 필수 입력 항목 확인
  let number = document.getElementById("number").value;
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let year = document.getElementById("year").value;
  let price = document.getElementById("price").value;
  if ( number=== "") {
    alert("책 번호를 입력하세요");
    return false;
  }
  if (title === "") {
    alert("책 제목을 입력하세요.");
    return false;
  }
  if (author === "") {
    alert("저자를 입력하세요.");
    return false;
  }
  if (year === "" || isNaN(year)) {
    alert("출판년도를 입력하세요.");
    return false;
  }
  if (price === "" || isNaN(price)) {
    alert("가격을 입력하세요. (숫자만)");
    return false;
  }

  alert("게시물이 추가됩니다.");
  return true;
}