/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {

  // SIMPLE METHOD 
  // let foodPrice =0 
  // let clothesPrice =0
  // let  elecPrice = 0

  // if(transactions.length ===0){
  //   return []
  // }

  // if(transactions.length === 1){
  //   return [{ category: transactions[0].category, totalSpent: transactions[0].price }]
  // }
  
  //   for(let i = 0 ; i < transactions.length ; i++){
  //       if(transactions[i].category == "Food"){
  //           foodPrice = foodPrice + transactions[i].price
  //       }

  //       if(transactions[i].category == "Clothing"){
  //         clothesPrice = clothesPrice + transactions[i].price
  //       }
  //     if(transactions[i].category == "Electronics"){
  //       elecPrice = elecPrice + transactions[i].price
  //       }
        
      
  //   }
  //   let singleItemPrice =transactions[0].price
  //   let flag = true
  //   for(let i = 1 ; i < transactions.length ; i++){
  //     if(transactions[i].category === transactions[i-1].category){
  //       singleItemPrice = singleItemPrice+ transactions[i].price 
  //       flag = false
  //     }else{
  //       flag = true
  //     }
      
      
  //   }

  //   if(flag === false){
  //     return [{ category: transactions[0].category, totalSpent:singleItemPrice }]
  //   }

    


  // return [{ category: 'Food', totalSpent: foodPrice },
  // { category: 'Clothing', totalSpent: clothesPrice },
  // { category: 'Electronics', totalSpent: elecPrice },
  // ];


  // OPTIMIZED SOLUTION

  const result = {}

  for(let i =0 ; i< transactions.length;i++){
    const current_category = transactions[i].category
    const current_price = transactions[i].price

    if(!result[current_category]){
      result[current_category] = current_price
    }else{
      result[current_category] = result[current_category] + current_price
    }
  }

  const answer = Object.keys(result).map((current_category)=>({
    category : current_category,
    totalSpent : result[current_category]
  }))

  console.log(answer)
  return answer;
}


module.exports = calculateTotalSpentByCategory;
