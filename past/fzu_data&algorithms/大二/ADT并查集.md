首先得先搞清楚，并查集是用来干什么的。简单来说，并查集就是用来解决集合问题的，在实现过程中的重要操作有：

find操作。

find操作主要是路径压缩，如b指向a，c指向b，那么在进行find(c)操作的时候，find(c)，c会被分配为指向a。

unite操作。

unite操作大致分为以下四种策略：

1. 按大小合并
2. 按秩合并
3. 按大小合并+路径压缩
4. 按秩合并+路径压缩
### 1. **按大小合并 (Union by Size)**

```cpp
void unite(int x, int y) {
    int rootX = find(x);
    int rootY = find(y);

    if (rootX != rootY) {
        if (size[rootX] < size[rootY]) {
            swap(rootX, rootY);
        }
        parent[rootY] = rootX;  // Union
        size[rootX] += size[rootY];  // Update the size of the root component
    }
}
```

#### 特点

- **定义**: `size[rootX]` 表示以 `rootX` 为根的集合的元素个数。
- **逻辑**: 把较小的树的根 (`rootY`) 挂到较大的树的根 (`rootX`) 上，并更新 `size`。
- **优点**: 尽量使树的高度更小，从而加速查询操作。
- **额外存储**: 需要一个 `size[]` 数组存储每个集合的大小。

#### 优化效果

树的高度被有效限制在 log⁡(n)\log(n)（nn 是集合的总元素数），因为每次合并较小的树到较大的树，较小树的高度不会增加。

---

### 2. **按秩合并 (Union by Rank)**

```cpp
void unite(int x, int y) {
    int rootX = find(x);
    int rootY = find(y);

    if (rank[rootX] > rank[rootY]) {
        parent[rootY] = rootX;
    }
    else if (rank[rootX] < rank[rootY]) {
        parent[rootX] = rootY;
    }
    else {
        parent[rootY] = rootX;
        rank[rootX]++;
    }
}
```

#### 特点

- **定义**: `rank[rootX]` 表示以 `rootX` 为根的树的高度（或近似高度）。
- **逻辑**: 把高度较小的树的根挂到高度较大的树的根上，只有当两棵树的高度相同时，根的高度才会增加。
- **优点**: 保证合并操作尽量不增加树的高度。
- **额外存储**: 需要一个 `rank[]` 数组存储每个集合的树的近似高度。

#### 优化效果

按秩合并也是有效的优化策略，树的高度被限制在 log⁡(n)\log(n)。虽然 `rank` 是近似高度，但它仍然有效地避免了性能退化。

---

### 区别分析

|**特性**|**按大小合并 (Union by Size)**|**按秩合并 (Union by Rank)**|
|---|---|---|
|**合并依据**|按集合的大小合并|按树的高度（秩）合并|
|**更新逻辑**|更新大小 (`size[]`)|更新秩 (`rank[]`)|
|**需要存储的数据**|每个集合的大小|每棵树的秩|
|**性能优化**|减小树的高度|减小树的高度|
|**适用场景**|如果容易获取集合的大小或需要用到集合大小|如果高度信息更有意义或需要更少的存储空间|
|**实现难度**|简单，易于理解|相对复杂，尤其是更新秩|

---

### 选择建议

- **按大小合并**: 如果你在其他地方需要用到集合的大小信息（如动态计算集合的元素数），按大小合并更直观且实用。
- **按秩合并**: 如果你只关心树的形态，并希望尽可能减少存储空间，按秩合并是更好的选择。

两种策略在大多数情况下都能达到近似的性能，时间复杂度均为 O(α(n))O(\alpha(n))，其中 α\alpha 是阿克曼函数的反函数，增长极其缓慢，几乎可看作常数。

以上是chatgpt的实现，实际上，按秩合并类似于相对高度，二按大小就是实际高度。

# pta作业

1

![[Pasted image 20241126144748.png]]

这个问题是基于并查集中的按集合大小合并策略，也叫做**按大小合并（Union by Size）**。问题中给定了一个父节点数组，其中负数表示树的根，并且负数的绝对值表示树的大小。要求将集合中的两个元素（6 和 8）合并时，把小的集合合并到大的集合中。

### 给定的父节点数组：

```
父结点编号值：{ 1, -4, 1, 1, -3, 4, 4, 8, -2 }
```

其中：

- **负数值表示树的根**，绝对值表示该树的大小。
- 正数值表示该元素的父节点。

#### 解析这个父节点数组：

- `parent[0] = 1`: 0 的父节点是 1。
- `parent[1] = -4`: 1 是树的根，树的大小是 4。
- `parent[2] = 1`: 2 的父节点是 1。
- `parent[3] = 1`: 3 的父节点是 1。
- `parent[4] = -3`: 4 是树的根，树的大小是 3。
- `parent[5] = 4`: 5 的父节点是 4。
- `parent[6] = 4`: 6 的父节点是 4。
- `parent[7] = 8`: 7 的父节点是 8。
- `parent[8] = -2`: 8 是树的根，树的大小是 2。

### 合并操作：

要求将元素 6 和 8 所在的集合合并，并且要遵循“将小集合合并到大集合”的规则。

- **元素 6 的集合**：元素 6 的父节点是 4，且 4 的父节点是根 4，表示集合 {4, 5, 6}，树的大小为 3。
- **元素 8 的集合**：元素 8 的父节点是根 8，表示集合 {8, 7}，树的大小为 2。

根据“按大小合并”的规则，我们应该将较小的集合合并到较大的集合中。因此，集合 {8, 7}（大小 2）将合并到集合 {4, 5, 6}（大小 3）。

#### 步骤：

1. 找到集合 6 和集合 8 的根节点，分别是根 4 和根 8。
2. 将集合 {8, 7} 合并到集合 {4, 5, 6}，所以 8 的父节点变为 4。
3. 更新根节点的大小。集合 {4, 5, 6, 8, 7} 的新根是 4，树的大小为 5（原来的 3 + 2）。

### 更新后的父节点数组：

- `parent[0] = 1`: 0 的父节点是 1。
- `parent[1] = -4`: 1 是树的根，树的大小为 4。
- `parent[2] = 1`: 2 的父节点是 1。
- `parent[3] = 1`: 3 的父节点是 1。
- `parent[4] = -5`: 4 是树的根，树的大小为 5。
- `parent[5] = 4`: 5 的父节点是 4。
- `parent[6] = 4`: 6 的父节点是 4。
- `parent[7] = 4`: 7 的父节点是 4（因为 8 的父节点变成了 4）。
- `parent[8] = 4`: 8 的父节点是 4。

因此，更新后的树根是 4，新的父节点数组是：

```
{ 1, -4, 1, 1, -5, 4, 4, 4, 4 }
```

### 答案：

- 经过合并后，集合 6 和 8 的根节点是 4，树的大小为 5。
- 所以，根节点是 4，且新的父节点数组中的 4 的大小是 -5。

因此，正确答案是 **B. 4 和 -5**。

2

![[Pasted image 20241126151808.png]]

3.

本题要求给出下列并查集操作执行后，集合数组内存储的结果。

```
union( find(2), find(7) )
union( find(3), find(5) )
union( find(0), find(2) )
union( find(5), find(7) )
union( find(5), find(6) )
```

注意：这里假设按规模求并（若两集合规模相等，则把第1个集合的根结点作为结果的根结点），并且用带路径压缩的查找。对所有的0≤i≤7，`S[i]`被初始化为−1。

|`i`|0|1|2|3|4|5|6|7|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|`S[i]`|2|−1|5 分|5 分|−1|5 分|5 分|2|


4.

本题要求给出下列并查集操作执行后，集合数组内存储的结果。

```
union( find(1), find(5) )
union( find(3), find(6) )
union( find(0), find(1) )
union( find(6), find(5) )
union( find(6), find(4) )
```

注意：这里假设按规模求并（若两集合规模相等，则把第1个集合的根结点作为结果的根结点），并且用带路径压缩的查找。对所有的0≤i≤7，`S[i]`被初始化为−1。


|`i`|0|1|2|3|4|5|6|7|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|`S[i]`|1|5 分|−1|5 分|5 分|

5.

7-1 朋友圈

分数 30

全屏浏览

切换布局

作者 DS课程组

单位 浙江大学

某学校有N个学生，形成M个俱乐部。每个俱乐部里的学生有着一定相似的兴趣爱好，形成一个朋友圈。一个学生可以同时属于若干个不同的俱乐部。根据“我的朋友的朋友也是我的朋友”这个推论可以得出，如果A和B是朋友，且B和C是朋友，则A和C也是朋友。请编写程序计算最大朋友圈中有多少人。

### 输入格式:

输入的第一行包含两个正整数N（≤30000）和M（≤1000），分别代表学校的学生总数和俱乐部的个数。后面的M行每行按以下格式给出1个俱乐部的信息，其中学生从1~N编号：

`第i个俱乐部的人数Mi（空格）学生1（空格）学生2 … 学生Mi`

### 输出格式:

输出给出一个整数，表示在最大朋友圈中有多少人。

### 输入样例:

```in
7 4
3 1 2 3
2 1 4
3 5 6 7
1 6
```

### 输出样例:

```out
4
```

代码长度限制

16 KB

时间限制

400 ms

内存限制

64 MB

栈限制

8192 KB

### 丑陋的代码实现：

```
#include<iostream>
#include<unordered_map>
#include<stack>
#include<vector>
#include<algorithm>
#include<queue>
#include<cstdio>
#include<cmath>

using namespace std;

//使用数组实现并查集
class UnionFind {
private:

	vector<int> parent;
	vector<int> rank;

public:
	UnionFind(int n) {
		parent.resize(n+1);
		rank.resize(n+1, 1);
		for (int i = 1; i <= n; i++) {
			parent[i] = i;
		}
	}

	int find(int x) {
		if (parent[x] != x) {
			parent[x] = find(parent[x]);
		}
		return parent[x];
	}

	bool is_same(int x, int y) {
		return find(x) == find(y);
	}

	void unite(int x, int y) {
		int rootX = find(x);
		int rootY = find(y);
		
		if (rank[rootX] > rank[rootY]) {
			parent[rootY] = rootX;
		}
		else if (rank[rootX]<rank[rootY]) {
			parent[rootX] = rootY;
		}
		else {
			parent[rootY] = rootX;
			rank[rootX]++;
		}
	}

};

int main() {
	int n, m; cin >> n >> m;

	UnionFind uf(n);

	int index, student1,student2;

	for (int i = 0; i < m; i++) {

		cin >> index;

		for (int j = 0; j < index; j++) {
			if (j % 2 == 0) {
				cin >> student1;
			}
			else {
				cin >> student2;
			}
			if (j != 0) {
				uf.unite(student1, student2);
			}
		}
	}

	unordered_map<int, int> umap;

	for (int i = 0; i < n; i++) {
		umap[uf.find(i)]++;
	}

	int max = -1;

	unordered_map<int ,int>::iterator t;

	for (t = umap.begin(); t != umap.end(); t++) {
		if (max < t->second) {
			max = t->second;
		}
	}

	cout << max << endl;

	return 0;
}
```
