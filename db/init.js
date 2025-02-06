db = db.getSiblingDB("mintflow-db");
db.createCollection("cards");
db.createCollection("decks");

let cardData;
let insertedCardIds;

// First Insert

db.decks.insertOne({
    courseCode: "CSE1100",
    topicName: "Input, Output, and Storage",
    courseName: "Introduction to Computing 1",
    cards: [],
});

cardData = [
    {
        question: "What is the most common input device?",
        answer: "The keyboard.",
        topicName: "Input, Output, and Storage",
    },
    {
        question: "How do graphical systems use keyboards?",
        answer: "To enter text strings.",
        topicName: "Input, Output, and Storage",
    },
    {
        question: "What is a mouse?",
        answer: "A small pointing device used to position the screen cursor.",
        topicName: "Input, Output, and Storage",
    },
    {
        question: "What is a trackball?",
        answer: "A ball that can be rotated to move the screen cursor.",
        topicName: "Input, Output, and Storage",
    },
    {
        question: "What is a joystick?",
        answer: "A small vertical lever used to steer the screen cursor.",
        topicName: "Input, Output, and Storage",
    },
    {
        question: "What is a data glove?",
        answer: "A glove with sensors that detect hand and finger motions to grip virtual objects.",
        topicName: "Input, Output, and Storage",
    },
    {
        question: "What is a digitizer?",
        answer: "A device for drawing or painting in 2D or 3D space.",
        topicName: "Input, Output, and Storage",
    },
    {
        question: "What is an image scanner used for?",
        answer: "To store drawings, graphs, and photos in a computer for processing.",
        topicName: "Input, Output, and Storage",
    },
    {
        question: "What is a touch panel?",
        answer: "A device allowing selection of displayed objects by touching the screen.",
        topicName: "Input, Output, and Storage",
    },
    {
        question: "What is a light pen?",
        answer: "A pencil-shaped device used to select screen positions by detecting light.",
        topicName: "Input, Output, and Storage",
    },
    {
        question: "What is an output device?",
        answer: "A device that produces output like text and graphics on physical media.",
        topicName: "Input, Output, and Storage",
    },
    {
        question: "What is a printer?",
        answer: "An output device that produces text and graphics on paper.",
        topicName: "Input, Output, and Storage",
    },
    {
        question: "What is hard copy?",
        answer: "Printed information that exists physically and is more permanent than soft copy.",
        topicName: "Input, Output, and Storage",
    },
    {
        question: "What are impact printers?",
        answer: "Printers that strike an inked ribbon to transfer ink onto paper.",
        topicName: "Input, Output, and Storage",
    },
    {
        question: "What are non-impact printers?",
        answer: "Printers that form characters and graphics without striking paper.",
        topicName: "Input, Output, and Storage",
    },
    {
        question: "What is a monitor?",
        answer: "A peripheral device that generates a soft copy of output as a visual display.",
        topicName: "Input, Output, and Storage",
    },
    {
        question: "What is a CRT monitor?",
        answer: "A large, sealed glass tube with a screen used for older desktop computers.",
        topicName: "Input, Output, and Storage",
    },
    {
        question: "What is an LCD monitor?",
        answer: "A flat-panel display with shallow depth, commonly used in laptops.",
        topicName: "Input, Output, and Storage",
    },
    {
        question: "What is a storage device?",
        answer: "A device used to store data in a computer.",
        topicName: "Input, Output, and Storage",
    },
    {
        question: "What are magnetic storage devices?",
        answer: "Devices that store digital data as binary information using magnetic media.",
        topicName: "Input, Output, and Storage",
    },
    {
        question: "What is an internal hard drive?",
        answer: "A storage device located inside the computer, used to store the operating system and programs.",
        topicName: "Input, Output, and Storage",
    },
    {
        question: "What is an external hard drive?",
        answer: "A portable storage device connected externally to the computer.",
        topicName: "Input, Output, and Storage",
    },
    {
        question: "What are optical storage devices?",
        answer: "Devices like CDs and DVDs used for data storage.",
        topicName: "Input, Output, and Storage",
    },
    {
        question: "What is a CD-RW?",
        answer: "A rewritable CD that allows data to be erased and rewritten.",
        topicName: "Input, Output, and Storage",
    },
    {
        question: "What is a DVD-ROM?",
        answer: "A read-only memory disc used in many newer PCs.",
        topicName: "Input, Output, and Storage",
    },
    {
        question: "What is cloud storage?",
        answer: "A service where data is maintained, managed, and backed up remotely.",
        topicName: "Input, Output, and Storage",
    },
    {
        question: "What is a system software?",
        answer: "Software responsible for controlling and managing hardware components.",
        topicName: "Input, Output, and Storage",
    },
    {
        question: "What are system management programs?",
        answer: "Programs that manage storage, processing resources, and execution of other programs.",
        topicName: "Input, Output, and Storage",
    },
    {
        question: "What are system development programs?",
        answer: "Tools for creating programs, like programming languages and translators.",
        topicName: "Input, Output, and Storage",
    },
    {
        question: "What is an operating system?",
        answer: "A collection of programs that handle technical tasks and provide core services.",
        topicName: "Input, Output, and Storage",
    },
    {
        question: "What are embedded operating systems used for?",
        answer: "Devices like smartphones, cable TV tuners, and video game systems.",
        topicName: "Input, Output, and Storage",
    },
    {
        question: "What are stand-alone operating systems?",
        answer: "Operating systems for desktops, also called client operating systems.",
        topicName: "Input, Output, and Storage",
    },
    {
        question: "What is multitasking in an OS?",
        answer: "Running more than one program at the same time.",
        topicName: "Input, Output, and Storage",
    },
    {
        question: "What is memory management in an OS?",
        answer: "Controlling how memory is accessed to maximize available storage.",
        topicName: "Input, Output, and Storage",
    },
    {
        question: "What is scalability in an OS?",
        answer: "The ability of a computer to handle an increasing number of concurrent users.",
        topicName: "Input, Output, and Storage",
    },
    {
        question: "What are utility programs?",
        answer: "Programs that help perform maintenance tasks or correct system problems.",
        topicName: "Input, Output, and Storage",
    },
    {
        question: "What is a device driver?",
        answer: "Software that allows communication between a device and the computer.",
        topicName: "Input, Output, and Storage",
    },
    {
        question: "What is a utility suite?",
        answer: "A package combining several utility programs.",
        topicName: "Input, Output, and Storage",
    },
    {
        question: "What is file management in an OS?",
        answer: "Ensuring files in secondary storage are accessible and secure.",
        topicName: "Input, Output, and Storage",
    },
    {
        question: "What is disaster recovery with cloud storage?",
        answer: "Using cloud storage as a backup plan to recover important files.",
        topicName: "Input, Output, and Storage",
    },
];

insertedCardIds = db.cards.insertMany(cardData).insertedIds;

db.decks.updateOne(
    { topicName: "Input, Output, and Storage" },
    { $set: { cards: Object.values(insertedCardIds) } }
);

// Second Insert

db.decks.insertOne({
    courseCode: "CSE1100",
    topicName: "Computer Networks",
    courseName: "Introduction to Computing 1",
    cards: [],
});

cardData = [
    {
        question: "What is a computer network?",
        answer: "A communication system for connecting computers, including nodes and communication lines.",
        topicName: "Computer Networks",
    },
    {
        question: "What are the advantages of computer networks?",
        answer: "Better communication, better connectivity, better sharing of resources, and bringing people together.",
        topicName: "Computer Networks",
    },
    {
        question: "What does LAN stand for?",
        answer: "Local Area Network.",
        topicName: "Computer Networks",
    },
    {
        question: "What is the primary purpose of a LAN?",
        answer: "Connecting computers in a small geographical area like a building or office.",
        topicName: "Computer Networks",
    },
    {
        question: "What does WAN stand for?",
        answer: "Wide Area Network.",
        topicName: "Computer Networks",
    },
    {
        question: "What distinguishes a WAN from a LAN?",
        answer: "WAN spans a large geographical area, while LAN is confined to a smaller space.",
        topicName: "Computer Networks",
    },
    {
        question: "Name three modes of communication in an IPv4 network.",
        answer: "Unicast, Broadcast, Multicast.",
        topicName: "Computer Networks",
    },
    {
        question: "What is unicast communication?",
        answer: "Sending a packet from one host to a specific individual host.",
        topicName: "Computer Networks",
    },
    {
        question: "What is broadcast communication?",
        answer: "Sending a packet from one host to all hosts in the network.",
        topicName: "Computer Networks",
    },
    {
        question: "What is multicast communication?",
        answer: "Sending a packet from one host to a selected group of hosts.",
        topicName: "Computer Networks",
    },
    {
        question: "What are the three types of transmission modes?",
        answer: "Simplex, Half-Duplex, Full-Duplex.",
        topicName: "Computer Networks",
    },
    {
        question: "What is simplex mode?",
        answer: "A unidirectional communication mode where data flows in only one direction.",
        topicName: "Computer Networks",
    },
    {
        question: "Give an example of simplex mode.",
        answer: "Television broadcasting.",
        topicName: "Computer Networks",
    },
    {
        question: "What is half-duplex mode?",
        answer: "A bidirectional mode where data flows in both directions, but only one direction at a time.",
        topicName: "Computer Networks",
    },
    {
        question: "Give an example of half-duplex mode.",
        answer: "Walkie-talkie communication.",
        topicName: "Computer Networks",
    },
    {
        question: "What is full-duplex mode?",
        answer: "A bidirectional mode where data flows simultaneously in both directions.",
        topicName: "Computer Networks",
    },
    {
        question: "Give an example of full-duplex mode.",
        answer: "Telephone communication.",
        topicName: "Computer Networks",
    },
    {
        question: "What is the internet?",
        answer: "A network of networks with no central ownership or administration.",
        topicName: "Computer Networks",
    },
    {
        question: "Name two key protocols used by the internet.",
        answer: "TCP (Transmission Control Protocol) and IP (Internet Protocol).",
        topicName: "Computer Networks",
    },
    {
        question: "What is an intranet?",
        answer: "A private network based on internet protocols, accessible only to an organization’s employees.",
        topicName: "Computer Networks",
    },
    {
        question: "List two advantages of an intranet.",
        answer: "Improved communication and real-time information sharing.",
        topicName: "Computer Networks",
    },
    {
        question: "What is an extranet?",
        answer: "A restricted communication network that allows access to authorized external users.",
        topicName: "Computer Networks",
    },
    {
        question:
            "What are the two main types of computer network architecture?",
        answer: "Peer-to-Peer and Client/Server.",
        topicName: "Computer Networks",
    },
    {
        question: "What is a Peer-to-Peer network?",
        answer: "A network where all computers are linked with equal privileges and responsibilities.",
        topicName: "Computer Networks",
    },
    {
        question: "What is a Client/Server network?",
        answer: "A network model where clients access resources from a central server.",
        topicName: "Computer Networks",
    },
    {
        question: "Name one advantage of a Peer-to-Peer network.",
        answer: "It is less costly as it does not require a dedicated server.",
        topicName: "Computer Networks",
    },
    {
        question: "Name one disadvantage of a Peer-to-Peer network.",
        answer: "It lacks centralized management, making data backup and security harder.",
        topicName: "Computer Networks",
    },
    {
        question: "Name one advantage of a Client/Server network.",
        answer: "Centralized data backup and improved security.",
        topicName: "Computer Networks",
    },
    {
        question: "Name one disadvantage of a Client/Server network.",
        answer: "It is expensive to set up and maintain.",
        topicName: "Computer Networks",
    },
    {
        question: "What is network topology?",
        answer: "The structure or layout of a network, including its physical and logical arrangement.",
        topicName: "Computer Networks",
    },
    {
        question: "What is a bus topology?",
        answer: "A topology where all stations are connected through a single backbone cable.",
        topicName: "Computer Networks",
    },
    {
        question: "What is a ring topology?",
        answer: "A topology where nodes are connected in a closed loop, and data flows in one direction.",
        topicName: "Computer Networks",
    },
    {
        question: "What is token passing in a ring topology?",
        answer: "A method where a token circulates around the network to control access.",
        topicName: "Computer Networks",
    },
    {
        question: "What is a star topology?",
        answer: "A topology where all nodes are connected to a central hub or switch.",
        topicName: "Computer Networks",
    },
    {
        question: "What is a tree topology?",
        answer: "A combination of bus and star topologies with a hierarchical structure.",
        topicName: "Computer Networks",
    },
    {
        question: "What is a mesh topology?",
        answer: "A topology where devices are interconnected with multiple redundant links.",
        topicName: "Computer Networks",
    },
    {
        question: "Name two types of mesh topology.",
        answer: "Fully connected and Partially connected.",
        topicName: "Computer Networks",
    },
    {
        question: "What is a hybrid topology?",
        answer: "A combination of two or more different topologies.",
        topicName: "Computer Networks",
    },
    {
        question: "Give an example of a hybrid topology.",
        answer: "Combining a ring topology in one branch of a bank with a bus topology in another.",
        topicName: "Computer Networks",
    },
    {
        question: "What is the main disadvantage of a mesh topology?",
        answer: "It is expensive and complex to set up.",
        topicName: "Computer Networks",
    },
];

insertedCardIds = db.cards.insertMany(cardData).insertedIds;

db.decks.updateOne(
    { topicName: "Computer Networks" },
    { $set: { cards: Object.values(insertedCardIds) } }
);

// Third Insert

db.decks.insertOne({
    courseCode: "CSE1100",
    topicName: "Internet and the Web",
    courseName: "Introduction to Computing 1",
    cards: [],
});

cardData = [
    {
        question: "What is the Internet?",
        answer: "A large network of interconnected networks enabling computers to connect and share resources worldwide.",
        topicName: "Internet and the Web",
    },
    {
        question: "When was the Internet first conceived?",
        answer: "In the 1960s by the US Department of Defense's ARPA.",
        topicName: "Internet and the Web",
    },
    {
        question: "What was the Internet originally called?",
        answer: "ARPANET.",
        topicName: "Internet and the Web",
    },
    {
        question: "What was the initial purpose of ARPANET?",
        answer: "To share resources among researchers.",
        topicName: "Internet and the Web",
    },
    {
        question: "What protocol family is the Internet based on?",
        answer: "TCP/IP (Transmission Control Protocol/Internet Protocol).",
        topicName: "Internet and the Web",
    },
    {
        question: "What is a URL?",
        answer: "A specialization of URI that defines the network location of a specific resource.",
        topicName: "Internet and the Web",
    },
    {
        question: "What is a URI?",
        answer: "A resource identifier that can specify a resource by location or name.",
        topicName: "Internet and the Web",
    },
    {
        question: "What does DNS stand for?",
        answer: "Domain Name System.",
        topicName: "Internet and the Web",
    },
    {
        question: "What is the primary role of DNS?",
        answer: "To translate domain names into IP addresses.",
        topicName: "Internet and the Web",
    },
    {
        question: "What is an HTTP session?",
        answer: "A sequence of request/response transactions between a client and server.",
        topicName: "Internet and the Web",
    },
    {
        question: "What does HTTP stand for?",
        answer: "Hypertext Transfer Protocol.",
        topicName: "Internet and the Web",
    },
    {
        question: "What does HTTPS provide in addition to HTTP?",
        answer: "Secure encryption and identification using SSL/TLS.",
        topicName: "Internet and the Web",
    },
    {
        question: "What are the two types of web content?",
        answer: "Static and Dynamic.",
        topicName: "Internet and the Web",
    },
    {
        question: "What is static content?",
        answer: "Fixed content that does not change unless manually updated.",
        topicName: "Internet and the Web",
    },
    {
        question: "What is dynamic content?",
        answer: "Content generated 'on the fly' using server-side scripts.",
        topicName: "Internet and the Web",
    },
    {
        question: "What is a web browser?",
        answer: "A software application for retrieving, presenting, and traversing information resources on the web.",
        topicName: "Internet and the Web",
    },
    {
        question: "Name three common web browsers.",
        answer: "Chrome, Firefox, and Safari.",
        topicName: "Internet and the Web",
    },
    {
        question: "What does the prefix 'http:' indicate in a URI?",
        answer: "The resource will be retrieved using the Hypertext Transfer Protocol.",
        topicName: "Internet and the Web",
    },
    {
        question: "What is the function of a web server?",
        answer: "To serve web content to clients, typically using HTTP.",
        topicName: "Internet and the Web",
    },
    {
        question: "What is DNS caching?",
        answer: "Storing DNS query results temporarily to improve future query speed.",
        topicName: "Internet and the Web",
    },
    {
        question: "What is a root name server?",
        answer: "A server that knows the IP addresses of all top-level domain name servers.",
        topicName: "Internet and the Web",
    },
    {
        question: "What is an IP address?",
        answer: "A unique numerical identifier assigned to every computer on the Internet.",
        topicName: "Internet and the Web",
    },
    {
        question: "What are the components of an HTTP request message?",
        answer: "Request line, headers, empty line, and optional message body.",
        topicName: "Internet and the Web",
    },
    {
        question: "What are persistent connections in HTTP?",
        answer: "A mechanism that allows a single connection to be reused for multiple requests.",
        topicName: "Internet and the Web",
    },
    {
        question: "Why is HTTP considered stateless?",
        answer: "Because hosts do not maintain information about clients between requests.",
        topicName: "Internet and the Web",
    },
    {
        question: "What techniques are used to manage state in HTTP?",
        answer: "Cookies, hidden form fields, server-side sessions, and URL encoding.",
        topicName: "Internet and the Web",
    },
    {
        question: "What does SSL stand for?",
        answer: "Secure Sockets Layer.",
        topicName: "Internet and the Web",
    },
    {
        question: "What does TLS stand for?",
        answer: "Transport Layer Security.",
        topicName: "Internet and the Web",
    },
    {
        question: "What is a key advantage of HTTPS?",
        answer: "It provides encryption and secure identification of the server.",
        topicName: "Internet and the Web",
    },
    {
        question: "What is the primary purpose of the Internet today?",
        answer: "Communication, e-commerce, e-learning, and sharing of resources.",
        topicName: "Internet and the Web",
    },
    {
        question: "What is the World Wide Web?",
        answer: "A collection of web pages created using HTML, navigable through links.",
        topicName: "Internet and the Web",
    },
    {
        question: "What protocol is the World Wide Web built on?",
        answer: "HTTP.",
        topicName: "Internet and the Web",
    },
    {
        question: "How do browsers process web pages?",
        answer: "By progressively rendering HTML, CSS, and other web resources.",
        topicName: "Internet and the Web",
    },
    {
        question: "What are examples of server-side scripting languages?",
        answer: "PHP and Python.",
        topicName: "Internet and the Web",
    },
    {
        question: "What does FTP stand for?",
        answer: "File Transfer Protocol.",
        topicName: "Internet and the Web",
    },
    {
        question: "What is the role of a name server?",
        answer: "To convert domain names into IP addresses.",
        topicName: "Internet and the Web",
    },
    {
        question: "What are root servers responsible for?",
        answer: "Handling requests for top-level domain names like '.com' and '.edu'.",
        topicName: "Internet and the Web",
    },
    {
        question: "What is content negotiation in web servers?",
        answer: "Choosing the appropriate resource representation based on client capabilities.",
        topicName: "Internet and the Web",
    },
    {
        question: "What is the role of a URI scheme?",
        answer: "To specify the protocol or application to interpret the URI.",
        topicName: "Internet and the Web",
    },
    {
        question: "How do modern browsers enhance user privacy?",
        answer: "By allowing users to delete cache, cookies, and browsing history.",
        topicName: "Internet and the Web",
    },
];

insertedCardIds = db.cards.insertMany(cardData).insertedIds;

db.decks.updateOne(
    { topicName: "Internet and the Web" },
    { $set: { cards: Object.values(insertedCardIds) } }
);

// Forth Insert

db.decks.insertOne({
    courseCode: "CSE1100",
    topicName: "Data Representation",
    courseName: "Introduction to Computing 1",
    cards: [],
});

cardData = [
    {
        question: "What is the binary number system?",
        answer: "A number system using only two digits, 0 and 1, also known as the base 2 number system.",
        topicName: "Data Representation",
    },
    {
        question: "What is a bit?",
        answer: "The smallest unit of data in a computer, representing a binary value of 0 or 1.",
        topicName: "Data Representation",
    },
    {
        question: "What is a byte?",
        answer: "A group of 8 bits, commonly used as a unit of storage.",
        topicName: "Data Representation",
    },
    {
        question: "What is the octal number system?",
        answer: "A number system using eight digits, 0 to 7, also known as the base 8 number system.",
        topicName: "Data Representation",
    },
    {
        question: "What is the decimal number system?",
        answer: "A base 10 number system that uses ten digits, 0 to 9, and is commonly used in daily life.",
        topicName: "Data Representation",
    },
    {
        question: "What is the hexadecimal number system?",
        answer: "A number system using 16 symbols: 0-9 and A-F, with A representing 10 and F representing 15.",
        topicName: "Data Representation",
    },
    {
        question: "How do you convert from decimal to binary?",
        answer: "Repeatedly divide the decimal number by 2 and record the remainders.",
        topicName: "Data Representation",
    },
    {
        question: "How do you convert binary to decimal?",
        answer: "Add the positional values of all the 1 digits in the binary number.",
        topicName: "Data Representation",
    },
    {
        question: "How do you convert octal to binary?",
        answer: "Replace each octal digit with its 3-bit binary equivalent.",
        topicName: "Data Representation",
    },
    {
        question: "How do you convert binary to octal?",
        answer: "Group binary digits in threes, starting from the right, and replace each group with its octal equivalent.",
        topicName: "Data Representation",
    },
    {
        question: "How do you convert hexadecimal to binary?",
        answer: "Replace each hexadecimal digit with its 4-bit binary equivalent.",
        topicName: "Data Representation",
    },
    {
        question: "How do you convert binary to hexadecimal?",
        answer: "Group binary digits in fours, starting from the right, and replace each group with its hexadecimal equivalent.",
        topicName: "Data Representation",
    },
    {
        question: "What is one's complement?",
        answer: "A method of representing negative binary numbers by inverting all bits (changing 1 to 0 and 0 to 1).",
        topicName: "Data Representation",
    },
    {
        question: "What is two's complement?",
        answer: "A binary representation for signed integers, formed by adding 1 to the one's complement.",
        topicName: "Data Representation",
    },
    {
        question: "What is the advantage of two's complement?",
        answer: "It simplifies arithmetic operations and automatically represents negative numbers.",
        topicName: "Data Representation",
    },
    {
        question: "What is an example of a binary number?",
        answer: "10101 (base 2).",
        topicName: "Data Representation",
    },
    {
        question: "What is an example of an octal number?",
        answer: "1257 (base 8).",
        topicName: "Data Representation",
    },
    {
        question: "What is an example of a hexadecimal number?",
        answer: "1F4 (base 16).",
        topicName: "Data Representation",
    },
    {
        question: "How is 1234 represented in decimal?",
        answer: "(1 × 1000) + (2 × 100) + (3 × 10) + (4 × 1) = 1234.",
        topicName: "Data Representation",
    },
    {
        question: "How is the binary number 100101 represented in decimal?",
        answer: "(1 × 32) + (0 × 16) + (0 × 8) + (1 × 4) + (0 × 2) + (1 × 1) = 37.",
        topicName: "Data Representation",
    },
    {
        question: "What is the base of the hexadecimal number system?",
        answer: "Base 16.",
        topicName: "Data Representation",
    },
    {
        question: "What is the base of the octal number system?",
        answer: "Base 8.",
        topicName: "Data Representation",
    },
    {
        question: "How is the hexadecimal number 4E represented in binary?",
        answer: "(4)16 = (0100)2 and (E)16 = (1110)2, so 4E = 01001110.",
        topicName: "Data Representation",
    },
    {
        question: "How do you convert from decimal to hexadecimal?",
        answer: "Divide the decimal number by 16 and record the remainders.",
        topicName: "Data Representation",
    },
    {
        question: "What is the result of converting 25 to binary?",
        answer: "25 = 11001 (base 2).",
        topicName: "Data Representation",
    },
    {
        question: "How do you convert 742 (octal) to binary?",
        answer: "Replace each digit: 7 = 111, 4 = 100, 2 = 010. So, 742 = 111100010.",
        topicName: "Data Representation",
    },
    {
        question: "What is the binary representation of 1010112 in decimal?",
        answer: "(1 × 32) + (0 × 16) + (1 × 8) + (0 × 4) + (1 × 2) + (1 × 1) = 43.",
        topicName: "Data Representation",
    },
    {
        question: "How is the octal number 57 represented in binary?",
        answer: "57 = 101111 (base 2).",
        topicName: "Data Representation",
    },
    {
        question: "What is the decimal equivalent of 1F4 in hexadecimal?",
        answer: "(1 × 256) + (15 × 16) + (4 × 1) = 500.",
        topicName: "Data Representation",
    },
    {
        question: "How is the hexadecimal number 1E8 represented in binary?",
        answer: "(1)16 = (0001)2, (E)16 = (1110)2, (8)16 = (1000)2, so 1E8 = 000111101000.",
        topicName: "Data Representation",
    },
    {
        question: "What is the process for converting binary to decimal?",
        answer: "Multiply each bit by 2 raised to its position index and sum the results.",
        topicName: "Data Representation",
    },
    {
        question: "How is 431 represented in binary?",
        answer: "431 = 110101111 (base 2).",
        topicName: "Data Representation",
    },
    {
        question: "What is the binary equivalent of the hexadecimal number 2A?",
        answer: "2 = 0010, A = 1010, so 2A = 00101010 (base 2).",
        topicName: "Data Representation",
    },
    {
        question: "How is 1E8 (hexadecimal) represented in octal?",
        answer: "Convert to binary: 1E8 = 000111101000. Group into threes: 001 111 010 000. Octal = 1720.",
        topicName: "Data Representation",
    },
    {
        question: "What is the two's complement of 1010?",
        answer: "Invert the bits: 0101. Add 1: 0101 + 1 = 0110.",
        topicName: "Data Representation",
    },
    {
        question: "What is the decimal equivalent of the octal number 1257?",
        answer: "(1 × 512) + (2 × 64) + (5 × 8) + (7 × 1) = 679.",
        topicName: "Data Representation",
    },
    {
        question:
            "How is the binary number 11110000 represented in one's complement?",
        answer: "Invert all bits: 00001111.",
        topicName: "Data Representation",
    },
    {
        question:
            "What is the hexadecimal representation of the binary number 101011?",
        answer: "Group into fours: 0010 1011. Hexadecimal = 2B.",
        topicName: "Data Representation",
    },
    {
        question: "How do you convert 451 (decimal) to octal?",
        answer: "Divide repeatedly by 8. Result: 703 (base 8).",
        topicName: "Data Representation",
    },
    {
        question: "What is the decimal equivalent of the binary number 101101?",
        answer: "(1 × 32) + (0 × 16) + (1 × 8) + (1 × 4) + (0 × 2) + (1 × 1) = 45.",
        topicName: "Data Representation",
    },
];

insertedCardIds = db.cards.insertMany(cardData).insertedIds;

db.decks.updateOne(
    { topicName: "Data Representation" },
    { $set: { cards: Object.values(insertedCardIds) } }
);

// Fifth Insert

db.decks.insertOne({
    courseCode: "CSE1100",
    topicName: "Floating Point Representation",
    courseName: "Introduction to Computing 1",
    cards: [],
});

cardData = [
    {
        question: "What is a floating point number in the decimal system?",
        answer: "A number with a decimal point separating whole numbers and fractional parts, e.g., 37.25.",
        topicName: "Floating Point Representation",
    },
    {
        question: "How can you represent 37.25 in expanded decimal form?",
        answer: "(3 × 10) + (7 × 1) + (2 × 1/10) + (5 × 1/100).",
        topicName: "Floating Point Representation",
    },
    {
        question:
            "What are the steps to find the binary equivalent of a floating point number?",
        answer: "Convert the whole part using division and the fractional part using multiplication.",
        topicName: "Floating Point Representation",
    },
    {
        question: "What are the binary column values for fractional parts?",
        answer: "2^-1 = 0.5, 2^-2 = 0.25, 2^-3 = 0.125, 2^-4 = 0.0625.",
        topicName: "Floating Point Representation",
    },
    {
        question:
            "How do you convert 0.25 to binary using the multiplication method?",
        answer: "Multiply 0.25 × 2 = 0.5, then 0.5 × 2 = 1.0. Binary = .01.",
        topicName: "Floating Point Representation",
    },
    {
        question:
            "How do you convert 0.625 to binary using the multiplication method?",
        answer: "Multiply 0.625 × 2 = 1.25, then 0.25 × 2 = 0.5, then 0.5 × 2 = 1.0. Binary = .101.",
        topicName: "Floating Point Representation",
    },
    {
        question: "What is the binary equivalent of 37.25?",
        answer: "37.25 = 100101.01 (base 2).",
        topicName: "Floating Point Representation",
    },
    {
        question: "What is the binary equivalent of 18.625?",
        answer: "18.625 = 10010.101 (base 2).",
        topicName: "Floating Point Representation",
    },
    {
        question:
            "What is the challenge in storing binary floating point numbers?",
        answer: "There is no way to store the radix point directly.",
        topicName: "IEEE Floating Point Representation",
    },
    {
        question:
            "What solution does IEEE provide for storing floating point numbers?",
        answer: "Normalization, which ensures the radix point is always after the leftmost 1.",
        topicName: "IEEE Floating Point Representation",
    },
    {
        question:
            "What are the three components of the IEEE 32-bit floating point standard?",
        answer: "The sign bit, exponent, and mantissa.",
        topicName: "IEEE Floating Point Representation",
    },
    {
        question:
            "How is the sign bit represented in IEEE floating point numbers?",
        answer: "0 for positive numbers and 1 for negative numbers.",
        topicName: "IEEE Floating Point Representation",
    },
    {
        question: "What is the exponent in IEEE representation?",
        answer: "An 8-bit unsigned number stored relative to a bias of 127.",
        topicName: "IEEE Floating Point Representation",
    },
    {
        question: "How is the exponent 5 represented in IEEE format?",
        answer: "Exponent 5 = 127 + 5 = 132 = 10000100 (binary).",
        topicName: "IEEE Floating Point Representation",
    },
    {
        question: "How is the exponent -5 represented in IEEE format?",
        answer: "Exponent -5 = 127 - 5 = 122 = 01111010 (binary).",
        topicName: "IEEE Floating Point Representation",
    },
    {
        question: "What is the mantissa in IEEE floating point representation?",
        answer: "The set of bits after the normalized binary point, excluding the leftmost 1.",
        topicName: "IEEE Floating Point Representation",
    },
    {
        question: "What is the IEEE floating point representation of 40.15625?",
        answer: "Sign: 0, Exponent: 10000100, Mantissa: 01000001010000000000000.",
        topicName: "IEEE Floating Point Representation",
    },
    {
        question: "What is the IEEE floating point representation of -24.75?",
        answer: "Sign: 1, Exponent: 10000011, Mantissa: 10001100000000000000000.",
        topicName: "IEEE Floating Point Representation",
    },
    {
        question:
            "What are the steps to convert from decimal to IEEE floating point format?",
        answer: "Convert to binary, normalize, calculate biased exponent, and store the results.",
        topicName: "IEEE Floating Point Representation",
    },
    {
        question: "How would 60.75 be stored in IEEE floating point?",
        answer: "Sign: 0, Exponent: 10000100, Mantissa: 11100110000000000000000.",
        topicName: "IEEE Floating Point Representation",
    },
    {
        question: "How would -190.5625 be stored in IEEE floating point?",
        answer: "Sign: 1, Exponent: 10000110, Mantissa: 01111101001000000000000.",
        topicName: "IEEE Floating Point Representation",
    },
    {
        question: "How do you reverse IEEE floating point normalization?",
        answer: "Move the radix point by the exponent value; right for positive, left for negative.",
        topicName: "Decimal Conversion from IEEE",
    },
    {
        question: "How do you extract the unbiased exponent in IEEE format?",
        answer: "Unbiased exponent = Biased exponent - 127.",
        topicName: "Decimal Conversion from IEEE",
    },
    {
        question: "What is the decimal equivalent of 1.01 × 2^-2?",
        answer: "-0.3125.",
        topicName: "Decimal Conversion from IEEE",
    },
    {
        question: "What is the decimal equivalent of 1.10011 × 2^4?",
        answer: "25.5.",
        topicName: "Decimal Conversion from IEEE",
    },
    {
        question: "How is 0.15625 represented in IEEE floating point format?",
        answer: "Sign: 0, Exponent: 01111101, Mantissa: 01000000000000000000000.",
        topicName: "IEEE Floating Point Representation",
    },
    {
        question:
            "What are the column values for the binary representation of fractional parts?",
        answer: "2^-1 = 0.5, 2^-2 = 0.25, 2^-3 = 0.125.",
        topicName: "Binary Representation",
    },
    {
        question: "What is normalization in binary floating point numbers?",
        answer: "Adjusting the number so the radix point is just to the right of the leftmost 1.",
        topicName: "Normalization",
    },
    {
        question: "How is the mantissa stored in IEEE format?",
        answer: "It excludes the leftmost 1 and is stored in 23 bits.",
        topicName: "IEEE Floating Point Representation",
    },
    {
        question: "What is the biased exponent for -10 in IEEE format?",
        answer: "Bias = 127, so -10 = 127 - 10 = 117 = 01110101 (binary).",
        topicName: "IEEE Floating Point Representation",
    },
    {
        question:
            "How is the decimal number 0.3125 represented in IEEE format?",
        answer: "Sign: 0, Exponent: 01111101, Mantissa: 01000000000000000000000.",
        topicName: "IEEE Floating Point Representation",
    },
    {
        question: "What is the IEEE representation of 7.625?",
        answer: "Sign: 0, Exponent: 10000001, Mantissa: 11101000000000000000000.",
        topicName: "IEEE Floating Point Representation",
    },
    {
        question:
            "What is the decimal floating point equivalent of 0 10000010 1110010..0?",
        answer: "15.125.",
        topicName: "Decimal Conversion from IEEE",
    },
    {
        question:
            "What is the decimal floating point equivalent of 1 01111101 10100..0?",
        answer: "-0.40625.",
        topicName: "Decimal Conversion from IEEE",
    },
    {
        question: "How is the biased exponent stored in IEEE?",
        answer: "As an 8-bit binary value relative to a bias of 127.",
        topicName: "IEEE Floating Point Representation",
    },
    {
        question: "What is the normalized binary representation of 37.25?",
        answer: "1.0010101 × 2^5.",
        topicName: "Normalization",
    },
    {
        question: "What is the purpose of the IEEE 32-bit standard?",
        answer: "To standardize the storage of floating point numbers for efficient computation.",
        topicName: "IEEE Floating Point Representation",
    },
    {
        question: "How is 168.0 stored in IEEE format?",
        answer: "Sign: 0, Exponent: 10000110, Mantissa: 01010000000000000000000.",
        topicName: "IEEE Floating Point Representation",
    },
];

insertedCardIds = db.cards.insertMany(cardData).insertedIds;

db.decks.updateOne(
    { topicName: "Floating Point Representation" },
    { $set: { cards: Object.values(insertedCardIds) } }
);
