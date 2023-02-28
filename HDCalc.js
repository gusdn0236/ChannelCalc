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

  // 총 가격 출력
  document.getElementById("result").innerHTML = `총 가격: ${totalPriceWithComma}원`;
}

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
