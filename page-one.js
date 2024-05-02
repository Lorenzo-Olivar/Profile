let activeIndex = 0;

const allCards = document.getElementsByClassName("card");

const handleRightClick = () => {
    // switch active index
    const nextIndex = activeIndex + 1 <= allCards.length - 1 ? activeIndex + 1 : 0;

    const currentCard = document.querySelector(`[data-index="${activeIndex}"]`),
    nextCard = document.querySelector(`[data-index="${nextIndex}"]`);

    // Active card becomes Unactive

    currentCard.dataset.status = "right";

    // Before active

    nextCard.dataset.status = "from-right"

    // Next card becomes Active

    setTimeout(() => {
        nextCard.dataset.status = "active";
        activeIndex = nextIndex;
    })
    console.log(activeIndex);
}

const handleLeftClick = () => {
    // switch active index
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : allCards.length - 1;

    const currentCard = document.querySelector(`[data-index="${activeIndex}"]`),
    nextCard = document.querySelector(`[data-index="${nextIndex}"]`);

    // Active card becomes Unactive

    currentCard.dataset.status = "left";

    // Before active

    nextCard.dataset.status = "from-left"

    // Next card becomes Active

    setTimeout(() => {
        nextCard.dataset.status = "active";
        activeIndex = nextIndex;
    })
    console.log(activeIndex);
}