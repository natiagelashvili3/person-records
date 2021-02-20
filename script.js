function formSubmit() {
    
    let name = document.getElementById('name');
    let lastname = document.getElementById('lastname');
    let age = document.getElementById('age');
    let gender = document.getElementById('gender');

    // 1. შემოწმება
    if(!name.value || !lastname.value || !age.value || !gender.value) {
       document.getElementById('error-msg').innerText = "Please Fill In All Fields";
       document.getElementById('error-msg').classList.add('active');

       return false;
    } else {
        document.getElementById('error-msg').innerText = "";
       document.getElementById('error-msg').classList.remove('active');
    }

    // 2. ახალი tr-ის შექმნა
    let trData = document.createElement('tr');
    let tdElements = `<td>`+name.value+`</td>
                      <td>`+lastname.value+`</td>
                      <td>`+age.value+`</td>
                      <td>`+gender.value+`</td>`;

    // 3. Delete button-ის შექმნა               
    // Delete button-ის გენერირება
    let deleteBtnContainer = document.createElement('td');  
    let deleteBtnSpan = document.createElement('span');
    deleteBtnSpan.classList.add('btn-delete');
    deleteBtnSpan.innerText = "Delete";
    deleteBtnSpan.addEventListener('click', function() {
        // tr ელემეტნის წაშლა
        if(confirm("Do you want to delete record?")) {
            this.parentNode.parentNode.remove();
        }        
    });
    deleteBtnContainer.appendChild(deleteBtnSpan);

    // 4. აწყობა
    trData.innerHTML = tdElements;
    trData.appendChild(deleteBtnContainer);

    document.getElementById('data-tbody').appendChild(trData);

    // 5 form restart
    document.getElementById('form').reset();
    
    return false;
}


var data = {

    name: '',
    lastname: '',
    age: '',
    gender: '',

    setData() {
        this.name = document.getElementById('name').value;
        this.lastname = document.getElementById('lastname').value;
        this.age = document.getElementById('age').value;
        this.gender = document.getElementById('gender').value;
    },

    insert() {

        this.setData();

        if(!this.validate()) return false;

        this.insertRecord();
        this.formReset();

        return false;

    },

    validate() {
        if(!this.name || !this.lastname || !this.age || !this.gender) {
            document.getElementById('error-msg').innerText = "Please Fill In All Fields";
            document.getElementById('error-msg').classList.add('active');
     
            return false;
         } else {
            document.getElementById('error-msg').innerText = "";
            document.getElementById('error-msg').classList.remove('active');

            return true;
         }
    },

    insertRecord() {
        let trData = document.createElement('tr');
        let tdElements = `<td>`+this.name+`</td>
                        <td>`+this.lastname+`</td>
                        <td>`+this.age+`</td>
                        <td>`+this.gender+`</td>`;

        let deleteBtnContainer = document.createElement('td');  
        let deleteBtnSpan = document.createElement('span');
        deleteBtnSpan.classList.add('btn-delete');
        deleteBtnSpan.innerText = "Delete";
        deleteBtnSpan.addEventListener('click', function() {
            // tr ელემეტნის წაშლა
            if(confirm("Do you want to delete record?")) {
                this.parentNode.parentNode.remove();
            }        
        });
        deleteBtnContainer.appendChild(deleteBtnSpan);

        trData.innerHTML = tdElements;
        trData.appendChild(deleteBtnContainer);

        document.getElementById('data-tbody').appendChild(trData);
    },

    formReset() {
        document.getElementById('form').reset();
    }

};
