function updateSession(firstName, lastName, session){
    session.firstName = firstName,
    session.lastName = lastName
    return session
}
module.exports = updateSession