# 堆排序


## 堆排序就是把最大堆堆顶的最大数取出，将剩余的堆继续调整为最大堆，再次将堆顶的最大数取出，这个过程持续到剩余数只有一个时结束。在堆中定义以下几种操作：

### 最大堆调整（Max-Heapify）：将堆的末端子节点作调整，使得子节点永远小于父节点

### 创建最大堆（Build-Max-Heap）：将堆所有数据重新排序，使其成为最大堆

### 堆排序（Heap-Sort）：移除位在第一个数据的根节点，并做最大堆调整的递归运算
