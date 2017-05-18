const getData = (url) => {
    switch (url) {
        case '/gitapi/foo':
            return {
                foo: 'bar',
                file: 'api.js'
            };
        case '/gitapi/user':
            return {
                error: {},
                response: {},
                body: JSON.stringify({
                    login: 'Robin Dudette',
                    followers: '5',
                    url: 'https://test.test.test'
                })
            };
        case '/gitapi/get-basic-list':
            return {
                result: [
                    {
                        html_url: 'https://gist.github.com/a023c7db77926ff58d35087821e12020',
                        id: 'a023c7db77926ff58d35087821e12020',
                        git_pull_url: 'https://gist.github.com/a023c7db77926ff58d35087821e12020.git',
                        description: 'Simple React Component'
                    },
                    {
                        html_url: 'https://gist.github.com/17f8ec886c1ae22f66501fc3cbe760ac',
                        id: '17f8ec886c1ae22f66501fc3cbe760ac',
                        git_pull_url: 'https://gist.github.com/17f8ec886c1ae22f66501fc3cbe760ac.git',
                        description: 'React Npm Install'
                    }
                ]
            };
        default:
            return {};
    }
};

export default getData;
