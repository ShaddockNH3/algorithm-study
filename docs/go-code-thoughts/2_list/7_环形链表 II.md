# 环形链表 II：快慢指针寻找入环点

环形链表 II 不只要求判断链表是否有环，
还要求返回链表开始入环的第一个节点。

常见解法有两种：

- 快慢指针法，空间复杂度为 `O(1)`。
- 哈希集合法，思路直观但需要 `O(n)` 空间。

## 142 环形链表 II

[题目链接](https://leetcode.cn/problems/linked-list-cycle-ii/description/)

### 142 题意

给定一个链表的头节点 `head`，
返回链表开始入环的第一个节点。

如果链表无环，则返回 `nil`。

题目不允许修改链表。

## 方法一：快慢指针法

### 第一阶段：判断是否有环

设置两个指针：

- `slow` 每次走一步。
- `fast` 每次走两步。

如果链表有环，`fast` 一定会在环中追上 `slow`。
如果 `fast` 或 `fast.Next` 变成 `nil`，说明链表无环。

### 第二阶段：寻找入环点

当 `slow` 和 `fast` 在环中相遇后：

1. 让新指针 `ptr` 从 `head` 出发。
2. 让 `slow` 从相遇点继续出发。
3. 两个指针每次都走一步。
4. 它们再次相遇的位置就是环的入口。

### 快慢指针代码

```go
func detectCycle(head *ListNode) *ListNode {
    slow, fast := head, head

    for {
        if fast == nil || fast.Next == nil {
            return nil
        }

        slow = slow.Next
        fast = fast.Next.Next

        if slow == fast {
            break
        }
    }

    ptr := head
    for ptr != slow {
        ptr = ptr.Next
        slow = slow.Next
    }

    return ptr
}
```

## 入环点推导

设：

- 头节点到环入口的距离是 `x`。
- 环入口到第一次相遇点的距离是 `k`。
- 环的周长是 `C`。

当 `slow` 和 `fast` 第一次相遇时，设 `slow` 走了 `s` 步。
因为 `fast` 每次走两步，所以 `fast` 走了 `2s` 步。

两者路程差为：

```text
2s - s = s
```

这个差值一定是环长的整数倍：

```text
s = nC
```

另一方面，`slow` 走过的路程也可以表示为：

```text
s = x + k
```

因此：

```text
x + k = nC
```

变形得到：

```text
x = nC - k
```

从相遇点继续走 `nC - k` 步，会回到环入口。
由于绕整圈不会改变位置，这等价于从相遇点走 `C - k` 步。

而 `C - k` 正好是相遇点到环入口的距离。

所以：

- 一个指针从 `head` 出发，走 `x` 步到环入口。
- 一个指针从相遇点出发，走 `C - k` 步到环入口。

两个指针同速前进时，会在环入口相遇。

### 快慢指针复杂度

- 时间复杂度：`O(n)`
- 空间复杂度：`O(1)`

## 方法二：哈希集合法

### 哈希集合思路

哈希集合法不需要数学推导。

1. 创建集合记录已经访问过的节点地址。
2. 从 `head` 开始遍历链表。
3. 每到一个节点，先检查它是否已经出现过。
4. 如果出现过，这个节点就是环的入口。
5. 如果遍历到 `nil`，说明链表无环。

### 哈希集合代码

```go
func detectCycle(head *ListNode) *ListNode {
    set := make(map[*ListNode]struct{})

    for tmp := head; tmp != nil; tmp = tmp.Next {
        if _, ok := set[tmp]; ok {
            return tmp
        }
        set[tmp] = struct{}{}
    }

    return nil
}
```

### 哈希集合复杂度

- 时间复杂度：`O(n)`
- 空间复杂度：`O(n)`

## 方法对比

- 快慢指针法：
  空间复杂度最优，但需要理解相遇点到入口的推导。
- 哈希集合法：
  思路直观，第一次访问到重复节点时就找到了入口。

## 本题总结

环形链表 II 的难点是从相遇点推导出环入口。

快慢指针第一阶段负责判断有环并找到相遇点。
第二阶段让一个指针从头节点出发，另一个指针从相遇点出发，
最终它们会在入环点相遇。
