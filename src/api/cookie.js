import { useState } from "react";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name, value) => {
  return cookies.set(name, value);
};

export const getCookie = (name, value) => {
  return cookies.get(name, value);
};

export { cookies };
