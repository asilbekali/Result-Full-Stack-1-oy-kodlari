const users = [
    { name: "Alice", year: 2002 },
    { name: "Bob", year: 1990 },
    { name: "Charlie", year: 2008 },
    { name: "David", year: 2010 },
];

function filterUsersByAge(users) {
    let res = [];
    for (let i of users) {
        i.year = 2024 - i.year;
        if (i.year > 18 && i.year < 35) {
            res.push(i);
        }
    }
    console.log(res);
}

filterUsersByAge(users);
