import React from "react";

export const BASE_URL = 'https://findify-assets.s3.amazonaws.com/test-task';

export const request = async (url: string) => {
  const res = await fetch(`${BASE_URL}${url}`);
  if (!res.ok) {
    throw new Error("Couldn't load data");
  }
  return await res.json();
};

export const getData = () => {
  return request('/test_response.json');
};

export const getColorCodes = () => {
  return request('/test_color_mapping.json');
};