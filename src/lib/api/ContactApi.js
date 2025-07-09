export const contactCreate = async (token, { first_name, last_name, email, phone }) => {
  return fetch(`${import.meta.env.VITE_URL_API}/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token,
    },
    body: JSON.stringify({ first_name, last_name, email, phone }),
  });
};
