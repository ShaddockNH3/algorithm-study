q1

```
#include<iostream>

using namespace std;

  

int arr1[100005];

int arr2[100005];

int arr3[100005];

  

int solve(int n){

    for(int i=0,j=0,k=0;k<n;k++){

        if(arr1[i]<=arr2[j]){

            arr3[k]=arr1[i];

            i++;

        }

        else{

            arr3[k]=arr2[j];

            j++;

        }

    }

    return arr3[n-1];

}

  

int main(){

    int n;cin>>n;

    for(int i=0;i<n;i++){

        cin>>arr1[i];

    }

  

    for(int i=0;i<n;i++){

        cin>>arr2[i];

    }

    cout<<solve(n);

    return 0;

}
```


思路有点类似于归并排序那样子，有点像接龙那样子接上去

q2

感觉用动态数组解有点欺负这道题了

```
#include<iostream>

#include<vector>

using namespace std;

  

vector<int> v;

  

int main(){

    int k;cin>>k;

    int num;

    int cnt=0;

  

    while(cin>>num && num>=0){

        v.push_back(num);

        cnt+=1;

    }

    if (cnt-k<0){

        cout<<"NULL"<<endl;

    }

    else{

        cout<<v[cnt-k]<<endl;

    }

  

    return 0;

}
```


q3

```
#include<iostream>

using namespace std;

  

int arr[100005];

  

void solve(int n){

    int small_i=0;

    int small_len=1;

    int current_len=1;

  

    for (int i=0;i<n-1;i++){

        if (arr[i]<arr[i+1]){

            current_len+=1;

        }

        else{

            if (current_len>small_len){

                small_len=current_len;

                small_i=i-small_len+1;

            }

            current_len=1;

        }

    }

  
  

    if (current_len > small_len) {

        small_len = current_len;

        small_i = n - small_len;

    }

  
  

    for(int i=small_i;i<small_i+small_len;i++){

        cout<<arr[i]<<" ";

    }

}

  

int main(){

    int n;cin>>n;

    for(int i=0;i<n;i++){

        cin>>arr[i];

    }

    solve(n);

    return 0;

}
```


思路没什么大问题就是了，一样的采用动态更新，只需要遍历一遍数组。



q4

这道题当时不会，现在还是不会，看一眼，估计是要用哈希表之类的东西，先掠过？



