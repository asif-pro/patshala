const softSkillsModel = require ('../model/softSkills')

const softSkillsController = {};

softSkillsController.insertSoftSkills = async ( req, res ) => {
    try{
        const { skill_name, subject, section, studentId, score } = req.body ;

        await softSkillsModel.create ({skill_name, subject, section, studentId, score});

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

softSkillsController.getSoftSkillsBySubject = async ( req, res ) => {
            try {
                const req_subject = req.params.subject;
                const softSkills = await softSkillsModel.find ({subject: req_subject});
                let softSkillsByStudents = {};
                let softSkillsResults = [];
                softSkills.forEach((softSkill)=>{
                    if (softSkillsByStudents[softSkill.studentId]) {
                        softSkillsByStudents[softSkill.studentId] = Object.assign(softSkillsByStudents[softSkill.studentId], {[`${softSkill.skill_name}`]:softSkill.score})
                    }
                    else{
                        softSkillsByStudents [softSkill.studentId] =  {[`${softSkill.skill_name}`]:softSkill.score}
                    }
                    // assignmentsByStudents[assignment.studentId] = Object.assign(assignmentsByStudents[assignment.studentId], {_id:assignment._id})
                    softSkillsByStudents[softSkill.studentId] = Object.assign(softSkillsByStudents[softSkill.studentId], {id:softSkill.studentId})
                    softSkillsByStudents[softSkill.studentId] = Object.assign(softSkillsByStudents[softSkill.studentId], {subject:softSkill.subject})
                    softSkillsByStudents[softSkill.studentId] = Object.assign(softSkillsByStudents[softSkill.studentId], {section:softSkill.section})
        
        
                })
                for (const [key, value] of Object.entries(softSkillsByStudents)) {
                    softSkillsResults.push(value);
                  }
        
                res.status(200).send (JSON.stringify(softSkillsResults));
            }
            catch (error) {
                console.log(error);
                res.sendStatus(500);
            }
}
// assignmentController.getAssignmentBySubject = async ( req, res ) => {
//     try {
//         const req_subject = req.params.subject;
//         const assignments = await assignmentModel.find ({subject: req_subject});
//         let assignmentsByStudents = {};
//         let assignmentResults = [];
//         assignments.forEach((assignment)=>{
//             if (assignmentsByStudents[assignment.studentId]) {
//                 assignmentsByStudents[assignment.studentId] = Object.assign(assignmentsByStudents[assignment.studentId], {[`assignment${assignment.assignment_number}`]:assignment.score})
//             }
//             else{
//                 assignmentsByStudents [assignment.studentId] =  {[`assignment${assignment.assignment_number}`]:assignment.score}
//             }
//             // assignmentsByStudents[assignment.studentId] = Object.assign(assignmentsByStudents[assignment.studentId], {_id:assignment._id})
//             assignmentsByStudents[assignment.studentId] = Object.assign(assignmentsByStudents[assignment.studentId], {id:assignment.studentId})
//             assignmentsByStudents[assignment.studentId] = Object.assign(assignmentsByStudents[assignment.studentId], {section:assignment.section})


//         })
//         for (const [key, value] of Object.entries(assignmentsByStudents)) {
//             assignmentResults.push(value);
//           }

//         res.status(200).send (JSON.stringify(assignmentResults));
//     }
//     catch (error) {
//         console.log(error);
//         res.sendStatus(500);
//     }
// }
// assignmentController.getAssignmentByStudent = async ( req, res ) => {
//     try {
//         const studentId = req.params.studentId;
//         const assignments = await assignmentModel.find ({studentId: studentId});
//         let assignmentsBySubject = {};
//         let assignmentResults = [];
//         let id = 0;
//         assignments.forEach((assignment)=>{
            
//             if (assignmentsBySubject[assignment.subject]) {
//                 assignmentsBySubject[assignment.subject] = Object.assign(assignmentsBySubject[assignment.subject], {[`assignment${assignment.assignment_number}`]:assignment.score})
//             }
//             else{
//                 assignmentsBySubject [assignment.subject] =  {[`assignment${assignment.assignment_number}`]:assignment.score}
//             }
//             // assignmentsByStudents[assignment.studentId] = Object.assign(assignmentsByStudents[assignment.studentId], {_id:assignment._id})
//             // assignmentsBySubject[assignment.studentId] = Object.assign(assignmentsBySubject[assignment.studentId], {id:assignment.studentId})
//             assignmentsBySubject[assignment.subject] = Object.assign(assignmentsBySubject[assignment.subject], {id: id++})
//             assignmentsBySubject[assignment.subject] = Object.assign(assignmentsBySubject[assignment.subject], {subject:assignment.subject})
//             // assignmentsBySubject[assignment.studentId] = Object.assign(assignmentsBySubject[assignment.studentId], {section:assignment.section})
            

//         })
//         for (const [key, value] of Object.entries(assignmentsBySubject)) {
//             assignmentResults.push(value);
//           }

//         res.status(200).send (JSON.stringify(assignmentResults));
//     }
//     catch (error) {
//         console.log(error);
//         res.sendStatus(500);
//     }
// }
softSkillsController.updateSoftSkillsScore = async ( req, res ) => {
    try {
        const { studentId, subject, skill_name, score } = req.body;
        const updatedSoftSkills = await softSkillsModel.findOneAndUpdate({studentId: studentId, skill_name: skill_name, subject: subject}, {score:score}, {new: true});
        
        res.status(200).send (JSON.stringify(updatedSoftSkills));
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

softSkillsController.averageSoftSkillScoreBySubject = async ( req, res ) => {
      
    const subject = req.params.subject;
    const skill_name = req.params.skill_name;
    const skills = await softSkillsModel.find ({$and:[{subject:subject, skill_name: skill_name},{score:{$gt:0}},{score:{$lt:10}}]});
    // console.log('teamwaor', teamWork)
    // res.send(skills)

    let scoreSum = 0
    skills.forEach((item)=>{
        
        scoreSum += item.score;
    })
    
    // console.log(scoreSum)
    const avg = scoreSum % skills.length;
    console.log(avg)
}

module.exports = softSkillsController;