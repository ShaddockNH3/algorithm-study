# 第一章、绪论
## 1.1 计算机与算法

绳索计算机：取12段等长，拉4段，捏住5段，使绳子绷直

尺规计算机：随便拉一条线出去，平均分三段后做平行线

起泡排序：扫描交换



# 第二章

vector stl库
```
#include<iostream>
#include<vector>
using namespace std;

//vector模板类的基本操作（动态数组）

void test01() {
	vector<int> v1;
	vector<int> v2(10);//大小为10，初始化默认为0
	vector<int> v3(10, 5);
	vector<int> v4(v3);

	v1.push_back(1);
	v1.pop_back();
	int n = v1.size();
	v1.push_back(1);
	v1.insert(v1.begin() + 1, 100);
	v1.erase(v1.begin());
	v1.swap(v2);
	v1.resize(5);  // 将v1的大小调整为5
	int cap = v1.capacity();  // 获取v1的容量
	int first = v1.front();  // 获取第一个元素
	int last = v1.back();    // 获取最后一个元素
	
	v1.emplace_back(10);  // 在末尾原地构造元素10，效率比push_back高
	
	for (int val : v1) {
		cout << val << endl;
	}
	

}

int main() {
	test01();
	return 0;
}
```

这里需要注意的是，如果不使用stl的话，如何动态扩展数组？其实方法很简单，就是每到上界的时候，再搞一个是原先数组两倍的数组，然后把原来的数组复制进去，就可以了，以此引入了一个新概念，就是分摊分析




# 第三章

# 第四章 

# 第五章

# 第六章 