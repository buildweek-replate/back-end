const router = require('express').Router();

const Businesses = require('./businesses-model');

router.get('/businesses/:id', (req, res) => {
	const { id } = req.params;
    Businesses.find(id)
		.then(business => {
            res.status(200).json(business);			
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({ error: 'Could not load business' });
		});
});

router.post('/', (req, res) => {
	const body = req.body;
	if (body.username) {
		Businesses.add(body)
			.then((business) => {
				res.status(201).json(business);
			})
			.catch((error) => {
				console.log(error);
				res.status(500).json({ error: 'Could not add business' });
			});
	} else {
		res.status(401).json({ message: 'Must include business name and user id' });
	}
});

router.put('/:id', (req, res) => {
	const id = req.params.id;
	const body = req.body;

	Businesses.change(id, body)
		.then((business) => {
            if(business){
                res.status(200).json(business);
            } else {
               return res.status(400).json({message: `business with id ${id} does not exist`})
            }
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({ error: 'Could not update business' });
		});
});

router.delete('/:id', (req, res) => {
	const id = req.params.id;

	Businesses.remove(id)
		.then((business) => {
			res.status(200).json(business);
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({ error: 'Could not delete business' });
		});
});

module.exports = router;