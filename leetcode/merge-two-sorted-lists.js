//21. Merge Two Sorted Lists
//You are given the heads of two sorted linked lists list1 and list2.

//Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

//Return the head of the merged linked list.

function mergeTwoLists(l1, l2) {
    if (l1 === null){
        return l2;
    }
    if (l2 === null){
        return l1;
    }
    if (l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}

console.log(mergeTwoLists([1, 3], [2, 4, 7]))

function mergeSortedLists(list1, list2) {
    let mergedList = [];
    let i = 0;
    let j = 0;
  
    while (i < list1.length && j < list2.length) {
      if (list1[i] < list2[j]) {
        mergedList.push(list1[i]);
        i++;
      } else {
        mergedList.push(list2[j]);
        j++;
      }
    }
  
    // Add any remaining elements from the first list
    while (i < list1.length) {
      mergedList.push(list1[i]);
      i++;
    }
  
    // Add any remaining elements from the second list
    while (j < list2.length) {
      mergedList.push(list2[j]);
      j++;
    }
  
    return mergedList;
  }
  
  // Example usage:
  const list1 = [1, 3, 5, 7];
  const list2 = [2, 4, 6, 8];
  const merged = mergeSortedLists(list1, list2);
  console.log(merged); // Output: [1, 2, 3, 4, 5, 6, 7, 8]