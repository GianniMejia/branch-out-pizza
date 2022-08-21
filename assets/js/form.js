const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

const form = document.getElementById('form');

function emailComments() {
    const subject = 'New Comment';
    const body = 'Name: ' + name.value + '\n' + 'Email: ' + email.value + '\n' + 'Phone: ' + phone.value + '\n' + 'Comments: ' + comments.value;
    window.location.href = 'mailto:drerudin@gmail.com' +
    '?subject=' + subject + '&body=' + body;
}

function validateForm() {
    if (name.value === '') {
        alert('Please enter your name');
        return false;
    } else if (email.value === '') {
        alert('Please enter your email');
        return false;
    } else if (phone.value === '') {
        alert('Please enter your phone number');
        return false;
    } else if (comments.value === '') {
        alert('Please enter your comments');
        return false;
    } else {
        emailComments();
    }
}

