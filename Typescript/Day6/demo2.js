//json => java script object Notation
// key & format we can store a data
var jsonobj = {
    fname: "sumit",
    'lname': "Raokhande",
    id: 9
};
//1 using dot operator
//2 using square operator
//1 using dot operator
// console.log(`
//     First Name :: ${jsonobj.fname}
//     Last Name  :: ${jsonobj.lname}
//     ID         :: ${jsonobj.id}
// `)
//2 using square operator
// console.log(`
//     First Name :: ${jsonobj["fname"]}
//     Last Name  :: ${jsonobj['lname']}
//     ID         :: ${jsonobj["id"]}
// `);
// Array of object
var arrobj = [
    {
        fname: "Sumit",
        lname: "Raokhande",
        id: 9,
        country: {
            cid: 1,
            cname: "India"
        },
        month: ["Jan", 'Feb'],
        data: [
            {
                subj: "M1",
                marks: 45
            },
            {
                subj: "M2",
                marks: 55
            },
            {
                subj: "M3",
                marks: 65
            }
        ]
    },
    {
        fname: "Kiran",
        lname: "Raokhande",
        id: 6,
        country: {
            cid: 2,
            cname: "Japan"
        },
        month: ["Jan", 'Feb', 'March'],
        data: [
            {
                subj: "M1",
                marks: 75
            },
            {
                subj: "M2",
                marks: 55
            },
            {
                subj: "M3",
                marks: 85
            }
        ]
    },
    {
        fname: "Spruha",
        lname: "Raokhande",
        id: 3,
        country: {
            cid: 3,
            cname: "USA"
        },
        month: ["Jan", 'Feb', 'March', 'April'],
        data: [
            {
                subj: "M1",
                marks: 40
            },
            {
                subj: "M2",
                marks: 35
            },
            {
                subj: "M3",
                marks: 85
            }
        ]
    }
];
// console.log(`
//         First name :: ${arrobj[1].fname}
//         Last name   :: ${arrobj[1].lname}
//         Id          :: ${arrobj[1].id}
// `);
for (var i = 0; i < arrobj.length; i++) {
    console.log("\n        First name :: " + arrobj[i].fname + " \n        Last name   :: " + arrobj[i].lname + "\n        Id          :: " + arrobj[i].id + "\n        Country Name :: " + arrobj[i].country.cname + "\n        Month       :: " + arrobj[i].month + "\n");
    for (var j = 0; j < arrobj[i].data.length; j++) {
        console.log("-------Marks ----------------\n            Subject :: " + arrobj[i].data[j].subj + "\n            Marks   :: " + arrobj[i].data[j].marks + "\n       ");
    }
}
