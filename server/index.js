import { Meteor } from 'meteor/meteor';

import insertData from './insertData';

Meteor.startup(() => {
  insertData();
});
