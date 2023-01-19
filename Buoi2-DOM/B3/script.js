let isEmail = email => {
    let regexp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    if (regexp.test(email)) {
        alert('Email Hợp Lệ');
        return true;
    } else {
        alert('Email không hợp lệ');
        return false;
    }
}