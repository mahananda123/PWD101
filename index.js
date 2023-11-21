document.getElementById('dob').addEventListener('change', function () {
    const dob = new Date(this.value);
    const today= new Date();
    const age=today.getFullYear()-dob.getFullYear();
    
    if (age<18 || age>55){
        alert('age must be between 18 and 55.');
        this.value='';
    }
});

document.getElementById('registrationForm').addEventListener('submit',function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
const dob =document.getElementById('dob').value;
const terms = document.getElementById('terms').checked;

if ( name && email && password && dob && terms) {
    const table = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    const row=table.insertRow(0);
    const  cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    cell1.innerHTML=name;
    cell2.innerHTML=email;
    cell3.innerHTML=password;
    cell4.innerHTML=dob;
    cell5.innerHTML=terms ? 'Yes':'No';

    document.getElementById('name').value='';
    document.getElementById('email').value='';
    document.getElementById('password').value='';
    document.getElementById('dob').value='';
    document.getElementById('terms').checked=false;
}else{
    alert('please fill out all fields and acccept the terms');

    }
});