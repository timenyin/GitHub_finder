class UI {

    constructor() {
    this.profile = document.getElementById('profile');
    }

    //--------Show Profile---------------

    showProfile(user) {
          //  console.log(user);
          this.profile.innerHTML = `
                <div class"card card-body mb-3">
                   <div class = "row">
                        <div class="col col-12 col-md-3">
                            <img class="img-fluid mb-2"  
                            src="${user.avatar_url}" style="border-radius: 10px;">
                            <a href="${user.html_url}" target="_blank" class="btn btn-secondary btn-block mb-4">View Profile</a>
                        </div>
                        <div class="col col-12 col-md-9">

                        <span class="badge badge-danger">
                            Public Repos: ${user.public_repos}
                        </span>
                        <span class="badge badge-primary">
                            Public Gist: ${user.public_gist}
                        </span>
                        <span class="badge badge-warning">
                            Followers: ${user.followers}
                        </span>
                        <span class="badge badge-secondary text-white">
                            Following: ${user.following}
                        </span>
                        <br><br>
                        <ul class="list-group bg-dark text-warning">
                        <li class="list-group-item bg-dark">Company: ${user.company}</li> 
                        <li class="list-group-item">Website/Blog: ${user.blog}</li> 
                       
                        <li class="list-group-item bg-dark">Location: ${user.location}</li> 
                        <li class="list-group-item">Member Since: ${user.created_at}</li> 
                        </ul>
                        </div>
                   </div>
                </div>
                    <h3 class="page-heading my-3 text-uppercase text-white text-center">Latest Repository</h3>
                    <div id="repos"></div>
          `;
    }


    //---------Show Repose-------------------
    showRepos(repos){
        let output = '';

        repos.forEach(function(repo){
            output += `

            <div class="card card-body mb-2" style="box-shadow: 0rem 0rem 0.5rem #8b3920;">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" class="text-white"  target="_blank">${repo.name}
                        </a>
                    </div>

                    <div class="col-md-6">
                <span class="badge badge-primary ml-2">
                   Stars: ${repo.stargazers_count}
                </span>
                <span class="badge badge-secondary ml-2">
                    Watchers: ${repo.watchers_count}
                </span>
                <span class="badge badge-warning">
                    Forks: ${repo.forks_count}
                </span>
                 </div>
                </div>
            </div>
            `;
        });

        //--------Output the repos----------
        document.getElementById('repos').innerHTML = output;
    }

    //--------show alert massage-----------
    showAlert(message, className  ) {

        //-----clear any remaining alerts------------
        this.clearAlert();
        //--Create div----------
        const div = document.createElement('div');

        //---Add Classess------------
        div.className = className;
        //------Add text---------
        div.appendChild(document.createTextNode(message));
        //---Get parent-------
    const container = document.querySelector('.searchContainer');
        //-Get Search Box---------
        const search = document.querySelector('.search');

        //----Insert Alert----
        container.insertBefore(div, search);


        //--------Timeout after 3secs alert----------
        setTimeout(() => {
            this.clearAlert();
        }, 3000); 


    }

     //-----Clear alert Message--------
     clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if(currentAlert) {
            currentAlert.remove();
        }
    }


    //----clear profile---------
    clearProfile() {
        this.profile.innerHTML = ''; 
    }
}