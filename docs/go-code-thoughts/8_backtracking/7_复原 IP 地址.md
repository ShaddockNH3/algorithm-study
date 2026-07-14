# 93 复原 IP 地址

[题目链接](https://leetcode.cn/problems/restore-ip-addresses/description/)

## 题目描述

有效 IP 地址正好由四个整数构成，
每个整数位于 `0` 到 `255` 之间，
且不能含有前导 `0`。

四个整数之间用 `.` 分隔。

给定一个只包含数字的字符串 `s`，
返回所有可能的有效 IP 地址。

## 问题本质

这道题也是分割问题。

目标是把一个字符串切成四段，
并且每一段都必须是合法 IP 段。

用 `start` 表示当前从哪里开始切，
用 `path` 保存已经切好的段。

## 终止条件

一次成功分割必须同时满足两个条件：

- `len(path) == 4`
- `start == len(s)`

第一个条件表示正好切成四段。
第二个条件表示字符串正好全部用完。

如果已经有四段但字符串没用完，
或者字符串用完但不足四段，
都不是合法结果。

## 剪枝

IP 地址的每一段长度只能是 1 到 3 位。

因此 `for` 循环不需要一直枚举到字符串末尾，
最多只尝试到 `start + 2`：

```go
for i := start; i < len(s) && i < start+3; i++ {
}
```

另外，原字符串长度如果小于 4 或大于 12，
也不可能复原出合法 IP。
可以在主函数中提前返回。

## 每段的合法性

一个 IP 段合法，需要满足：

- 数值范围在 `0` 到 `255`。
- 长度大于 1 时不能以 `0` 开头。

原来推导出的核心判断是：

```go
if (len(curLeft) == 1 && curNum == 0) ||
    (curNum != 0 &&
        !strings.HasPrefix(curLeft, "0") &&
        curNum <= 255 &&
        curNum > 0) {
}
```

它表达的是：

- 要么这一段就是单独的 `0`。
- 要么这一段不是 `0`，不以 `0` 开头，并且数值在 `1` 到 `255`。

这个判断能覆盖所有正确情况。
只是条件比较长，所以也可以把不合法条件拆开判断。

## 核心判断版本

下面保留原来推导出的核心判断逻辑。
当时函数名沿用了前面题目的名字，
实际提交时应使用题目要求的 `restoreIpAddresses`。

```go
import (
    "strconv"
    "strings"
)

func restoreIpAddresses(s string) []string {
    res := []string{}
    path := []string{}

    if len(s) < 4 || len(s) > 12 {
        return res
    }

    backtracking(s, &res, &path, 0)
    return res
}

func backtracking(s string, res *[]string, path *[]string, start int) {
    if len(*path) == 4 && start == len(s) {
        *res = append(*res, strings.Join(*path, "."))
        return
    }

    if len(*path) == 4 || start == len(s) {
        return
    }

    for i := start; i < len(s) && i < start+3; i++ {
        curLeft := s[start : i+1]
        curNum, _ := strconv.Atoi(curLeft)

        validZero := len(curLeft) == 1 && curNum == 0
        validNumber := curNum != 0 &&
            !strings.HasPrefix(curLeft, "0") &&
            curNum <= 255 &&
            curNum > 0

        if validZero || validNumber {
            *path = append(*path, curLeft)
        } else {
            continue
        }

        backtracking(s, res, path, i+1)
        *path = (*path)[:len(*path)-1]
    }
}
```

## 拆分校验版本

把非法情况拆开判断，会更清楚一些。

先检查前导零，
再检查数值范围。

```go
import (
    "strconv"
    "strings"
)

func restoreIpAddresses(s string) []string {
    res := []string{}
    path := []string{}

    if len(s) < 4 || len(s) > 12 {
        return res
    }

    backtracking(s, &res, &path, 0)
    return res
}

func backtracking(s string, res *[]string, path *[]string, start int) {
    if len(*path) == 4 && start == len(s) {
        *res = append(*res, strings.Join(*path, "."))
        return
    }

    if len(*path) == 4 || start == len(s) {
        return
    }

    for i := start; i < len(s) && i < start+3; i++ {
        segment := s[start : i+1]

        if len(segment) > 1 && segment[0] == '0' {
            break
        }

        num, _ := strconv.Atoi(segment)
        if num > 255 {
            break
        }

        *path = append(*path, segment)
        backtracking(s, res, path, i+1)
        *path = (*path)[:len(*path)-1]
    }
}
```

## 原始代码记录

下面保留原始代码的主要结构和判断逻辑，
只做了格式整理。

```go
func restoreIpAddresses(s string) []string {
    res := []string{}
    path := []string{}

    backtracking(s, &res, &path, 0)
    return res
}

func backtracking(s string, res *[]string, path *[]string, start int) {
    if len(*path) == 4 && start == len(s) {
        cmp := make([]string, 4)
        copy(cmp, *path)
        separator := "."
        curRes := strings.Join(cmp, separator)

        *res = append(*res, curRes)
    }

    for i := start; i < len(s) && i <= start+2; i++ {
        curLeft := s[start : i+1]

        curNum, _ := strconv.Atoi(curLeft)
        validZero := len(curLeft) == 1 && curNum == 0
        validNumber := curNum != 0 &&
            !strings.HasPrefix(curLeft, "0") &&
            curNum <= 255 &&
            curNum > 0

        if validZero || validNumber {
            *path = append(*path, curLeft)
        } else {
            continue
        }

        backtracking(s, res, path, i+1)
        *path = (*path)[:len(*path)-1]
    }
}
```

## 本篇总结

复原 IP 地址的框架仍然是切割回溯。

这道题真正复杂的是合法性判断：
段数必须正好是四段，
字符串必须正好用完，
每段长度最多三位，
数值不能超过 `255`，
并且不能有前导零。

把这些条件分别放在终止条件、剪枝和段合法性校验中，
逻辑就会清楚很多。
