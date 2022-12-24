class Github {
    constructor() {
        this.client_id = '01870fac5cf1ce714339';
        this.client_secret = 'cc0a127a7cfa04b10e3b71e230a09ccafab88118';
        this.repos_count =  10;
        this.repos_sort = 'created: asc';
    }


    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_srcret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_srcret=${this.client_secret}`);

        const profile =  await profileResponse.json();

        const repos =  await repoResponse.json();

        return{
            profile,repos
      }

    }

}