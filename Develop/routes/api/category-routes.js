const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include:[Product]
   })
   .then(catData =>  res.status(200).json(catData))
   .catch(err=>  res.status(400).json(err))
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findByPk(
    req.params.id,{
    include:[Product]
   })
   .then(catData =>  res.status(200).json(catData))
   .catch(err=>  res.status(400).json(err))
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({category_name:req.body.category_name})
  .then(CategoryData=> res.status(200).json(CategoryData))
  .catch(err=>  res.status(400).json(err))
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body,{where:{id:req.params.id}})
  .then(CategoryUpdate=> res.status(200).json(CategoryUpdate))
  .catch(err=> res.status(400).json(err))
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.delete({where:{id:req.params.id}})
  .then(CategoryDelete=> res.status(200).json(CategoryDelete))
  .catch(err=> res.status(400).json(err))
});

module.exports = router;
