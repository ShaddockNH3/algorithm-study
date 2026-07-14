# 岛屿数量 BFS

## BFS 代码

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

    var bfs func(x, y int)
    bfs = func(x, y int) {
        queue := [][]int{{x, y}}

        for len(queue) > 0 {
            cur := queue[0]
            queue = queue[1:]

            currX := cur[0]
            currY := cur[1]

            for i := 0; i < 4; i++ {
                nextX := currX + dir[i][0]
                nextY := currY + dir[i][1]

                if nextX < 0 || nextX >= n || nextY < 0 || nextY >= m {
                    continue
                }

                if !visit[nextX][nextY] && graph[nextX][nextY] == 1 {
                    queue = append(queue, []int{nextX, nextY})
                    visit[nextX][nextY] = true
                }
            }
        }
    }

    for i := 0; i < n; i++ {
        for j := 0; j < m; j++ {
            if !visit[i][j] && graph[i][j] == 1 {
                visit[i][j] = true
                result++
                bfs(i, j)
            }
        }
    }

    fmt.Println(result)
}

func main() {
    solve()
}
```

## BFS 关键点

BFS 使用队列。

发现新陆地时，
先标记访问，
再加入队列。

如果先入队后标记，
同一个格子可能被其他方向重复加入队列。

## DFS 和 BFS 区别

DFS 通常依靠递归和函数调用栈，
沿一条路径不断深入。

BFS 手动维护队列，
一层一层向外扩展。

在岛屿数量问题中，
两者都可以用来标记同一个连通块。

区别只是搜索顺序不同：

- DFS 先深入。
- BFS 先扩散。

## 本篇总结

岛屿数量用 BFS 时，
外层循环负责发现新岛屿，
BFS 负责把这个岛屿内所有连通陆地都标记为已访问。

队列是 BFS 的核心数据结构。
