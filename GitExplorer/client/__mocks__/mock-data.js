const getData = (url) => {
    switch (url) {
        case '/foo':
            return {
                foo: 'bar',
                file: 'getFoo.js'
            };
        case '/git-user/user':
            return {
                error: {},
                response: {},
                body: JSON.stringify({
                    login: 'Robin Dudette',
                    followers: '5',
                    url: 'https://test.test.test'
                })
            };
        case '/gist/list':
            return {
                result: [
                    {
                        htmlUrl: 'https://gist.github.com/a023c7db77926ff58d35087821e12020',
                        id: 'a023c7db77926ff58d35087821e12020',
                        gitPullUrl: 'https://gist.github.com/a023c7db77926ff58d35087821e12020.git',
                        description: 'Simple React Component'
                    },
                    {
                        htmlUrl: 'https://gist.github.com/17f8ec886c1ae22f66501fc3cbe760ac',
                        id: '17f8ec886c1ae22f66501fc3cbe760ac',
                        gitPullUrl: 'https://gist.github.com/17f8ec886c1ae22f66501fc3cbe760ac.git',
                        description: 'React Npm Install'
                    }
                ]
            };
        default:
            return {};
    }
};

export default getData;
