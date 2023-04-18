// import { json } from "stream/consumers";

const url = 'http://localhost:3003/';

export async function getTeacher(id) {

    // await fetch(url+'getTeacher/'+id, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   }).then((response) => {
    //     console.log('teacherservice',response)
    //     return response.json();
    //   });

    return await fetch(url+'getTeacher/'+id).then((response) => response.json());

}