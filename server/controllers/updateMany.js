const softSkillsModel = require ('../model/softSkills')

const updateManyController = {};

updateManyController.updateSoftSkills = async  (req, res) => {
    const rtn = await softSkillsModel.updateMany(
        {
            "$and": [
              {
                "section": "F"
              },
              {
                "skill_name": "TeamWork"
              }
            ]
          },
          {
            "$set": {
              "score": 8
            }
          }
    )
    res.send(rtn)
}

module.exports = updateManyController;