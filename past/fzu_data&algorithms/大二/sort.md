### 排序问题

### 简单的排序算法——冒泡、插入、选择

冒泡就不必多说

插入排序：

插入排序，思想就是比较元素，然后插入。

```
#include<iostream>
using namespace std;

void issert(int arr[],int left,int i){
    int v=arr[i];
    while(v<arr[i-1] && i>left){
        arr[i]=arr[i-1];
        i--;
    }
    arr[i]=v;
}

void issert_sort(int arr[],int left,int right){
    for(int i=left+1;i<=right;i++){
        issert(arr,left,i);
    }
}


int main(){
    int arr[10]={10,9,8,7,6,5,4,3,2,1};
    issert_sort(arr,0,10);
    for(int i=0;i<10;i++){
        cout<<arr[i]<<" ";
    }
    return 0;
}
```

插入函数，和插入排序。
首先是插入函数，插入函数是比较当前元素是否是更小，如果是的话，那就接着向前比较。

尤其注意`while(i>left && v<arr[i-1])`

然后可以用二分查找优化。

选择排序也没什么好说的。

### 希尔排序

分量，
然后每个中间具体的排序就是使用上述三个排序之一。


### 快速排序

快速排序采用的是分而治之的策略，首先先指定一个标杆，然后把比标杆小的元素都放在左边比标杆大的元素都放在右边，递归下去。

而这个标杆元素在什么时候？

```
#include<iostream>
using namespace std;

int partition(int arr[],int p,int r){
    int i=p-1,j=r;
    int v=arr[r];
    for(;;){
        while(arr[++i]<v);//这里因为最坏情况下会到本身，所以并不需要向下面那样break掉。
        while(v<arr[--j]){
            if(j==p){
                break;
            }
        }
        if(i>=j){
            break;
        }
        swap(arr[i],arr[j]);
    }
    swap(arr[i],arr[r]);
    return i;
}

void quickSort(int arr[],int p,int r){
    int q;
    if(r<=p){
        return ;
    }
    q=partition(arr,p,r);
    quickSort(arr,p,q-1);
    quickSort(arr,q+1,r);
}

int main(){
    int arr[10]={10,9,8,7,6,5,4,3,2,1};
    quickSort(arr,0,9);
    for(int i=0;i<10;i++){
        cout<<arr[i]<<" ";
    }
    return 0;
}
```

