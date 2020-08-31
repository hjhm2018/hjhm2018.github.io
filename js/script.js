let resume = document.getElementById('resume');
let hideResume = document.getElementById('hideResume');
let showResume = document.getElementById('showResume');

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
