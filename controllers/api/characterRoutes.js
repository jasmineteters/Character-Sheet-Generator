// for parker
const router = require('express').Router();
const { Character } = require('../../models');
const withAuth = require('../../utils/auth');

// router.post('/', withAuth, async (req, res) => {
//   console.log(req.body);
//   if(req.params.id){
//     try{
//       Character.update(
//         {...req.body},
//         {where: req.params.id}
//         )
//         res.status(200+"updated");
//       } catch (err) {
//         res.status(400).json(err);
//       }
//     } else {
//       try {
//     const newCharacter = await Character.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newCharacter);
//     res.redirect('/profile')
//   } catch (err) {
//     console.log("we done {explicit} up")
//     console.log(req.body)
//     res.status(400).json(err);
//   }}
// });

router.post('/', withAuth, async (req, res) => {
  try {
    const newCharacter = await Character.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newCharacter);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/:id', withAuth, async (req, res) => {
  try {
    const updateCharacter = await Character.update({
      ...req.body,
      user_id: req.session.user_id,
    },
    {
      where: {
      id: req.params.id,
      user_id: req.session.user_id,
    },
  });
    res.status(200).json(updateCharacter);
  } catch (err) {
    res.status(400).json(err);
  }
});

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