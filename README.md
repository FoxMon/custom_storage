## CUSTOM STORAGE

Custom simple storage

```
npm i @foxmon/storage
```

## sessionStorage, localStorage, memoryStorage

---

### How to use

---

### 1. Memory storage

```typescript
// In memory storage
const storage = Storage.asInMemory();

storage.set("A", "Data-A"); // A: Data-A
storage.set("B", "Data-B"); // B: Data-B

storage.get("A"); // Data-A
storage.get("B"); // Data-B
```

### 2. Session storage

```typescript
// As sessionStorage
const storage = Storage.asSessionMemory();

storage.set("A", "Data-A"); // A: Data-A

storage.get("A"); // Data-A
```

### 3. Local storage

```typescript
// As sessionStorage
const storage = Storage.asLocalMemory();

storage.set("A", "Data-A"); // A: Data-A

storage.get("A"); // Data-A
```

### 4. Common functions

### 4.1 set

Save key-value

```typescript
const storage = Storage.asInMemory();

storage.set("A", "Data-A"); // A: Data-A
```

### 4.2 get

Get item

```typescript
const storage = Storage.asInMemory();

storage.set("A", "Data-A"); // A: Data-A
storage.get("A"); // Data-A
```

### 4.3 keys

Get all keys in memory

```typescript
const storage = Storage.asInMemory();

storage.set("A", "Data-A"); // A: Data-A
storage.set("B", "Data-B"); // B: Data-B

storage.keys(); // return ["A", "B"]
```

### 4.4 values

Get all values in memory

```typescript
const storage = Storage.asInMemory();

storage.set("A", "Data-A"); // A: Data-A
storage.set("B", "Data-B"); // B: Data-B

storage.values(); // return ["Data-A", "Data-B"]
```

### 4.5 remove

Remove item

```typescript
const storage = Storage.asInMemory();

storage.set("A", "Data-A"); // A: Data-A

storage.remove("A");
```

### 4.6 removeAll

Remove all item in storage

```typescript
const storage = Storage.asInMemory();

storage.set("A", "Data-A"); // A: Data-A
storage.set("B", "Data-B"); // B: Data-B

storage.removeAll();
```

### 4.7 length

Count of items in storage

```typescript
const storage = Storage.asInMemory();

storage.set("A", "Data-A"); // A: Data-A
storage.set("B", "Data-B"); // B: Data-B

storage.length; // 2
```
