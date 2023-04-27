const softSkillsModel = require ('../model/softSkills')

const updateManyController = {};

updateManyController.updateSoftSkills = async  (req, res) => {
    const rtn = await softSkillsModel.updateMany(
        {
            "$and": [
              {
                "section": "D"
              },
              {
                "subject": "Language"
              },
              {
                "skill_name": "Curiosity"
              }
            ]
          },
          {
            "$set": {
              "score": 9
            }
          }
    )
    res.send(rtn)
}

module.exports = updateManyController;