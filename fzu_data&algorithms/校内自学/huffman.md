霍夫曼树，是一种用于数据压缩的工具，它的核心思想是通过利用字符出现的频率来选择最优编码，使数据能够在尽可能少的空间内存储和运输。

比如说在英文中，e的使用频率大于z，传统编码（如阿斯克码），为每个字符分配相同长度的二进制编码，这会导致高频字符也占用较多的空间，而这些字符可以使用更短的编码

通过huffman树，我们可以根据字符出现的频率，为频率高的字符分配短编码，而频率低的字符分配长编码。

树的构架过程

1. 统计频率：计算每个字符的出现频率
2. 构建huffman树，将每个字符和其频率加入优先队列中，每次取出频率最低的两个结点，合成一个新节点，直到只剩下一个根节点，构成huffman树。
3. 从根节点触发，向左走编码为0，向右走编码为1，为每个字符生成唯一的编码

```
#include<iostream>
#include<queue>
#include<unordered_map>
#include<vector>
using namespace std;

//huffman树结点定义
struct Node{
    char ch;
    int freq;

    Node *left,*right;

    Node(char c,int f):ch(c),freq(f),left(nullptr),right(nullptr){}
};

//比较函数，用于优先队列排序，频率越小优先级越高
struct Compare{
    bool operator()(Node* l,Node *r){
        return l->freq>r->freq;
    }
};

void generateCodes(Node *root,string str,unordered_map<char,string>& huffmanCodes){
    if(!root){
        return ;
    }
    if(!root->left && !root->right){
        huffmanCodes[root->ch]=str;
    }
    generateCodes(root->left,str+"0",huffmanCodes);
    generateCodes(root->right,str+"1",huffmanCodes);
}

//构建huffman树
Node *buildingHuffmanTree(const unordered_map<char,int>&freq){
    priority_queue<Node*,vector<Node*>,Compare> minHeap;

    for(auto pair:freq){
        minHeap.push(new Node(pair.first,pair.second));
    }
}

int main(){

}
```