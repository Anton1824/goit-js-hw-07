const allList = document.querySelectorAll("li.item");
console.log(`Number of categories: ${allList.length}`);
allList.forEach((item) => {
    console.log(`Text element:${item.firstElementChild.textContent}`);
    console.log(`Total elements:${item.lastElementChild.children.length}`);
});
// for (let i = 0; i < allList.length; i++) {
//     console.log(`Text element:${allList[i].firstElementChild.textContent}`);
//     console.log(`Total elements:${allList[i].lastElementChild.children.length}`);
// }