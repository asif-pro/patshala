const url = 'http://localhost:3003/';

export function getAllStudents() {

    return fetch(url+'get_all_students').then((response) => response.json());

   
}

// try {
//     const options = {
//       method: 'GET', // *GET, POST, PUT, DELETE, etc.
//       headers: {
//         "Content-Type": "application/json",
//       },
//       credentials: "include"
//     }
//     return await fetch(`${BASE_URL}/me`, options)
//       .then(res => res.status <= 400 ? res : Promise.reject(res))
//       .then(res => {
//         console.log(res);
//         return res.json()
//       })
//       .catch(err => {
//         console.log(`${err} while fetching /me`)
//       });
//   } catch (error) {
//     console.log(error);
//   }