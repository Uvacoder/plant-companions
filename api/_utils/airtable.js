const Airtable = require('airtable')

module.exports = new Airtable({ apiKey: process.env.GRIDSOME_AIRTABLE_KEY }).base(process.env.GRIDSOME_AIRTABLE_DEV_BASE)