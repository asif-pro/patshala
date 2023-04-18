const url = 'http://localhost:3003/';


export async function checkLogin(userId,password) {
    const data = {userId,password};

   return await fetch(url+'login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      credentials: "same-origin",
    }).then(async (response) => {
        const responseBody = await response.json();
        return {responseBody, status:response.status}});
  }