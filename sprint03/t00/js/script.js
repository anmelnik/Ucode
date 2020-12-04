let superTeam = {
    title : "",
    leader : "",
    members : "",
    memberCount : 0,
    agenda : "",
    isEvil : true
}


superTeam.title = prompt("Тeam name.");
if (superTeam.title) {
    superTeam.leader = prompt("Team leader name.")
    if (superTeam.leader) {
        let participants = prompt("Names of the members of the team")
        if (participants) {
            superTeam.members = participants.split(",").filter(Boolean)
            superTeam.members.push(superTeam.leader)
            superTeam.memberCount = superTeam.members.length;
            superTeam.agenda = prompt("What are the goals and ideas of the team?")
            if (superTeam.agenda) {
                superTeam.isEvil = prompt("Are you a good or bad team?")
                if (superTeam.isEvil) {
                    alert("Here's the team:" + "\nname - " + superTeam.title
                    + "\nleader - " + superTeam.leader 
                    + "\nmembers - " + superTeam.members
                    + "\nmemberCount - " + superTeam.memberCount
                    + "\nagenda - " + superTeam.agenda
                    + "\nisEvil - " + Boolean(superTeam.isEvil))
                }
            }
        }
    }
}

