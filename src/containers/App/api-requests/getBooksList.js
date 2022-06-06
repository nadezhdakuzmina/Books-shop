import { BASE_URL } from '../../../utils/constants';

export const getBooksList = async (search, sortPrice, categoryId) => {
  const filters = {};

  if (search) {
    filters.search = search;
  }

  if (sortPrice) {
    filters.sortPrice = sortPrice;
  }

  if (categoryId) {
    filters.categoryId = categoryId;
  }

  return fetch(`${BASE_URL}/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      filters,
    }),
  }).then(res => res.json());
};
