const axios = require('axios')

const axiosInstanse = axios.create({
    baseURL: 'https://demoqa.com/',
    timeout: 1000,
    validateStatus: () => true,
})

test.each([
    ['9781449325862', 200],
    ['9781449331818', 200],
    ['9781449337711', 200],
    ['978144931', 400],
])(
    'GET BookStore/v1/Books with ISBN=%s status code is %d',
    async (ISBN, expectedStatus) => {
        const response = await axiosInstanse.get('BookStore/v1/Books', {
            params: { ISBN },
        })
        expect(response.status).toBe(expectedStatus)
    }
)
