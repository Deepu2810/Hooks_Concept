import Realm from 'realm';
let schemaVersionValue = 0;

class User_Info extends Realm.Object {}
User_Info.schema = {
  name: 'User_Info',
  properties: {
    first_name: 'string?',
    last_name: 'string?',
  },
};

export const schemasArray = [User_Info.schema];

export default new Realm({
  schema: schemasArray,
  schemaVersion: schemaVersionValue,
});
