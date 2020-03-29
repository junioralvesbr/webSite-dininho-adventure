const $eggs = document.querySelectorAll('.separator-egg');
const $key = document.querySelector('.key-container');
let eggs = []

$eggs.forEach(($item, i) => {
    $item.addEventListener('click', () => {
        eggs[i] = `egg${i}`;
        keyAction(eggs);
    });
});

function keyAction(eggs) {
    let newEggs = eggs.filter(() => true);

    if (newEggs.length == 4) {
        $key.classList.add('-active');
    }
}