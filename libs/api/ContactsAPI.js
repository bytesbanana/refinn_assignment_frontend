const ContactAPI = {
  fetchContacts: async (page = 1, size = 1) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/contacts?page=${page}&size=${size}`);
    if (!response.ok) return;
    return await response.json();
  },
  updateContact: async (contact) => {
    const { id, ...rest } = contact;
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/contacts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(rest),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) return false;
    return true;
  },
  addContact: async (contact) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/contacts`, {
      method: 'POST',
      body: JSON.stringify(contact),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) return false;
    return true;
  },
};

export default ContactAPI;
