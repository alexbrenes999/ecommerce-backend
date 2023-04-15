const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include:{
      model: Product,
    }
  }) .then (tagData=> res.json(tagData));
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.FinfByPK(
    req.params.id,{
      include:[Product]
    }
    .then(tagData =>  res.status(200).json(tagData))
    .catch(err=>  res.status(400).json(err))
  )
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({Tag_name:req.body.Tag_name})
  .then(tagData=> res.status(200).json(tagData))
  .catch(err=>  res.status(400).json(err))
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body,{where:{id:req.params.id}})
  .then(tagUpdate=> res.status(200).json(tagUpdate))
  .catch(err=> res.status(400).json(err))
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.delete({where:{id:req.params.id}})
  .then(TagDelete=> res.status(200).json(TagDelete))
  .catch(err=> res.status(400).json(err))
});

module.exports = router;
