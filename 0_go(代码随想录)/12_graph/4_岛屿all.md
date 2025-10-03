```go
package main

import (
	"fmt"
)

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
			nextx := x + dir[i][0]
			nexty := y + dir[i][1]

			if (nextx < 0 || nextx >= n) || (nexty < 0 || nexty >= m) {
				continue
			}

			if !visit[nextx][nexty] && graph[nextx][nexty] == 1 {
				cnt += 1
				visit[nextx][nexty] = true
				dfs(nextx, nexty)
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