# CodewarsKata Problems JavaScript
Here you can find the best solutions for CodewarsKata problems in JavaScript.

## Usage
Just uncomment console.log() and run file.

```JavaScript
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

const singleNumber = function(nums) {
    return nums.filter((v, i, a) => a.indexOf(v) === a.lastIndexOf(v))[0];
};

// console.log(singleNumber([2, 2, 1]));
// console.log(singleNumber([4,1,2,1,2]));
// console.log(singleNumber([1]));
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

## License
Free to use anywhere
