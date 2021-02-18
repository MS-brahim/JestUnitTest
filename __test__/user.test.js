const app = require('../app');
const User = require('../models/User')
const request = require('supertest');


test("Should get all user", async () => {
  const res = await request(app)
    .get("/user");
    expect((res.status)).toBe(200);
});

// test("Post new User success", async()=>{
//   const userObj ={
//     username:"newUserTest",
//     email:"emailTest@test.com",
//     password:"12ZA",
//   };
//   try {
//     // const count = await User.count();
//     await request(app).post('/user/add').send(userObj)
//     const newUser = await User.save()
//     expect(newUser).toBe(userObj);
//   } catch (err) {
//       console.log(err)
//   }
// })

test('delete one user', async()=>{
  const userDel = await User.delete({_id:req.body.id});
  const res = await request(app).delete('user/delete/'+userDel.id);
  expect(res.status).toBe(200);
  expect(typeof res.body).toBe("object");
  expect(res.body.message).toBe("User has been Deleted successFully!")
})



// test("should get all user", async () => {
//   const res = await request(app)
//     .get("/all");
//     expect((res.status)).toBe(404);
// });

//   test("Get an email that starts with a letter a", async () => {
//     const res = await request(app)
//       .get("/user");
//       expect(JSON.parse(res.text)[1].email).toBe('emailTest@test.com');
// });