// task=>1

db.products.find().toArray()


// task=>2

db.products.find({
    product_price: {
        $gt: 400,
        $lt: 800
}}).toArray()



// task=>3

db.products.find({
    product_price: {
        $not: {
            $gt: 400,
            $lt: 600
        }
}}).toArray()



// task=>4

db.products.find({
    product_price: {
        $gt: 500
    }
}).toArray()


// task=>5

db.products.find({},{_id:0 , product_name : 1 , product_material : 1}).toArray()



// task=>6

db.products.find({id :"10"}).pretty()

// task=>7

db.products.find({id : "10"},{_id:0 , product_name : 1 , product_material : 1}).pretty()

//task=>8 

db.products.find( {product_material: "Soft"}).toArray()


// task=>9


db.products.find({ $and : [{product_color: "indigo"},{product_price: 492.00}]}).toArray()
       
 

// task=>10


db.products
  .aggregate([
    { $group: { _id: "$product_price", count: { $sum: 1 } } },
    { $match: { count: { $gt: 1 } } },
  ])
  .forEach((doc) => {
    db.products.remove({ product_price: doc._id });
  });