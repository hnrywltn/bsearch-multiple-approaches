/*******************************************************************
While you are working on the following problems, it DEFINITELY HELPS to
visualize these things in action, so use the below arrays as example inputs.

const oddNums = [11, 12, 13, 14, 15, 16, 17, 18, 19]
const evenNums = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const empty = [];
*******************************************************************/


/*******************************************************************
BINARY SEARCH VERSION 1:

Write a Recursive Binary Search that returns a Boolean value indicating if
targetNum is within the nums array.
*******************************************************************/
const findMid = function (arr) {
  return arr[Math.floor((arr.length - 1) / 2)]
}



const recurBSearch = (nums, targetNum) => {
  //base case
  if (!nums.length) return false;
  if (findMid(nums) === targetNum) return true;
  if (targetNum < findMid(nums)) {
    return recurBSearch(nums.slice(0, nums.indexOf(findMid(nums))), targetNum)
  } else {
    return recurBSearch(nums.slice(nums.indexOf(findMid(nums)) + 1), targetNum)
  }
}
// const oddNums = [11, 12, 13, 14, 15, 16, 17, 18, 19]
// const evenNums = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

/*******************************************************************
BINARY SEARCH VERSION 2:

Write an Iterative Binary Search that returns a Boolean value indicating if
targetNum is within the nums array.
*******************************************************************/

const iterBSearch = (nums, targetNum) => {
  let lowerIdx = 0;
  let midIdx = nums.indexOf(findMid(nums));
  let upperIdx = nums.length - 1;

  while (lowerIdx <= upperIdx) {
    if (upperIdx - lowerIdx === 1) {
      if (nums[upperIdx] === targetNum || nums[lowerIdx] === targetNum) return true;
      break;
    }
    if (nums[midIdx] === targetNum) return true;
    if (nums[midIdx] > targetNum) {
      upperIdx = midIdx - 1;
      midIdx = Math.floor(upperIdx / 2);
    }
    if (nums[midIdx] < targetNum) {
      lowerIdx = midIdx;
      midIdx = Math.floor((lowerIdx + upperIdx) / 2);
    }
  }
  return false;
}


/*******************************************************************
BINARY SEARCH VERSION 3:

Write a Recursive Binary Search that returns the Index value of targetNum if it
is in the nums array, and -1 if it is not found.
*******************************************************************/

const recurBSearchIdx = (nums, targetNum, midIdx) => {
  if (!nums.length) return -1;
  if (findMid(nums) === targetNum) return nums.indexOf(targetNum);
  if (targetNum < findMid(nums)) {
    return recurBSearch(nums.slice(0, nums.indexOf(findMid(nums))), targetNum)
  } else {
    let recurse = recurBSearch(nums.slice(nums.indexOf(findMid(nums)) + 1), targetNum)
    return recurse + (findMid(nums) + 1)
    return nums.indexOf(recurse)
    // return recurBSearch(nums.slice(nums.indexOf(findMid(nums)) + 1), targetNum)
  }

}

// this implementation is identical to version 1, except rather than
// returning true/false, return the index where you found the item
// (instead of true) or -1 (instead of false).

// HINT: the index value you return should be the index in the ORIGINAL array
// and not the index of the sliced array. You'll notice this problem arise
// on the 'right half' recursion. in that, try saving the return value of the
// recursive call into a variable, and adding it to the current stack-frame's
// midIdx + 1.

/*******************************************************************
BINARY SEARCH VERSION 4:

Write a Recursive Binary Search that returns the Index value of targetNum if it
is in the nums array, and -1 if it is not found.
*******************************************************************/

const recurBSearchIdxV2 = (nums, targetNum, low = null, hi = null) => {
  // base case
  if (low === high && !low && !high){

  }
}
  /*
  This implementation is recursive, but borrows the low/hi logic from Version 2
  to establish a different base case. Rather than shrinking the array until its
  length is 0, this implementation moves low and hi indices to determine
  what part of the original array is being searched. if they meet each other
  we know we have searched the entire array.(NOTE this function has FOUR params)

  Base Case:
  if low is equal to high and we haven't found targetNum, then return -1 to
  indicate that the value was not found.

  Determine the slice point (the sum of low and hi, divided by 2)

  If targetNum is less than nums[slicepoint], then
  return the binary search of nums where low is the beginning of the array, and
  hi is the middle of the array

  If targetNum is less than nums[slicepoint], then
  return the binary search of nums where low is the middle of the array, and hi
  is the end of the array

  If it's not greater and not less (i.e. 'else'), return the slice point because
  we have found our value!
  */


/*******************************************************************
BINARY SEARCH VERSION 5:

Write an Iterative Binary Search that returns the Index value of targetNum if
it is in the nums array, and -1 if it is not found.
*******************************************************************/

const iterBSearchIdx = (nums, targetNum) => {
  // this is identical to Version 2, but return the index or -1 rather than
  // true or false
}

module.exports = {
  recurBSearch,
  iterBSearch,
  recurBSearchIdx,
  recurBSearchIdxV2,
  iterBSearchIdx
};
