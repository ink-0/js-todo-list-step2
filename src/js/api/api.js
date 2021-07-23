const END_POINT = 'https://js-todo-list-9ca3a.df.r.appspot.com';
const API = {
  USER: '/api/users',
  ITEM: '/items',
};

const request = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(error);
    }
    return await res.json();
  } catch (e) {
    throw new Error(`오류입니다.${e.message}`);
  }
};

const getUserList = async () => {
  const userList = await request(END_POINT + API.USER);
  return userList;
};

export { getUserList };
