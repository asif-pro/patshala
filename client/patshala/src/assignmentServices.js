const url = 'http://localhost:3003/';

export async function getAssignmentBySection(subject) {
  return await fetch(url+'get_assignments/'+subject).then((response) => response.json());
 
}

export async function updateAssignment(assignment_number, subject, studentId, score) {
  const data = { assignment_number, subject, studentId, score}
 return await fetch(url+'update_assignment/', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
     body: JSON.stringify(data),
    credentials: "same-origin",

  }).then((response) => {
    console.log(response);
    // response.json()
  });
}
export async function getAssignmentByStudent(studentId) {
  return await fetch(url+'student_assignment/'+studentId).then((response) => response.json());
 
}

export async function getAllStudentsAverageAssignmentScoreBySubjectByScoreRange (subject) {
  return await fetch(url+'allStudentsAverageAssignmentScoreBySubjectByScoreRange/'+subject).then((response) => response.json());
}