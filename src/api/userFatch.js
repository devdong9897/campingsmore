import axios from "axios";

// const loginFetch = async newAccount => {
//   try {
//     const res = await axios.post("/sign-api/sign-in", newAccount);
//     const result = res.data;
//     console.log("로그인전송 성공?");
//   } catch (error) {
//     console.log(error);
//   }
// };

// export { loginFetch };

// export const LoginFetch = async (_id, pass) => {
//   try {
//     const res = await axios.post(
//       `/sign-api/sign-in?id=${_id}&password=${pass}`, {

//       }
//     );
//     const result = res.data;

//   } catch (err) {
//     console.log();
//   }
// };

const SignupFetch = async newUser => {
  try {
    const res = await axios.post("/sign-api/sign-up", newUser);
    console.log("전송성공?");
  } catch (err) {
    console.log(err);
  }
};

export { SignupFetch };
