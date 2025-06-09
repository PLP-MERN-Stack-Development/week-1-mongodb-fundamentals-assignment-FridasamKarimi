//1.CREATE
db.books.insertOne({
    title: "MongoDb Assignment",
    author: "Love",
    year: "2025",
    genre: "tech",
    price: 25.99
});

//READ
db.books.find({});

//UPDATE
db.books.updateOne(
    { title: "MongoDb Assignment" },
    { $set: { price: 19.99 } }

);

//DELETE
db.books.deleteOne({ title: "MongoDb Assignment" });


//Filtering,Projection & Sorting
//Filter books published after 2020
db.books.find({ year:{ $gt: 2020} });


//2.Projectio:only show title and author
db.books.find({}, { title: 1, author: 1, _id: 0});


//Sorting: Newestbooks first
db.books.find().sort({ year: -1});


//3.AGGREGATION PIPELINES
//total no.s pf books by author
db.books.aggregate([
    { $group: { _id: "$author", totalBooks: { $sum: 1 } } }
]);
// Average price of books
db.books.aggregate([
    { $group: { _id: null, averagePrice: { $avg: "$price" } } }
]);

//books grouped by genre
db.books.aggregate([
    { $group: {_id: "$genre", books: {$push: "$title"} } }
]);

//4.Indexing
//Create an index on the author
db.books.createIndex({ author: 1});

//Check indexes
db.books.getIndexes();


