import express from "express";
import { test, updateUser, deleteUser , getUserListings , getUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();
router.get('/test', test);
router.post('/update/:id', verifyToken, updateUser)
router.get('/listings/:id', verifyToken ,getUserListings);
router.get('/:id', verifyToken ,getUser);

router.delete('/delete/:id', verifyToken, deleteUser)

export default router;