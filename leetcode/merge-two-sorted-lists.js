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

console.log(mergeTwoLists([1, 3, 5], [2, 4, 7]))