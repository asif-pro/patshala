const url = 'http://localhost:3003/';

export async function getSoftSkillsBySubject(subject) {
  return await fetch(url+'softSkills_by_subject/'+subject).then((response) => response.json());
 
}

export async function updateSoftSkillsScore(studentId, subject, skill_name, score) {
  const data = { studentId, subject, skill_name, score}
 return await fetch(url+'update_sofSkills', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
     body: JSON.stringify(data),
    credentials: "same-origin",

  }).then((response) => {
    // console.log(response);
    // response.json()
  });
}

// For Teacher
export async function averageSoftSkillScoreBySubject(section, subject, skill_name){
  return await fetch(url+'getAverageSoftSkillScore/'+section+'/'+subject+'/'+skill_name).then((response) => response.json());
  
}