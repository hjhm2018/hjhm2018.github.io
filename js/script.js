let resume = document.getElementById('resume');
let hideResume = document.getElementById('hideResume');
let showResume = document.getElementById('showResume');
let buttonMessage = document.getElementById('buttonMessage');
let contactForm = document.getElementById('contactForm');
let linkedInBadge = document.getElementById('linkedInBadge');
let cancelButton = document.getElementById('cancelButton');
let contactHeading = document.getElementById('contactHeading');
let normalImage = document.getElementById('normalImage');
let responsiveImage = document.getElementById('responsiveImage');

if (resume) {
    showResume.onclick = () => {
        resume.style.display = 'inline-block';
        hideResume.style.display = 'inline-block';
        showResume.style.display = 'none';
    }

    hideResume.onclick = () => {
        resume.style.display = 'none';
        hideResume.style.display = 'none';
        showResume.style.display = 'inline-block';
    }
}

if (buttonMessage) {
    buttonMessage.onclick = () => {
        contactForm.style.display = 'inline-block';
        cancelButton.style.display = 'inline-block';
        contactForm.style.marginTop = '-50px';
        buttonMessage.style.display = 'none';
        linkedInBadge.style.display = 'none';
        contactHeading.style.display = 'none';
    }

    cancelButton.onclick = () => {
        contactForm.style.display = 'none';
        cancelButton.style.display = 'none';
        buttonMessage.style.display = 'inline-block';
        linkedInBadge.style.display = 'inline-block';
        contactHeading.style.display = 'block';
    }
}

window.onresize = () => {
    if (normalImage || responsiveImage) {
        if (screen.width < 768) {
            normalImage.style.display = 'none';
            responsiveImage.style.display = 'block';
        } else if (screen.width > 768) {
            normalImage.style.display = 'block';
            responsiveImage.style.display = 'none';
        }
    }

    // console.log("Hello");
}

