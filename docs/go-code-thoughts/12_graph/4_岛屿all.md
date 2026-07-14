# 岛屿最大面积

## 核心思路

遍历整个网格。

每当发现一个未访问过的陆地 `1`，
就从这个点出发做 DFS，
统计这一整块岛屿的面积。

每次 DFS 结束后，
用当前岛屿面积更新最大值。

## 最终代码

```go
package main

import "fmt"

var dir = [][]int{
    {0, 1}, {1, 0}, {-1, 0}, {0, -1},
}

func max(a, b int) int {
    if a >= b {
        return a
    }
    return b
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
    cnt := 1

    var dfs func(x, y int)
    dfs = func(x, y int) {
        for i := 0; i < 4; i++ {
            nextX := x + dir[i][0]
            nextY := y + dir[i][1]

            if nextX < 0 || nextX >= n || nextY < 0 || nextY >= m {
                continue
            }

            if !visit[nextX][nextY] && graph[nextX][nextY] == 1 {
                cnt++
                visit[nextX][nextY] = true
                dfs(nextX, nextY)
            }
        }
    }

    for i := 0; i < n; i++ {
        for j := 0; j < m; j++ {
            if !visit[i][j] && graph[i][j] == 1 {
                cnt = 1
                visit[i][j] = true
                dfs(i, j)
                result = max(cnt, result)
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

这题和岛屿数量的 DFS 很像。

区别是：
发现新岛屿后，
不仅要标记连通块，
还要统计它的面积。

每个岛屿 DFS 前把 `cnt` 重置为 `1`，
DFS 中每发现一块新陆地就累加。
