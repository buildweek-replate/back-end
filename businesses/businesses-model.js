const db = require('../data/dbConfig');

module.exports = {
	find,
	add,
	change,
	remove,
	findById
};

function find(id) {
	return db('businesses')
		.select('username', 'businessName', 'businessAddress', 'phoneNumber');
}

function add(body) {
	return db('businesses').insert(body);
}
// .returning('id').then(([ stud ]) => {
// 	return findById(stud);
// })

function findById(id) {
	return db('businesses').where({ id });
}
// where({ id: id }).then(([ stud ]) => {
// 	return stud;
// }

function change(id, info) {
	return db('businesses').where('id', id).update(info).then((business) => {
		return business;
	});
}

function remove(id) {
	return db('businesses').where('id', id).del();
}