const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];

// SNACK 1

const longBooks = books.filter(book => book.pages > 300)
console.log(longBooks);
const longBooksTitle = longBooks.map(book => book.title)
console.log(longBooksTitle);

// SNACK 2

const availableBooks = books.filter(book => book.available === true)
console.log(availableBooks);

const discountedBooks = availableBooks.map(book => {
    let sconto = parseFloat(book.price) * 0.2
    const prezzoScontato = parseFloat(book.price) - sconto
    return { ...book, price: `${prezzoScontato.toFixed(2)}€` }
})
console.log(discountedBooks);

const fullPricedBook = discountedBooks.find(book => {
    const newPrice = parseFloat(book.price)
    return Number.isInteger(newPrice)
})
console.log(fullPricedBook);

// SNACK 3

const authors = books.map(author => author.author)

const areAuthorsAdults = authors.every(major => major.age > 18)
console.log(areAuthorsAdults);

authors.sort((a, b) => {
    return b.age - a.age
})
console.log(authors);

// SNACK 4

const ages = books.map(ageAut => ageAut.author.age)
console.log(ages);

const somma = ages.reduce((acc, numero) => {
    return acc + numero
}, 0)
console.log(somma);

const etaMedia = somma / ages.length
console.log(etaMedia);

// SNACK 5

async function fetchJson(url) {
    const response = await fetch(url)
    const obj = await response.json()
    return obj
}

async function getBooks(id) {
    const promises = id.map((id) => {
        return fetchJson(`http://localhost:3333/books/${id}`)
    })
    return Promise.all(promises)
}

getBooks([2, 7, 13, 21, 19])
    .then(book => console.log(book)
        .catch(err => console.error(err)
        ))

