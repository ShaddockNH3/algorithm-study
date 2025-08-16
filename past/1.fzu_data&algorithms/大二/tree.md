### 二叉树的诸多实现

```
#include<iostream>
#include<stack>
#include<queue>
using namespace std;

struct TreeNode{
    int value;
    TreeNode *left;
    TreeNode *right;

    TreeNode(int val):value(val),left(nullptr),right(nullptr){}
};

bool is_empty_tree(TreeNode *root){
    return root==nullptr;
}

int return_value(TreeNode *root){
    if (is_empty_tree(root)){
        cout<<"Tree is empty";
        return EOF;
    }
    else{
        return root->value;
    }
}

void make_tree(int x, TreeNode *root,TreeNode *L,TreeNode *R){
    root->value=x;
    root->left=L;
    root->right=R;
}

int tree_height(TreeNode *root){
    if (!root){
        return 0;
    }
    int lh=tree_height(root->left);
    int lr=tree_height(root->right);
    return max(lh,lr)+1;
}

void preorder(TreeNode *root){
    if (!root){
        return ;
    }
    cout<<root->value<<" ";
    preorder(root->left);
    preorder(root->right);
}

void inorder(TreeNode *root){
    if (!root){
        return ;
    }
    inorder(root->left);
    cout<<root->value<<" ";
    inorder(root->right);
}

void postorder(TreeNode *root){
    if (!root){
        return ;
    }
    postorder(root->left);
    postorder(root->right);
    cout<<root->value<<" ";
}

void high_preorder(TreeNode *root){
    stack<TreeNode*>s;
    s.push(root);
    while(!s.empty()){
        cout<<s.top()->value<<" ";
        s.pop();
        if(root->right){
            s.push(root->right);
        }
        if(root->left){
            s.push(root->left);
        }
    }
}

void level_order(TreeNode *root){
    queue<TreeNode*> q;
    q.push(root);
    while(!q.empty()){
        cout<<q.front()<<" ";
        q.pop();
        if (root->left){
            q.push(root->left);
        }
        if(root->right){
            q.push(root->right);
        }
    }
}

int main(){
    TreeNode *root=nullptr;
    cout<<is_empty_tree(root)<<endl;
    cout<<(tree_height(root));
    return 0;
}
```

### 线索二叉树

直接找到某一结点在某种遍历下的前驱和后继节点

- 增加两个指针，分别指向前驱和后继（浪费空间）
- n个结点的二叉树本身就含有n+1个空指针，那么如何利用现有的结点，存放某种遍历次序下的前驱和后记呢？（即线索）

```
#include<iostream>
#include<stack>
#include<queue>
using namespace std;

struct TreeNode{
    int value;
    TreeNode *left;
    TreeNode *right;
    int leftThread,rightThread;
    //当上述两个变量为0时，代表left，right指针分别指向当前节点的左右儿子节点。
    //当为1时，表示left和right指针为当指向当前节点的前驱或后继的线索
    //使用 双指针，指针pre指向刚刚访问过的结点，指针p指向当前访问的结点。
    //事实上，指针pre是指针p的前驱结点，指针p是指针pre的后继结点。

    TreeNode(int val):value(val),left(nullptr),right(nullptr){}
};

bool is_empty_tree(TreeNode *root){
    return root==nullptr;
}

int return_value(TreeNode *root){
    if (is_empty_tree(root)){
        cout<<"Tree is empty";
        return EOF;
    }
    else{
        return root->value;
    }
}

void make_tree(int x, TreeNode *root,TreeNode *L,TreeNode *R){
    root->value=x;
    root->left=L;
    root->right=R;
}

int tree_height(TreeNode *root){
    if (!root){
        return 0;
    }
    int lh=tree_height(root->left);
    int lr=tree_height(root->right);
    return max(lh,lr)+1;
}

void preorder(TreeNode *root){
    if (!root){
        return ;
    }
    cout<<root->value<<" ";
    preorder(root->left);
    preorder(root->right);
}

void inorder(TreeNode *root){
    if (!root){
        return ;
    }
    inorder(root->left);
    cout<<root->value<<" ";
    inorder(root->right);
}

void postorder(TreeNode *root){
    if (!root){
        return ;
    }
    postorder(root->left);
    postorder(root->right);
    cout<<root->value<<" ";
}

void high_preorder(TreeNode *root){
    stack<TreeNode*>s;
    s.push(root);
    while(!s.empty()){
        cout<<s.top()->value<<" ";
        s.pop();
        if(root->right){
            s.push(root->right);
        }
        if(root->left){
            s.push(root->left);
        }
    }
}

void level_order(TreeNode *root){
    queue<TreeNode*> q;
    q.push(root);
    while(!q.empty()){
        cout<<q.front()<<" ";
        q.pop();
        if (root->left){
            q.push(root->left);
        }
        if(root->right){
            q.push(root->right);
        }
    }
}

int main(){
    TreeNode *root=nullptr;
    cout<<is_empty_tree(root)<<endl;
    cout<<(tree_height(root));
    return 0;
}
```

上述其实没有实现还，到时候看看

### 普通树转换为二叉树

