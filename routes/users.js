const express=require("express");
const router=express.Router();
/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *       - Users
 *     description: Returns all users
 *     responses:
 *       200:
 *         description: Success
 * 
 */
router.get('/', (req, res) => {
    res.json({
        message:"hi"
    })
  });
  

  module.exports=router