function calculate() {
  // 선택된 규격, 종류, 수량 가져오기
  const size = parseInt(document.getElementById("size").value);
  const type = parseInt(document.getElementById("type").value);
  const quantityStr = document.getElementById("quantity").value;

  if (quantityStr.trim() === "") {
    alert("수량을 입력해주세요.");
    return;
  }
  const quantity = parseInt(quantityStr);
  if (isNaN(quantity) || quantity <= 0) {
    alert("수량을 입력해주세요.");
    return;
  }

  // 선택된 종류에 따라 가격표 설정
  let priceTable = [];
  switch (type) {
    case 1:
      priceTable = [31000, 31000, 35000, 39000, 42000, 45000, 48000, 52000, 56000, 60000, 65000, 70000, 76000, 83000, 90000, 99000, 115000, 134000, 155000, 165000, 175000, 193000, 210000, 234000, 280000];
      break;
    case 2:
      priceTable = [43000, 43000, 46000, 50000, 54000, 59000, 63000, 69000, 75000, 82000, 88000, 95000, 105000, 115000, 125000, 134000, 147000, 160000, 175000, 193000, 210000, 230000, 250000, 280000, 320000];
      break;
    case 3:
      priceTable = [53000, 53000, 57000, 62000, 68000, 75000, 82000, 90000, 100000, 110000, 123000, 135000, 152000, 170000, 187000, 222000, 246000, 281000, 316000, 351000, 386000, 421000, 456000, 495000, 530000];
      break;
    case 4:
      priceTable = [46000, 46000, 51000, 55000, 60000, 66000, 72000, 78000, 85000, 93000, 103000, 112000, 120000, 135000, 148000, 175000, 202000, 229000, 256000, 291000, 324000, 356000, 396000, 438000, 480000];
      break;
    case 5:
      priceTable = [40000, 40000, 45000, 53000, 60000, 65000, 70000, 75000, 82000, 90000, 100000, 110000, 120000, 130000, 145000, 159000, 177000, 196000, 215000];
      break;
    case 6:
      priceTable = [28000, 28000, 29000, 31000, 33000, 36000, 38000, 42000, 46000, 49000, 52000, 57000, 60000, 66000, 75000, 85000, 97000];
      break;
    case 7:
      priceTable = [57000, 57000, 69000, 80000, 90000, 95000, 100000, 107000, 118000, 130000, 148000, 160000, 171000, 193000, 211000, 252000, 298000, 344000, 402000, 494000, 526000, 624000, 666000, 745000, 828000];
      break;
    case 8:
      priceTable = [67000, 74000, 85000, 104000, 117000, 124000, 131000, 139000, 154000, 169000, 193000, 208000, 223000, 251000, 275000, 328000, 350000, 388000, 448000, 523000, 642000, 684000, 814000, 867000, 968000, 1076000];
      break;
    case 9:
      priceTable = [43000, 43000, 48000, 57000, 65000, 72000, 77000, 83000, 90000, 99000, 110000, 122000, 131000, 149000, 162000, 194000, 227000, 259000, 308000, 386000, 405000, 491000, 518000, 583000, 648000];
      break;
    case 10:
      priceTable = [45000, 45000, 50000, 59000, 68000, 78000, 89000, 108000, 126000, 138000, 151000, 162000, 189000, 216000, 234000, 252000, 306000, 369000, 441000, 522000];
      break;
    default:
      alert("종류를 선택해주세요.");
      return;
  }

  // 선택된 규격에 해당하는 단가 가져오기
  let index = -1;
  if (size >= 200 && size <= 1000 && size % 50 === 0) {
    index = (size - 200) / 50;
  } else if (size > 1000 && size <= 2000 && size % 100 === 0) {
    index = 16 + (size - 1000) / 100;
  }

  if (index === -1 || index >= priceTable.length) {
    alert("단가표에 해당 금액이 없습니다.");
    return;
  }

  const unitPrice = priceTable[index];

  // 총 가격 계산
  const totalPrice = unitPrice * quantity;

  // 총 가격에 쉼표 추가
  const totalPriceWithComma = totalPrice.toLocaleString();

  // 결과 출력
  const result = `${document.getElementById("type").options[type - 1].text} ${size}mm  × ${quantity}개 = ${totalPriceWithComma}원`;
  document.getElementById("result").innerHTML = result + "<br><br>";
}

//엔터키로 계산하기 버튼 작동
document.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    if (event.target.tagName.toLowerCase() === "input") {
      event.preventDefault();
      calculate();
    }
  }
});

// 사용자가 input 박스를 클릭하면 기본값 지우기
document.getElementById("quantity").addEventListener("click", function () {
  const input = document.getElementById("quantity");
  if (input.value === "1") {
    input.value = "";
  }
});

//바후렘, 일반후렘 버튼변수
const barFrame = document.getElementById("barFrame");
const normalFrame = document.getElementById("normalFrame");

//바후렘, 일반후렘 컨테이너 변수
const barContainer = document.getElementById("barContainer");
const normalContainer = document.getElementById("normalContainer");

//바 후렘 변수
const alminumBar = document.getElementById("alminumBar");
const galbaBar = document.getElementById("galbaBar");

//바후렘 계산기변수(div 박스묶음용)
const alminumBarCalc = document.getElementById("alminumBarCalc");
const galbaBarCalc = document.getElementById("galbaBarCalc");

//일반후렘 계산기변수(div 박스묶음용)
const normalCalc = document.getElementById("normalCalc");

//실제 계산용 일반후렘 변수
const normal_calc = document.getElementById("normal-calc");
const normal_width = document.getElementById("normal-width");
const normal_height = document.getElementById("normal-height");
const normal_result = document.getElementById("normal-result");

//실제 계산용 일반후렘 계산하기 버튼
const normal_calc_btn = document.getElementById("normal-calc-btn");

//실제 계산용 알미늄 바 변수
const alminumBar_calc = document.getElementById("alminumBar-calc");
const alminumBar_length = document.getElementById("alminumBar-length");
const alminumBar_result = document.getElementById("alminumBar-result");

//실제 계산용 갈바 바 변수
const galbaBar_calc = document.getElementById("galbaBar-calc");
const galbaBar_length = document.getElementById("galbaBar-length");
const galbaBar_height = document.getElementById("galbaBar-height");
const galbaBar_result = document.getElementById("galbaBar-result");

//실제 계산용 알미늄,갈바 계산하기버튼
const alminumBar_calc_btn = document.getElementById("alminumBar-calc-btn");
const galbaBar_calc_btn = document.getElementById("galbaBar-calc-btn");

//숨기기가 가능한 박스묶음
const canHide = document.getElementsByClassName("canHide");

// 모든 계산기 숨기는 함수
function hideAllCanHide() {
  for (let i = 0; i < canHide.length; i++) {
    canHide[i].style.display = "none";
  }
}

//초기화면 버튼 숨기기
hideAllCanHide();

//바후렘 버튼추가를 눌렀을때
barFrame.addEventListener("click", () => {
  hideAllCanHide();
  barContainer.style.display = "block";
  alminumBarCalc.style.display = "none";
  galbaBarCalc.style.display = "none";
});

//일반 후렘 버튼추가 를 눌렀을때
normalFrame.addEventListener("click", () => {
  hideAllCanHide();
  normalContainer.style.display = "block";
});

//알미늄 후렘 버튼을 눌렀을때
alminumBar.addEventListener("click", () => {
  galbaBarCalc.style.display = "none";
  alminumBarCalc.style.display = "block";
});

//갈바 후렘 버튼을 눌렀을때
galbaBar.addEventListener("click", () => {
  alminumBarCalc.style.display = "none";
  galbaBarCalc.style.display = "block";
});

// 얼마늄바 후렘 계산 버튼 클릭 시
alminumBar_calc_btn.addEventListener("click", () => {
  const length = alminumBar_length.value;
  const price = 45000;
  const result = length * price;
  alminumBar_result.textContent = `알미늄 바 후렘 ${length}M = ${formatPrice(result)}원`;
});

// 갈바 후렘 계산 버튼 클릭 시
galbaBar_calc_btn.addEventListener("click", () => {
  const height = galbaBar_height.value;
  const length = galbaBar_length.value;
  let price;
  if (height === "200") {
    price = 45000;
  } else if (height === "300") {
    price = 50000;
  } else if (height === "400") {
    price = 60000;
  }
  const result = length * price;
  galbaBar_result.textContent = `갈바 바 후렘 ${height}mm, ${length}M = ${formatPrice(result)}원`;
});

// 일반 후렘 계산 버튼 클릭 시
normal_calc_btn.addEventListener("click", () => {
  const width = normal_width.value;
  const height = normal_height.value;
  const result = ((width * height) / 1000000) * 120000;
  normal_result.textContent = `일반 후렘(갈바) ${width} * ${height} = ${formatPrice(result)}원`;
});

// 가격 포맷 함수
function formatPrice(price) {
  return new Intl.NumberFormat("ko-KR", { maximumSignificantDigits: 3 }).format(price);
}

// 알미늄바 엔터키로 계산하기-M에 focus이벤트
alminumBar_length.addEventListener("focus", () => {
  document.addEventListener("keydown", calculateOnEnter);
});

//갈바 바 엔터키로 계산하기 -M에 focus 이벤트
galbaBar_length.addEventListener("focus", () => {
  document.addEventListener("keydown", calculateOnEnter);
});

// 일반후렘 엔터키로 계산하기-M에 focus이벤트
normal_width.addEventListener("focus", () => {
  document.addEventListener("keydown", calculateOnEnter);
});
normal_height.addEventListener("focus", () => {
  document.addEventListener("keydown", calculateOnEnter);
});

// enter 키 이벤트 핸들러 함수
function calculateOnEnter(event) {
  if (event.keyCode === 13) {
    const activeInput = document.activeElement;
    if (activeInput.tagName.toLowerCase() === "input") {
      event.preventDefault();
      const calcBtn = activeInput.parentElement.querySelector("button");
      calcBtn.click();
    }
  }
}

// 해당 input 요소에서 focus가 해제될 때, enter 키 이벤트 핸들러 제거
alminumBar_length.addEventListener("blur", () => {
  document.removeEventListener("keydown", calculateOnEnter);
});
