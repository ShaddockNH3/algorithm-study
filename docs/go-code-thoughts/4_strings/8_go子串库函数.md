# Go 子串库函数速查

Go 标准库中的 `strings` 包提供了很多子串处理函数。
常见操作包括查找、判断、分割、替换、修剪和计数。

## 查找与判断

### strings.Contains

判断字符串中是否包含某个子串。

```go
fmt.Println(strings.Contains("hello world", "world"))
```

输出：

```text
true
```

### strings.Index

查找子串第一次出现的位置。
如果找不到，返回 `-1`。

```go
fmt.Println(strings.Index("cat dog cat", "cat"))
```

输出：

```text
0
```

### strings.LastIndex

查找子串最后一次出现的位置。
如果找不到，返回 `-1`。

```go
fmt.Println(strings.LastIndex("cat dog cat", "cat"))
```

输出：

```text
8
```

### strings.HasPrefix

判断字符串是否以指定前缀开头。

```go
fmt.Println(strings.HasPrefix("image.png", "image"))
```

输出：

```text
true
```

### strings.HasSuffix

判断字符串是否以指定后缀结尾。

```go
fmt.Println(strings.HasSuffix("image.png", ".png"))
```

输出：

```text
true
```

## 分割

### strings.Split

使用分隔符把字符串分割成切片。

```go
fmt.Printf("%q\n", strings.Split("a-b-c", "-"))
```

输出：

```text
["a" "b" "c"]
```

### strings.SplitN

和 `Split` 类似，但结果切片长度最多是 `n`。

```go
fmt.Printf("%q\n", strings.SplitN("a-b-c-d", "-", 2))
```

输出：

```text
["a" "b-c-d"]
```

## 替换

### strings.Replace

把字符串中的前 `n` 个 `old` 子串替换成 `new`。
如果 `n == -1`，表示替换全部。

```go
fmt.Println(strings.Replace("oink oink oink", "oink", "moo", 2))
```

输出：

```text
moo moo oink
```

### strings.ReplaceAll

替换字符串中所有匹配的子串。
它等价于 `strings.Replace` 中 `n == -1` 的情况。

```go
fmt.Println(strings.ReplaceAll("oink oink oink", "oink", "moo"))
```

输出：

```text
moo moo moo
```

## 修剪

### strings.TrimSpace

移除字符串首尾所有空白字符。

```go
fmt.Println(strings.TrimSpace("  hello world  "))
```

输出：

```text
hello world
```

### strings.TrimPrefix

如果字符串以指定前缀开头，就移除这个前缀。

```go
fmt.Println(strings.TrimPrefix("IMG_cat.jpg", "IMG_"))
```

输出：

```text
cat.jpg
```

### strings.TrimSuffix

如果字符串以指定后缀结尾，就移除这个后缀。

```go
fmt.Println(strings.TrimSuffix("cat_photo.jpg", ".jpg"))
```

输出：

```text
cat_photo
```

## 计数

### strings.Count

计算字符串中不重叠的子串出现次数。

```go
fmt.Println(strings.Count("banana", "na"))
```

输出：

```text
2
```

## bytes 包

`bytes` 包中也提供了很多与 `strings` 类似的函数。

例如：

- `bytes.Contains`
- `bytes.Index`
- `bytes.Split`

区别是：

- `strings` 处理 `string`。
- `bytes` 处理 `[]byte`。

当处理大量字节数据或二进制数据时，可以优先考虑 `bytes` 包。

## 本篇总结

`strings` 包适合处理常见字符串任务。

常用函数可以按用途记忆：

- 查找与判断：`Contains`、`Index`、`LastIndex`
- 前后缀判断：`HasPrefix`、`HasSuffix`
- 分割：`Split`、`SplitN`
- 替换：`Replace`、`ReplaceAll`
- 修剪：`TrimSpace`、`TrimPrefix`、`TrimSuffix`
- 计数：`Count`
