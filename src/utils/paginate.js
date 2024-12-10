const paginate = (model) => async (req, res, next) => {
    const page = parseInt(req.query.page) || 1; 
    const limit = parseInt(req.query.limit) || 10; 

    try {
        const results = await model
            .find()
            .skip((page - 1) * limit) 
            .limit(limit); 

        res.paginatedResults = {
            page,
            limit,
            data: results,
        };

        next();
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while paginating.' });
    }
};

module.exports = paginate;
