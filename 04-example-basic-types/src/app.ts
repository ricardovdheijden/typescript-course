type Participant = {
    name: string
    courseCredits: number
}

function isAllowedInCourse(participant: Participant) {
    return participant.courseCredits > 0
}

const p1: Participant = {
    name: 'John',
    courseCredits: 3
}

const p2: Participant = {
    name: 'Mike',
    courseCredits: 0
}

const result1 = isAllowedInCourse(p1)
const result2 = isAllowedInCourse(p2)

console.log(result1, result2)
