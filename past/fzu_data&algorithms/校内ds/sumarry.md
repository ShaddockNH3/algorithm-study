福州大学内学的东西，总结如下：

1. 比较基本的东西，如基本的数据结构处理等
2. 基本的算法啊，如主元素问题，滑动窗口，埃氏筛
3. 栈与队列
4. 排序
5. 树
6. 堆
7. 并查集
8. 图

主要是上面这些东西，现在按照ds的进度逐步击破。

### 第一题

首先是第一题，单身狗的进化，这题最简单的思想就是暴力解法，具体思路就是真的把n给求出来，然后一步步算他的位数。

但是这样的时间复杂度可以达到O(n!)，肯定不可以

所以使用到一个很简单的优化，那就是取对数，使之在O(n)的时间内就可以解答。

```
#define LL long long
#define EPS 1e-8
#define INF 0x7fffffff
#define lyh(i,a,b) for(int i=a;i<=b;i++)
#define hyl(i,a,b) for(int i=a;i>=b;i--)

#include<bits/stdc++.h>

using namespace std;

void solve() {
	int n; cin >> n;
	double sum = 0;
	lyh(i, 1, n) {
		sum += log10(i);
	}
	cout << (int)sum + 1 << endl;
}

int main() {
	solve();
}
```

至于斯特林公式部分，就先掠过，先看看第二题是啥

### 第二题

使用投票法

```
#define LL long long
#define EPS 1e-8
#define INF 0x7fffffff
#define lyh(i,a,b) for(int i=a;i<=b;i++)
#define hyl(i,a,b) for(int i=a;i>=b;i--)

#include<bits/stdc++.h>

using namespace std;

int arr[400005];

bool answer(int n, int s) {
	int sum = 0;
	lyh(i, 1, n) {
		if (s == arr[i]) {
			sum += 1;
		}
	}
	return sum > n / 2;
}

int select(int n) {
	int current_more_num = arr[1];
	int current_cnt = 1;

	lyh(i, 2, n) {
		if (current_more_num == arr[i]) {
			current_cnt += 1;
		}
		else {
			current_cnt -= 1;
		}
		if (current_cnt == 0) {
			current_more_num = arr[i];
			current_cnt = 1;
		}
	}
	return current_more_num;
}

void solve() {
	int n; cin >> n;

	lyh(i, 1, n) {
		cin >> arr[i];
	}
	
	int s = select(n);

	if (answer(n, s)) {
		cout << s;
	}
	else {
		cout << 0;
	}

}

int main() {
	solve();
}
```

### 第三题

```
#define LL long long
#define EPS 1e-8
#define INF 0x7fffffff
#define lyh(i,a,b) for(int i=a;i<=b;i++)
#define hyl(i,a,b) for(int i=a;i>=b;i--)
#define debug(a) cout<<#a<<"="<<a<<endl;

#include<bits/stdc++.h>

using namespace std;

int arr[1000005];
int sum[1000005];

int m_sum(int a, int b) {
	if (a == 1) {
		return sum[b];
	}
	return sum[b] - sum[a - 1];
}

int caculate(int n, int m) {
	int sum_max = 0;

	lyh(i, 1, m) {
		sum_max += arr[i] * i;
	}

	int current_max = sum_max;

	lyh(i, m+1, n) {

		current_max = current_max + arr[i] * m - m_sum(i - m, i - 1);

		sum_max = max(sum_max, current_max);
	}

	return sum_max;
}

void solve() {
	int n, m; cin >> n >> m;
	lyh(i, 1, n) { 
		cin >> arr[i];
		if (i == 1) {
			sum[i] = arr[i];
		}
		else {
			sum[i] = arr[i] + sum[i - 1];
		}
	}

	int ability = caculate(n, m);

	cout << ability << endl;
}

int main() {
	solve();
}

/*
5 3
2 1 3 1 4
*/
```

这题有个傻逼bug卡了好久，是逻辑上的问题，自己的问题属于是了。

这题也不一定额外用sum数组来定义，可以直接用相似的思路，就是滑动来定义当前的sum

### 第四题

```
#define LL long long
#define EPS 1e-8
#define INF 0x7fffffff
#define lyh(i,a,b) for(int i=a;i<=b;i++)
#define hyl(i,a,b) for(int i=a;i>=b;i--)
#define debug(a) cout<<#a<<"="<<a<<endl;

#include<bits/stdc++.h>

using namespace std;

int arr[10100] = {0};

void solve() {
	int n; cin >> n;

	int step = 2;

	lyh (accpet,1,n) {

		int current_step = 0;

		lyh (i,step+1,10000) {
			if (current_step == step-1 && arr[i]==0) {
				arr[i] = 1;
				current_step = 0;
			}
			
			if (arr[i] == 0) {
				current_step += 1;
			}

		}

		step += 1;

		while (arr[step] != 0) {
			step++;
		}

	}

	int cnt = 0;

	lyh(i, 2, 10000) {
		if (arr[i] == 0) {
			cnt += 1;
		}
		if (cnt == n) {
			cout << i << endl;
			break;
		}
	}

}

int main() {
	solve();
	return 0;
}

/*
20
*/
```


这题也是一个bug卡了好久，那就是判断条件

### 第五题

单调栈？

单调栈的作用是快速找到一组元素中其中一个数字的相邻的，比他大或小的值，不必多次扫描数据，扫描一次数据，维护栈，即可做到找出所有元素相邻的，比他大或小的值。

具体思路就是：

