import { BASE_URL } from '../../../utils/constants';

export const getCategoryList = async () => {
  return fetch(`${BASE_URL}/books/categories`).then(res => res.json());
};
