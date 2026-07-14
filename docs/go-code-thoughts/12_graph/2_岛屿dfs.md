# 岛屿数量 DFS

[卡码网 99. 岛屿数量](https://kamacoder.com/problempage.php?pid=1171)

## 问题本质

二维网格中，
值为 `1` 的格子表示陆地，
上下左右相邻的陆地连成一个岛屿。

目标是统计岛屿数量。

这本质上是在图中统计连通分量数量。

## 错误复盘

### 方向数组使用错误

方向数组中，
`dir[i]` 表示一个完整方向。

例如：

```go
var dir = [][]int{
    {0, 1}, {1, 0}, {-1, 0}, {0, -1},
}
```

使用时应该写：

```go
nextX := x + dir[i][0]
nextY := y + dir[i][1]
```

不能把 `dir[0][i]` 和 `dir[1][i]` 当作方向。

### dfs 作用域问题

如果把 `dfs` 写在 `solve` 外面，
它就访问不到 `n`、`m`、`graph`、`visit` 等变量。

把 `dfs` 写成 `solve` 内部的闭包，
可以自然访问这些上下文。

### n 和 m 的边界

`x` 对应行，
边界是 `n`。

`y` 对应列，
边界是 `m`。

所以越界判断是：

```go
nextX < 0 || nextX >= n || nextY < 0 || nextY >= m
```

### 判断逻辑的位置

对每个方向，
都要立刻计算新坐标并进行完整判断。

越界、是否访问过、是否陆地这些判断，
都应该放在方向循环内部。

## DFS 代码

```go
package main

import "fmt"

var dir = [][]int{
    {0, 1}, {1, 0}, {-1, 0}, {0, -1},
}

func solve() {
    var n, m int
    fmt.Scanln(&n, &m)

    graph := make([][]int, n)
    visit := make([][]bool, n)

    for i := 0; i < n; i++ {
        graph[i] = make([]int, m)
        visit[i] = make([]bool, m)
    }

    for i := 0; i < n; i++ {
        for j := 0; j < m; j++ {
            fmt.Scan(&graph[i][j])
        }
    }

    result := 0

    var dfs func(x, y int)
    dfs = func(x, y int) {
        for i := 0; i < 4; i++ {
            nextX := x + dir[i][0]
            nextY := y + dir[i][1]

            if nextX < 0 || nextX >= n || nextY < 0 || nextY >= m {
                continue
            }

            if !visit[nextX][nextY] && graph[nextX][nextY] == 1 {
                visit[nextX][nextY] = true
                dfs(nextX, nextY)
            }
        }
    }

    for i := 0; i < n; i++ {
        for j := 0; j < m; j++ {
            if !visit[i][j] && graph[i][j] == 1 {
                result++
                visit[i][j] = true
                dfs(i, j)
            }
        }
    }

    fmt.Println(result)
}

func main() {
    solve()
}
```

## 本篇总结

外层双循环负责发现新的岛屿。

每发现一个未访问过的陆地，
岛屿数量加一，
然后用 DFS 把这个岛屿的全部陆地标记为已访问。

这样每个岛屿只会被计数一次。
