const END_POINT = 'https://js-todo-list-9ca3a.df.r.appspot.com';
const API = {
  USER: '/api/users',
  ITEM: '/items',
};

const request = async (url, body) => {
  try {
    const res = await fetch(url, body);
    if (!res.ok) {
      throw new Error(error);
    }
    return await res.json();
  } catch (e) {
    throw new Error(`오류입니다.${e.message}`);
  }
};
// const requestPost = async (url, data) => {
//   const res = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   });
// };

const getUserAddBody = (data) => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
};
const getUserList = async () => {
  const userList = await request(END_POINT + API.USER);
  return userList;
};

const postUser = async (userName) => {
  const bodyTemplate = { name: userName };
  const userAddBody = getUserAddBody(bodyTemplate);
  const a = await request(END_POINT + API.USER, userAddBody);
  return a;
};
export { getUserList, postUser };
