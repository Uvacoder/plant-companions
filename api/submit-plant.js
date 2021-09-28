const airtable = require('./_utils/airtable')

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(404)

  const { title, otherNames, plantType, friends, foes, notes, submittedBy } = req.body

  try {
    if (!title || !submittedBy || !plantType) throw new Error('Some required fields are missing.')

    const records = await airtable('Plants').select({
        maxRecords: 1,
        filterByFormula: `{TITLE} = ${title}`
    })
    if (records.length) {
      // Update Plant
    }

    const plant = await airtable('Plants').create({
      Title: title,
      OtherNames: otherNames,
      PlantType: pantType,
      Friends: friends,
      Foes: foes,
      SubmittedBy: submittedBy,
      Notes: notes
    }, { typecast: true })

    res.status(200).json(plant.fields)
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}