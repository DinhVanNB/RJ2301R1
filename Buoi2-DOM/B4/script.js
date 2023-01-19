checkAccount = listAccount => {
    let regexp = /^[_a-z0-9]{6,}$/;
    listAccount.map(account => {
        if (regexp.test(account)) {
            console.log(`${account} là tài khoản hợp lệ`)
        } else 
            console.log(`${account} là tài khoản không hợp lệ`)
    })
}