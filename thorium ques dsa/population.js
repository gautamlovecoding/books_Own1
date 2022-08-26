// Ques:-let arr = [
//     { name: 'Los Angeles', population: 3792621 },
//     { name: 'New York', population: 8175133 },
//     { name: 'Chicago', population: 2695598 },
//     { name: 'Houston', population: 2099451 },
//     { name: 'Philadelphia', population: 1526006 }
// ];
// given above code and told to return cities which have population more than 3000000;

let arr = [
        { name: 'Los Angeles', population: 3792621 },
        { name: 'New York', population: 8175133 },
        { name: 'Chicago', population: 2695598 },
        { name: 'Houston', population: 2099451 },
        { name: 'Philadelphia', population: 1526006 }
    ];

    let cities = [];

    for(let elem of arr){
        if(elem.population > 3000000){
            cities.push(elem.name)
        }
    }
    console.log(cities);




    // Print all the possible combinations having same length of a given number?

var permute = function(nums) {
    let result = [];
   
    const dfs = (i, nums) => {
        
        if(i === nums.length){
            return result.push(nums.slice());
        }
        for(let j=i; j<nums.length; j++){
           [nums[i], nums[j]] = [nums[j], nums[i]];
            
            dfs(i+1, nums);
            
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    } 
    dfs(0, nums);
     
     return result;
      
 };

//  console.log(permute([1,2,3]));

//Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

var permuteUnique = function(nums) {
    //declare global variable.
    let result = [];
    
    const dfs = (i, nums) => {
        
        if(i === nums.length){
            result.push(nums.slice());
            return;
        }
        
        //create a hash map to avoid repetation.
        let hash = {}
        
        //dfs recursive case:-
        for(let j=i; j<nums.length; j++){
            
            //if the element exists in hash then dont do any below operation.
            if(hash[nums[j]]) continue;
            
            //set this repeated element to true in hash map.
            hash[nums[j]] = true;
            
            //swap this to make all the possible arrangement.
            [nums[i], nums[j]] = [nums[j], nums[i]];
            
            //recursive call 
            dfs(i+1, nums);
            
            //Swap it into the original state to do next operation.
            [nums[i], nums[j]] = [nums[j], nums[i]];
            
        }
    }
    
    //Calling the helper function.
    dfs(0, nums);
    
    return result;   
};

console.log(permuteUnique([1,1,3]));
