let is_usZipCode= str =>{
    let regexp = /^[0-9] {5} (?:-[0-9]{4})?$/;
    if(regexp.test(str)){
        return true;
    }
    return false;
}