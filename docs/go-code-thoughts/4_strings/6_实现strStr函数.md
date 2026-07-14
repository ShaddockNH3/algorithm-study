# 实现 strStr：从朴素匹配到 KMP

字符串匹配是经典问题。
这篇记录从朴素匹配走到 KMP 的过程，也保留几个学习时踩过的坑。

## 28 找出字符串中第一个匹配项的下标

[题目链接](https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/)

### 28 题意

给定两个字符串 `haystack` 和 `needle`。

在 `haystack` 中找出 `needle` 第一次出现的下标。
如果 `needle` 不是 `haystack` 的一部分，则返回 `-1`。

## 学习记录

学习 KMP 的过程中，原文记录了几个关键问题：

1. 最开始使用朴素双层循环。
2. 写 `getNext` 时，误用 `make([]int, 0, n)`。
   这会创建长度为 `0` 的切片，直接按下标写入会 `panic`。
3. 在 `getNext` 中，曾把回溯逻辑写成 `j--`。
   正确写法应是 `j = next[j-1]`。
4. 在 `strStr` 匹配阶段，曾混淆暴力匹配和 KMP。
   KMP 中 `haystack` 的指针 `i` 不回退，
   回退的是 `needle` 的指针 `j`。
5. 对 `next` 数组和轴对称产生过联想。
   它们并不相同，但这个联想说明正在思考前后缀结构。
6. 对 `getNext` 从 `i = 1` 开始，
   而 `strStr` 从 `i = 0` 开始感到困惑。
   这个问题正好触及了两个函数含义的区别。

这些坑很有价值，因为 KMP 的难点不只是背代码，
而是理解失配后为什么可以不回退主串指针。

## 解法一：朴素匹配

### 朴素匹配思路

朴素匹配使用两层循环。

1. 外层枚举 `haystack` 中每个可能的起始位置。
2. 内层逐字符比较 `needle`。
3. 如果全部匹配，返回当前起始位置。
4. 如果所有起始位置都无法匹配，返回 `-1`。

### 朴素匹配代码

```go
func strStr(haystack string, needle string) int {
    if len(haystack) < len(needle) {
        return -1
    }

    for i := 0; i <= len(haystack)-len(needle); i++ {
        matched := true

        for j := 0; j < len(needle); j++ {
            if haystack[i+j] != needle[j] {
                matched = false
                break
            }
        }

        if matched {
            return i
        }
    }

    return -1
}
```

### 朴素匹配复杂度

设 `m = len(haystack)`，`n = len(needle)`。

- 时间复杂度：`O(m * n)`
- 空间复杂度：`O(1)`

## 解法二：KMP

### KMP 核心

KMP 的核心是预处理 `needle`，构建 `next` 数组。

`next[i]` 表示 `needle[0:i]` 这一段中，
最长相等前后缀的长度。

匹配过程中，如果发生失配：

- 主串 `haystack` 的指针 `i` 不回退。
- 模式串 `needle` 的指针 `j` 根据 `next[j-1]` 回退。

这样可以避免暴力解法中重复比较已经确认过的字符。

### getNext 思路

`getNext` 是模式串自己和自己比较。

指针含义：

- `i` 遍历后缀末尾。
- `j` 表示当前最长相等前缀的长度。

为什么 `i` 从 `1` 开始：

- `next[0]` 一定是 `0`。
- 长度为 1 的字符串没有非空的相等前后缀。
- 因此从计算 `next[1]` 开始。

当 `s[i] != s[j]` 时，不能简单 `j--`。
应该根据已经计算出的 `next` 数组继续回退：

```go
j = next[j-1]
```

### KMP 代码

```go
func getNext(s string) []int {
    next := make([]int, len(s))
    j := 0

    for i := 1; i < len(s); i++ {
        for j > 0 && s[i] != s[j] {
            j = next[j-1]
        }

        if s[i] == s[j] {
            j++
        }

        next[i] = j
    }

    return next
}

func strStr(haystack string, needle string) int {
    if len(needle) == 0 {
        return 0
    }

    next := getNext(needle)
    m, n := len(haystack), len(needle)
    j := 0

    for i := 0; i < m; i++ {
        for j > 0 && haystack[i] != needle[j] {
            j = next[j-1]
        }

        if haystack[i] == needle[j] {
            j++
        }

        if j == n {
            return i - n + 1
        }
    }

    return -1
}
```

### KMP 匹配过程

在 `strStr` 中：

1. `i` 遍历 `haystack`。
2. `j` 遍历 `needle`。
3. 字符匹配时，`j++`。
4. 字符失配时，`j` 回退到 `next[j-1]`。
5. 如果 `j == len(needle)`，说明完整匹配。

返回值：

```go
i - n + 1
```

因为 `i` 是匹配成功时的末尾下标。

### KMP 复杂度

设 `m = len(haystack)`，`n = len(needle)`。

- 构建 `next` 时间复杂度：`O(n)`
- 匹配时间复杂度：`O(m)`
- 总时间复杂度：`O(m + n)`
- 空间复杂度：`O(n)`

## 本题总结

朴素匹配容易理解，但会重复比较。

KMP 的价值在于：失配时不让主串指针回退，
而是利用 `next` 数组移动模式串指针。

实现 KMP 时要特别注意：

- `next := make([]int, len(s))` 创建的是可按下标写入的切片。
- 回退逻辑是 `j = next[j-1]`，不是 `j--`。
- `getNext` 中的 `i` 和 `strStr` 中的 `i` 含义不同。
