const getData = (url) => {
    switch (url) {
        case '/api/foo':
            return {
                foo: 'bar',
                file: 'api.js'
            };
        case '/api/user':
            return {
                error: {},
                response: {},
                body: JSON.stringify({
                    login: 'Robin Dudette',
                    followers: '5',
                    url: 'https://test.test.test'
                })
            };
        case '/api/gist-test':
            return {
                error: {},
                response: {},
                result: JSON.stringify({
                    created_at: 'now',
                    description: 'mock',
                    html_url: 'mock.site',
                    updated_at: 'now2',
                    url: 'mock.site2'
                })
            };
        default:
            return {};
    }
};

export default getData;
