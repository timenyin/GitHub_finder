//----Intiation of github---------
const github = new Github;

const ui = new UI;


// -------------Search input----------
const searchUser = document.getElementById('searchUser');


//------------Search Input Event Listener-------
searchUser.addEventListener('keyup', (e) => {

    //----GET INput Text-----------
    const userText = e.target.value;

    if(userText !== ''){

        //console.log(userText);

        //----Making Http Calls-------------
        github.getUser(userText)
            .then(data => {
               // console.log(data);

               if(data.profile.message === 'Not Found') {
                    //-----Show alert--------
                     ui.showAlert('User not Found', 'alert alert-danger');
               } else {
                   //----Show Profile--------
                   ui.showProfile(data.profile);
                   ui.showRepos(data.repos);
               }


            })
    }else {
        //----Clear Profile----------
        ui.clearProfile();

    }

});