export const addressCreate = async (token, contactId, { street, city, province, country, postal_code }) => {
  return fetch(`${import.meta.env.VITE_URL_API}/contacts/${contactId}/addresses`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token,
    },
    body: JSON.stringify({ street, city, province, country, postal_code }),
  });
};
