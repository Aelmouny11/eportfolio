# Exercice 5 :


```python
a=int(input("Entrer A"))
b=int(input("Entrer B"))
p=a
for i in range(1,b):
    p*=a
print(p)
```

# Exercice 6 :


```python

while True:
    n=int(input("Donner un entier "))
    if n>=0:
        break
    else:print("Donner un entier naturel")
fact=1
for i in range (1,n+1):
    fact*=i
print("factoriel de {} est {}".format(n,fact))
```

    factoriel de 6 est 720


# Exercice 7



```python
n = int(input("Donner un nombre\t"))
s = 0
for i in range(1, int(n/2) + 1   ):
    if n % i == 0:
        s += i
if n == s:
    print(n, "est un nombre parfait")
else:
    print(n, "n'est pas un nombre parfait")

```

    6 est un nombre parfait

