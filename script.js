function submitEmail() {
    const emailValue = document.getElementById("email").value.toLocaleLowerCase();
    const give = document.getElementById("give");
    const checkEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i;
    const check = emailValue.match(checkEmail);
    const sectionContent = document.querySelector('#info .section-content');
    const submitControl = document.querySelector('.submit-email');
    if (check) {
        sectionContent.style.display = 'block';
        submitControl.style.display = 'none';
        give.innerHTML = '';
    }
    else {
        give.innerHTML = 'Please enter a REAL email address💔';
    }
}


function handleOnMouseOver(element) {
    const button = element.querySelector('.view-more, .less-more');
    button.style.display = 'inline-block';
}


function handleOnMouseOut(element) {
    const button = element.querySelector('.view-more, .less-more');
    if (button.classList.contains('view-more')) {
        button.style.display = 'none';
    }
}


function handleViewMore(element) {
    const parentElement = element.closest('.parent');
    const sectionContent = parentElement.querySelectorAll('.section-content');
    if (element.classList.contains('view-more')) {
        sectionContent.forEach((item) => {
            item.style.display = 'block';
        });

        element.classList.remove('view-more');
        element.classList.add('less-more');
        element.innerHTML = 'Less more';
    }
    else {
        sectionContent.forEach((item) => {
            item.style.display = 'none';
        });
        element.classList.remove('less-more');
        element.classList.add('view-more');
        element.innerHTML = 'View More';
    }
}