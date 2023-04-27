const noticeModel = require ( '../model/notice' );

const noticeController = {};

noticeController.insertNotice = async ( req, res ) => {

    try {
        const { title, details, date } = req.body ;
        res.status(201).send (JSON.stringify(await noticeModel.create ({title: title, details: details, date:date})));

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

}

module.exports = noticeController;