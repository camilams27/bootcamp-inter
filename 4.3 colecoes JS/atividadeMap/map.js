function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if(value === "Admin"){
            admins.push(key);
        }
    }
    return admins;
}

let mapUser = new Map();
mapUser.set('Luiz','Admin');
mapUser.set('Stephany','Admin');
mapUser.set('Cami','Admin');
mapUser.set('Betinho','user');
mapUser.set('Ana','user');

console.log(getAdmins(mapUser));