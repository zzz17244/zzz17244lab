const array = [
    {
        _id: '5a3711070776d02ed87d2100',
        index: 0,
        guid: 'fb08e9c3-c5b6-44e9-a4c6-73edcfbc8ae9',
        isActive: false,
        balance: '$2,762.54',
        picture: 'http://placehold.it/32x32',
        age: 39,
        eyeColor: 'brown',
        name: 'Crystal Sampson',
        gender: 'female',
        company: 'ZAGGLE',
        email: 'crystalsampson@zaggle.com',
        phone: '+1 (822) 582-2186',
        address: '836 Batchelder Street, Harviell, Indiana, 966',
        about: 'Duis eu irure mollit sit voluptate proident do reprehenderit irure sunt irure tempor. Elit commodo mollit Lorem esse elit ea nostrud. Commodo cillum ipsum enim incididunt aliquip consectetur cillum cillum commodo et aliquip.\r\n',
        registered: '2017-01-31T09:56:39 -07:00',
        latitude: 18.386331,
        longitude: -3.807078,
        tags: [
            'laboris',
            'reprehenderit',
            'aliqua',
            'ipsum',
            'in',
            'consequat',
            'anim'
        ]
    }
];

const newArray = array.map(item => ({
    name: item.name,
    age: item.age,
    balance: item.balance
}));

console.log(newArray); // Output: [{ name: 'Crystal Sampson', age: 39, balance: '$2,762.54' }]
