const knexConfig = require('../knexfile')
const knex = require('knex')(knexConfig['development']);

const createPrayer = ( payload ) => {

  let { prayerTitle, prayerContext, prayerType } = payload;
  let view_settings = 'temporary';

  prayerType = Number(prayerType);

  knex('prayer')
    .insert({
      title: prayerTitle,
      context: prayerContext,
      prayer_type_id: prayerType,
      completed: false,
      view_settings,
    }).then((res) => {
      console.log(res)
    }).catch(err => console.log("ERROR============", err));
}

module.exports = {
  createPrayer
}