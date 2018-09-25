const express = require('express');
const router = express.Router();

const Item = require('../model/shoppingItem');

router.get('/test', (req,res,next) => {
    Item.find((err,item) => {
        if(err){
            res.json(err)
        }
        else{
            res.json(item)
        }
    })
})

// insert
router.post('/post', (req,res,next) => {
    let newItem = new Item({
        itemName: req.body.itemName,
        itemQuantity: req.body.itemQuantity,
        itemBought: req.body.itemBought
    })

    newItem.save((err,item) => {
        if(err){
            res.json(err)
        }
        else{
            res.json({msg: 'posted'})
        }
    })
});

// update
router.put('/put/:id', (req,res,next) => {
    Item.findOneAndUpdate({_id : req.params.id}, {
        $set:
        {itemName : req.body.itemName,
        itemQuantity : req.body.itemQuantity,
        itemBought : req.body.itemBought}
    },
    function(err,result){
        if(err){
            res.json(err)
        }
        else{
            res.json({result:"ok"})
        }
    }
);
}
);

delete 
router.delete('/put/:id', (req,res,next) => {
    Item.remove({_id:req.params.id}, (err,result) => {
        if(err){
            res.json(err);
        }
        else{
            res.json({
                result: 'deleted'
            })
        }
    })
});

module.exports = router;
