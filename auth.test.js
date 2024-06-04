const axios = require('axios')


test('user can get token', async ()=>{
  const authResponse = await axios.post('https://demoqa.com/Account/v1/GenerateToken', {
    "userName": "SamSyzov",
    "password": "!zT8£Y*752SeSyJ"
  })
  expect(authResponse.status).toBe(200)
  expect(authResponse.data).toHaveProperty('token')
})

test('authorized user can get user info', async()=>{
  const authResponse = await axios.post('https://demoqa.com/Account/v1/GenerateToken', {
    "userName": "SamSyzov",
    "password": "!zT8£Y*752SeSyJ"
  })
  const token = authResponse.data.token
  const userInfoResponse = await axios.post('https://demoqa.com/Account/v1/User', {
    "userName": "SamSyzov",
    "password": "!zT8£Y*752SeSyJ"
  },
  {
    validateStatus: (status)=> true,
    Headers: {
      Authorization: `Bearer ${token}`
    }
  })

  console.log('BEFORE')
  expect(userInfoResponse.data.message).toBe("User exists!")
  expect(userInfoResponse.status).toBe(200)
  console.log('AFTER')
})

