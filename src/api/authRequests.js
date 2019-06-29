import request from './request';

function createUser(phone) {
  return request({
    url: '/createUser',
    method: 'POST',
    data: {
      phone
    }
  });
}

function requestOneTimePassword(phone) {
  return request({
    url: '/requestOneTimePassword',
    method: 'POST',
    data: {
      phone
    }
  });
}

function verifyOneTimePassword(phone, code) {
  return request({
    url: '/verifyOneTimePassword',
    method: 'POST',
    data: {
      phone,
      code
    }
  });
}

const authService = {
  verifyOneTimePassword,
  createUser,
  requestOneTimePassword
};

export default authService;
