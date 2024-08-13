// .length uzunligi
// .includes('') ichida bormi
// .indexOf('us')
// .toLocaleLowerCase() kichik harf
// .toLocaleUpperCase() katta harf
// .trim()

let ism = prompt("ism kiriting");

let harf = prompt("harf kiritng");

if (ism.toLocaleLowerCase().includes(harf)) {
  alert(`${ism} ismida ${harf} bor`);
} else {
  alert(`${ism} ismida ${harf} harfi mavjud emas`);
}
