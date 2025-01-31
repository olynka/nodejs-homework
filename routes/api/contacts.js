const express = require('express');
const ctrl = require("../../controllers/contacts");
const  ctrlWrapper  = require("../../helpers/ctrlWrapper");
const { validateBody, isValidId,authenticate } = require("../../middleware");
const {schemas} = require("../../models/contact");




const router = express.Router()

router.get("/",authenticate, ctrlWrapper(ctrl.getAll));

router.get("/:id",isValidId, ctrlWrapper(ctrl.getById));

router.post(
    "/",
    authenticate,
   validateBody(schemas.addSchema),
    ctrlWrapper(ctrl.add)
);
router.put(
    "/:id",
    isValidId,
    validateBody(schemas.addSchema),
    ctrlWrapper(ctrl.updateById)
);
router.delete("/:id",isValidId,ctrlWrapper(ctrl.remove));

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.schemaUpdateFavorite),
   ctrlWrapper(ctrl.updateFavoriteById)
);


module.exports = router