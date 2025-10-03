当然可以喵！Go 语言为我们准备了一个非常强大的“**魔法工具箱**”来处理字符串，那就是 `strings` 包。它里面有各种各样处理子串的函数，非常方便和高效！(｡･ω･｡)ﾉ♡

下面，我们就把这些最常用的子串相关的“魔法咒语”详细地整理一下吧！

---

### **Go 语言子串库函数全攻略 ✨**

几乎所有和子串相关的操作，都可以在 `strings` 这个标准库包里找到。

#### **1. 查找与判断 (Searching & Checking)**

这类函数用来判断子串是否存在，或者找出它的位置。

- **`strings.Contains(s, substr)`**: 判断字符串 `s` 中**是否包含**子串 `substr`。
    
    Go
    
    ```
    fmt.Println(strings.Contains("hello world", "world")) // 输出: true
    ```
    
- **`strings.Index(s, substr)`**: 查找子串 `substr` 在 `s` 中**第一次**出现的位置（索引）。如果找不到，返回 `-1`。
    
    Go
    
    ```
    fmt.Println(strings.Index("cat dog cat", "cat")) // 输出: 0
    ```
    
- **`strings.LastIndex(s, substr)`**: 查找子串 `substr` 在 `s` 中**最后一次**出现的位置。如果找不到，返回 `-1`。
    
    Go
    
    ```
    fmt.Println(strings.LastIndex("cat dog cat", "cat")) // 输出: 8
    ```
    
- **`strings.HasPrefix(s, prefix)`**: 判断字符串 `s` 是否以 `prefix` **开头**。
    
    Go
    
    ```
    fmt.Println(strings.HasPrefix("image.png", "image")) // 输出: true
    ```
    
- **`strings.HasSuffix(s, suffix)`**: 判断字符串 `s` 是否以 `suffix` **结尾**。
    
    Go
    
    ```
    fmt.Println(strings.HasSuffix("image.png", ".png")) // 输出: true
    ```
    

---

#### **2. 分割 (Splitting)**

这类函数用来把一个字符串，按照子串（分隔符）拆分成一个字符串切片。

- **`strings.Split(s, sep)`**: 用分隔符 `sep` 把 `s` 分割成一个切片。
    
    Go
    
    ```
    fmt.Printf("%q\n", strings.Split("a-b-c", "-")) // 输出: ["a" "b" "c"]
    ```
    
- **`strings.SplitN(s, sep, n)`**: 和 `Split` 类似，但最多只分割 `n` 次。结果切片的长度最多是 `n`。
    
    Go
    
    ```
    fmt.Printf("%q\n", strings.SplitN("a-b-c-d", "-", 2)) // 输出: ["a" "b-c-d"]
    ```
    

---

#### **3. 替换 (Replacing)**

- **`strings.Replace(s, old, new, n)`**: 把 `s` 中的前 `n` 个 `old` 子串，替换成 `new`。如果 `n` 是 `-1`，则替换所有。
    
    Go
    
    ```
    fmt.Println(strings.Replace("oink oink oink", "oink", "moo", 2)) // 输出: moo moo oink
    ```
    
- **`strings.ReplaceAll(s, old, new)`**: 替换 `s` 中**所有**的 `old` 子串为 `new`。它等价于 `Replace` 里的 `n=-1`。
    
    Go
    
    ```
    fmt.Println(strings.ReplaceAll("oink oink oink", "oink", "moo")) // 输出: moo moo moo
    ```
    

---

#### **4. 修剪 (Trimming)**

这类函数用来移除字符串**两端**的子串。

- **`strings.TrimSpace(s)`**: 移除字符串 `s` **首尾所有**的空白字符。超级常用！
    
    Go
    
    ```
    fmt.Println(strings.TrimSpace("  hello world  ")) // 输出: "hello world"
    ```
    
- **`strings.TrimPrefix(s, prefix)`**: 如果 `s` 以 `prefix` 开头，就移除它。
    
    Go
    
    ```
    fmt.Println(strings.TrimPrefix("IMG_cat.jpg", "IMG_")) // 输出: "cat.jpg"
    ```
    
- **`strings.TrimSuffix(s, suffix)`**: 如果 `s` 以 `suffix` 结尾，就移除它。
    
    Go
    
    ```
    fmt.Println(strings.TrimSuffix("cat_photo.jpg", ".jpg")) // 输出: "cat_photo"
    ```
    

---

#### **5. 计数 (Counting)**

- **`strings.Count(s, substr)`**: 计算 `s` 中不重叠的 `substr` 出现了多少次。
    
    Go
    
    ```
    fmt.Println(strings.Count("banana", "na")) // 输出: 2
    ```
    

---

### ## 别忘了 `bytes` 包！

还有一个小秘密哦！`bytes` 包里也有一套和 `strings` 包几乎一模一样的函数，比如 `bytes.Contains`, `bytes.Index`, `bytes.Split` 等等。它们的区别是，`bytes` 包操作的是 `[]byte` (字节切片)，在处理大量数据或者二进制数据时，性能会更高！

### ## 总结一下喵~ 💖

Go 的 `strings` 包就像一个藏满了宝物的工具箱，为我们提供了处理子串所需的一切。多多使用它们，你的 Go 代码就会变得越来越地道和强大哦！(｡ゝω･)b✧