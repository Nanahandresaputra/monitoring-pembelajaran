const errorCode = (errCode, key, data) => {
  if (errCode === 1000 && key && data) {
    return {
      errorCode: errCode,
      message: "success",
      [`${key}`]: data,
    };
  } else if (errCode === 1000 && !key && !data) {
    return {
      errorCode: errCode,
      message: "success",
    };
  } else if (errCode === 9001) {
    return {
      errorCode: errCode,
      message: "data not found",
    };
  } else if (errCode === 9002) {
    return {
      errorCode: errCode,
      message: "general error",
    };
  } else if (errCode === 9003) {
    return {
      errorCode: errCode,
      message: "invalid request body",
    };
  } else if (errCode === 9004) {
    return {
      errorCode: errCode,
      message: "invalid token",
    };
  } else if (errCode === 9005) {
    return {
      errorCode: errCode,
      message: "invalid login credentials",
    };
  } else if (errCode === 9006) {
    return {
      errorCode: errCode,
      message: "user already loged in",
    };
  } else if (errCode === 9007) {
    return {
      errorCode: errCode,
      message: "token expired",
    };
  } else if (errCode === 9008) {
    return {
      errorCode: errCode,
      message: "Cant delete this data",
    };
  }
};

module.exports = errorCode;
