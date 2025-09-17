function concatFirstNameAndLastName<T extends { firstName: string; lastName: string }>(
    user: T,
) {
    return {
        ...user,
        fullName: user.firstName + user.lastName,
    };
}

const users = [
    { firstName: "Romeo", lastName: "Sarkar" },
    // { firstName: "Matt", lastName: "Pocock", id: 1 },
    // { firstName: "Dhak", lastName: "Sid", id: 2 },
    // { firstName: "Rishav", lastName: "Doodh", className: "dhcp" },
];

const newUsers = users.map(concatFirstNameAndLastName);
// newUsers[0].
