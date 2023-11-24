const Organization = require('../models/organization');

// Create a new organization
exports.createOrganization = async (req, res) => {
  try {
    const organization = new Organization(req.body);
    await organization.save();
    res.status(201).json(organization);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Update an existing organization by ID
exports.updateOrganization = async (req, res) => {
  const { id } = req.params;

  try {
    const organization = await Organization.findByIdAndUpdate(id, req.body, { new: true });

    if (!organization) {
      return res.status(404).json({ msg: 'Organization not found' });
    }

    res.json(organization);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get an organization by ID
exports.getOrganization = async (req, res) => {
  const { id } = req.params;

  try {
    const organization = await Organization.findById(id);

    if (!organization) {
      return res.status(404).json({ msg: 'Organization not found' });
    }

    res.json(organization);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Delete an organization by ID
exports.deleteOrganization = async (req, res) => {
  const { id } = req.params;

  try {
    const organization = await Organization.findByIdAndRemove(id);

    if (!organization) {
      return res.status(404).json({ msg: 'Organization not found' });
    }

    res.json({ msg: 'Organization deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
