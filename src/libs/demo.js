// function ListNode(val, next) {
//     this.val = val === undefined ? 0 : val
//     this.next = next === undefined ? null : next
// }

// function array2list(ary) {
//     if (ary.length === 0) {
//         return null
//     }
//     var nodes = []

//     for (let i = 0; i < ary.length; i++) {
//         var node = {}
//         node.value = ary[i]
//         node.next = null
//         nodes.push(node)
//     }

//     for (let i = 0; i < nodes.length - 1; i++) {
//         nodes[i].next = nodes[i + 1]
//     }

// console.log(nodes)

//     return nodes[0]
// }
// console.log(array2list([1, 2, 3]))
// var addTwoNumbers = function (l1, l2) {
//     const l3 = new ListNode(0)
//     let h1 = l1
//     let h2 = l2
//     let h3 = l3
//     let carry = 0
//     while (h1 || h2) {
//         const v1 = h1 ? h1.val : 0
//         const v2 = h2 ? h2.val : 0
//         const val = v1 + v2 + carry
//         carry = Math.floor(val / 10)
//         h3.next = new ListNode(val % 10)

//         if (h1) h1 = h1.next
//         if (h2) h2 = h2.next
//         h3 = h3.next
//     }

//     if (carry) {
//         h3.next = new ListNode(carry)
//     }

//     return l3.next
// }
// console.log(
//     addTwoNumbers(
//         {
//             val: 2,
//             next: {
//                 val: 4,
//                 next: {
//                     val: 3,
//                     next: null,
//                 },
//             },
//         },
//         {
//             val: 5,
//             next: {
//                 val: 6,
//                 next: {
//                     val: 4,
//                     next: null,
//                 },
//             },
//         }
//     )
// )

// function arrayToNodeList(nums) {
//     if (nums.length === 0) {
//         return null
//     }
//
//     let node
//     const head = {
//         val: nums[0],
//         next: null,
//     }
//     let prevHead = head
//
//     for (let i = 1; i < nums.length; i++) {
//         node = {
//             val: nums[i],
//             next: null,
//         }
//         prevHead.next = node
//         prevHead = node
//     }
//
//     return head
// }
// arrayToNodeList([1, 2, 3])
// // console.log(arrayToNodeList([1, 2, 3]))
// function totalFruit(fruits) {
//     let n = fruits.length,
//         ans = 0
//     const cnts = new Array(n + 10).fill(0)
//     for (let i = 0, j = 0, tot = 0; i < n; i++) {
//         if (++cnts[fruits[i]] === 1) tot++
//         while (tot > 2) {
//             if (--cnts[fruits[j++]] === 0) tot--
//         }
//         ans = Math.max(ans, i - j + 1)
//     }
//     return ans
// }
// totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4])

function s(s) {
    if (s.length % 2 !== 0) return false

    const stack = [123123, 123123]
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(')')
        } else if (s[i] === '{') {
            stack.push('}')
        } else if (s[i] === '[') {
            stack.push(')')
        } else if (stack.length === 0 || stack[stack.length - 1] !== s[i]) {
            return false
        } else if (stack[stack.length - 1] === s[i]) {
            stack.pop()
        }
    }
    return stack.length === 0
}
s('()[]{}')
