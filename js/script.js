let resume = document.getElementById('resume');
let hideResume = document.getElementById('hideResume');
let showResume = document.getElementById('showResume');
let buttonMessage = document.getElementById('buttonMessage');
let contactForm = document.getElementById('contactForm');
let linkedInBadge = document.getElementById('linkedInBadge');
let cancelButton = document.getElementById('cancelButton');

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
    }

    cancelButton.onclick = () => {
        contactForm.style.display = 'none';
        cancelButton.style.display = 'none';
        buttonMessage.style.display = 'inline-block';
        linkedInBadge.style.display = 'inline-block';
    }


}
