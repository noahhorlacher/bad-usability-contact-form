let surnames = [
    "Wang",
    "Li",
    "Zhang",
    "Chen",
    "Liu",
    "Devi",
    "Yang",
    "Huang",
    "Singh",
    "Wu",
    "Kumar",
    "Xu",
    "Ali",
    "Zhao",
    "Zhou",
    "Nguyen",
    "Khan",
    "Ma",
    "Lu",
    "Zhu",
    "Maung",
    "Sun",
    "Yu",
    "Lin",
    "Kim",
    "He",
    "Hu",
    "Jiang",
    "Guo",
    "Ahmed",
    "Khatun",
    "Luo",
    "Akter",
    "Gao",
    "Zheng",
    "da Silva",
    "Tang",
    "Liang",
    "Das",
    "Wei",
    "Mohamed",
    "Islam",
    "Shi",
    "Song",
    "Xie",
    "Han",
    "Garcia",
    "Mohammad",
    "Tan",
    "Deng",
    "Bai",
    "Ahmad",
    "Yan",
    "Kaur",
    "Feng",
    "Hernandez",
    "Rodriguez",
    "Cao",
    "Lopez",
    "Hassan",
    "Hussain",
    "Gonzalez",
    "Martinez",
    "Ceng",
    "Ibrahim",
    "Peng",
    "Cai",
    "Xiao",
    "Tran",
    "Pan",
    "dos Santos",
    "Cheng",
    "Yuan",
    "Rahman",
    "Yadav",
    "Su",
    "Perez",
    "I",
    "Le",
    "Fan",
    "Dong",
    "Ye",
    "Ram",
    "Tian",
    "Fu",
    "Hossain",
    "Kumari",
    "Sanchez",
    "Du",
    "Pereira",
    "Yao",
    "Zhong",
    "Jin",
    "Pak",
    "Ding",
    "Mohammed",
    "Lal",
    "Yin",
    "Bibi",
    "Silva"
]

let lastnames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'García', 'Miller', 'Davis', 'Rodríguez', 'Martínez', 'Hernández', 'López', 'González', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Pérez', 'Thompson', 'White', 'Harris', 'Sánchez', 'Clark', 'Ramírez', 'Lewis', 'Robinson', 'Walker', 'Young', 'Allen', 'King', 'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill', 'Flores', 'Green', 'Adams', 'Nelson', 'Baker', 'Hall', 'Rivera', 'Campbell', 'Mitchell', 'Carter', 'Roberts', 'Gómez', 'Phillips', 'Evans', 'Turner', 'Parker', 'Mohamed/Mahamat', 'Ali', 'Ahmed', 'Ibrahim', 'Hassan', 'Wang', 'Li', 'Zhang', 'Chen', 'Liu', 'García', 'Martin', 'Müller', 'Rodríguez', 'Fernández', 'Hernández', 'García', 'Martínez', 'López', 'González', 'da Silva', 'dos Santos', 'Pereira', 'Ferreira', 'Alves', 'John', 'Smith', 'Peter', 'Thomas', 'James']

let names = []

for (let surname of surnames)
    for (let lastname of lastnames)
        names.push(`${surname} ${lastname}`)

export default names