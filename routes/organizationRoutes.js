const express = require('express');
const router = express.Router();
const organizationController = require('../controllers/organizationController');

router.post('/', organizationController.createOrganization);
router.put('/:id', organizationController.updateOrganization);
router.get('/:id', organizationController.getOrganization);
router.delete('/:id', organizationController.deleteOrganization);

module.exports = router;
