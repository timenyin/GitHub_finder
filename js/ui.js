class UI {
    constructor() {
      this.profile = document.getElementById('profile');
    }
  
    //--------Show Profile---------------
    showProfile(user) {
      this.profile.innerHTML = `
        <div class="card card-body mb-3">
          <div class="row">
            <!-- Profile Picture and Button -->
            <div class="col col-12 col-md-3 text-center">
              <img src="${user.avatar_url}" class="img-fluid rounded-circle mb-3" alt="Profile Picture">
              <a href="${user.html_url}" target="_blank" class="btn btn-primary w-100 mb-4">View Profile</a>
            </div>
            <!-- Profile Details -->
            <div class="col col-12 col-md-9">
              <span class="badge text-bg-success-subtle rounded-pill mb-3">
                <span class="h6 text-uppercase">Public Repos: ${user.public_repos}</span>
              </span>
              <span class="badge text-bg-success-subtle rounded-pill mb-3">
                <span class="h6 text-uppercase">Public Gist: ${user.public_gists || 'undefined'}</span>
              </span>
              <span class="badge text-bg-success-subtle rounded-pill mb-3">
                <span class="h6 text-uppercase">Followers: ${user.followers}</span>
              </span>
              <span class="badge text-bg-success-subtle rounded-pill mb-3">
                <span class="h6 text-uppercase">Following: ${user.following}</span>
              </span>
              <br><br>
              <!-- Additional Details -->
              <ul class="list-group bg-dark text-warning">
                <li class="list-group-item bg-dark">
                  <span class="badge text-bg-primary-desat-subtle rounded-pill">
                    <span class="h6 text-uppercase">Company:</span> ${user.company || 'N/A'}
                  </span>
                </li>
                <li class="list-group-item">
                  <span class="badge text-bg-primary-desat-subtle rounded-pill">
                    <span class="h6 text-uppercase">Website/Blog:</span> ${user.blog || 'N/A'}
                  </span>
                </li>
                <li class="list-group-item bg-dark">
                  <span class="badge text-bg-primary-desat-subtle rounded-pill">
                    <span class="h6 text-uppercase">Location:</span> ${user.location || 'N/A'}
                  </span>
                </li>
                <li class="list-group-item">
                  <span class="badge text-bg-primary-desat-subtle rounded-pill">
                    <span class="h6 text-uppercase">Member Since:</span> ${new Date(user.created_at).toLocaleDateString()}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <h2 class="page-heading my-3 text-uppercase text-warning text-center">Latest Repository</h2>
        <div id="repos"></div>
      `;
    }
  
    //---------Show Repos---------------
    showRepos(repos) {
        let output = '<ul class="list-group">';
      
        repos.forEach(function (repo) {
          output += `
            <li class="list-group-item bg-dark mb-3 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
              <span class="mb-2 mb-md-0">
                <span class="badge text-bg-primary-desat-subtle rounded-pill">
                  <span class="h6 text-uppercase">Repository Name:</span> 
                  <a href="${repo.html_url}" target="_blank" class="text-white">${repo.name}</a>
                </span>
              </span>
              <span class="d-flex flex-wrap gap-2 justify-content-md-end">
                <span class="badge text-bg-primary-desat-subtle rounded-pill">
                  <span class="h6 text-uppercase">Stars:</span> ${repo.stargazers_count}
                </span>
                <span class="badge text-bg-primary-desat-subtle rounded-pill">
                  <span class="h6 text-uppercase">Watchers:</span> ${repo.watchers_count}
                </span>
                <span class="badge text-bg-primary-desat-subtle rounded-pill">
                  <span class="h6 text-uppercase">Forks:</span> ${repo.forks_count}
                </span>
              </span>
            </li>
          `;
        });
      
        output += '</ul>';
      
        // Output the repos
        document.getElementById('repos').innerHTML = output;
      }
      
      
  
    //--------Show Alert Message-----------
    showAlert(message, className) {
      // Clear any remaining alerts
      this.clearAlert();
  
      // Create div
      const div = document.createElement('div');
  
      // Add Classes
      div.className = className;
  
      // Add Text
      div.appendChild(document.createTextNode(message));
  
      // Get Parent
      const container = document.querySelector('.searchContainer');
  
      // Get Search Box
      const search = document.querySelector('.search');
  
      // Insert Alert
      container.insertBefore(div, search);
  
      // Timeout after 3 seconds
      setTimeout(() => {
        this.clearAlert();
      }, 3000);
    }
  
    //-----Clear Alert Message--------
    clearAlert() {
      const currentAlert = document.querySelector('.alert');
      if (currentAlert) {
        currentAlert.remove();
      }
    }
  
    //----Clear Profile---------
    clearProfile() {
      this.profile.innerHTML = '';
    }
  }
  