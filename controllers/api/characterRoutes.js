// for parker
const router = require('express').Router();
const { Character } = require('../../models');
const withAuth = require('../../utils/auth');
const { route } = require( '../homeRoutes' );



router.post('/', withAuth, async (req, res) => {
  console.log(req.body);
  // if(req.params.id){
  //   try{
  //     Character.update(
  //       {...req.body},
  //       {where: req.params.id}
  //       )
  //       res.status(200+"updated");
  //     } catch (err) {
  //       res.status(400).json(err);
  //     }
  //   } else{
      try {
    const newCharacter = await Character.create({
      body:req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newCharacter);
    // res.redirect(`/character/${newCharacter.id}`)
  } catch (err) {
    console.log("we done fucked up")
    res.status(400).json(err);
  }}
);

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const characterData = await Character.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!characterData) {
      res.status(404).json({ message: 'No character found with this id!' });
      return;
    }

    res.status(200).json(characterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
