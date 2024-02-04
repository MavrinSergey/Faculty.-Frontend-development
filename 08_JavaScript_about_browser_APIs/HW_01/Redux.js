class Redux {
    sportRegistrationList = [
        {
            "id": 1,
            "name": "Йога",
            "time": "10:00 - 11:00",
            "maxParticipants": 15,
            "currentParticipants": 8
        }
    ]

    constructor(array) {
        this.array = array
    }
    increasesTheNumberOfParticipants(id) {
        this.sportRegistrationList.forEach(item => {
            if (item.id === id && item.currentParticipants < item.maxParticipants) {
                item.currentParticipants += 1;
            }
        })
    }
}