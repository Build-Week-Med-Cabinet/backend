const db = require('../database/dbConfig');

module.exports = {
    find,
    findRow,
    findBy,
    findByStrainId,
    add,
    remove
}
function find(user_Id) {
    return (
         db('user_strains')
            .where({ user_Id })
            .join('strains', 'user_strains.strain_id', 'strains.id')
            .select('user_strains.Id', 'strain', 'type', 'rating', 'effects', 'flavor', 'description') // add all strain information
    )      
} //edit to include savedstrainID in response for frontend
function findBy(user_Id, filter) {
    return (
        db('user_strains')
            .where({ user_Id })
            .join('strains', 'user_strains.strain_id', 'strains.id')
            .where(filter)
            .select('strain')
    )
} //fix 
function findByStrainId(user_Id, Id) {
    return (
        db('user_strains')
            .where({ user_Id, Id })
            .join('strains', 'user_strains.strain_id', 'strains.id')
            .select('strain')
    )
} //fix


// function findRow(row) {
//     return (
//         db('user_strains')
//             .where(row.user_Id)
//             .where(row.strain_Id)
//     )
// }
function findRow(user_Id, strain_Id) {
    return (
        db('user_strains')
            .where({ user_Id, strain_Id })
    )
}


function add(row) {
    return (
        db('user_strains')
            .insert(row)
            // .then(ids => {
            //     const [id] = ids;
            //     return findById(id)
            // })
    )
}
function remove(user_Id, Id) {
    return (
        db('user_strains')
            .where({ user_Id, Id })
            .del()
    )
}