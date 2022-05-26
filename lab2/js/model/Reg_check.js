function RegCheck(){
    var first_name = document.getElementById('first_name').value;
    var last_name = document.getElementById('last_name').value;
    var email = document.getElementById('email').value;
    var dtb = document.getElementById('dtb').value;
    var password = document.getElementById('password').value;
    var password_2 = document.getElementById('password-2').value;

    var email_reg = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    var name_reg = new RegExp('[a-zA-Zа-яА-Я]');
    var password_reg = new RegExp('(?=.*[A-Za-z])(?=.*[0-9]){8,}');

        if (first_name == '' || last_name == '' || email == '' || dtb == '' || password =='' || password_2 == ''){
            alert("Заповніть усі поля форми реєстрації !");
        }
        else if (!name_reg.test(first_name)){
            alert('Некоректні символи імені');
        }
        else if (!name_reg.test(last_name)){
            alert('Некоректні символи прізвища');
        }
        else if(!email_reg.test(email)){
            alert('Некоректний формат email !');
        }
        else if(!password_reg.test(password)){
            alert('Некоректний пароль !');
        }
       else if (password != password_2){
            alert("Схоже, пароль при повторенні не співпадає !");   
        }
        else{
            alert("Реєстрація успішна");
        }
}