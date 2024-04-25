const RatingSchema = require('../database/Schemas/RatingSchema');
async function AddRating(req, res) {
    const { product, liked, comment } = req.body;
    try {
        if (product && liked && comment) {
            const newRating = await new RatingSchema({
                user: req.user,
                product,
                liked,
                comment
            });
            newRating.save()
                .then(() =>
                    res.status(200).json('commentaire ajouter'))
                .catch(() => res.status(401).json('FAILED'));
        } else {
            res.status(401).json('tous les champs sont obligatoire');
        }
    } catch (err) {
        res.status(500).json(err);
    }
}
module.exports = { AddRating };
