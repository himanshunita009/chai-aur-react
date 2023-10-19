const data = JSON.parse('{"tickets":[{"id":"CAM-1","title":"Update User Profile Page UI","tag":["Feature request"],"userId":"usr-1","status":"Todo","priority":4},{"id":"CAM-2","title":"Add Multi-Language Support - Enable multi-language support within the application.","tag":["Feature Request"],"userId":"usr-2","status":"In progress","priority":3},{"id":"CAM-3","title":"Optimize Database Queries for Performance","tag":["Feature Request"],"userId":"usr-2","status":"In progress","priority":1},{"id":"CAM-4","title":"Implement Email Notification System","tag":["Feature Request"],"userId":"usr-1","status":"In progress","priority":3},{"id":"CAM-5","title":"Enhance Search Functionality","tag":["Feature Request"],"userId":"usr-5","status":"In progress","priority":0},{"id":"CAM-6","title":"Third-Party Payment Gateway","tag":["Feature Request"],"userId":"usr-2","status":"Todo","priority":1},{"id":"CAM-7","title":"Create Onboarding Tutorial for New Users","tag":["Feature Request"],"userId":"usr-1","status":"Backlog","priority":2},{"id":"CAM-8","title":"Implement Role-Based Access Control (RBAC)","tag":["Feature Request"],"userId":"usr-3","status":"In progress","priority":3},{"id":"CAM-9","title":"Upgrade Server Infrastructure","tag":["Feature Request"],"userId":"usr-5","status":"Todo","priority":2},{"id":"CAM-10","title":"Conduct Security Vulnerability Assessment","tag":["Feature Request"],"userId":"usr-4","status":"Backlog","priority":1}],"users":[{"id":"usr-1","name":"Anoop sharma","available":false},{"id":"usr-2","name":"Yogesh","available":true},{"id":"usr-3","name":"Shankar Kumar","available":true},{"id":"usr-4","name":"Ramesh","available":true},{"id":"usr-5","name":"Suresh","available":true}]}');
const usersMap = new Map();

function user() {
    data.users.map((user) => {
        usersMap.set(user.id, user.name);
    })
}
user();

const result = data.tickets.reduce((obj,val) => {
    const data = {
        id: val.id,
        Priority: val.priority,
        tag: val.tag,
        title: val.title,
        userName: usersMap.get(val.userId)
    }
    obj.Status[val.Status] = obj.Status[val.Status]? [...obj.Status[val.Status],data] : [data];
    obj.User[val.User] = obj.User[val.User]? [...obj.User[val.User],data] : [data];
    obj.Priority[val.Priority.toString()] = obj.Priority[val.Priority.toString()]? [...obj.Priority[val.Priority.toString()],data] : [data];
    return obj;
},{Status: {},User: {},Priority: {}});

for (const mainkey in result) {
    for (const subkey in result[mainkey]) {
        result[mainkey][subkey].sort((ticket1,ticket2) => ticket1.Priority-ticket2.Priority);    
    }
}

console.log(result);