// Manage skills an traits display

let ToggleButtons = document.getElementsByClassName('dropdown-button');

for (button of ToggleButtons) {

    let chevronIcon = button.firstChild;
    let parent = button.parentElement;
    let container = parent.nextElementSibling;

    console.log(container);

    // rotate chevron  
    const rotate = () => {
        if (chevronIcon.classList.contains('rotate')) {
            chevronIcon.classList.remove('rotate');
        } else {
            chevronIcon.classList.add('rotate');
        }
    }

    // Show/Hide comment section
    const show = () => {
        if (container.classList.contains('dropdown')) {
            container.classList.remove('dropdown');
        } else {
            container.classList.add('dropdown');
        }
    }

    //trigger both above functions when chevron is clicked
    button.addEventListener("click", () => {
        rotate();
        show();
    });
}
